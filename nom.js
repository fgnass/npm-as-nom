#!/usr/bin/env node

const { join } = require("path");
const { spawn } = require("child_process");

const play = process.platform == "darwin" ? "afplay" : "play";

console.log("🍪 COOKIE!!!");
setTimeout(() => console.log("🍪 OM NOM NOM"), 1650);
setTimeout(() => console.log("🍪 NOM NOM"), 2800);
setTimeout(() => console.log("🍪 OM"), 3500);
setTimeout(() => console.log("🍪 NOMNOMNOM"), 3900);

spawn(play, [join(__dirname, "cookie.mp3")]);

spawn("npm", process.argv.slice(2), { stdio: "inherit" });
