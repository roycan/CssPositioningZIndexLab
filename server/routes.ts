import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";

export function registerRoutes(app: Express): Server {
  // Serve static files from the public directory
  app.use(express.static('public'));

  // Handle 404 errors
  app.use((req, res) => {
    res.status(404).sendFile(path.join(process.cwd(), 'public', 'index.html'));
  });

  const httpServer = createServer(app);
  return httpServer;
}
