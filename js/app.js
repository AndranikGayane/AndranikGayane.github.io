
const newYear = "06/07/2024";
const timeLeft = document.getElementById('time-left')
let timerId;


function timeCountDown() {
  const nowDate = new Date();
  const newYearDate = new Date(newYear);
  const totalSeconds = (newYearDate - nowDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

 
   timeLeft.innerHTML =    days + '<sub>օր</sub> : ' + hours + '<sub>ժ</sub> : ' + minutes + '<sub>ր</sub> : ' + seconds + '<sub>վ</sub>'

      if (days==-1) {
        mnacel.innerHTML = '&#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825'
        timeLeft.innerHTML = '<span style="text-transform:uppercase;"> Wedding Day!! </span>'
        clearInterval(timerId)
        return
      }
    
}

// function formatTime(time) {
//   return time > 10 ? time : 0${time};
// }

timeCountDown()
timerId = setInterval(timeCountDown, 1000);



// const audio = new Audio("https://dl2.mp3party.net/online/8450417.mp3");
const audio = new Audio("https://dl2.mp3party.net/online/8450417.mp3");

const buttons = document.querySelectorAll("#audio");
audio.currentTime = 74

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        $("#audio>img").remove()
        $("#audio").append(`<img src="https://static.tildacdn.one/tild3366-3331-4833-a439-393935613833/play3.gif" style="width: 50px;background-color: lightgrey;border-radius: 50%">` );
    }else{
        audio.pause()
        $("#audio>img").remove()
        $("#audio").append(`<img src="https://static.tildacdn.one/tild3033-6238-4331-b066-616532393561/play2.gif" style="width: 50px;background-color: white;border-radius: 50%">` );
    }
  });
});

// const timeLeft = document.getElementById('time-left')
// const mnacel = document.getElementById('mnacel')




// //month day year
// const birthday = new Date('07/29/2023')

// const second = 1000
// const minute = second * 60
// const hour = minute * 60
// const day = hour * 24
// let timerId
// console.log(second)
// console.log(minute+ "minut")
//  console.log(hour+"hour")

// function countDown() {
//   const today = new Date()
//   const timeSpan = birthday - today


//   if (timeSpan <= -day) {
//     mnacel.innerHTML = '&#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825'
//     timeLeft.innerHTML = '<span style="text-transform:uppercase;"> Married!! </span>'
//     clearInterval(timerId)
//     return
//   }

//   if (timeSpan <= 0) {
//     mnacel.innerHTML = '&#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825 &#9825'
//     timeLeft.innerHTML = '<span style="text-transform:uppercase;"> Wedding Day!! </span>'
//     clearInterval(timerId)
//     return
//   }


//   const days = Math.floor(timeSpan / day)
//   const hours = Math.floor(days*24)
//   const minutes = Math.floor((timeSpan % hour) / minute)
//   const seconds = Math.floor((timeSpan % minute) / second)
//   timeLeft.innerHTML =    days + '<sub>օր</sub> : ' + hours + '<sub>ժ</sub> : ' + minutes + '<sub>ր</sub> : ' + seconds + '<sub>վ</sub>'

// }

// timerId = setInterval(countDown, second)