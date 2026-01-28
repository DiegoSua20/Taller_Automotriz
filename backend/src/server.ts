import express from "express";
import { env } from "./config/env";

const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "taller_automotriz_backend",
  });
});

app.listen(env.PORT, () => {
  console.log(`🚀 Backend running on port ${env.PORT}`);
});
