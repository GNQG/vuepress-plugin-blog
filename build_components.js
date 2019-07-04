const fs = require("fs");
const path = require("path");

fs.mkdirSync("lib/client/components", { recursive: true });
for (const file of fs.readdirSync("src/client/components")) {
  fs.copyFileSync(
    path.join("src/client/components", file),
    path.join("lib/client/components", file)
  );
}
