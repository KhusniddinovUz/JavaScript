var list = document.querySelector('main');
var btn = document.getElementById('btn');
var title = document.getElementById('title');
var note = document.getElementById('note');

btn.addEventListener('click', addNote);

function addNote(){
    if(title.value === '' || note.value === ''){
        alert('Please fill both Title and New note')
    } else{
        var icon = document.createElement('i');
        var content = document.createElement('div');
        var titleWrap = document.createElement('h3');
        var noteWrap = document.createElement('div');
        content.appendChild(titleWrap);
        content.appendChild(noteWrap);
        content.appendChild(icon);
        content.id = 'content';
        icon.id = 'icon';
        icon.className = 'fas fa-minus-circle';
        titleWrap.textContent = title.value;
        noteWrap.textContent = note.value;
        list.appendChild(content);
        title.value = null;
        note.value = null;

        icon.addEventListener('click', function(){
            list.removeChild(icon.parentElement);
        });
    }
};