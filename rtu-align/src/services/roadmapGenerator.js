// Deterministic Roadmap Generator (Offline Rule-Engine + Gemini API)

export function generateLocalRoadmap(subject, results, targetDays = 5) {
  const { unitDetails = [], criticalUnits = [], overallReadiness = 0, marksAtRisk = 0 } = results;
  
  // Sort units by priority: critical first, then moderate, then strong, ordered by high_yield rank
  const sortedUnits = [...unitDetails].sort((a, b) => {
    const statusOrder = { critical: 0, moderate: 1, strong: 2 };
    if (statusOrder[a.status] !== statusOrder[b.status]) {
      return (statusOrder[a.status] ?? 1) - (statusOrder[b.status] ?? 1);
    }
    return (a.highYield ?? 3) - (b.highYield ?? 3);
  });

  const plan = [];
  let currentDay = 1;

  const criticalUnitsData = sortedUnits.filter(u => u.status === 'critical');
  const moderateUnitsData = sortedUnits.filter(u => u.status === 'moderate');

  // Allocate days to critical units
  criticalUnitsData.forEach((unit) => {
    if (currentDay > targetDays) return;
    const subjectUnit = subject.units?.[unit.unit - 1] || {};
    const topics = subjectUnit.topics || [];
    plan.push({
      day: currentDay,
      focusUnit: unit.unit,
      unitTitle: unit.title,
      priorityLevel: 'CRITICAL',
      allocatedHours: Math.min(5, Math.ceil(8 / Math.max(1, criticalUnitsData.length))),
      milestones: topics.length > 0 ? topics.map(t => `Master Core Theory & Derivations: ${t}`) : ['Master high-yield concepts and definitions'],
      topics,
      score: unit.score,
    });
    currentDay++;
  });

  // Allocate days to moderate units
  moderateUnitsData.forEach((unit) => {
    if (currentDay > targetDays) return;
    const subjectUnit = subject.units?.[unit.unit - 1] || {};
    const topics = subjectUnit.topics || [];
    plan.push({
      day: currentDay,
      focusUnit: unit.unit,
      unitTitle: unit.title,
      priorityLevel: 'MODERATE',
      allocatedHours: 3,
      milestones: topics.length > 0 ? topics.map(t => `Review & Practice PYQs: ${t}`) : ['Solve previous year RTU questions'],
      topics,
      score: unit.score,
    });
    currentDay++;
  });

  // Fill any remaining days with revision and full-length exam mock practice
  while (currentDay <= targetDays) {
    const revisionTarget = criticalUnitsData.length > 0 
      ? criticalUnitsData[(currentDay - 1) % criticalUnitsData.length] 
      : sortedUnits[(currentDay - 1) % Math.max(1, sortedUnits.length)];
    
    const subjectUnit = revisionTarget ? subject.units?.[revisionTarget.unit - 1] : null;

    plan.push({
      day: currentDay,
      focusUnit: revisionTarget?.unit || 1,
      unitTitle: revisionTarget?.title ? `Full Revision & PYQs: ${revisionTarget.title}` : 'Comprehensive Revision & Formula Drills',
      priorityLevel: 'REVISION',
      allocatedHours: 2.5,
      milestones: [
        'Solve 5-year RTU Part A (2-Mark) short questions',
        'Practice Part C (10-Mark) comprehensive numerical/derivation',
        'Timed self-test under strict 3-hour exam conditions'
      ],
      topics: subjectUnit?.topics || [],
      score: revisionTarget?.score ?? 80,
    });
    currentDay++;
  }

  return {
    readinessScore: overallReadiness,
    marksAtRisk,
    masteryAdvice: criticalUnits.length > 0
      ? `Focus on Units ${criticalUnits.join(' & ')} to secure the 3-Unit Minimum Mastery baseline (53+ marks on RTU 70/80 scale).`
      : overallReadiness < 80
      ? 'Strengthen moderate units to push your aggregate score above 80 marks.'
      : 'Outstanding preparation! Focus on rapid revision and past RTU question papers.',
    sprintPlan: plan,
    targetDays,
  };
}

const CANDIDATE_MODELS = [
  'gemini-3.5-flash',
  'gemini-3.1-flash-lite',
  'gemini-3-flash-preview',
  'gemini-3.7-flash',
  'gemini-flash-latest'
];

// Gemini API roadmap generation with clean error handling and local fallback
export async function generateGeminiRoadmap(apiKey, subject, results, targetDays = 5) {
  if (!apiKey || !apiKey.trim()) return generateLocalRoadmap(subject, results, targetDays);

  const unitSummary = (results.unitDetails || []).map(u => 
    `- Unit ${u.unit} (${u.title}): ${u.score}% (${u.status})`
  ).join('\n');

  const prompt = `You are the official RTU-Kota Academic Sprint Mentor.
Generate an intensive ${targetDays}-day exam revision roadmap for:

Subject: ${subject.code} ${subject.name}
Diagnostic Results:
${unitSummary}

RTU Exam Scheme:
- Part A: 10 Questions × 2 Marks = 20 Marks (compulsory, 2 per unit)
- Part B: 6 Questions × 5 Marks = 30 Marks (analytical)
- Part C: 5 Questions × 10 Marks = 50 Marks (1 per unit, comprehensive)
- Target: 3-Unit Minimum Mastery Rule (guaranteeing 53+ marks).

Respond with a JSON array strictly containing objects with fields:
day (number), focusUnit (number), unitTitle (string), priorityLevel ("CRITICAL" | "MODERATE" | "REVISION"), allocatedHours (number), milestones (array of strings), topics (array of strings).

Do not include markdown fences or any other text outside the JSON array.`;

  try {
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(apiKey.trim());

    for (const modelName of CANDIDATE_MODELS) {
      try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const response = await model.generateContent(prompt);
        const text = response.response.text();
        
        const cleaned = text.replace(/```json/gi, '').replace(/```/g, '').trim();
        const jsonMatch = cleaned.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          const parsedPlan = JSON.parse(jsonMatch[0]);
          if (Array.isArray(parsedPlan) && parsedPlan.length > 0) {
            return {
              readinessScore: results.overallReadiness,
              marksAtRisk: results.marksAtRisk,
              masteryAdvice: results.criticalUnits?.length > 0
                ? `AI Sprint Plan: Focus on Units ${results.criticalUnits.join(' & ')} for 53+ marks guarantee.`
                : 'AI-optimized RTU revision schedule generated.',
              sprintPlan: parsedPlan.map(item => ({
                ...item,
                score: results.unitDetails?.find(u => u.unit === item.focusUnit)?.score ?? 50
              })),
              targetDays,
              source: 'gemini',
            };
          }
        }
      } catch (err) {
        console.warn(`Roadmap model ${modelName} failed, trying next:`, err.message || err);
      }
    }
  } catch (e) {
    console.warn('Gemini API call failed, using local rule-based fallback:', e);
  }

  return generateLocalRoadmap(subject, results, targetDays);
}
