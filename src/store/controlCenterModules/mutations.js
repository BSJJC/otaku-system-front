// import router from "@/router";

const mutations = {
  change() {
    // router.push(`/ControlCenter/DetailInfo`);

    this.state.controlCenterShow = !this.state.controlCenterShow;
    console.log(this.state.controlCenterShow);
  }
}

export default mutations;