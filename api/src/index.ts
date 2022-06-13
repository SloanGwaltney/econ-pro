import express from 'express';

async function startServer(): Promise<void> {
	const app = express();
	app.listen(process.env.PORT, () => console.log('Econ-Pro API Server Running'));
}

startServer();
