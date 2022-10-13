import { createStore } from 'vuex'

import controlCenterModule from "./controlCenterModules/index"
import calendarModule from "./calendarModules/index"
import positionDetailModule from "./positionDetailModule/index"


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
    positionDetailModule: positionDetailModule
  }
})
