import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import rtuData from '../src/data/rtuData.js';

let sql = `-- Supabase Schema and Data Migration Script\n\n`;

sql += `
-- 1. Create Tables
CREATE TABLE IF NOT EXISTS branches (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  icon TEXT
);

CREATE TABLE IF NOT EXISTS semesters (
  id UUID PRIMARY KEY,
  branch_id TEXT REFERENCES branches(id) ON DELETE CASCADE,
  semester INT NOT NULL,
  year INT NOT NULL
);

CREATE TABLE IF NOT EXISTS subjects (
  code TEXT PRIMARY KEY,
  semester_id UUID REFERENCES semesters(id) ON DELETE CASCADE,
  name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS units (
  id UUID PRIMARY KEY,
  subject_code TEXT REFERENCES subjects(code) ON DELETE CASCADE,
  number INT NOT NULL,
  title TEXT NOT NULL,
  topics JSONB NOT NULL,
  high_yield INT NOT NULL
);

CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  unit_id UUID REFERENCES units(id) ON DELETE CASCADE,
  q TEXT NOT NULL,
  options JSONB NOT NULL,
  answer TEXT NOT NULL,
  topic TEXT NOT NULL
);

-- Turn on RLS and allow public access for MVP
ALTER TABLE branches ENABLE ROW LEVEL SECURITY;
ALTER TABLE semesters ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE units ENABLE ROW LEVEL SECURITY;
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on branches" ON branches FOR SELECT USING (true);
CREATE POLICY "Allow public read access on semesters" ON semesters FOR SELECT USING (true);
CREATE POLICY "Allow public read access on subjects" ON subjects FOR SELECT USING (true);
CREATE POLICY "Allow public read access on units" ON units FOR SELECT USING (true);
CREATE POLICY "Allow public read access on questions" ON questions FOR SELECT USING (true);

-- Clear existing data if re-running
DELETE FROM branches;

-- 2. Insert Data
`;

function escapeSql(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/'/g, "''");
}

for (const branch of rtuData.branches) {
  sql += `INSERT INTO branches (id, name, icon) VALUES ('${escapeSql(branch.branch_id)}', '${escapeSql(branch.branch_name)}', '${escapeSql(branch.icon)}');\n`;

  for (const sem of branch.semesters) {
    const semId = uuidv4();
    sql += `INSERT INTO semesters (id, branch_id, semester, year) VALUES ('${semId}', '${escapeSql(branch.branch_id)}', ${sem.semester}, ${sem.year});\n`;

    for (const subj of sem.subjects) {
      // Upsert subject since AI and CSE share year 1 subjects
      sql += `INSERT INTO subjects (code, semester_id, name) VALUES ('${escapeSql(subj.code)}', '${semId}', '${escapeSql(subj.name)}') ON CONFLICT (code) DO NOTHING;\n`;

      for (const unit of subj.units) {
        const unitId = uuidv4();
        const topicsJson = JSON.stringify(unit.topics).replace(/'/g, "''");
        sql += `INSERT INTO units (id, subject_code, number, title, topics, high_yield) VALUES ('${unitId}', '${escapeSql(subj.code)}', ${unit.number}, '${escapeSql(unit.title)}', '${topicsJson}', ${unit.high_yield});\n`;

        for (const q of unit.questions) {
          const optionsJson = JSON.stringify(q.options).replace(/'/g, "''");
          sql += `INSERT INTO questions (id, unit_id, q, options, answer, topic) VALUES ('${escapeSql(q.id)}', '${unitId}', '${escapeSql(q.q)}', '${optionsJson}', '${escapeSql(q.answer)}', '${escapeSql(q.topic)}') ON CONFLICT (id) DO NOTHING;\n`;
        }
      }
    }
  }
}

fs.writeFileSync('supabase_schema_and_data.sql', sql);
console.log('SQL script generated at supabase_schema_and_data.sql');
