# sheriff-bot
A simple bot for my discord server management.

## How to create a Discord bot and host at Heroku.

1 - Setup your package.json and your bot index file;  
2 - Create an env file with your bot's token (You can choose any name for the "key");  
3 - Create a `Procfile` without any file extension at your project (the file name must be capitalized), and set `worker: node bot_main_file.js ` or execute any of your start scripts `worker: npm start`;  
3 - Create an app at Heroku and integrate with Github deploy or any of your preference;  
4 - Go to Settings -> Config Vars, and set your bot token key and value as the same as you previously set at the env file;  
