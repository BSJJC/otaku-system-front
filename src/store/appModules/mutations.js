const mutations = {
  mainRouterViewChange() {
    const animateIndexNow = this.state.appModule.mainRouterViewTransformIndex;
    const animates = {
      entrances: JSON.parse(localStorage.getItem("animates")).entrances,
      exits: JSON.parse(localStorage.getItem("animates")).exits
    }

    let index = Math.floor(Math.random() * animates.entrances.length)
    while (index === animateIndexNow) {
      index = Math.floor(Math.random() * animates.entrances.length)
    }

    const randomEntrancesAnimate = animates.entrances[index];
    const randomExiteAnimate = animates.exits[index];

    this.state.appModule.mainRouterViewTransformIndex = index;
    this.state.appModule.mainRouterViewTransformAnimate = `animate__animated ${randomExiteAnimate}`;

    setTimeout(() => {
      this.state.appModule.mainRouterViewTransformAnimate = `animate__animated ${randomEntrancesAnimate}`;
    }, 500);

  }
}

export default mutations