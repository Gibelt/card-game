window.application = {
  blocks: {},
  screens: {},
  renderScreen: function (screenName: string) {
    window.application.screens[screenName]();
  },
  renderBlock: function (blockName: string, container: Element, result?: string) {
    window.application.blocks[blockName](container, result);
  },
};

window.application.timerCounterSec = 0;
window.application.timerCounterMin = 0;
window.application.timerResult = "";
window.application.timer;