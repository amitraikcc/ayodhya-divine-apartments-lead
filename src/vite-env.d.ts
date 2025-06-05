
/// <reference types="vite/client" />

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'consent' | 'event',
      targetId: string,
      config?: any
    ) => void;
  }
}
