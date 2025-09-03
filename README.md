# Supaping

**Supaping** is a lightweight Node.js script designed to periodically ping your [Supabase](https://supabase.com/) databases to prevent them from going into idle or paused states — useful for keeping free-tier projects warm.

## 🚀 Features

- ✅ Pings multiple Supabase projects using environment variables
- ✅ Scheduled GitHub Action to run twice a week (Monday and Thursday)
- ✅ Easy to extend with more projects or tables
- ✅ Minimal setup with `.env` support (in localy)

## 🛠️ Installation

```bash
git clone https://github.com/Macktireh/supaping.git
cd supaping
npm install
```

## ⚙️ Environment Variables

Create a `.env` file at the root of your project and define your Supabase credentials:

```env
DATABASE_URL_PROJECT_1=postgres://[DB_USER]:[DB_PASSWORD]@[DB_HOST]:[DB_PORT]/[DB_NAME]
DATABASE_URL_PROJECT_2=postgres://[DB_USER]:[DB_PASSWORD]@[DB_HOST]:[DB_PORT]/[DB_NAME]
...
```

## 📦 Usage

You can manually ping the databases by running:

```bash
npm run ping
```

## 📅 GitHub Actions

This project includes a preconfigured GitHub Actions workflow (`.github/workflows/task.yml`) that runs the ping script every **Monday and Thursday at 9:00 AM UTC**.

To enable it:

1. Fork or clone this repo into your own GitHub account.
2. Add the required secrets to your repository settings:

   - `DATABASE_URL_PROJECT_1`
   - `DATABASE_URL_PROJECT_2`

3. The action will run automatically on schedule or can be manually triggered via the GitHub UI.

---

Made with ❤️ by [Macktireh](https://github.com/Macktireh)

