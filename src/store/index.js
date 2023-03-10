import { createStore } from 'vuex'

import controlCenterModule from "./controlCenterModules/index"
import calendarModule from "./calendarModules/index"
import detailInfoModule from "./detailInfoModules/"


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
    controlCenterModule: controlCenterModule,
    calendarModule: calendarModule,
    detailInfoModule: detailInfoModule
  }
})
