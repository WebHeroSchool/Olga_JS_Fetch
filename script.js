

// location.search.substr(1).split('&')


// let url = window.location.href;
// let getName = (url) =>  {
// 	let g = url.split('=');
// 	let name = g[1];
// 	if (name == undefined) {
// 			name = 'SerekaKen'
// 	}
// 	return name;
// }


//const string = window.location.toString();
const link = 'https://api.github.com/users/OlgaMalaga';

fetch(link)
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
    .catch(err => alert('Информация о пользователе недоступна'));