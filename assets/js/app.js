(function() {

  $(function() {
    var jara;
    jara = new Jarallax();
    jara.addAnimation('#cloud1, #dark', [
      {
        progress: '0%',
        top: '100%'
      }, {
        progress: '100%',
        top: '0%'
      }
    ]);
    jara.addAnimation('#cloud2', [
      {
        progress: '0%',
        top: '90%'
      }, {
        progress: '100%',
        top: '10%'
      }
    ]);
    jara.addAnimation('#cloud3', [
      {
        progress: '0%',
        top: '70%'
      }, {
        progress: '100%',
        top: '30%'
      }
    ]);
    return jara.addAnimation('#cloud4', [
      {
        progress: '0%',
        top: '55%'
      }, {
        progress: '100%',
        top: '45%'
      }
    ]);
  });

}).call(this);
