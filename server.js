CodeMirror(document.querySelector('#codepane'), {
    lineNumbers: true,
    tabSize: 2,
    value: 'System.out.print("Hello World");',
    mode: 'text/x-java'
});