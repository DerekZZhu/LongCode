// JS Code to Move bar around
var handler = document.querySelector('.dragbar');
var wrapper = handler.closest('.container');
var boxA = wrapper.querySelector('.child');
var isHandlerDragging = false;

$(document).mousedown(function(e) {
  // If mousedown event is fired from .handler, toggle flag to true
  if (e.target === handler) {
    isHandlerDragging = true;
    $('.dragbar').toggleClass('darken')
  }
});

$(document).mousemove(function(e) {
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

$(document).mouseup(function() {
  // Turn off dragging flag when user mouse is up
  isHandlerDragging = false;
  $('.dragbar').toggleClass('darken')
});

// Codemirror code
var editor = CodeMirror(document.querySelector('#codepane'), {
    lineNumbers: true,
    matchBrackets: true,
    tabSize: 3,
    value: 'class Solution {\n   public static void main(String[] args) {\n\n   }\n}\n',
    mode:'text/x-java'
});

function look(data) {
  console.log(data);
  console.log(data.run.stdout);
  console.log(data.run.stderr);
}

// Code Execution
function execute() {
  text = editor.getValue();
  $.post(
    url='https://emkc.org/api/v2/piston/execute',
    data= {
      language: 'java',
      version: '15.0.2',
      files: [
        {
          name: 'solution.java',
          content: text
        }
      ],
      stdin:"",
      compile_timeout: 10000,
      run_timeout: 3000,
      compile_memory_limit: -1,
      run_memory_limit: -1,
    },
    success= data => look(data)
  )
}