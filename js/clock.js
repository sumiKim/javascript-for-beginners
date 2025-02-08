const clock = document.querySelector('#clock>h2');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

/* Tried to decrease as much as possible the dependencies on JS libraries (like jQuery)
 */
window.onload = function () {
  tick();
};

function tick() {
  var hoursTicker = document.getElementById('hours');
  var minutesTicker = document.getElementById('minutes');

  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();

  /* Formula to convert the time into degrees */
  var angleHours = (h / 12) * 360 - 90;
  var angleMinutes = (m / 60) * 360 - 90;

  /*
Formula
angle = percentage (h/12 or m/60) * 360 - offset(90deg)
*/

  hoursTicker.style.cssText =
    '-webkit-transform: rotate(' + angleHours + 'deg);';
  minutesTicker.style.cssText =
    '-webkit-transform: rotate(' + angleMinutes + 'deg);';

  document.getElementById('digital').innerHTML = h + ' : ' + m;

  setTimeout('tick()', 60000);
}
