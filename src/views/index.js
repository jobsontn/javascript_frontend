$(() => {
  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
    afterRender() {
      // playing the video
      $('video').get(0).play();
    },
  });
});
