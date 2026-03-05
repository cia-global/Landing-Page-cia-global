export {};

declare global {
  interface Window {
    gtag: (
      command: 'event' | 'config' | 'js' | 'set',
      targetId: string | Date,
      params?: {
        send_to?: string;
        event_callback?: () => void;
        value?: number;
        currency?: string;
        [key: string]: unknown;
      }
    ) => void;
    dataLayer: unknown[];
  }
}