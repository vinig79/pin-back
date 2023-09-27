import { Router } from "express";
import path from 'path';
import url from 'url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const router = Router();


router.get("/", (req, res) => {
  res.json({server:__dirname});
});

export default router;