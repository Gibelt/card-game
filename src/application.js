window.application = {
  blocks: {},
  screens: {},
  renderScreen: function (screenName) {
    window.application.screens[screenName]();
  },
  renderBlock: function (blockName, container, result) {
    window.application.blocks[blockName](container, result);
  },
};
