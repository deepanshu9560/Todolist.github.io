document.getElementById('btn').addEventListener("click", GetAndUpdate);

function GetAndUpdate() {

    let Title = document.getElementById('Title').value;

    let Description = document.getElementById('Description').value;

    console.log('Updating list...');

    if (localStorage.getItem('arrayjson') == null) {

        AllJsonArray = [];
        AllJsonArray.push([Title, Description]);
        localStorage.setItem('arrayjson', JSON.stringify(AllJsonArray));

    } else {

        AllJsonArray = JSON.parse(localStorage.getItem('arrayjson'));
        AllJsonArray.push([Title, Description]);
        localStorage.setItem('arrayjson', JSON.stringify(AllJsonArray));

    }

    update();

}

function update() {

    if (localStorage.getItem('arrayjson') == null) {

        AllJsonArray = [];        
        localStorage.setItem('arrayjson', JSON.stringify(AllJsonArray));

    } else {

        AllJsonArray = JSON.parse(localStorage.getItem('arrayjson'));  
    
    }

    // table populate

    tablebody = document.getElementById('tablebody');

    str = "";

    AllJsonArray.forEach((element, index) => {

        str += `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button id="DeleteNote" class="btn btn-primary btn-sm" onclick="deleted(${index})">Delete</button></td>
                    </tr> 
        `;

    });

    tablebody.innerHTML = str;

}



update();

function deleted(itemIndex) {

    console.log('deleted..', itemIndex);

    AllJsonArray = JSON.parse(localStorage.getItem('arrayjson'));

    AllJsonArray.splice(itemIndex, 1);

    localStorage.setItem('arrayjson', JSON.stringify(AllJsonArray));

    update();

}

document.getElementById('clearedbtn').addEventListener("click" , function(){
    if(confirm("Do you really want to clear?")){
        localStorage.clear();
        update();
    };
});