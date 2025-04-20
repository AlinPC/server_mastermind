import express from 'express'
import cors from "cors"
import Connection from './config/db/db.js';
import Confidence from './config/dotenv/dotenv.js';
import seed_users from './seed/users_seed.js';
import clear_seeds from './seed/clear_seed.js';
import router from './routes/users/router.js';
import serverless from "serverless-http";

const app = express();
const port = Confidence.Port_DB || 3000;

app.use(express.json());
app.use(cors());

app.get('/',(req , res) => {
    res.status(200).json({
        status : "ok",
        msg : "Bienvenido"
    })
});

app.use('/', router );

const startServer = async () => {
    try {
      await Connection();
      app.listen(port, () => {
        console.log("Servidor UP en puerto", port);
      });
    } catch (err) {
      console.error("❌ Error al conectar a la base de datos:", err.message);
      process.exit(1);
    }
  };
  startServer();

  /* Seeders : =>>> */
  // seed_users(50)
  // clear_seeds()

 export const handler = serverless(app);