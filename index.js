const { Client } = require("pg");

try {
  require("dotenv").config();
} catch (err) {}

const projects = [
  {
    name: "Mackdin",
    dbUrl: process.env.DATABASE_URL_MACKDIN,
  },
  {
    name: "Twitter Clone",
    dbUrl: process.env.DATABASE_URL_TWITTER_CLONE,
  },
];

async function pingDatabase(projectName, dbUrl) {
  const client = new Client({
    connectionString: dbUrl,
  });

  try {
    if (!dbUrl) {
      console.error(
        `L'URL de la base de données pour ${projectName} doit être définie dans les variables d'environnement.`
      );
      process.exit(1);
    }

    await client.connect();

    const result = await client.query("SELECT 1");

    console.log(
      `\x1b[32mPing de la base de données ${projectName} réussi.\x1b[0m`
    );
  } catch (err) {
    console.log(dbUrl);
    console.error(
      `Erreur lors du ping de la base de données ${projectName}:`,
      err.message
    );
    process.exit(1);
  } finally {
    await client.end();
  }
}

(async () => {
  for (const project of projects) {
    console.log();
    console.log(`==================================`);
    console.log(`Pinging ${project.name}...`);
    console.log(`==================================`);
    await pingDatabase(project.name, project.dbUrl);
    console.log();
  }
})();
