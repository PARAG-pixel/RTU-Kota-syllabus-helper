// Scoring Engine: Evaluates quiz answers and computes gap analysis
export function evaluateQuiz(userAnswers, subject) {
  const unitScores = [0, 0, 0, 0, 0];
  const unitTotals = [0, 0, 0, 0, 0];
  const unitDetails = [];

  subject.units.forEach((unit, idx) => {
    let correct = 0;
    let total = unit.questions.length;
    unitTotals[idx] = total;

    unit.questions.forEach((q) => {
      if (userAnswers[q.id] === q.answer) {
        correct++;
      }
    });

    unitScores[idx] = total > 0 ? Math.round((correct / total) * 100) : 0;
    unitDetails.push({
      unit: idx + 1,
      title: unit.title,
      score: unitScores[idx],
      correct,
      total,
      status: unitScores[idx] >= 80 ? 'strong' : unitScores[idx] >= 40 ? 'moderate' : 'critical',
      highYield: unit.high_yield,
    });
  });

  const overallReadiness = Math.round(unitScores.reduce((a, b) => a + b, 0) / 5);

  // Calculate marks at risk
  const weakUnits = unitDetails.filter(u => u.status === 'critical');
  const moderateUnits = unitDetails.filter(u => u.status === 'moderate');

  // Part A: 2 questions per unit × 2 marks = 4 marks per unit at risk
  const partALoss = weakUnits.length * 4 + moderateUnits.length * 2;
  // Part B: ~1.2 questions per unit × 5 marks
  const partBLoss = weakUnits.length * 6 + moderateUnits.length * 3;
  // Part C: 1 question per unit × 10 marks
  const partCLoss = weakUnits.length * 10 + moderateUnits.length * 5;

  const marksAtRisk = Math.min(partALoss + partBLoss + partCLoss, 100);

  const criticalUnits = unitDetails
    .filter(u => u.status === 'critical')
    .map(u => u.unit);

  return {
    unitScores,
    unitDetails,
    overallReadiness,
    marksAtRisk,
    partALoss: Math.min(partALoss, 20),
    partBLoss: Math.min(partBLoss, 30),
    partCLoss: Math.min(partCLoss, 50),
    criticalUnits,
    weakUnits: weakUnits.length,
    moderateUnits: moderateUnits.length,
    strongUnits: unitDetails.filter(u => u.status === 'strong').length,
    severityLevel: marksAtRisk >= 50 ? 'critical' : marksAtRisk >= 25 ? 'warning' : 'safe',
  };
}
