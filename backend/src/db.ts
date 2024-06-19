import { Client } from "pg";

const connectionString =
  "postgresql://neondb_owner:VEm8gM6YztpW@ep-red-fog-a531rbo7.us-east-2.aws.neon.tech/neondb?sslmode=require";

const client = new Client({
  connectionString: connectionString,
});

client.connect((err) => {
  if (err) {
    console.log("err", err.stack);
  } else {
    console.log("connected");
  }
});

client.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("result: " + res.rows[0]);
  }
});
