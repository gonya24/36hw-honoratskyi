// a list of users
let total = [];

function listAllUsers() {
    addArea()
    // refresh data from Local Storage
    const arrUsers = localStorage.getItem('keyUser')
    if (arrUsers !== null) {
        total = JSON.parse(arrUsers)
    }
    // Initializations list of list users 
    const container = document.getElementById('container');
    container.innerHTML = '';
    const list = document.createElement('ol');
    const divNoN = document.createElement('p');
    divNoN.innerHTML = 'Empty list of users';
    divNoN.classList.add('div-non')
    list.classList.add('list')
    {
        total.length === 0 ? container.append(divNoN) :
            container.append(list)
        for (let i = 0; i < total.length; i++) {
            const line = document.createElement('li')
            line.setAttribute('data-id', i)
            const item = document.createElement('p')
            list.append(line)
            let itemUser = total[i];
            // 
            const butEdit = document.createElement('button')
            const butRemove = document.createElement('button')
            const butView = document.createElement('button')
            // 
            butEdit.innerHTML = 'Edit'
            butEdit.classList.add('edit')
            butRemove.innerHTML = 'Remove'
            butRemove.classList.add('remove')
            butView.innerHTML = 'View'
            butView.classList.add('view')
            // 
            isActiveEdit = false;
            line.classList.add('list-item')
            item.classList.add('item-user')
            line.append(item)
            item.innerHTML = itemUser.lastName
            // 
            line.append(butEdit);
            line.append(butRemove);
            line.append(butView);
            // event FOR EDIT USER DATA
            butEdit.addEventListener("click", function () {
                const forms = document.forms.editUser
                if (document.forms.addUser) {
                    document.getElementById('btnAdd').click()
                }
                if (forms) {
                    forms.remove()
                    isActiveEdit = false
                }
                isActiveEdit = true
                const itemIndex = this.parentNode.getAttribute('data-id')
                const item = total[itemIndex]
                const formEdit = form(line, 'editUser')
                editBtn(item, formEdit)
                cancelForm(formEdit)
            })
            // event FOR REMOVE USER FROM LIST
            butRemove.addEventListener("click", function () {
                if (confirm('You are sure?')) {
                    let newArr = total.filter(value => value !== itemUser)
                    localStorage.setItem('keyUser', JSON.stringify(newArr))
                    listAllUsers()
                }
            })
            // event FOR VIEW USER INFO
            butView.addEventListener('mouseover', function () {
                const itemIndex = this.parentNode.getAttribute('data-id');
                const item = total[itemIndex];
                const listInfo = [
                    { 'First name and Last name': `${item.firstName} ${item.lastName}` },
                    { 'Age': `${item.age} y.o.` },
                    { 'E-mail': item.email },
                    { 'Phone number': item.phone },
                    { 'Card number': item.card }
                ];
                document.getElementById('container').append(tableCreate(listInfo, 'containerInfo'))
            })
            butView.addEventListener('mouseout', function () {
                const container = document.getElementById('containerInfo')
                if (container) {
                    container.remove();
                }
            })
        }
    }
}
listAllUsers()