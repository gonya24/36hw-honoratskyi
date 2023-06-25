// function for check of mistake 
function saveError() {
    const arrError = [];
    for (let i = 0; i < control.length; i++) {
        if (control[i].pattern && !document.getElementById(`${control[i].attributes.id}`).value.match(control[i].pattern)) {
            arrError.push(`\n${control[i].label}`)
        }
    }
    if (arrError.length !== 0) {
        alert(`this data is invalid:${arrError} !`)
        return true

    } else { return false }

}
// function to add new users
function addArea() {
    let isActive = false;

    // 
    const container = document.getElementById('containerAdd')
    container.innerHTML = '';
    const btnAdd = document.createElement('button')
    container.appendChild(btnAdd)
    btnAdd.setAttribute('id', 'btnAdd')
    btnAdd.innerHTML = 'Add'
    btnAdd.classList.add('add')
    btnAdd.addEventListener('click', function () {
        const forms = document.forms.addUser
        if (document.forms.editUser) {
            document.getElementById('cancel').click()
        }
        if (isActive) {
            // const newUsers = document.getElementById('formNewUser')
            isActive = false
            forms.remove()
        } else {
            isActive = true;
            const formAdd = form(btnAdd, 'addUser')
            document.getElementById('cancel').remove()
            save(formAdd)
        }
    })

}
// Button in edit form
function cancelForm(forms) {
    forms.cancel.classList.add('cancel');
    forms.cancel.addEventListener('click', function () {
        forms.remove();
    });
}
// func for edit data in List
function editBtn(item, forms) {
    forms.firstName.value = item.firstName;
    forms.lastName.value = item.lastName;
    forms.age.value = item.age;
    forms.email.value = item.email;
    forms.phone.value = item.phone;
    forms.card.value = item.card;
    forms.pass.value = item.pass;
    const saveEdit = document.getElementById('save');
    saveEdit.classList.add('save');
    saveEdit.addEventListener('click', function () {
        if (saveError()) { }
        else {
            item.firstName = forms.firstName.value;
            item.lastName = forms.lastName.value;
            item.age = forms.age.value;
            item.email = forms.email.value;
            item.phone = forms.phone.value;
            item.card = forms.card.value;
            item.pass = forms.pass.value;
            localStorage.setItem('keyUser', JSON.stringify(total));
            listAllUsers();
        }

    });
}
// func for create form`s element
function createElement(parent, arr) {
    for (let i = 0; i < arr.length; i++) {
        const el = document.createElement(`${arr[i].element}`)
        el.classList.add('input-style')
        if (arr[i].attributes) {
            for (let key in arr[i].attributes) {
                el.setAttribute(key, arr[i].attributes[key])
            }
        }
        if (arr[i].label) {
            const div = document.createElement('div')
            const label = document.createElement('label')
            label.setAttribute('for', `${arr[i].attributes.id}`)
            label.innerHTML = `${arr[i].label}`
            div.append(label);
            div.append(el);
            parent.append(div)

        } else {
            parent.append(el)
        }
    }
}
// button : add new user
function save(form) {
    const save = document.getElementById('save')
    save.classList.add('save')
    save.addEventListener('click', function () {
        if (saveError(form)) { }
        else {
            total.push({
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                age: form.age.value,
                email: form.email.value,
                phone: form.phone.value,
                card: form.card.value,
                pass: form.pass.value
            })
            localStorage.setItem('keyUser', JSON.stringify(total))
            listAllUsers()
        }
    })
}
// check required and mistake in input
function form(parentElement, nameForm) {
    const formMain = document.createElement('form')
    formMain.setAttribute('name', nameForm)
    formMain.setAttribute('id', 'formNewUser')
    formMain.classList.add('order-form')
    createElement(formMain, control);
    parentElement.insertAdjacentElement('afterend', formMain)
    return parentElement.insertAdjacentElement('afterend', formMain)
}

