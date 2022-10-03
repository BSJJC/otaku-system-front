import router from "@/router";


const mutations = {
  change() {
    if (router.currentRoute._value.fullPath == "/ControlCenter/DetailInfo") {
      setTimeout(() => {
        router.back()
      }, 500);
    }
    else {
      router.push("/ControlCenter/DetailInfo")
    }
    this.state.controlCenterModule.controlCenterShow = !this.state.controlCenterModule.controlCenterShow
  }
}

export default mutations;