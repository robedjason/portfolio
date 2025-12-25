import { execSync } from "node:child_process";
import { mkdirSync, readdirSync } from "node:fs";
import path from "node:path";

const typesDir = "app/types"
const outDir = "public/static/data/schemas";
mkdirSync(outDir, { recursive: true });

const files = readdirSync(typesDir)
    .filter(f => f.endsWith(".ts") && f != 'root.ts');


for (const file of files) {
  const baseName = path.basename(file, ".ts");

  // convention: experience.ts → Experience
  const typeName = baseName
    .split("-")
    .map(bne => bne.charAt(0).toUpperCase() + bne.slice(1))
    .join("");

  const outFile = `${outDir}/${baseName}.schema.json`;

  const cmd =
    `npx ts-json-schema-generator ` +
    `--path ${typesDir}/${file} ` +
    `--type "${typeName}" ` +
    `--out ${outFile}`;

  console.log(`✔ Generating ${outFile} from ${typeName}`);
  execSync(cmd, { stdio: "inherit" });
}