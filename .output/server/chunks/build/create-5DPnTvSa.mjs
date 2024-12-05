import { defineComponent, ref, withAsyncContext, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { useAccount, useTransaction } from '@wagmi/vue';
import { n as navigateTo } from './server.mjs';
import { u as usePollContract } from './usePollContract-BLDtBCq_.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@tanstack/vue-query';
import '@wagmi/vue/chains';
import '@wagmi/vue/connectors';
import 'viem';
import '@wagmi/core/chains';
import '@wagmi/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { address, status } = useAccount();
    useTransaction();
    const title = ref("");
    const optionOne = ref("");
    const optionTwo = ref("");
    const duration = ref(60);
    const isSubmitting = ref(false);
    const error = ref(null);
    if (status.value === "disconnected") {
      navigateTo("/");
    }
    [__temp, __restore] = withAsyncContext(() => usePollContract()), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto p-4 space-y-8" }, _attrs))}><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"><h1 class="text-xl font-bold mb-6">Create New Poll</h1><form class="space-y-6"><div class="space-y-2"><label class="block text-sm font-medium text-gray-200"> Poll Title <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", title.value)} type="text" placeholder="What&#39;s your question?"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} required maxlength="100" class="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"></div><div class="space-y-2"><label class="block text-sm font-medium text-gray-200"> Option 1 <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", optionOne.value)} type="text" placeholder="First option"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} required maxlength="50" class="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"></div><div class="space-y-2"><label class="block text-sm font-medium text-gray-200"> Option 2 <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", optionTwo.value)} type="text" placeholder="Second option"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} required maxlength="50" class="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"></div><div class="space-y-2"><label class="block text-sm font-medium text-gray-200"> Duration (minutes) <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", duration.value)} type="number"${ssrRenderAttr("min", 1)}${ssrRenderAttr("max", 10080)}${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} required class="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"></div>`);
      if (error.value) {
        _push(`<div class="text-red-500 text-sm mt-2">${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-end gap-4"><button type="button"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="px-4 py-2 rounded-lg text-gray-300 hover:text-white bg-gray-700/50 hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> Cancel </button><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">`);
      if (isSubmitting.value) {
        _push(`<span class="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white"></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(isSubmitting.value ? "Creating..." : "Create Poll")}</button></div></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-5DPnTvSa.mjs.map
