import { useSyncExternalStore } from "react";

// Cleanup
const cleanup = () => {
  /* empty */
};

// No cleanup needed - never subscribes
const subscribe = () => () => cleanup;

// Server snapshot (during SSR)
const getServerSnapshot = () => false;

// CLient snapshot
const getClientSnapshot = () => true;

/**
 * A hook that returns true only on the client after hydration.
 * Uses `useSyncExternalStore` hook for optimal performance.
 * @returns Boolean
 */
export const useHydrated = () =>
  useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
