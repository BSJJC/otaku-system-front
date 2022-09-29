const mutations = {
  mainRouterViewChange() {
    const animateIndexNow = this.state.appModule.transformIndex;
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


    this.state.appModule.transformIndex = index;
    this.state.appModule.mainRouterViewClasses.transiformAnimate = `animate__animated ${randomExiteAnimate}`;

    console.log(this.state.appModule.mainRouterViewClasses.transiformAnimate);

    setTimeout(() => {
      this.state.appModule.mainRouterViewClasses.transiformAnimate = `animate__animated ${randomEntrancesAnimate}`;
    }, 500);

  }
}

export default mutations