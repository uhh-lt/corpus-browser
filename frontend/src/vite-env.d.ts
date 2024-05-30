/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ELASTICSEARCH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}