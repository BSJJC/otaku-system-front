const mutations = {
  fetchInfo(context, data) {
    const selectedManagerProject = JSON.parse(
      sessionStorage.getItem("selectedManagerProject")
    );
    const selectedPosition = JSON.parse(
      sessionStorage.getItem("selectedPosition")
    ).trim();

    const info = (selectedManagerProject[selectedPosition]);

    this.state.detailInfoModule.info = info;

    console.log(data);

    setTimeout(() => {
      console.log("clear work progress");
      this.state.detailInfoModule.info.workProgress = []
    }, 1000);
  }
}

export default mutations