// there are mainly four function of local storage
/*
setItem()
getItem()
removeItem()
clear()
*/


/*
port domain protocal if change we cannot se the save data */
//if we give same key the data will overwrite with new data

// localStorage.removeItem("name")
// localStorage.clear()
function run()
{
    // let name= document.querySelector("#name").value
    // let email= document.querySelector("#email").value
    // let number= document.querySelector("#number").value
    // localStorage.setItem("name" , name)
    // localStorage.setItem("email" , email)
    // localStorage.setItem("number" , number)

    // let a = document.querySelector("#head1")
    // a.innerHTML = localStorage.getItem("name")
    // let b = document.querySelector("#head2")
    // b.innerHTML = localStorage.getItem("email")
    //  let c = document.querySelector("#head3")
    // c.innerHTML = localStorage.getItem("number")
    let obj = {
  
        name:document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        number:document.querySelector("#number").value,
      }
    localStorage.setItem("data" ,JSON.stringify(obj))
   

}
//to convert the value of string in object
let a = JSON.parse(localStorage.getItem("data"))
console.log(a)

  // (.) access member operator

//if we want to print the keys
// for( k in obj ){
//     console.log(k)
// }

// //if we want to print the value
// for(k in obj)
// {
//     console.log(obj[k])
// }
      let myname= document.querySelector("#head1")
     let myemail= document.querySelector("#head2")
     let mynumber= document.querySelector("#head3")
     myname.innerHTML = a.name
     myemail.innerHTML = a.email
     mynumber.innerHTML = a.number

