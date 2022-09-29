import router from "@/router";

const mutations = {
  change(state, targetView) {
    console.log(targetView);
    router.push(`/ControlCenter/DetailInfo`);

    if (
      this.state.appModule.mainRouterViewClasses.includes(
        "main-router-view-hide"
      )
    ) return;

    this.state.appModule.mainRouterViewClasses.push("main-router-view-hide");
    this.state.controlCenterModule.controlCenterClasses.push("detail-info-in");
    setTimeout(() => {
      this.state.controlCenterModule.controlCenterClasses.splice(1, 1);
    }, 500);
  }
}

export default mutations