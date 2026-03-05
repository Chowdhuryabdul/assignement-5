/* document.getElementById('btn-completed').addEventListener('click', function(event){
 const navScore = document.getElementById('nav-score').innerText;
 let convertedNavScore = parseInt(navScore)
 const taskScore = document.getElementById('task-score').innerText;
 const convertedTaskScore = parseInt(taskScore)
 const title = document.getElementById('card-title').innerText;
//  console.log(event.target);
 const container = document.getElementById('activity-container')
//  console.log(convertedNavScore, convertedTaskScore);
    document.getElementById('nav-score').innerText = convertedNavScore + 1;
    document.getElementById('task-score').innerText = convertedTaskScore - 1;

    const p = document.createElement('p');
    p.innerText = `I will show the ${title} and the time is ${formatDateTimeWithTimeZone(new Date())}.`
    p.classList.add ('span')
    container.appendChild(p)
   event.target.disabled = true;
   event.target.style.backgroundColor = 'gray'
   event.target.textContent = 'Clicked'
   alert('This is completed')
}) */


// This is to clear all the comments in acitivity log 
document.getElementById('clear-btn').addEventListener('click', function () {
     const container = document.getElementById('activity-container');
     container.remove()
})

const buttons = document.getElementsByClassName('btn-completed');
for (let button of buttons) {
     button.addEventListener('click', function (event) {
          const navScore = document.getElementById('nav-score').innerText;
          let convertedNavScore = parseInt(navScore)
          const taskScore = document.getElementById('task-score').innerText;
          const convertedTaskScore = parseInt(taskScore)
          const title = document.getElementById('card-title').innerText;
          const container = document.getElementById('activity-container')
          document.getElementById('nav-score').innerText = convertedNavScore + 1;
          document.getElementById('task-score').innerText = convertedTaskScore - 1;

          const p = document.createElement('p');
          p.innerText = `I will show the ${title} and the time is ${formatDateTimeWithTimeZone(new Date())}.`
          p.classList.add('span')
          container.appendChild(p)

          /* Make the btn disabled after a click  */
          event.target.disabled = true;
          event.target.style.backgroundColor = 'gray'

          /* It will change the text to clicked */
          event.target.textContent = 'Clicked'

          /* This is the first alert */
          alert('This is completed')

          /* This is the second alert */
          const newScore = document.getElementById('task-score').innerText = convertedTaskScore - 1
          if (newScore === 0) {
               alert("🎉 Congratulations! You completed all tasks!");
          }
     })
}


