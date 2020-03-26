const data = [
	{
	"albumId": 1,
	"id": 1,
	"title": "accusamus beatae ad facilis cum similique qui sunt",
	"url": "https://via.placeholder.com/600/92c952",
	"thumbnailUrl": "https://via.placeholder.com/150/92c952"
	},
	{
	"albumId": 1,
	"id": 2,
	"title": "reprehenderit est deserunt velit ipsam",
	"url": "https://via.placeholder.com/600/771796",
	"thumbnailUrl": "https://via.placeholder.com/150/771796"
	},
	{
	"albumId": 1,
	"id": 3,
	"title": "officia porro iure quia iusto qui ipsa ut modi",
	"url": "https://via.placeholder.com/600/24f355",
	"thumbnailUrl": "https://via.placeholder.com/150/24f355"
	}
];

	// <div class="wrapper">
	// 	<div class="center">
	// 		<h2 class="title">
	// 		accusamus beatae ad facilis cum similique qui sunt
	// 		</h2>
	// 		<div class="present">
	// 			<img class="present-img" src="https://via.placeholder.com/600/92c952">
	// 		</div>
	// 		<div class="thumbnail">
	// 			<img class="thumbnail-img url" src="https://via.placeholder.com/150/92c952">
	// 		</div>
	// 	</div>
	// </div>

for (let i = 0; i < data.length; i++) {

	const wrapper = document.createElement('DIV');
	const center = document.createElement('DIV');
	const title = document.createElement('H2');
	const present = document.createElement('DIV');
	const presentImg = document.createElement('IMG');
	const thumbnail = document.createElement('DIV');
	const thumbnailImg = document.createElement('IMG');

	wrapper.classList.add('wrapper');
	center.classList.add('center');
	title.classList.add('title');
	present.classList.add('present');
	presentImg.classList.add('present-img');
	thumbnail.classList.add('thumbnail');
	thumbnailImg.classList.add('thumdnail-img');

	center.innerHTML = data[i].id;
	title.innerHTML = data[i].title;
	presentImg.src = data[i].url;
	thumbnailImg.src = data[i].thumbnailUrl;

	present.appendChild(presentImg);

	center.appendChild(title);
	center.appendChild(present);

	thumbnail.appendChild(thumbnailImg);
	center.appendChild(thumbnail);

	wrapper.appendChild(center);

	document.body.appendChild(wrapper);
}
