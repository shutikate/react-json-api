import jsonServer from 'json-server';
import cors from 'cors';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = 3001;

server.use(cors({origin: '*'}));
server.use(middlewares);
server.use(router);
server.listen(port);
