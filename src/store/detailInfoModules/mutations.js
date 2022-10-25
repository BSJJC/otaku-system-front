const mutations = {
  fetchInfo() {
    const selectedManagerProject = JSON.parse(
      sessionStorage.getItem("selectedManagerProject")
    );
    const selectedPosition = JSON.parse(
      sessionStorage.getItem("selectedPosition")
    ).trim();

    const info = (selectedManagerProject[selectedPosition]);

    this.state.detailInfoModule.info = info;
  },

  reRender(context, newData) {
    console.log(newData);
    console.log(this.state.detailInfoModule.info);
  }
}

export default mutations