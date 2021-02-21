/*function ageIndays() { 

var age = prompt("what were in your age");
var ageIndayss = (2020-age)*365;

var h1 = document.createElement("h1"); 
var text = document.createTextNode(" you are" + ageIndayss + " days old ");
h1.setAttribute("id","ageIndays")
 h1.appendChild(text);
 document.querySelector(".box").appendChild(h1);


};  
function reset() { 
  
document.getElementById('ageIndays').remove();

}  */
 
//default and rest parameater 
//spread operator.... 


  
//   var todoinput = document.querySelector(".todoInput");
//   var todobutton = document.querySelector(".todoButton");
//   var todolist = document.querySelector(".todoList"); 
//     //event listener 


//   todobutton.addEventListener("click",addTodo); 
//   todolist.addEventListener('click',buttonRemove);
  
//   //fuction 
//   function addTodo (event){ 
//     //prevent form from submitting 

//    event.preventDefault();
//   //to do div 
//    var todoDiv = document.createElement("div"); 
//    todoDiv.classList.add("todo");
//   //li 
//      var newTodo = document.createElement("li"); 
//        newTodo.innerText = todoinput.value;
//       newTodo.classList.add("todo-item");
//        todoDiv.appendChild(newTodo); 
//        //cheack mark button 
//        var completeButton = document.createElement("button"); 
//          completeButton.innerHTML ="<i class =' fas fa-check'></i>"
 
//          completeButton.classList.add("complete-btn")
//          todoDiv.appendChild(completeButton);
//      //cheack trash button 
//      var trashButton = document.createElement("button"); 
//      trashButton.innerHTML = ' <i class =" fas fa-trash"></i>'

//      trashButton.classList.add("trash-btn")
//      todoDiv.appendChild(trashButton);
           
//   //append to list 
//   todolist.appendChild(todoDiv)
        
//   // To Clear todo input value 
//   todoinput.value= "";
//     //fuction 

 
// } 
// function buttonRemove(e){ 
//   var item = e.target; 
//  //delet to do 
//  if(  item.classList[0]=== 'trash-btn'){ 
//       var todo = item.parentElement;
//          todo.remove();
//  }


// } 


var todoInput = document.querySelector(".todoInput"); 
var todoButton = document.querySelector(".todoButton"); 
var  todoList = document.querySelector(".todoList");  

//add event listner 
todoButton.addEventListener("click", addTodo); 
todoList.addEventListener("click",buttonRemove)

//function 

function addTodo(event){ 

  event.preventDefault();
//to do div 
 var todoDiv = document.createElement("div"); 
 todoDiv.classList.add("todo"); 
//li list  
var newToDo = document.createElement("li"); 
  newToDo.classList.add("todo-item"); 
  newToDo.innerText = todoInput.value  ;
  todoDiv.appendChild(newToDo)
     //check Mark Button 

     var completeButton = document.createElement('button'); 
       completeButton.classList.add("complete-btn"); 
       completeButton.innerHTML = "<i class =' fas fa-check'></i>"
      todoDiv.appendChild(completeButton); 

 //trash Mark Button 

     var trashButton = document.createElement('button'); 
     trashButton.classList.add("trash-btn"); 
     trashButton.innerHTML = "<i class =' fas fa-trash'></i>"
      todoDiv.appendChild(trashButton); 
      // append to the list 
      todoList.appendChild(todoDiv)
      //clear to do input 
      todoInput.value = "";

}
  //removed button 
  function buttonRemove(e) { 

   var item = e.target;
    if( item.classList[0]=== 'trash-btn'){ 
        var todo = item.parentElement;
        todo.classList.add("fal")
        todo.addEventListener("transitioned",function(){ 
          todo.remove();
         
        })
        
     
   }
    //check mark button  
    if( item.classList[0]=== 'complete-btn'){ 
      var todo = item.parentElement;
      todo.classList.toggle("complete")
    
       
      }

  } 


  //spred oparator 

//   function addNumber(x,y,z){ 
//       return x+y+z  


//   } 

  //let numbers =[ 1,2,3]; 
//  // console.log(addNumber(...numbers)); 

 // let number2 =[4,5,6]; 
// let addNumbers = [...numbers,...number2]; 
//  console.log(addNumbers); 

//object literal 

let creatLi = document.createElement('li');
let liText = document.createTextNode(x); 
  creatLi.appendChild(liText); 
  document.querySelector("#tpara").appendChild(creatLi);