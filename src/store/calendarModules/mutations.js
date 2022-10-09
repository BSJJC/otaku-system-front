const mutations = {
  setWeekOfSelectedDay(state, path) {
    this.state.calendarModule.weekOfSelectedDay = path;
  },
  setDayOfSelectedDay(state, indexes) {
    this.state.calendarModule.dayOfSelectedDay = indexes
  }
}

export default mutations