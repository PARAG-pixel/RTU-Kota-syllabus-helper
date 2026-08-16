import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function fetchRtuData() {
  // Fetch all tables
  const [
    { data: branches },
    { data: semesters },
    { data: subjects },
    { data: units },
    { data: questions }
  ] = await Promise.all([
    supabase.from('branches').select('*'),
    supabase.from('semesters').select('*').order('semester', { ascending: true }),
    supabase.from('subjects').select('*'),
    supabase.from('units').select('*').order('number', { ascending: true }),
    supabase.from('questions').select('*')
  ]);

  // If any fetch failed or is empty
  if (!branches || !semesters || !subjects || !units || !questions) {
    throw new Error("Failed to fetch data from Supabase. Ensure tables are populated.");
  }

  // Reconstruct the hierarchical rtuData object
  const rtuData = {
    university: "Rajasthan Technical University (RTU), Kota",
    exam_pattern: {
      part_a: { questions: 10, marks_each: 2, total: 20, description: "Compulsory, 2 per unit, ≤25 words" },
      part_b: { questions: 6, marks_each: 5, total: 30, description: "Analytical / Problem Solving, ~100 words" },
      part_c: { questions: 5, marks_each: 10, total: 50, description: "Comprehensive, 1 from each unit" },
      total_marks: 100,
      external_weight: 70,
      internal_weight: 30
    },
    branches: branches.map(branch => {
      return {
        branch_id: branch.id,
        branch_name: branch.name,
        icon: branch.icon,
        semesters: semesters
          .filter(sem => sem.branch_id === branch.id)
          .map(sem => {
            return {
              semester: sem.semester,
              year: sem.year,
              subjects: subjects
                .filter(subj => subj.semester_id === sem.id)
                .map(subj => {
                  return {
                    code: subj.code,
                    name: subj.name,
                    units: units
                      .filter(unit => unit.subject_code === subj.code)
                      .map(unit => {
                        return {
                          number: unit.number,
                          title: unit.title,
                          topics: typeof unit.topics === 'string' ? JSON.parse(unit.topics) : unit.topics,
                          high_yield: unit.high_yield,
                          questions: questions
                            .filter(q => q.unit_id === unit.id)
                            .map(q => ({
                              id: q.id,
                              q: q.q,
                              options: typeof q.options === 'string' ? JSON.parse(q.options) : q.options,
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
    })
  };

  return rtuData;
}
