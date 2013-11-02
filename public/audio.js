// bucket 20.4335 // A440
// bucket 20.4835 // A441
// bucket 20.5264 // A442
// bucket 20.5728 // A443
// bucket 20.6193 // A444
// bucket 20.6657 // A445

var contextClass = (window.AudioContext || 
  window.webkitAudioContext || 
  window.mozAudioContext || 
  window.oAudioContext || 
  window.msAudioContext);
if (contextClass) {
  var context = new contextClass();
  console.log("success!")
} else {
  console.log("web audio is not enabled, sorry.");
};

var findMaxWithIndex = function(array) {
  var max = Math.max.apply(Math, array);
  var index = Array.prototype.indexOf.call(array,max);
  return [[index-1,array[index-1]],[index,max],[index+1,array[index+1]]]
};

var osc = context.createOscillator();

osc.frequency.value=525;

osc.type=0;
osc.start(0);

var getNote = function(freq) {
  switch(freq) {
    case (3.5972 < freq <= 3.6846):
      return 82
    case (3.6846 < freq <= 3.7282):
      return 83
    case (3.8151):
      return 84
    case (3.9018):
      return 85
    case (3.9885):
      return 86
    case (4.0751):
      return 87
    case (4.1617):
      return 88
    case (10.4057):
      return 220
    case (10.4935):
      return 221
    case (20.8211):
      return 440
    default:
      return "not detected"
  }
};

var gotStream = function(stream) {

  var process = function(){
    setInterval(function(){
      analyser.getFloatFrequencyData(FFTData);
      var bucket = findMaxWithIndex(FFTData);
      var lowDifference = ((bucket[1][1])-(bucket[0][1]));
      var highDifference = ((bucket[1][1])-(bucket[2][1]));
      var shift = (lowDifference < highDifference ? -(highDifference - lowDifference) : (lowDifference - highDifference));
      $('body').html([bucket[0][0],-lowDifference] + "<br>" + bucket[1][0] + "<br>" + [bucket[2][0],-highDifference] + "<br>" + (bucket[1][0] + ((shift/2)/10)) + "<br>" + Math.round(((bucket[1][0] + ((shift/2)/10)))/1024*22050) + " Hz" + "<br>" + osc.frequency.value/22050*1024);
    },20);
  };

  var analyser = context.createAnalyser();
  analyser.fftSize = 2048;
  analyser.smoothingTimeConstant = 0.9;
  var FFTData = new Float32Array(analyser.frequencyBinCount);
  FFTData.indexOf = Array.prototype.indexOf;
  var microphone = context.createMediaStreamSource(stream);

  // var filter2 = context.createBiquadFilter();
  // filter.type = filter.PEAKING;
  // filter.frequency.value = 100;
  // filter.connect(gainNode);
  // gainNode.connect(context.destination);
  osc.connect(context.destination);

  $('body').mousemove(function(event){
    osc.frequency.value = event.pageX;
  });

  var hiPass = context.createBiquadFilter();
  var loPass = context.createBiquadFilter();
  var gainNode = context.createGain();
  gainNode.gain.value = 0.3;
  hiPass.type = hiPass.HIGHPASS;
  hiPass.frequency.value = 80;
  loPass.type = loPass.LOWPASS;
  loPass.frequency.value = 1200;
  microphone.connect(hiPass);
  hiPass.connect(loPass);
  loPass.connect(analyser);
  analyser.connect(gainNode);
  gainNode.connect(context.destination);
  process();
};

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
navigator.getUserMedia( {audio:true}, gotStream );

var bucket = function(frequency) {
  var nyquist = 44100/2;
  var index = (frequency/nyquist * 1024);
  return [index,Math.round(index)];
};

// 0.0939 110
// 0.1889 220
// 0.38754 440
// 0.115something 880
// 0.2326 1760