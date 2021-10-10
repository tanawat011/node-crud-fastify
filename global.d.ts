declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      APP_NAME: string
      NODE_ENV: string
      NODE_PORT: string
      LOG_LEVEL: string
    }
  }
}

export {}
