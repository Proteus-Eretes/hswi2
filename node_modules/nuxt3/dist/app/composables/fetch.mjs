import { murmurHashV3 } from "murmurhash-es";
import { useAsyncData } from "./asyncData.mjs";
export function useFetch(url, opts = {}) {
  if (!opts.key) {
    const keys = { u: url };
    if (opts.baseURL) {
      keys.b = opts.baseURL;
    }
    if (opts.method && opts.method.toLowerCase() !== "get") {
      keys.m = opts.method.toLowerCase();
    }
    if (opts.params) {
      keys.p = opts.params;
    }
    opts.key = generateKey(keys);
  }
  return useAsyncData(opts.key, () => $fetch(url, opts), opts);
}
export function useLazyFetch(url, opts = {}) {
  return useFetch(url, { ...opts, lazy: true });
}
function generateKey(keys) {
  return "$f" + murmurHashV3(JSON.stringify(keys));
}
