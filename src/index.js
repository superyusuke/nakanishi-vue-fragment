import directive from './directive'
import VFragment from './component'
import ssr       from './ssr'

export { ssr }
export { directive }
export { VFragment }
export const Plugin = { install: function(Vue) {
    Vue.directive('fragment', directive)
    Vue.component('v-fragment', component)
  }}
