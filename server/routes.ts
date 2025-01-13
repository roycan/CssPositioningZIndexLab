import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import express from "express";

export function registerRoutes(app: Express): Server {
  // Serve static files from the client directory
  app.use(express.static(path.join(process.cwd(), "client")));

  // Serve index.html for all routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "client", "index.html"));
  });

  const httpServer = createServer(app);
  return httpServer;
}