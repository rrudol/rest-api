const app = require('./app');

const port = parseInt(process.env.PORT) || 4000;

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});