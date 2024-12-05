import { u as useAsyncData, _ as __nuxt_component_0 } from './index-C2bukaMp.mjs';
import { defineComponent, withAsyncContext, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
import { useAccount } from '@wagmi/vue';
import { f as useRoute } from './server.mjs';
import { u as usePollContract } from './usePollContract-BLDtBCq_.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
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
import '@tanstack/vue-query';
import '@wagmi/vue/chains';
import '@wagmi/vue/connectors';
import 'viem';
import '@wagmi/core/chains';
import '@wagmi/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useAccount();
    const pollContract = ([__temp, __restore] = withAsyncContext(() => usePollContract()), __temp = await __temp, __restore(), __temp);
    const { data: poll, pending } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `poll-${route.params.id}`,
      async () => {
        const pollData = await pollContract.getPoll(BigInt(route.params.id));
        return {
          id: pollData[0],
          title: pollData[2],
          deadline: pollData[7],
          owner: pollData[1],
          optionOneVotes: pollData[5],
          optionTwoVotes: pollData[6],
          optionOne: pollData[3],
          optionTwo: pollData[4]
        };
      }
    )), __temp = await __temp, __restore(), __temp);
    const loading = ref(false);
    const error = ref("");
    const formatDeadline = (deadline) => {
      const date = new Date(Number(deadline) * 1e3);
      return date.toLocaleString();
    };
    const isActive = (deadline) => {
      return Date.now() < Number(deadline) * 1e3;
    };
    const totalVotes = computed(() => {
      if (!poll.value) return 0n;
      return poll.value.optionOneVotes + poll.value.optionTwoVotes;
    });
    const getVotePercentage = (votes) => {
      if (!poll.value || totalVotes.value === 0n) return 0;
      return Number(votes * 100n / totalVotes.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto space-y-8" }, _attrs))}>`);
      if (unref(pending)) {
        _push(`<div class="flex justify-center"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div></div>`);
      } else if (unref(poll)) {
        _push(`<div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"><h1 class="text-3xl font-bold text-gray-100">${ssrInterpolate(unref(poll).title)}</h1><div class="mt-4 space-y-6"><div class="${ssrRenderClass([
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
          isActive(unref(poll).deadline) ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
        ])}">${ssrInterpolate(isActive(unref(poll).deadline) ? "Active" : "Ended")}</div><div class="text-sm text-gray-400 space-y-2"><p>Created by: ${ssrInterpolate(unref(poll).owner)}</p><p>Ends: ${ssrInterpolate(formatDeadline(unref(poll).deadline))}</p><p>Total Votes: ${ssrInterpolate(unref(totalVotes).toString())}</p></div><div class="space-y-4"><!--[-->`);
        ssrRenderList([1, 2], (option, index) => {
          _push(`<div class="flex gap-4 items-center"><div class="flex-1 p-4 bg-gray-700/50 rounded-lg"><div class="flex justify-between items-center"><span>${ssrInterpolate(index === 0 ? unref(poll).optionOne : unref(poll).optionTwo)}</span><span>${ssrInterpolate(getVotePercentage(index === 0 ? unref(poll).optionOneVotes : unref(poll).optionTwoVotes))}%</span></div><div class="mt-2 w-full bg-gray-700 rounded-full h-2.5"><div class="bg-primary-500 h-2.5 rounded-full transition-all" style="${ssrRenderStyle({ width: `${getVotePercentage(index === 0 ? unref(poll).optionOneVotes : unref(poll).optionTwoVotes)}%` })}"></div></div></div><button${ssrIncludeBooleanAttr(!isActive(unref(poll).deadline) || unref(loading)) ? " disabled" : ""} class="h-full aspect-square p-4 bg-gray-700/50 rounded-lg hover:bg-primary-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "material-symbols:how-to-vote",
            class: ["text-xl text-primary-500", { "animate-spin": unref(loading) }]
          }, null, _parent));
          _push(`</button></div>`);
        });
        _push(`<!--]--></div>`);
        if (unref(error)) {
          _push(`<p class="text-red-400 text-sm">${ssrInterpolate(unref(error))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="text-center text-gray-400"> Poll not found </div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/poll/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-eGYhCS-B.mjs.map
