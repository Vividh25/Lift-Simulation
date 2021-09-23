var frame;
var pos = 0;

function callLift(e) {
  e.preventDefault();
  console.log(Number(e.currentTarget.parentNode.parentNode.id));
  if (pos == Number(e.currentTarget.parentNode.parentNode.id) * 240) {
    cancelAnimationFrame(frame);
  } else {
    pos += 5;
    lift.style.marginBottom = pos + 'px';
    frame = requestAnimationFrame(function () {
      callLift(e);
    });
  }
}

// function stopLift() {
//   cancelAnimationFrame(frame);
// }

const lift = document.getElementById('elevator');
// const btn1Down = (document.getElementById('1down').onclick = callLift(this.id));
// const btn1Up = document.getElementById('1up');
// const btn2Up = document.getElementById('2up');
// const btn2down = document.getElementById('2down');

// // btn1Down.addEventListener('click', callLift(this.id));
// btn1Up.addEventListener('click', callLift(this.id));
// btn2Up.addEventListener('click', callLift(this.id));
// btn2down.addEventListener('click', callLift(this.id));
