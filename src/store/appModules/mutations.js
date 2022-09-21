const mutations = {
  mainRouterViewChange() {
    let animateIndexNow = this.state.appModule.mainRouterViewTransformIndex;
    const animates = JSON.parse(localStorage.getItem("animates")).entrances;

    let index = Math.floor(Math.random() * animates.length)
    while (index === animateIndexNow) {
      index = Math.floor(Math.random() * animates.length)
    }

    const randomAnimate = animates[index];
    this.state.appModule.mainRouterViewTransformIndex = index;
    this.state.appModule.mainRouterViewTransformAnimate = `animate__animated ${randomAnimate}`;
  }
}

export default mutations