const mutations = {
  refetchInfo(data) {
    const selectedManagerProject = JSON.parse(
      sessionStorage.getItem("selectedManagerProject")
    );
    const selectedPosition = sessionStorage.getItem("selectedPosition");

    const info = selectedManagerProject[JSON.parse(selectedPosition).trim()];

    info.workProgress = data.info.workProgress
    this.state.detailInfoModule.info = info;
  }
}

export default mutations