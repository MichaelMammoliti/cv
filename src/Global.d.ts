declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.css';
declare module '*.json';
declare module '*.jpg';
declare module '*.mp3';

declare const FIREBASE_EMULATORS: boolean;
declare const NODE_ENV: string;
