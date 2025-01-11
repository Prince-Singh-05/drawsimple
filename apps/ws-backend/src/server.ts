import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 }, () => {
	console.log("WS Server started at port 8080");
});

wss.on("connection", (ws) => {
	ws.on("message", (message) => {
		ws.send("pong");
	});
});
