import { createStore } from 'vuex'
import appModule from "./appModules/index"
import controlCenterModule from "./controlCenterModules/index"


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    appModule: appModule,
    controlCenterModule: controlCenterModule
  }
})
