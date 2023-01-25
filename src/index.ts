import cron from 'node-cron';
var PythonShell = require('python-shell');

cron.schedule(`0 0 * * *`, async () => {
  console.log(`running your task...`);
  await PythonShell.run('bot.py', options, function (err, results) {
          //On 'results' we get list of strings of all print done in your py scripts sequentially. 
          if (err) throw err;
          console.log('results: ');
          for(let i of results){
                console.log(i, "---->", typeof i)
          }
  }
});
