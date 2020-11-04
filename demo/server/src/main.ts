import { Express } from "express";
import { createContext } from "./context/context";
import {
  handleAnswer,
  handleCandidate,
  handleCreate,
  handleJoin,
} from "./handler";

export function start(app: Express) {
  const ctx = createContext();

  app.post("/create", async (req, res) => {
    const roomName = await handleCreate(ctx);
    res.send({ name: roomName });
  });

  app.get("/join", async (req, res) => {
    console.log("join");
    const { roomName } = req.body;
    const [peerId, offer] = await handleJoin(ctx, roomName);
    return res.send({ peerId, offer });
  });

  app.post("/answer", async (req, res) => {
    const { peerId, answer, roomName } = req.body;
    await handleAnswer(ctx, roomName, peerId, answer);
    return res.send({});
  });

  app.post("/candidate", async (req, res) => {
    const { peerId, candidate, roomName } = req.body;
    await handleCandidate(ctx, roomName, peerId, candidate);
    return res.send({});
  });
}
