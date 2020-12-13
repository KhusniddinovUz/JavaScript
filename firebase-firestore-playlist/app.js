const cafeList = document.getElementById('cafe-list');
const form = document.getElementById('add-cafe-form');
const loader = document.getElementById('loading');
const content = document.querySelector('.content');

updateForm();

//Create and render Cafe
function renderCafe(doc) {
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');
  let cross = document.createElement('i');
  cross.className = 'fas fa-trash';

  li.setAttribute('data-id', doc.id);
  name.textContent = `${doc.data().name}`;
  city.textContent = `${doc.data().city}`;

  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);

  cafeList.appendChild(li);

  //Delete li from ul
  cross.addEventListener('click', (e) => {
    setLoader(true);
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('cafes')
      .doc(id)
      .delete()
      .then(() => {
        updateForm();
        setLoader(false);
      });
  });
}

//Add && Remove Loader
function setLoader(value) {
  if (value) {
    loader.style.display = 'block';
    content.style.display = 'none';
  } else {
    loader.style.display = 'none';
    content.style.display = 'block';
  }
}

//Get Data
function updateForm() {
  cafeList.innerHTML = '';
  db.collection('cafes')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        renderCafe(doc);
        console.log(doc);
      });
    });
}

//Add item to FireStore
form.addEventListener('submit', (e) => {
  setLoader(true);
  e.preventDefault();
  db.collection('cafes')
    .add({
      name: form.name.value,
      city: form.city.value,
    })
    .then(() => {
      updateForm();
      setLoader(false);
    });
  form.name.value = '';
  form.city.value = '';
});

// Real-time listener
// db.collection('cafes')
//   .orderBy('city')
//   .onSnapshot((snapshot) => {
//     let changes = snapshot.docChanges();
//     changes.forEach((change) => {
//       if (change.type === 'added') {
//         renderCafe(change.doc);
//       } else if (change.type == 'removed') {
//         let li = cafeList.querySelector(`[data-id=${change.doc.id}]`);
//         cafeList.removeChild(li);
//       }
//     });
//   });
