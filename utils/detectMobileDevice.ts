export const detectMobileDevice = (agent: string) => {
  const mobileRegex = [/Android/i, /iPhone/i];
  return mobileRegex.some((mobile) => agent.match(mobile));
};
