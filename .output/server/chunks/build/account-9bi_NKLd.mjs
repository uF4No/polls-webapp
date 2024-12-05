import { defineComponent, ref, computed, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useAccount, useBalance } from '@wagmi/vue';
import { useRouter } from 'vue-router';
import { getPublicClient } from '@wagmi/core';
import { n as navigateTo, c as config } from './server.mjs';
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
import '@iconify/vue';
import '@tanstack/vue-query';
import '@wagmi/vue/chains';
import '@wagmi/vue/connectors';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "account",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { address, chainId, status } = useAccount();
    const { data: balance } = useBalance({
      address
    });
    const isContract = ref(false);
    const isChecking = ref(false);
    const checkIfContract = async () => {
      if (!address.value) return;
      isChecking.value = true;
      try {
        const publicClient = getPublicClient(config);
        const code = await publicClient.getCode({
          address: address.value
        });
        isContract.value = code ? code.length > 2 : false;
      } catch (error) {
        console.error("Error checking contract:", error);
      } finally {
        isChecking.value = false;
      }
    };
    const accountType = computed(() => {
      if (!address.value) return "";
      if (isContract.value) {
        return {
          label: "Smart Contract Account",
          description: "This is a smart contract account (has code deployed at this address)",
          class: "text-blue-400"
        };
      }
      return {
        label: "Regular Account",
        description: "This is a regular account (EOA).",
        class: "text-green-400"
      };
    });
    const explorerUrl = computed(() => {
      if (!address.value) return "";
      return `https://sepolia.explorer.zksync.io/address/${address.value}`;
    });
    watch(address, (newAddress) => {
      if (newAddress) {
        checkIfContract();
      } else {
        isContract.value = false;
      }
    });
    if (status.value === "disconnected") {
      navigateTo("/");
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto px-4 py-8" }, _attrs))}><div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50"><h2 class="text-2xl font-bold text-gray-100 mb-6">Account Details</h2><div class="space-y-6"><div class="space-y-2"><label class="text-sm text-gray-400">Account Type</label><div class="p-3 bg-gray-900/50 rounded-lg">`);
      if (isChecking.value) {
        _push(`<div class="text-gray-400"> Checking account type... </div>`);
      } else {
        _push(`<!--[--><div class="flex items-center gap-2"><div class="${ssrRenderClass([accountType.value.class, "font-medium"])}">${ssrInterpolate(accountType.value.label)}</div>`);
        if (isContract.value) {
          _push(`<a${ssrRenderAttr("href", explorerUrl.value)} target="_blank" rel="noopener noreferrer" class="text-sm text-blue-400 hover:text-blue-300 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="text-sm text-gray-400 mt-1">${ssrInterpolate(accountType.value.description)}</div><!--]-->`);
      }
      _push(`</div></div><div class="space-y-2"><label class="text-sm text-gray-400">Address</label><div class="flex items-center space-x-2"><code class="flex-1 block p-3 bg-gray-900/50 rounded-lg font-mono text-gray-200">${ssrInterpolate(unref(address))}</code><button class="p-2 text-gray-400 hover:text-gray-200 transition-colors" title="Copy to clipboard"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></button></div></div><div class="space-y-2"><label class="text-sm text-gray-400">Network</label><div class="p-3 bg-gray-900/50 rounded-lg font-mono text-gray-200"> Chain ID: ${ssrInterpolate(unref(chainId))}</div></div><div class="space-y-2"><label class="text-sm text-gray-400">Balance</label><div class="p-3 bg-gray-900/50 rounded-lg font-mono text-gray-200">${ssrInterpolate(((_a = unref(balance)) == null ? void 0 : _a.formatted) || "0")} ${ssrInterpolate((_b = unref(balance)) == null ? void 0 : _b.symbol)}</div></div></div><div class="mt-8"><button class="flex items-center text-sm text-gray-400 hover:text-gray-200 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Back to Home </button></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=account-9bi_NKLd.mjs.map
