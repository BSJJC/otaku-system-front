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
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@");

    console.log(context);

    data
      ? console.log(1)
      : console.log(2);
  }
}

export default mutations