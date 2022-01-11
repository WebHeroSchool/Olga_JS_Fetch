const name = window.location.search.split('=')[1];
const link = 'https://api.github.com/users/OlgaMalaga';

const userName = (name) => {
   if (name === undefined || name === null) {
     name = 'Информация о пользователе не доступна';
   }
   return name;
 };

fetch(`https://api.github.com/users/${userName(link)}`)
    .then(res => res.json())
    .then(json => {
        console.log(json.avatar_url);
        console.log(json.name);
        console.log(json.bio);
        console.log(json.html_url);

        const photo = document.createElement('img');
        photo.src = json.avatar_url;
        photo.style.borderRadius = '50%';
        document.body.append(photo);

        const name = document.createElement('p');
        if (json.name != null) {
            name.innerHTML = json.name;
        } else {
            name.innerHTML = 'Информация о пользователе недоступна';
        }
        document.body.append(name);
        name.style.color = 'blue';
        name.style.cursor = 'pointer';
        name.addEventListener("click", () => window.location = json.html_url);

        const bio = document.createElement('p');
        if (json.bio != null) {
            bio.innerHTML = json.bio;
        } else {
            bio.innerHTML = 'Информация о пользователе недоступна';
        }
        document.body.append(bio);

    })
    .catch(err => document.body.innerHTML = 'Информация о пользователе недоступна');
  