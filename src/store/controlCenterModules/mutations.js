import router from "@/router";
import { useStore } from "vuex";

const mutations = {
 change() {

  const store = useStore();

  router.push("/ControlCenter/DetailInfo");
  if (
   store.state.appModule.mainRouterViewClasses.includes(
    "main-router-view-hide"
   )
  ) {
   return;
  }
  store.state.appModule.mainRouterViewClasses.push("main-router-view-hide");
  store.state.controlCenterModule.controlCenterClasses.push("detail-info-in");
  setTimeout(() => {
   store.state.controlCenterModule.controlCenterClasses.splice(1, 1);
  }, 500);
 }
}

export default mutations