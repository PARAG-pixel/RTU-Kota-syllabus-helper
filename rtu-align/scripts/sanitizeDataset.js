import fs from 'fs';

// 1. Sanitize rtuData.js
let rtuDataRaw = fs.readFileSync('src/data/rtuData.js', 'utf8');

// Replace any variation of ") ON CONFLICT (..." in strings
// e.g. "Engineering Mathematics-I) ON CONFLICT (code" -> "Engineering Mathematics-I"
// e.g. "In Engineering Mathematics-I) ON CONFLICT (code (Unit 1)" -> "In Engineering Mathematics-I (Unit 1)"
rtuDataRaw = rtuDataRaw.replace(/\)\s*ON\s+CONFLICT\s*\([^\)"']*\)/gi, '');
rtuDataRaw = rtuDataRaw.replace(/\)\s*ON\s+CONFLICT\s*\([^\)"']*/gi, '');

// Also check for any trailing ") ON CONFLICT"
rtuDataRaw = rtuDataRaw.replace(/\)\s*ON\s+CONFLICT/gi, '');

fs.writeFileSync('src/data/rtuData.js', rtuDataRaw, 'utf8');
console.log('Sanitized src/data/rtuData.js');

// 2. Sanitize parsed_syllabus.json
if (fs.existsSync('scripts/parsed_syllabus.json')) {
  let parsedRaw = fs.readFileSync('scripts/parsed_syllabus.json', 'utf8');
  parsedRaw = parsedRaw.replace(/\)\s*ON\s+CONFLICT\s*\([^\)"']*\)/gi, '');
  parsedRaw = parsedRaw.replace(/\)\s*ON\s+CONFLICT\s*\([^\)"']*/gi, '');
  parsedRaw = parsedRaw.replace(/\)\s*ON\s+CONFLICT/gi, '');
  fs.writeFileSync('scripts/parsed_syllabus.json', parsedRaw, 'utf8');
  console.log('Sanitized scripts/parsed_syllabus.json');
}

// 3. Sanitize supabase_schema_and_data.sql
if (fs.existsSync('supabase_schema_and_data.sql')) {
  let sqlRaw = fs.readFileSync('supabase_schema_and_data.sql', 'utf8');
  // In SQL, replace values like 'Engineering Mathematics-I) ON CONFLICT (code' with 'Engineering Mathematics-I'
  sqlRaw = sqlRaw.replace(/\)\s*ON\s+CONFLICT\s*\([a-zA-Z_0-9]+'\)/gi, "')");
  sqlRaw = sqlRaw.replace(/\)\s*ON\s+CONFLICT\s*\([a-zA-Z_0-9]+'/gi, "'");
  fs.writeFileSync('supabase_schema_and_data.sql', sqlRaw, 'utf8');
  console.log('Sanitized supabase_schema_and_data.sql');
}
