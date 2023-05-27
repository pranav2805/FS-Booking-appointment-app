/* const ul = document.querySelector('.items');

ul.firstElementChild.textContent = 'HELLO';
ul.firstElementChild.style.background = 'green';

//ul.children[1].innerText = 'Brad';
ul.children[1].style.background = 'yellow';
 */

const form = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

form.addEventListener('submit', onSubmit);
var edit = false;
var tempObj;

//Loading the page which display already existing users on crudcrud
window.addEventListener("DOMContentLoaded", () =>{
    axios.get("http://localhost:3000/users")
        .then(response => {
            for(var i=0;i<response.data.length;i++){
                showNewUserOnScreen(response.data[i])
            }
        })
        .catch(err => console.log(err))
})

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value==='' || emailInput.value==='' || phoneInput.value===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        //creating an object of user
        let my_obj ={
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        }

        axios.post("http://localhost:3000/users", my_obj)
            .then(response => {
                console.log(my_obj);
                showNewUserOnScreen(response.data)
            })
            .catch(err => console.log(err))

        // if(edit===true){
        //     axios.put("https://crudcrud.com/api/6b0a7c7ea91942b895ea10d9f196038e/appointmentData/"+tempObj._id, my_obj)
        //     .then(response => {
        //         showNewUserOnScreen({...my_obj, _id: tempObj._id});
        //         edit=false;
        //         //tempObj=undefined;
        //     })
        //     .catch(err => console.log(err))
        // }

        // else{
        //     //Storing the user details as object on crudcrud using post method
        //     axios.post("http://localhost:3000/users", my_obj)
        //     .then(response => {
        //         showNewUserOnScreen(response.data)
        //     })
        //     .catch(err => console.log(err))
        // }

        // //Displaying the details as object
        // li.textContent = my_obj.name +" "+my_obj.email;

        // const deleteBtn = document.createElement('button');
        // deleteBtn.className = 'delete';

        // //deleteBtn.appendChild(document.createTextNode('delete'));
        // deleteBtn.textContent = 'delete';
        // li.appendChild(deleteBtn);

        // const editBtn = document.createElement('button');
        // editBtn.className = 'edit';

        // editBtn.textContent = 'edit';
        // li.appendChild(editBtn);

        // userList.appendChild(li);

        // deleteBtn.onclick = () => {
        //     localStorage.removeItem(my_obj.email);
        //     userList.removeChild(li);
        // };

        // editBtn.onclick = () => {
        //     localStorage.removeItem(my_obj.email);
        //     userList.removeChild(li);
        //     nameInput.value = my_obj.name;
        //     emailInput.value = my_obj.email;
        // }

        //console.log(localStorage.getItem("myObj"));

        //Clear fields
        nameInput.value='';
        emailInput.value='';
        phoneInput.value='';
    }
}

function showNewUserOnScreen(obj) {
    const parentElement = document.getElementById("users")
    const childHTML = `<li id='${obj.id}'> ${obj.name} - ${obj.email} - ${obj.phoneNo}
                       <button onclick="deleteUser('${obj.id}')">Delete</button>
                       <button onclick="editUser('${obj.id}')">Edit</button>
                       </li>`
    
    parentElement.innerHTML = parentElement.innerHTML + childHTML;

    // <input type="hidden" value='${obj.id}' name="userId"></input>
    // const li = document.createElement('li');
    // //Displaying the details as object
    // li.textContent = my_obj.name +" "+ my_obj.email +" "+ my_obj.phoneNo;

    // const deleteBtn = document.createElement('button');
    // deleteBtn.className = 'delete';

    // //deleteBtn.appendChild(document.createTextNode('delete'));
    // deleteBtn.textContent = 'delete';
    // li.appendChild(deleteBtn);

    // const editBtn = document.createElement('button');
    // editBtn.className = 'edit';

    // editBtn.textContent = 'edit';
    // li.appendChild(editBtn);

    // userList.appendChild(li);

    // deleteBtn.onclick = () => {
    //     //localStorage.removeItem(my_obj.email);
    //     //deleting the user details from crudcrud
    //     // axios.get("https://crudcrud.com/api/851756d334bb40618f1991651df77f02/appointmentData")
    //     // .then(response => {
    //     //     var id
    //     //     for(var i=0;i<response.data.length;i++){
    //     //         if(response.data[i].email===my_obj.email){
    //     //             //response.data.splice(i,1);
    //     //             id = response.data[i]._id;
    //     //             break;
    //     //         }
    //     //     }
    //     //     return id;
    //     // }).then(response => axios.delete("https://crudcrud.com/api/851756d334bb40618f1991651df77f02/appointmentData/"+response)
    //     //                         .then(response => console.log("Deletion was successful"))
    //     //                         .catch(err => console.log(err+" something went wrong in delete method"))    
    //     // )
    //     // .catch(err => console.log(err+" something went wrong in get method"))

    //     // axios.delete(`https://crudcrud.com/api/6b0a7c7ea91942b895ea10d9f196038e/appointmentData/${my_obj._id}`)
    //     //     .then(response => {
    //     //         console.log("Deletion was successful");
    //     //         userList.removeChild(li);
    //     //     })
    //     //     .catch(err => console.log(err))

    //     //userList.removeChild(li);
    // };


    // editBtn.onclick = () => {
    //     // localStorage.removeItem(my_obj.email);
    //     // userList.removeChild(li);
    //     // axios.delete(`https://crudcrud.com/api/966c2081a532481fafd9782e848bc87d/appointmentData/${my_obj._id}`)
    //     //     .then(response => {
    //     //         console.log("Deletion was successful");
    //     //         userList.removeChild(li);
    //     //     })
    //     //     .catch(err => console.log(err))

    //     // userList.removeChild(li);

    //     // nameInput.value = my_obj.name;
    //     // emailInput.value = my_obj.email;
    //     // phoneInput.value = my_obj.phone;
    //     // edit = true;
    //     // tempObj = my_obj;
    // }
}

function deleteUser(id) {
    //console.log(id);
    //id.preventDefault();
    const parentElement = document.getElementById("users");
    const childElement = document.getElementById(id);
    axios.delete(`http://localhost:3000/users/${id}`)
            .then(response => {
                console.log("Deletion was successful");
                parentElement.removeChild(childElement);
            })
            .catch(err => console.log(err))

        //userList.removeChild(li);
}

function editUser(id) {
    console.log(id);
    // axios.put(`http://localhost:3000/users/${id}?edit=true`)
    //         .then(response => {
    //             console.log("Updation was successful");
    //         })
    //         .catch(err => console.log(err))
}

form.addEventListener('mouseover', (e) =>{
    e.preventDefault();
    form.classList.add('btn-hover');
})

// form.addEventListener('mouseout', onMouseout);
// function onMouseout(e){
//     e.preventDefault();
//     document.querySelector('body').classList.add('bg-dark');
// }