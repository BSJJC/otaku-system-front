const mutations = {
  setSelectedDayArrange(state, arrangeObj) {
    arrangeObj
      ? this.state.calendarModule.selectedDayArrange = arrangeObj
      : this.state.calendarModule.selectedDayArrange =
      [
        {
          timestamp: "20010803",
          placement: "top",
          card: {
            title: "nothing to do!",
            info: "slack off!",
          },
        }
      ]

  }
}

export default mutations