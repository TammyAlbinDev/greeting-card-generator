
let count = 0;

function tick() {
  count = count + 1;
  console.log("Tick " + count);
}

setInterval(tick, 1000);

