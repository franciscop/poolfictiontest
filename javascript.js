dom['nav a'].on.click = e => {
  dom.section.class.active = false;
  dom['section.' + e.currentTarget.dataset.screen].class.active = true;

  dom['[data-screen]'].class.active = false;
  dom(e.currentTarget).class.active = true;
};
