const cafeList = document.getElementById('cafe-list');
const form = document.getElementById('add-cafe-form');

//Create and render Cafe
function renderCafe(doc) {
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');

  li.setAttribute('data-id', doc.id);
  name.textContent = `${doc.data().name}`;
  city.textContent = `${doc.data().city}`;
  li.appendChild(name);
  li.appendChild(city);
  cafeList.appendChild(li);
}

db.collection('cafes')
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      renderCafe(doc);
    });
  });

form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('cafes').add({
    name: form.name.value,
    city: form.city.value,
  });
  form.name.value = '';
  form.city.value = '';
});
