// Add a project by adding an object to this array.
// `features`, `repo`, and `live` are optional; anything left out is not rendered.
export const projects = [
  {
    title: "CRM Automation API",
    description:
      "A CRM backend API built with Node.js, Express.js, and MongoDB. It supports lead management, analytics, Telegram notifications, filtering, pagination, and cloud deployment.",
    features: [
      "Lead management system",
      "Search and filter leads",
      "Telegram notification integration",
      "Analytics API",
      "RESTful API architecture",
      "Cloud deployment with Render",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Telegram API", "Render"],
    repo: "https://github.com/AbuBakkarSabitth/crm-automation-api",
    // Points at the status route, not /api/leads, so the lead data isn't one click away.
    live: "https://crm-automation-api-zri3.onrender.com/",
    liveLabel: "Live API status",
  },
  {
    title: "AI Diet Assistant",
    description:
      "AI-powered assistant that suggests personalized diet plans based on user input and health-related information.",
    tech: ["Python", "Machine Learning", "AI"],
    repo: "", // add the repo URL when it's public
    live: "",
  },
];
