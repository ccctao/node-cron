import cron from "node-cron";
var PythonShell = require("python-shell");

cron.schedule(`0 0 * * *`, async () => {
  console.log(`running your task...`);

  var options = {
    scriptPath: "python3",
  };
  var pyshell = new PythonShell("bot.py", options);

  pyshell.on("message", function (message) {
    console.log(message);
  });
});

