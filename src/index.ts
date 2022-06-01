import { schedule } from 'node-cron';
import app from './app';
import Database from './services/Database';

const PORT = process.env.APP_PORT || 3333;

schedule('3 0 * * *', () => Database.update(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
