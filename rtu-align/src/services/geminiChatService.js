const DEFAULT_GEMINI_KEY = 'AQ.Ab8RN6KWXPPM3PVKLS-3Yog2aTR9VxfPgbxqSj15OZTKHXLBdQ';
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || DEFAULT_GEMINI_KEY;

const CANDIDATE_MODELS = [
  'gemini-2.0-flash',
  'gemini-1.5-flash',
  'gemini-2.5-flash',
  'gemini-1.5-pro'
];

// Helper to call Gemini with cascading model fallback
async function executeGeminiPrompt(prompt) {
  if (!GEMINI_API_KEY || !GEMINI_API_KEY.trim()) {
    throw new Error('No API key provided');
  }

  const { GoogleGenerativeAI } = await import('@google/generative-ai');
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY.trim());

  let lastError = null;
  for (const modelName of CANDIDATE_MODELS) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      if (text) {
        return text;
      }
    } catch (err) {
      lastError = err;
      console.warn(`Model ${modelName} failed, trying fallback:`, err.message || err);
    }
  }

  throw lastError || new Error('All candidate models failed');
}

// Offline fallback lesson generator
function getLocalFallbackLesson(subject, unitNumber, topic) {
  return {
    part_a_definition: `${topic} is a foundational concept in ${subject.name} (Unit ${unitNumber}) that defines core mathematical and algorithmic principles required for computational modeling.`,
    part_b_analytical: `1. Core Working Mechanism: Operates by establishing boundary constraints and structured state transitions.\n2. Key Formula / Trace: Master the time complexity O(N) / O(N log N) and governing equations.\n3. Standard Derivation: Formulate intermediate state transformations step-by-step.`,
    part_c_comprehensive: `For Part C (10 Marks), structure your answer into: (a) Architectural Diagram, (b) Mathematical Formulation / Algorithm, (c) Full Trace with sample values, and (d) Complexity and Edge-case analysis.`,
    exam_traps: [
      "Failing to state the base case or boundary condition in Part A.",
      "Writing qualitative descriptions without equations or diagrams in Part B/C."
    ],
    sample_question: `Explain ${topic} in detail with suitable examples, diagrams, and time complexity analysis. (RTU Part C, 10 Marks)`
  };
}

// Fetch structured topic lesson from Gemini
export async function fetchTopicLesson(subject, unitNumber, topic) {
  try {
    const prompt = `You are the official RTU-Kota Academic AI Professor for B.Tech engineering.
Explain the following syllabus topic strictly aligned with the RTU Kota examination blueprint:

Subject: ${subject.code} - ${subject.name}
Unit: Unit ${unitNumber}
Topic: "${topic}"

Provide a structured JSON response with these exact keys:
{
  "part_a_definition": "Crisp 2-line definition under 25 words suitable for Part A compulsory 2-mark question",
  "part_b_analytical": "Detailed working principles, mathematical formulas, derivations, or step-by-step trace for Part B 5-mark question (formatted with bullet points and clear steps)",
  "part_c_comprehensive": "Comprehensive 10-mark strategy: architectural breakdown, numerical approach, algorithm/code, and edge cases",
  "exam_traps": ["Array of 2-3 specific mistakes students make in RTU answer booklets for this topic"],
  "sample_question": "A typical RTU question on this topic with marks indication (e.g. 5M or 10M)"
}

Respond ONLY with valid JSON with NO markdown wrapping.`;

    const text = await executeGeminiPrompt(prompt);
    const cleaned = text.replace(/```json/gi, '').replace(/```/g, '').trim();
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);

    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (err) {
    console.warn('Gemini fetchTopicLesson failed, falling back to local guide:', err);
  }

  return getLocalFallbackLesson(subject, unitNumber, topic);
}

// Interactive chat message with Gemini
export async function sendTutorChatMessage(subject, unitNumber, topic, history = [], userMessage) {
  try {
    // Format chat history for context
    const conversationContext = history
      .map(h => `${h.role === 'user' ? 'Student' : 'Professor'}: ${h.text}`)
      .join('\n');

    const prompt = `You are the RTU-Kota Academic AI Professor teaching a B.Tech student.
Subject: ${subject.code} - ${subject.name} (Unit ${unitNumber})
Current Topic: "${topic}"

Previous Conversation:
${conversationContext}

Student Question: "${userMessage}"

Give a direct, concise, syllabus-accurate explanation tailored for RTU Kota exams. Use bullet points, bold key terms, and formulas where appropriate.`;

    const text = await executeGeminiPrompt(prompt);
    return text;
  } catch (err) {
    console.warn('Gemini sendTutorChatMessage failed:', err);
    return `[RTU Study Assistant] In ${subject.name} (Unit ${unitNumber}), "${topic}" focuses heavily on clear step-by-step derivations and exact formulas. Ensure you practice previous year RTU questions and state all boundary conditions in your answer booklet.`;
  }
}

export async function generateAIQuestion(subject, unitNumber, unitTopics) {
  try {
    const topicStr = Array.isArray(unitTopics) ? unitTopics.join(", ") : unitTopics;
    const prompt = `You are an RTU Kota Professor generating a diagnostic multiple-choice question.
Subject: ${subject.name} (Code: ${subject.code})
Unit ${unitNumber} Topics: ${topicStr}

Generate ONE unique, high-quality multiple choice question testing a core concept from these topics.
Provide a JSON response with these exact keys:
{
  "q": "The question text",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "answer": "The exact string of the correct option",
  "topic": "The specific syllabus topic being tested"
}

Respond ONLY with valid JSON, NO markdown wrapping.`;

    const text = await executeGeminiPrompt(prompt);
    const cleaned = text.replace(/```json/gi, '').replace(/```/g, '').trim();
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);

    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (err) {
    console.warn('Gemini generateAIQuestion failed:', err);
  }
  return null;
}
