export const api = {
  baseURL: import.meta.env.VITE_APP_API_BASE_URL || window.location.origin,
  version: import.meta.env.VITE_APP_API_VERSION || 'v1',
}
