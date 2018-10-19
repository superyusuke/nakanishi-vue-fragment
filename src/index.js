import directive from './directive'
import VFragment from './component'
import ssr       from './ssr'

export default {
  ssr,
  directive,
  VFragment,
  Plugin: {
    install: function(Vue) {
      Vue.directive('fragment', directive)
      Vue.component('v-fragment', component)
    }
  }
}
