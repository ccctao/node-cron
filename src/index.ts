import cron from "node-cron";
import { PythonShell } from "python-shell";

cron.schedule(`0 0 * * *`, async () => {
  console.log(`running your task...`);

  // sends a message to the Python script via stdin
  PythonShell.run("bot.py", options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log("results: %j", results);
  });
});
