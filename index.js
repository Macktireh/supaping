const { createClient } = require("@supabase/supabase-js");

try {
  require("dotenv").config();
} catch (err) {}

const projects = [
  {
    name: "Mackdin",
    url: process.env.SUPABASE_URL_MACKDIN,
    key: process.env.SUPABASE_KEY_MACKDIN,
    table: "post_post",
  },
  {
    name: "Twitter Clone",
    url: process.env.SUPABASE_URL_TWITTER_CLONE,
    key: process.env.SUPABASE_KEY_TWITTER_CLONE,
    table: "post_post",
  }
];

async function pingDatabase(supabaseUrl, supabaseKey, tableName) {
  try {
    // Validate environment variables
    if (!supabaseUrl || !supabaseKey) {
      console.error(
        "Supabase URL and Key must be set in environment variables."
      );
      process.exit(1);
    }

    // Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Ping Supabase by querying a table
    const { data, error } = await supabase.from(tableName).select("*").limit(1);

    // Handle errors
    if (error) throw error;

    // Log success
    console.log("\x1b[32mPing successful\x1b[0m :", data);
  } catch (err) {
    // Log and exit with error
    console.error("Error pinging Supabase:", err.message);
    process.exit(1);
  }
}

(async () => {
  // Ping the database
  for (const project of projects) {
    console.log();
    console.log(`==================================`);
    console.log(`Pinging ${project.name}...`);
    console.log(`==================================`);
    await pingDatabase(project.url, project.key, project.table);
    console.log();
  }
})();
