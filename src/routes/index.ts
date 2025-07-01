// src/routes/index.ts (o routes.ts)

import { Elysia } from "elysia";

// Importaciones ordenadas alfabéticamente

import { healthRoutes } from "./health";

export const routes = new Elysia().use(healthRoutes);
