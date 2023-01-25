import cron from "node-cron";
var PythonShell = require("python-shell");

cron.schedule(`0 0 * * *`, async () => {
  console.log(`running your task...`);
  PythonShell.run("bot.py", options, function (err, results) {});
});
