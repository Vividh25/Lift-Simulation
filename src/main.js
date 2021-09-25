var frame;
var pos = 0;
const lift = document.getElementById('elevator');
// const button0 = document.getElementById('0down');

const moveLift = (floorNumber) => {
  console.log(pos);
  if (pos >= floorNumber) {
    cancelAnimationFrame(frame);
  } else {
    pos += 10;
    lift.style.marginBottom = pos + 'px';
    frame = requestAnimationFrame(() => {
      moveLift(floorNumber);
    });
  }
};

function callLift(e) {
  e.preventDefault();
  let floorNumber = Number(e.currentTarget.parentNode.parentNode.id) * 240;
  moveLift(floorNumber);
}

// document.getElementById('0down').addEventListener('click', callLift);

// const stopLift = (x) => {
//   if (x == 10) cancelAnimationFrame(frame);
//   else {
//     console.log(x);
//     x++;
//     frame = requestAnimationFrame(() => {
//       stopLift(x);
//     });
//   }
// };

// const btn1Down = (document.getElementById('1down').onclick = callLift(this.id));
// const btn1Up = document.getElementById('1up');
// const btn2Up = document.getElementById('2up');
// const btn2down = document.getElementById('2down');

// // btn1Down.addEventListener('click', callLift(this.id));
// btn1Up.addEventListener('click', callLift(this.id));
// btn2Up.addEventListener('click', callLift(this.id));
// btn2down.addEventListener('click', callLift(this.id));
