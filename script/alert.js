document.getElementById('btn-completed').addEventListener('click', function(event){
 const navScore = document.getElementById('nav-score').innerText;
 let convertedNavScore = parseInt(navScore)
 const taskScore = document.getElementById('task-score').innerText;
 const convertedTaskScore = parseInt(taskScore)
 const title = document.getElementById('card-title');
 const container = document.getElementById('activity-container')
//  console.log(convertedNavScore, convertedTaskScore);
    document.getElementById('nav-score').innerText = convertedNavScore + 1;
    document.getElementById('task-score').innerText = convertedTaskScore - 1;

    const p = document.createElement('p');
    p.innerText = `
    i will show the ${title}.
    `
    container.appendChild(p)
   event.target.disabled = true;
   event.target.style.backgroundColor = 'gray'
   event.target.textContent = 'Clicked'
   alert('This is completed')
})

document.getElementById('clear-btn').addEventListener('click', function(){
     const container = document.getElementById('activity-container');
     container.remove()
})