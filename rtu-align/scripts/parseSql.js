import fs from 'fs';

// Read original SQL backup or recreate with proper line parser
const sql = fs.readFileSync('scripts/original_supabase.sql', 'utf16le');
const lines = sql.split('\n');

const branches = [];
const semesters = [];
const subjects = [];
const units = [];
const questions = [];

function parseSqlValues(line) {
  // Extract content inside VALUES (...)
  const valMatch = line.match(/VALUES\s*\(([\s\S]+)\)/);
  if (!valMatch) return [];
  const raw = valMatch[1].trim();

  const tokens = [];
  let inString = false;
  let cur = '';

  for (let i = 0; i < raw.length; i++) {
    const char = raw[i];
    if (char === "'") {
      if (inString && raw[i + 1] === "'") {
        // Escaped single quote
        cur += "'";
        i++; // skip next quote
      } else {
        inString = !inString;
      }
    } else if (char === ',' && !inString) {
      tokens.push(cur.trim());
      cur = '';
    } else {
      cur += char;
    }
  }
  if (cur.trim()) tokens.push(cur.trim());

  return tokens.map(t => {
    if (t.startsWith("'") && t.endsWith("'")) {
      return t.slice(1, -1);
    }
    return t;
  });
}

for (const line of lines) {
  if (line.startsWith('INSERT INTO branches')) {
    const vals = parseSqlValues(line);
    if (vals.length >= 3) {
      branches.push({ id: vals[0], name: vals[1], icon: vals[2] });
    }
  } else if (line.startsWith('INSERT INTO semesters')) {
    const vals = parseSqlValues(line);
    if (vals.length >= 4) {
      semesters.push({ id: vals[0], branch_id: vals[1], semester: parseInt(vals[2]), year: parseInt(vals[3]) });
    }
  } else if (line.startsWith('INSERT INTO subjects')) {
    const vals = parseSqlValues(line);
    if (vals.length >= 3) {
      subjects.push({ code: vals[0], semester_id: vals[1], name: vals[2] });
    }
  } else if (line.startsWith('INSERT INTO units')) {
    const vals = parseSqlValues(line);
    if (vals.length >= 6) {
      let parsedTopics = [];
      try {
        parsedTopics = JSON.parse(vals[4]);
      } catch (e) {
        parsedTopics = [vals[3]];
      }
      units.push({
        id: vals[0],
        subject_code: vals[1],
        number: parseInt(vals[2]),
        title: vals[3],
        topics: parsedTopics,
        high_yield: parseInt(vals[5])
      });
    }
  } else if (line.startsWith('INSERT INTO questions')) {
    const vals = parseSqlValues(line);
    if (vals.length >= 6) {
      let parsedOptions = [];
      try {
        parsedOptions = JSON.parse(vals[3]);
      } catch (e) {
        parsedOptions = [];
      }
      questions.push({
        id: vals[0],
        unit_id: vals[1],
        q: vals[2],
        options: parsedOptions,
        answer: vals[4],
        topic: vals[5]
      });
    }
  }
}

console.log('Parsed branches:', branches.length);
console.log('Parsed semesters:', semesters.length);
console.log('Parsed subjects:', subjects.length);
console.log('Parsed units:', units.length);
console.log('Parsed questions:', questions.length);

fs.writeFileSync('scripts/parsed_syllabus.json', JSON.stringify({ branches, semesters, subjects, units, questions }, null, 2));
console.log('Saved properly parsed syllabus to scripts/parsed_syllabus.json');
