import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const parsed = JSON.parse(fs.readFileSync('scripts/parsed_syllabus.json', 'utf8'));
const { branches, semesters, subjects, units, questions: existingQuestions } = parsed;

// Map existing questions by unit_id
const existingByUnit = {};
for (const q of existingQuestions) {
  if (!existingByUnit[q.unit_id]) existingByUnit[q.unit_id] = [];
  existingByUnit[q.unit_id].push(q);
}

// Question templates generator for any remaining slots in a unit to ensure AT LEAST 4 high-yield questions per unit
function generateUnitQuestions(unit, subject) {
  const existing = existingByUnit[unit.id] || [];
  const result = [...existing];

  const topics = unit.topics && unit.topics.length > 0 
    ? unit.topics 
    : [unit.title, 'Fundamental Concepts', 'Exam Derivations', 'Numerical Analysis'];

  // Topic questions bank generator tailored to engineering domains
  const topicBank = [
    (t, u, s) => ({
      q: `In ${s.name} (Unit ${u.number}), what is the primary purpose or definition of "${t}"?`,
      options: [
        `Defines fundamental mathematical and structural constraints for ${t}`,
        `A secondary optimization applied only in non-standard systems`,
        `An obsolete method replaced by brute-force search`,
        `A hardware-only component unrelated to algorithmic modeling`
      ],
      answer: `Defines fundamental mathematical and structural constraints for ${t}`,
      topic: t
    }),
    (t, u, s) => ({
      q: `Which governing equation, condition, or complexity constraint is associated with "${t}"?`,
      options: [
        `Boundary conditions must satisfy conservation and equilibrium criteria`,
        `Requires unbounded exponential time complexity O(2^N)`,
        `Always evaluates to zero regardless of state variables`,
        `Cannot be mathematically modeled or analyzed`
      ],
      answer: `Boundary conditions must satisfy conservation and equilibrium criteria`,
      topic: t
    }),
    (t, u, s) => ({
      q: `What common examination trap occurs in RTU answer booklets when solving questions on "${t}"?`,
      options: [
        `Omitting boundary conditions, state assumptions, or required circuit/flow diagrams`,
        `Writing too many mathematical derivation steps`,
        `Using standard SI units and conventions`,
        `Providing exact formulas and complexity bounds`
      ],
      answer: `Omitting boundary conditions, state assumptions, or required circuit/flow diagrams`,
      topic: t
    }),
    (t, u, s) => ({
      q: `For RTU Part C (10-Mark comprehensive question) on "${t}", which answer structure yields maximum marks?`,
      options: [
        `Circuit/Architecture Diagram + Step-by-Step Mathematical Formulation + Edge-case Analysis`,
        `Single-sentence qualitative summary without diagrams or formulas`,
        `Memorized code snippets without time/space complexity justification`,
        `Only solving numeric calculations without theoretical principles`
      ],
      answer: `Circuit/Architecture Diagram + Step-by-Step Mathematical Formulation + Edge-case Analysis`,
      topic: t
    })
  ];

  // Specific domain questions based on subject & unit title
  function getDomainSpecificQuestions(u, s) {
    const sName = s.name.toLowerCase();
    const uTitle = u.title.toLowerCase();
    const t0 = topics[0] || u.title;
    const t1 = topics[1] || topics[0] || u.title;
    const t2 = topics[2] || topics[1] || u.title;
    const t3 = topics[3] || topics[0] || u.title;

    if (sName.includes('math')) {
      return [
        {
          q: `For ${u.title}, which criterion confirms convergence / existence of the solution for "${t0}"?`,
          options: [`Cauchy condition and continuous differentiability`, `Linear divergence to infinity`, `Discontinuity at all interior points`, `Zero determinant of fundamental matrix`],
          answer: `Cauchy condition and continuous differentiability`,
          topic: t0
        },
        {
          q: `In the context of "${t1}", what does the Jacobian / transformation matrix represent?`,
          options: [`Local coordinate stretching factor and area ratio`, `Scalar product of constants`, `Zero-order polynomial term`, `Total divergence of boundary`],
          answer: `Local coordinate stretching factor and area ratio`,
          topic: t1
        },
        {
          q: `When applying theorem/formula for "${t2}", what is the key prerequisite?`,
          options: [`Function must be piecewise continuous and bounded over the domain`, `Domain must be unbounded in all directions`, `No derivatives can exist`, `Variables must be purely imaginary`],
          answer: `Function must be piecewise continuous and bounded over the domain`,
          topic: t2
        },
        {
          q: `What is the standard evaluation method for "${t3}" in RTU Part B/C problems?`,
          options: [`Applying standard integral transforms and change of variables`, `Approximating by constant zero`, `Ignoring higher-order differential terms`, `Only graphic plotting`],
          answer: `Applying standard integral transforms and change of variables`,
          topic: t3
        }
      ];
    }

    if (sName.includes('data structure') || sName.includes('algorithm') || sName.includes('c++') || sName.includes('python')) {
      return [
        {
          q: `What is the worst-case time complexity associated with standard operations on "${t0}"?`,
          options: [`O(log N) or O(N log N) depending on tree balance and indexing`, `Always O(1) for all arbitrary configurations`, `Unbounded factorial complexity O(N!)`, `Strictly O(N³) with no optimization possible`],
          answer: `O(log N) or O(N log N) depending on tree balance and indexing`,
          topic: t0
        },
        {
          q: `Which auxiliary data structure or property is required to implement "${t1}" efficiently?`,
          options: [`Balanced pointers / hash buckets / recurrence stack`, `Purely sequential tape storage`, `Global immutable variables only`, `Uninitialized dynamic arrays`],
          answer: `Balanced pointers / hash buckets / recurrence stack`,
          topic: t1
        },
        {
          q: `When implementing "${t2}", how is memory safety or stability guaranteed?`,
          options: [`Proper base case handling, boundary checks, and deallocation / destructor logic`, `Ignoring pointer bounds`, `Using infinite recursion without return conditions`, `Suppressing compiler warnings`],
          answer: `Proper base case handling, boundary checks, and deallocation / destructor logic`,
          topic: t2
        },
        {
          q: `In RTU coding/algorithm exams, how should you trace "${t3}"?`,
          options: [`State table showing iteration step, stack/queue contents, and variable modifications`, `Only writing the final output without steps`, `Skipping the dry run and pseudo-code`, `Providing random sample values`],
          answer: `State table showing iteration step, stack/queue contents, and variable modifications`,
          topic: t3
        }
      ];
    }

    if (sName.includes('database') || sName.includes('network') || sName.includes('operating') || sName.includes('compiler') || sName.includes('cloud')) {
      return [
        {
          q: `In ${s.name}, what core protocol / architecture layer governs "${t0}"?`,
          options: [`Standard ISO/OSI or relational/OS kernel state transition protocol`, `Unregulated random access mechanism`, `Physical wire layer only without logic`, `Deprecated single-tier architecture`],
          answer: `Standard ISO/OSI or relational/OS kernel state transition protocol`,
          topic: t0
        },
        {
          q: `What concurrency or consistency problem is avoided by implementing "${t1}"?`,
          options: [`Race conditions, dirty reads, deadlock, or packet collision`, `Zero latency execution`, `Deterministic clock skew`, `Eliminating hardware storage entirely`],
          answer: `Race conditions, dirty reads, deadlock, or packet collision`,
          topic: t1
        },
        {
          q: `What metric is primarily optimized by "${t2}"?`,
          options: [`Throughput, resource utilization, and query/response latency`, `Total memory fragmentation to 100%`, `Packet loss rate increase`, `Number of redundant system crashes`],
          answer: `Throughput, resource utilization, and query/response latency`,
          topic: t2
        },
        {
          q: `For RTU exams, what standard diagram is required when answering questions on "${t3}"?`,
          options: [`Layered architectural block diagram with data-flow arrows and state labels`, `Plain text outline without any schema or topology`, `Hand-drawn decorative illustrations`, `None`],
          answer: `Layered architectural block diagram with data-flow arrows and state labels`,
          topic: t3
        }
      ];
    }

    if (sName.includes('intelligence') || sName.includes('learning') || sName.includes('neural') || sName.includes('nlp')) {
      return [
        {
          q: `In ${s.name}, what is the mathematical loss or objective function minimized in "${t0}"?`,
          options: [`Cross-entropy / MSE gradient error computed across training batches`, `Random uniform noise function`, `Constant zero penalty`, `Maximizing unnormalized variance only`],
          answer: `Cross-entropy / MSE gradient error computed across training batches`,
          topic: t0
        },
        {
          q: `How is overfitting prevented when training models with "${t1}"?`,
          options: [`Regularization (L1/L2), Dropout, early stopping, and cross-validation`, `Training for infinite epochs without validation`, `Removing training data entirely`, `Increasing model capacity arbitrarily without constraints`],
          answer: `Regularization (L1/L2), Dropout, early stopping, and cross-validation`,
          topic: t1
        },
        {
          q: `What is the computational role of the activation or transformation layer in "${t2}"?`,
          options: [`Introducing non-linearity to learn complex continuous decision boundaries`, `Resetting weights to zero at each step`, `Converting vectors to scalar constants`, `Eliminating all matrix operations`],
          answer: `Introducing non-linearity to learn complex continuous decision boundaries`,
          topic: t2
        },
        {
          q: `When analyzing "${t3}" in RTU university exams, what key tradeoff must be highlighted?`,
          options: [`Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity`, `Color scheme of charts`, `File size of documentation`, `Number of printed answer booklet lines`],
          answer: `Bias-Variance tradeoff, inference latency vs accuracy, and computational complexity`,
          topic: t3
        }
      ];
    }

    // Generic Engineering Question Set
    return [
      {
        q: `In ${s.name}, what fundamental engineering principle underlies "${t0}"?`,
        options: [`Governing physical conservation law and deterministic state transitions`, `Random empirical guessing`, `Unstable non-linear resonance without damping`, `Zero energy balance`],
        answer: `Governing physical conservation law and deterministic state transitions`,
        topic: t0
      },
      {
        q: `What is the standard formula / transfer function parameter for "${t1}"?`,
        options: [`Ratio of response output to driving input under nominal boundary conditions`, `Multiplication of independent random numbers`, `Inverse of total system lifespan`, `Difference of unrelated constants`],
        answer: `Ratio of response output to driving input under nominal boundary conditions`,
        topic: t1
      },
      {
        q: `What critical error must students avoid when deriving analytical equations for "${t2}"?`,
        options: [`Violating initial boundary assumptions or missing dimensional consistency`, `Using correct standard units`, `Labeling axes on diagrams`, `Writing neat step-by-step solutions`],
        answer: `Violating initial boundary assumptions or missing dimensional consistency`,
        topic: t2
      },
      {
        q: `In RTU B.Tech exams, how is full credit secured for 10-mark questions on "${t3}"?`,
        options: [`Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation`, `One-line definition without formulas or working steps`, `Only copying the question statement`, `Listing unrelated acronyms`],
        answer: `Comprehensive schematic diagram, mathematical derivation, and sample numerical calculation`,
        topic: t3
      }
    ];
  }

  const domainQuestions = getDomainSpecificQuestions(unit, subject);

  let qIndex = result.length + 1;
  while (result.length < 4) {
    const candidate = domainQuestions[result.length] || topicBank[(result.length) % topicBank.length](topics[(result.length) % topics.length], unit, subject);
    result.push({
      id: `${subject.code.toLowerCase().replace(/[^a-z0-9]/g, '')}_u${unit.number}_q${qIndex}`,
      unit_id: unit.id,
      q: candidate.q,
      options: candidate.options,
      answer: candidate.answer,
      topic: candidate.topic
    });
    qIndex++;
  }

  return result;
}

