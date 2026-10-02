# Abu Bakkar Sabith: Portfolio

Personal portfolio of Abu Bakkar Sabith, a CSE student focused on backend engineering, automation, and AI.

**Live site:** https://sabith-ai-enigineering-portfolio.vercel.app

## Featured projects

| Project | What it is | Stack |
| --- | --- | --- |
| [CRM Automation API](https://github.com/AbuBakkarSabitth/crm-automation-api) | Lead-management REST API with analytics and Telegram notifications | Node.js, Express.js, MongoDB, Render |
| AI Diet Assistant | Suggests personalized diet plans from user input | Python, Machine Learning |

## Built with

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- Deployed on [Vercel](https://vercel.com)

## Project structure

```
src/
  app/
    layout.js        Page metadata (title, description, social preview) and font
    page.js          The single page: hero, projects, about, learning, contact
    globals.css      Tailwind import and base styles
    icon.svg         Favicon
  components/
    Navbar.js
    ProjectCard.js
  data/
    site.js          Name, links, email, résumé (edit this first)
    projects.js      Project list (add a project by adding an object)
```

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing content

- **Your details and links:** `src/data/site.js`. The email and résumé buttons appear once those fields are filled in.
- **Projects:** `src/data/projects.js`. `features`, `repo`, and `live` are optional.

## Contact

- GitHub: [@AbuBakkarSabitth](https://github.com/AbuBakkarSabitth)
- LinkedIn: [sabithmab2](https://www.linkedin.com/in/sabithmab2/)
