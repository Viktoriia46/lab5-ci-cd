<<<<<<< HEAD
import config from "eslint-config-standard";
import { defineConfig } from "@eslint/config-helpers";


export default defineConfig([
  config,
]);
=======
import { defineConfig } from "eslint/config";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import globals from "globals";


export default defineConfig({
 files: ["**/*.{ts,tsx,js,jsx}"],
 languageOptions: {
   parser: tsParser,
   parserOptions: {
     ecmaVersion: "latest",
     sourceType: "module",
   },
   globals: {
     ...globals.browser,
     ...globals.node,
   },
 },
 plugins: {
   "@typescript-eslint": tseslint,
   react: pluginReact,
 },
 settings: {
   react: {
     version: "detect",
   },
 },
 rules: {
   "react/react-in-jsx-scope": "off",
   "no-console": "warn",
   "no-unused-vars": "off",
   "@typescript-eslint/no-unused-vars": "warn",
 }
});
>>>>>>> c1613a4f49cc9aeb884cab36cd7b660308d3db30