// Build hierarchical rtuData object
const hierarchicalBranches = branches.map(b => {
  const branchSemesters = semesters.filter(s => s.branch_id === b.id).sort((a, b) => a.semester - b.semester);
  return {
    branch_id: b.id,
    branch_name: b.name,
    icon: b.icon,
    semesters: branchSemesters.map(sem => {
      const semSubjects = subjects.filter(sub => sub.semester_id === sem.id);
      return {
        semester: sem.semester,
        year: sem.year,
        subjects: semSubjects.map(sub => {
          const subUnits = units.filter(u => u.subject_code === sub.code).sort((a, b) => a.number - b.number);
          return {
            code: sub.code,
            name: sub.name,
            units: subUnits.map(u => {
              const unitQs = generateUnitQuestions(u, sub);
              return {
                number: u.number,
                title: u.title,
                topics: u.topics,
                high_yield: u.high_yield,
                questions: unitQs.map((q, idx) => ({
                  id: q.id || `${sub.code.toLowerCase().replace(/[^a-z0-9]/g, '')}_u${u.number}_q${idx + 1}`,
                  q: q.q,
                  options: q.options,
                  answer: q.answer,
                  topic: q.topic
                }))
              };
            })
          };
        })
      };
    })
  };
});

const fullRtuData = {
  university: "Rajasthan Technical University (RTU), Kota",
  exam_pattern: {
    part_a: { questions: 10, marks_each: 2, total: 20, description: "Compulsory, 2 per unit, ≤25 words" },
    part_b: { questions: 6, marks_each: 5, total: 30, description: "Analytical / Problem Solving, ~100 words" },
    part_c: { questions: 5, marks_each: 10, total: 50, description: "Comprehensive, 1 from each unit" },
    total_marks: 100,
    external_weight: 70,
    internal_weight: 30
  },
  branches: hierarchicalBranches
};

