console.log("Database URL:", process.env.DATABASE_URL);
console.log("Debug mode:", process.env.DEBUG);

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("App is running");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});