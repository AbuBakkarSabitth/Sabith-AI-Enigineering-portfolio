// One place for the details that appear across the site.
// Fill in the empty strings; buttons for empty values are hidden automatically.
export const site = {
  name: "Abu Bakkar Sabith",
  shortName: "Sabith",
  role: "Future AI Engineer",
  description:
    "Portfolio of Abu Bakkar Sabith, a CSE student building backend APIs, automation, and AI projects.",
  // On Vercel this picks up the real production address automatically,
  // so nothing needs editing here if the project is renamed.
  url: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://sabith-ai-enigineering-portfolio.vercel.app",
  github: "https://github.com/AbuBakkarSabitth",
  linkedin: "https://www.linkedin.com/in/sabithmab2/",
  email: "", // e.g. "you@example.com"
  resume: "", // e.g. "/resume.pdf" (put the file in /public)
};
