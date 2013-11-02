// // var contextClass = (window.AudioContext || 
// //   window.webkitAudioContext || 
// //   window.mozAudioContext || 
// //   window.oAudioContext || 
// //   window.msAudioContext);
// // if (contextClass) {
// //   var context = new contextClass();
// // } else {
// //   console.log("web audio is not enabled, sorry.")
// // };

// // var source = context.createBufferSource();
// // // var gain = context.createGain();
// // source.connect(context.destination);


// // window.addEventListener('load', onLoad, false);

// // function onLoad() {
// //   var audio = new Audio();
// //   source = context.createMediaElementSource(audio);
// //   var filter = context.createBiquadFilter();
// //   filter.frequency.value = 500;
// //   filter.type = filter.NOTCH;
// //   filter.Q = 5000;
// //   source.connect(filter);
// //   filter.connect(context.destination);
// //   audio.src = 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3';
// //   audio.play();
// // }

// function gotStream(stream) {
//     // window.AudioContext = window.AudioContext || window.webkitAudioContext;
//     // var audioContext = new AudioContext();
//     var contextClass = (window.AudioContext || 
//       window.webkitAudioContext || 
//       window.mozAudioContext || 
//       window.oAudioContext || 
//       window.msAudioContext);
//     if (contextClass) {
//       console.log("success!")
//       var context = new contextClass();
//     } else {
//       console.log("web audio is not enabled, sorry.")
//     };

//     // Create an AudioNode from the stream.
//     // var input = context.createMediaStreamSource( stream );

//     // var filter = context.createBiquadFilter();
//     // input.connect(filter);
//     // filter.type = "bandpass";
//     // filter.frequency.value = 1000;

//     // filter.connect( context.destination );
// }

// navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
// navigator.getUserMedia( {audio:false}, gotStream );



// // function getLiveInput() {
// //   // Only get the audio stream.
// //   navigator.webkitGetUserMedia({audio: true}, onStream, onStreamError);
// // };

// // function onStream(stream) {
// //   // Wrap a MediaStreamSourceNode around the live input stream.
// //   var input = context.createMediaStreamSource(stream);
// //   // Connect the input to a filter.
// //   var filter = context.createBiquadFilter();
// //   filter.frequency.value = 60.0;
// //   filter.type = filter.NOTCH;
// //   filter.Q = 10.0;

// //   var analyser = context.createAnalyser();

// //   // Connect graph.
// //   input.connect(filter);
// //   filter.connect(analyser);

// //   // Set up an animation.
// //   requestAnimationFrame(render);
// // };

// // function onStreamError(e) {
// //   console.error(e);
// // };

// // function render() {
// //   // Visualize the live audio input.
// //   requestAnimationFrame(render);
// // };