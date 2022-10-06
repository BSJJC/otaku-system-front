import { createStore } from 'vuex'

import appModule from "./appModules/index"
import controlCenterModule from "./controlCenterModules/index"
import calendarModule from "./calendarModules/index"


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
    controlCenterModule: controlCenterModule,
    calendarModule: calendarModule
  }
})
