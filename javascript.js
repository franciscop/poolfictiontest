const screen = name => new Promise((resolve) => {

  dom.section.class.active = false;
  dom['section.' + name].class.active = true;

  dom['[data-screen]'].class.active = false;
  dom['[data-screen="' + name + '"]'].class.active = true;

  window.scrollTo(0, 0);

  resolve();
});

dom['nav a'].on.click = async e => {
  await screen(e.currentTarget.dataset.screen);

};

dom.class.dropimage.on.change = e => {
  var inputfile = e.currentTarget, reader = new FileReader();
  reader.onloadend = e => {
    inputfile.style['background-image'] = 'url('+reader.result+')';
  };
  reader.readAsDataURL(e.target.files[0]);
};

fetch = () => Promise.resolve({ json: () => ({
  foo: 'bar'
}) });

dom.class.offer.handle.click = async e => {
  const id = e.currentTarget.id;
  const data = {
    id,
    img: dom[`#${id} img`].src[0],
    title: dom[`#${id} h3`].html[0],
    location: dom[`#${id} .location`].html[0]
  };
  console.log(data);
  const [extra] = await Promise.all([
    fetch(`/place/${data.id}`).then(res => res.json()),
    screen('place')
  ]).catch(err => alert('Ha habido un error! Lo arreglaremos lo antes posible'));
  dom['.place img'].src = data.img;
  dom['.place h2'].html = data.title;
  dom['.place p'].html = data.location;
};


dom['.filter .button'].handle.click = e => {
  alert('Editar este campo');
};
