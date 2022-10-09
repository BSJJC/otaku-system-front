import { createStore } from 'vuex'

import appModule from "./appModules/index"
import controlCenterModule from "./controlCenterModules/index"
import calendarModule from "./calendarModules/index"
import positionDetail from "./positionDetailModule/index"


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
    calendarModule: calendarModule,
    positionDetail: positionDetail
  }
})
