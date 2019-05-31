// function firstTask() {
//   console.log("First task done.");
// }

// function secondTask() {
//   console.log("Second task done.");
// }

// function thirdTask() {
//   console.log("Third task done.");
// }

// function fourthTask() {
//   console.log("Fourth task done.");
// }


// time = 2000;
// setTimeout(firstTask, time);
// time += 2000;
// setTimeout(secondTask, time);
// time += 2000;
// setTimeout(thirdTask, time);
// time += 2000;
// setTimeout(fourthTask, time);

setTimeout(function() {
  console.log("First task done.");
  setTimeout(function() {
    console.log("Second task done.");
    setTimeout(function() {
      console.log("Third task done.");
      setTimeout(function() {
        console.log("Fourth task done.");
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);

