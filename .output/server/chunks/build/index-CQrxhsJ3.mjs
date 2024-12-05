import { _ as __nuxt_component_0 } from './nuxt-link-CEttZJeR.mjs';
import { _ as __nuxt_component_0$1 } from './index-C2bukaMp.mjs';
import { defineComponent, withAsyncContext, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { useAccount } from '@wagmi/vue';
import { u as usePollContract } from './usePollContract-BLDtBCq_.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import './server.mjs';
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
import '@iconify/utils/lib/css/icon';
import 'viem';
import '@wagmi/core/chains';
import '@wagmi/core';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { address, status } = useAccount();
    [__temp, __restore] = withAsyncContext(() => usePollContract()), __temp = await __temp, __restore();
    const polls = ref([]);
    const loading = ref(true);
    const formatDeadline = (deadline) => {
      const date = new Date(Number(deadline) * 1e3);
      return date.toLocaleString();
    };
    const isActive = (deadline) => {
      return Date.now() < Number(deadline) * 1e3;
    };
    const formatSlug = (id) => `/poll/${id}`;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-12" }, _attrs))}><header class="text-center"><h2 class="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"> Welcome to ZK Polls </h2><p class="mt-4 text-lg text-gray-400">Create and participate in decentralized polls</p>`);
      if (unref(status) === "connected") {
        _push(`<div class="mt-6">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/create",
          class: "inline-flex items-center gap-2 px-6 py-3 font-medium bg-primary-500 text-white rounded-lg shadow-lg shadow-primary-500/20 hover:bg-primary-600 hover:shadow-primary-600/20 transition-all active:transform active:scale-95"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "heroicons:plus-circle",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(` Create new Poll `);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "heroicons:plus-circle",
                  class: "w-5 h-5"
                }),
                createTextVNode(" Create new Poll ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
      if (loading.value) {
        _push(`<div class="flex justify-center"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div></div>`);
      } else if (!polls.value.length) {
        _push(`<div class="text-center py-12"><div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto"><svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg><h3 class="mt-4 text-xl font-medium text-gray-300">No open polls yet</h3><p class="mt-2 text-gray-400">Be the first one to create a poll!</p>`);
        if (unref(status) === "connected") {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/create",
            class: "inline-flex items-center gap-2 px-6 py-3 font-medium bg-primary-500 text-white rounded-lg shadow-lg shadow-primary-500/20 hover:bg-primary-600 hover:shadow-primary-600/20 transition-all active:transform active:scale-95"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "heroicons:plus-circle",
                  class: "w-5 h-5"
                }, null, _parent2, _scopeId));
                _push2(` Create new Poll `);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "heroicons:plus-circle",
                    class: "w-5 h-5"
                  }),
                  createTextVNode(" Create new Poll ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        ssrRenderList(polls.value, (poll) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: String(poll.id),
            to: unref(status) === "connected" ? formatSlug(poll.id) : "#",
            class: [
              "block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 transition-all",
              unref(status) === "connected" ? "hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/5" : "cursor-not-allowed opacity-80"
            ],
            "aria-disabled": unref(status) !== "connected"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="space-y-4"${_scopeId}><h3 class="text-xl font-semibold text-gray-100"${_scopeId}>${ssrInterpolate(poll.title)}</h3><div class="${ssrRenderClass([
                  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                  isActive(poll.deadline) ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                ])}"${_scopeId}>${ssrInterpolate(isActive(poll.deadline) ? "Active" : "Ended")}</div><div class="flex justify-between text-sm text-gray-400"${_scopeId}><span${_scopeId}>Total Votes: ${ssrInterpolate((poll.optionOneVotes + poll.optionTwoVotes).toString())}</span><span${_scopeId}>Ends: ${ssrInterpolate(formatDeadline(poll.deadline))}</span></div><div class="w-full bg-gray-700 rounded-full h-2.5"${_scopeId}><div class="bg-primary-500 h-2.5 rounded-full" style="${ssrRenderStyle({
                  width: `${Number(poll.optionOneVotes) / (Number(poll.optionOneVotes) + Number(poll.optionTwoVotes)) * 100 || 0}%`
                })}"${_scopeId}></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "space-y-4" }, [
                    createVNode("h3", { class: "text-xl font-semibold text-gray-100" }, toDisplayString(poll.title), 1),
                    createVNode("div", {
                      class: [
                        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                        isActive(poll.deadline) ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                      ]
                    }, toDisplayString(isActive(poll.deadline) ? "Active" : "Ended"), 3),
                    createVNode("div", { class: "flex justify-between text-sm text-gray-400" }, [
                      createVNode("span", null, "Total Votes: " + toDisplayString((poll.optionOneVotes + poll.optionTwoVotes).toString()), 1),
                      createVNode("span", null, "Ends: " + toDisplayString(formatDeadline(poll.deadline)), 1)
                    ]),
                    createVNode("div", { class: "w-full bg-gray-700 rounded-full h-2.5" }, [
                      createVNode("div", {
                        class: "bg-primary-500 h-2.5 rounded-full",
                        style: {
                          width: `${Number(poll.optionOneVotes) / (Number(poll.optionOneVotes) + Number(poll.optionTwoVotes)) * 100 || 0}%`
                        }
                      }, null, 4)
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CQrxhsJ3.mjs.map
