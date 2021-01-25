import createServer from './views/server';
import {config} from 'dotenv';
config();

const app = createServer();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening in port ${port}!`));
