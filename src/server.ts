import http from 'http';
import { app } from './app';

const PORT = process.env.PORT || 8000;

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);

// server.listen(process.env.PORT || 3000);

server.listen(PORT, (): void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});