// Write rtuData.js
fs.mkdirSync('src/data', { recursive: true });
const rtuDataContent = `// RTU Kota Complete Syllabus and 20+ Question Diagnostic Bank (Offline-First Dataset)
export const rtuData = ${JSON.stringify(fullRtuData, null, 2)};

export default rtuData;
`;

fs.writeFileSync('src/data/rtuData.js', rtuDataContent);
console.log('Successfully wrote src/data/rtuData.js with 4+ questions per unit!');

// Count stats
let totalSubjects = 0;
let totalUnits = 0;
let totalQuestions = 0;
hierarchicalBranches.forEach(b => {
  b.semesters.forEach(s => {
    s.subjects.forEach(sub => {
      totalSubjects++;
      sub.units.forEach(u => {
        totalUnits++;
        totalQuestions += u.questions.length;
      });
    });
  });
});

console.log(`Summary: ${totalSubjects} subjects, ${totalUnits} units, ${totalQuestions} questions generated (Average ${(totalQuestions / totalUnits).toFixed(1)} Qs/unit)`);

// Generate updated SQL migration script
let sql = `-- Supabase Schema and Data Migration Script (4+ Questions Per Unit)\n\n`;
sql += `CREATE TABLE IF NOT EXISTS branches (id TEXT PRIMARY KEY, name TEXT NOT NULL, icon TEXT);\n`;
sql += `CREATE TABLE IF NOT EXISTS semesters (id UUID PRIMARY KEY, branch_id TEXT REFERENCES branches(id) ON DELETE CASCADE, semester INT NOT NULL, year INT NOT NULL);\n`;
sql += `CREATE TABLE IF NOT EXISTS subjects (code TEXT PRIMARY KEY, semester_id UUID REFERENCES semesters(id) ON DELETE CASCADE, name TEXT NOT NULL);\n`;
sql += `CREATE TABLE IF NOT EXISTS units (id UUID PRIMARY KEY, subject_code TEXT REFERENCES subjects(code) ON DELETE CASCADE, number INT NOT NULL, title TEXT NOT NULL, topics JSONB NOT NULL, high_yield INT NOT NULL);\n`;
sql += `CREATE TABLE IF NOT EXISTS questions (id TEXT PRIMARY KEY, unit_id UUID REFERENCES units(id) ON DELETE CASCADE, q TEXT NOT NULL, options JSONB NOT NULL, answer TEXT NOT NULL, topic TEXT NOT NULL);\n\n`;
sql += `ALTER TABLE branches ENABLE ROW LEVEL SECURITY;\nALTER TABLE semesters ENABLE ROW LEVEL SECURITY;\nALTER TABLE subjects ENABLE ROW LEVEL SECURITY;\nALTER TABLE units ENABLE ROW LEVEL SECURITY;\nALTER TABLE questions ENABLE ROW LEVEL SECURITY;\n\n`;
sql += `CREATE POLICY "Allow public read access on branches" ON branches FOR SELECT USING (true);\n`;
sql += `CREATE POLICY "Allow public read access on semesters" ON semesters FOR SELECT USING (true);\n`;
sql += `CREATE POLICY "Allow public read access on subjects" ON subjects FOR SELECT USING (true);\n`;
sql += `CREATE POLICY "Allow public read access on units" ON units FOR SELECT USING (true);\n`;
sql += `CREATE POLICY "Allow public read access on questions" ON questions FOR SELECT USING (true);\n\n`;
sql += `DELETE FROM branches;\n\n`;

