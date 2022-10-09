const mutations = {
  setWeekOfSelectedDay(state, path) {
    this.state.calendarModule.weekOfSelectedDay = path;
  },
}

export default mutations