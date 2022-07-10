var handler = document.querySelector('.dragbar');
var wrapper = handler.closest('.container');
var boxA = wrapper.querySelector('.child');
var isHandlerDragging = false;

document.addEventListener('mousedown', function(e) {
  // If mousedown event is fired from .handler, toggle flag to true
  if (e.target === handler) {
    isHandlerDragging = true;
  }
  $handler.toggleClass('darken');
});

document.addEventListener('mousemove', function(e) {
  // Don't do anything if dragging flag is false
  if (!isHandlerDragging) {
    return false;
  }
  var containerOffsetLeft = wrapper.offsetLeft;
  var pointerRelativeXpos = e.clientX - containerOffsetLeft;
  var boxAminWidth = 60;
  boxA.style.width = (Math.max(boxAminWidth, pointerRelativeXpos - 8)) + 'px';
  boxA.style.flexGrow = 0;
});

document.addEventListener('mouseup', function(e) {
  // Turn off dragging flag when user mouse is up
  isHandlerDragging = false;
  $handler.toggleClass('darken');
});


CodeMirror(document.querySelector('#codepane'), {
    lineNumbers: true,
    tabSize: 2,
    value: 'System.out.print("Hello World");\nint fuck = 0;',
    mode: 'text/x-java'
});