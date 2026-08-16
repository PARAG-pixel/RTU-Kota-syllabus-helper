# RTU-Align: Exam Sprint Engine (RTU Kota)

AI-powered exam diagnostic and sprint revision engine tailored for Rajasthan Technical University (RTU) Kota B.Tech engineering students.

## 🚀 Quick Start (Local Development)

1. Clone repository:
   ```bash
   git clone https://github.com/PARAG-pixel/RTU-Kota-syllabus-helper.git
   cd RTU-Kota-syllabus-helper/rtu-align
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Fill in your Supabase credentials and Google Gemini API Key.

4. Start development server:
   ```bash
   npm run dev
   ```

---

## 🌐 Deploying to Vercel via GitHub

1. Push this repository to GitHub.
2. In [Vercel Dashboard](https://vercel.com/dashboard), click **"Add New Project"** and import this repository.
3. Configure the following **Environment Variables** under Project Settings:
   - `VITE_SUPABASE_URL`: Your Supabase Project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase Anon/Public Key
   - `VITE_GEMINI_API_KEY`: Your Google Gemini API Key
4. Click **Deploy**.
