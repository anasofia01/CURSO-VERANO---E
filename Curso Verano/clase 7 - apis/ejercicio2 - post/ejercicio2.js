const formulario = document.getElementById('formulario-filter');
const inputText = document.getElementById('text-filter');
const bodyInput = document.getElementById('body-info');
const userId = document.getElementById('user-id');
const cards = document.getElementById('container-card');
const button = document.getElementById('btn-change');

formulario.addEventListener('submit', async function (event) {
	event.preventDefault();
	const inputInfo = inputText.value;
	const bodyInfo = bodyInput.value;
	const userInfo = userId.value;

	const infoData = {
		title: inputInfo,
		body: bodyInfo,
		userId: userInfo,
	};

	const getData = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify(infoData),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});

	if (!getData.ok) {
		alert('Falló');
	}

	const dataInfo = await getData.json();
	console.log(dataInfo);

	cards.innerHTML = `
    <div class="card">
      <div class="card-header">
        User Id: ${dataInfo.userId}
      </div>
      <div class="card-body">
        <figure>
          <blockquote class="blockquote">
            <p>${dataInfo.title}</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            <cite title="Source Title">${dataInfo.body}</cite>
          </figcaption>
        </figure>
      </div>
    </div>
  `;
});

button.addEventListener('click', function (event) {
	event.preventDefault();

	alert('Chaooo');
	window.location.href = './paginita.html';
});
