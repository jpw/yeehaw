'use strict';

const App = require('./lib/app');
const dotenv = require('dotenv');

dotenv.config();

const app = new App({
	basePath: __dirname,
	baseUrl: process.env.BASE_URL,
	databaseUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/yeehaw',
	name: 'Yeehaw',
	sessionSecret: process.env.SESSION_SECRET,
	slackClientId: process.env.SLACK_CLIENT_ID,
	slackClientSecret: process.env.SLACK_CLIENT_SECRET,
	slackClientSigningSecret: process.env.SLACK_CLIENT_SIGNING_SECRET
});

app.start().catch(error => {
	app.log.error(error.stack);
	process.exitCode = 1;
});
