import router from "@/router";


const mutations = {
  change() {
    // router.currentRoute._value.fullPath == "/ControlCenter/DetailInfo"
    //   ? router.back()
    //   : router.push("DetailInfo")
    router.push("DetailInfo")
    this.state.controlCenterModule.controlCenterShow = !this.state.controlCenterModule.controlCenterShow
  }
}

export default mutations;