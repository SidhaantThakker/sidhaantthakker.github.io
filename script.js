var i = 0;
var txt = 'cd mnt/d/resume'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("cmdline").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var j = 0;
var txt2 = ">> ls";

function typeWriter2() {
    if (j < txt2.length) {
      document.getElementById("cmdline2").innerHTML += txt2.charAt(j);
      j++;
      setTimeout(typeWriter2, speed);
    }
}

typeWriter();

setTimeout(() => { typeWriter2(); }, 1000);
