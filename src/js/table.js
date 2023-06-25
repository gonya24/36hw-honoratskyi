function tableCreate(listInfo, idForContainer) {
    const container = document.createElement('div')
    container.setAttribute('id', idForContainer)
    container.classList.add('container-table')
    const title = document.createElement('h2')
    title.innerHTML = 'Info about user';
    title.style.textAlign = 'center'
    const table = document.createElement('table')


    for (let i = 0; i < listInfo.length; i++) {
        const tr = document.createElement('tr');
        for (let j in listInfo[i]) {
            const tdKey = document.createElement('td')
            const tdData = document.createElement('td')
            tdKey.innerHTML = `${j}`;
            tdData.innerHTML = `${(listInfo[i])[j]}`
            tr.appendChild(tdKey);
            tr.appendChild(tdData);
        }
        table.appendChild(tr);

    }

    container.appendChild(title);
    container.appendChild(table)



    return container

}