dom['nav a'].on.click = e => {
  dom.section.class.active = false;
  dom['section.' + e.currentTarget.dataset.screen].class.active = true;

  dom['[data-screen]'].class.active = false;
  dom(e.currentTarget).class.active = true;
};

dom.class.dropimage.on.change = e => {
  var inputfile = e.currentTarget, reader = new FileReader();
  reader.onloadend = e => {
    inputfile.style['background-image'] = 'url('+reader.result+')';
  };
  reader.readAsDataURL(e.target.files[0]);
};
