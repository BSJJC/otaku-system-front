const mutations = {
  setSelectedDayArrange(state, arrangeObj) {

    arrangeObj.card
      ? this.state.calendarModule.selectedDayArrange = arrangeObj
      : this.state.calendarModule.selectedDayArrange =
      [
        {
          timestamp: arrangeObj[0].timestamp,
          placement: arrangeObj[0].placement,
          title: "nothing to do!",
          info: Math.random().toFixed(2),
        }
      ]

  }
}

export default mutations