import * as express from 'express';
import { greet } from '@monowebo/utilities';

const app: express.Express = express();

app.get('/', (req, res) => {
	res.send(greet('NEWESTERS'));
});

const PORT: string = process.env.PORT || '3000';

app.listen(PORT, () => {
	console.log(`Monowebo server is running in http://localhost:${PORT}`);
});
