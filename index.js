import express from 'express'
import cors from "cors"
import Connection from './src/config/db/db.js';
import Confidence from './src/config/dotenv/dotenv.js';
import seed_users from './src/seed/users_seed.js';
import clear_seeds from './src/seed/clear_seed.js';
import router from './src/routes/users/router.js';

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
      // app.listen(port, () => {
      //   console.log("Servidor UP en puerto", port);
      // });
    } catch (err) {
      console.error("❌ Error al conectar a la base de datos:", err.message);
      process.exit(1);
    }
  };
  startServer();

  /* Seeders : =>>> */
  // seed_users(50)
  // clear_seeds()

export default app;