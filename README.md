# ConvoMark
## Bookmark your Telegram conversations!

[![Netlify Status](https://api.netlify.com/api/v1/badges/307b81de-0925-45c8-ab57-7401052d63f2/deploy-status)](https://app.netlify.com/sites/suspicious-pike-0e144f/deploys)

ConvoMark is a web application and Telegram bot that makes it easy to bookmark a specific message and retrieve it later.  
Messages can be grouped together in named collections to keep them nice and organized.
It features a web interface to manage your bookmarks and collections, secure login via Telegram OAuth, a GraphQL API and a Telegram bot, [@convomarkbot](https://t.me/convomarkbot)! 

# Build
If you want to hack on both the frontend and the backend at the same time, run the following commands:
- `yarn install:all` to install all the project dependencies
- `yarn start:all` to start both processes in foreground. Processes are managed via [foreman]() and the Procfile definition.

Check `frontend/README.md` and `backend/README.md` for more specific instructions.