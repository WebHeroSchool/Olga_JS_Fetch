let circle = document.getElementById('preloader');
setTimeout(function() {
	 circle.classList.add('invisible');
}, 3000); 
 
let date = new Date();
let getTime = new Promise ((resolve, reject) => {
	setTimeout(() => date ? resolve(date) : reject('Информация о текущей дате отсутствует'), 2000)
});

let userName = window.location.search.split('=')[1] 
if (userName === undefined || userName === null) { 
   userName = 'OlgaMalaga';
};

let getName = new Promise((resolve, reject) => {
   setTimeout(() => userName ? resolve(userName) : reject('Пользователь не найден'), 3000);
 });

Promise.all([getTime, getName])
	.then(() => fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(json => {
         console.log();
         console.log(json.name);json.avatar_url
         console.log(json.bio);
         console.log(json.html_url);

            const photo = document.createElement('img');
            photo.src = json.avatar_url;
            document.body.append(photo);
            photo.classList.add('photo');

            const name = document.createElement('h1');
            if (json.name != null) {
            name.innerHTML = `<a href='${json.html_url}' target=blank>${json.name}</a>`;
            } else {
            name.innerHTML = 'Информация о пользователе недоступна';
            }
            document.body.append(name);
            name.addEventListener("click", () => window.location = json.html_url);

            const bio = document.createElement('p');
            if (json.bio != null) {
            bio.innerHTML = json.bio;
            } else {
            bio.innerHTML = 'Информация о пользователе недоступна';
            }
            document.body.append(bio);

         let time = document.createElement('h4');
         time.innerHTML = date;
         document.body.append(time);
    })
    .catch(err => {
       document.body.innerHTML = 'Информация о пользователе недоступна';
    })
   )