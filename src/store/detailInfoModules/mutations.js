const mutations = {
  fetchInfo() {
    const selectedManagerProject = JSON.parse(
      sessionStorage.getItem("selectedManagerProject")
    );
    const selectedPosition = JSON.parse(
      sessionStorage.getItem("selectedPosition")
    ).trim();

    const info = selectedManagerProject[selectedPosition];

    this.state.detailInfoModule.info = info;
  },

  reRenderInfo(context, newData) {
    this.state.detailInfoModule.info.workProgress = newData.workProgress
  }
}

export default mutations