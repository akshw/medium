import { Client } from "pg";

const connectionString =
  "postgresql://postgres:mysecretpassword@localhost:5432/postgres";

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
