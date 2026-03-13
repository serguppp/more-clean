import js from "@eslint/js";
import pluginNext from "@next/eslint-plugin-next";
import { globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import simpleimport from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
const config = [
  ...tseslint.configs.recommended,
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  globalIgnores([
    "**/.next/**",
    "**/out/**",
    "**/build/**",
    "**/next-env.d.ts",
    "**/dist/**",
    "**/node_modules/**",
    "**/coverage/**",
  ]),
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
        React: "writable",
      },
    },
  },
  {
    plugins: {
      "react-hooks": pluginReactHooks,
      "@next/next": pluginNext,
      "simple-import-sort": simpleimport,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
  {
    ignores: ["dist/**"],
  },
  eslintConfigPrettier,
];

export default config;
