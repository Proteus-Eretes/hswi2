import { createSSRApp, createApp, nextTick } from "vue";
import { createNuxtApp, applyPlugins, normalizePlugins } from "#app";
import "#build/css";
import _plugins from "#build/plugins";
import RootComponent from "#build/root-component.mjs";
import AppComponent from "#build/app-component.mjs";
let entry;
const plugins = normalizePlugins(_plugins);
if (process.server) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = createApp(RootComponent);
    vueApp.component("App", AppComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    await applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
if (process.client) {
  if (process.dev && import.meta.webpackHot) {
    import.meta.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? createSSRApp(RootComponent) : createApp(RootComponent);
    vueApp.component("App", AppComponent);
    const nuxt = createNuxtApp({ vueApp });
    await applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    await nuxt.hooks.callHook("app:beforeMount", vueApp);
    nuxt.hooks.hookOnce("page:finish", () => {
      nuxt.isHydrating = false;
    });
    vueApp.mount("#__nuxt");
    await nuxt.hooks.callHook("app:mounted", vueApp);
    await nextTick();
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
export default (ctx) => entry(ctx);