for (const branch of fullRtuData.branches) {
  sql += `INSERT INTO branches (id, name, icon) VALUES ('${branch.branch_id}', '${branch.branch_name.replace(/'/g, "''")}', '${branch.icon}');\n`;
  for (const sem of branch.semesters) {
    const semId = uuidv4();
    sql += `INSERT INTO semesters (id, branch_id, semester, year) VALUES ('${semId}', '${branch.branch_id}', ${sem.semester}, ${sem.year});\n`;
    for (const subj of sem.subjects) {
      sql += `INSERT INTO subjects (code, semester_id, name) VALUES ('${subj.code}', '${semId}', '${subj.name.replace(/'/g, "''")}') ON CONFLICT (code) DO NOTHING;\n`;
      for (const unit of subj.units) {
        const unitId = uuidv4();
        const topicsJson = JSON.stringify(unit.topics).replace(/'/g, "''");
        sql += `INSERT INTO units (id, subject_code, number, title, topics, high_yield) VALUES ('${unitId}', '${subj.code}', ${unit.number}, '${unit.title.replace(/'/g, "''")}', '${topicsJson}', ${unit.high_yield});\n`;
        for (const q of unit.questions) {
          const optionsJson = JSON.stringify(q.options).replace(/'/g, "''");
          sql += `INSERT INTO questions (id, unit_id, q, options, answer, topic) VALUES ('${q.id}', '${unitId}', '${q.q.replace(/'/g, "''")}', '${optionsJson}', '${q.answer.replace(/'/g, "''")}', '${q.topic.replace(/'/g, "''")}') ON CONFLICT (id) DO NOTHING;\n`;
        }
      }
    }
  }
}

fs.writeFileSync('supabase_schema_and_data.sql', sql);
console.log('Successfully updated supabase_schema_and_data.sql!');
