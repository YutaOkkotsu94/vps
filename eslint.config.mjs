import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

//règles react-hooks pour corriger tôt les bugs les plus graves, activées grâce a next/core-web-vitals !
const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
