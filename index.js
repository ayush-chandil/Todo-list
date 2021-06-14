//localStorage.tasks=JSON.stringify([]);    //by-default localstorage has type of string.
                                          //So to convert array into string we will use this technique 


function taskadd(){
   //take input from input box
   let input=document.getElementById("task");
   
  //take task from localstorage and store tasks(array)
   let taskArr=JSON.parse(localStorage.tasks);     //convert string back into objects

   //push new element into array
   taskArr.push(input.value);

   //update array to localstorage
   localStorage.tasks=JSON.stringify(taskArr);

   //empty the input box
   input.value="";

   updatelist();
 
}

 function updatelist(){
    let ul=document.getElementById("work");
    
    let taskArr=JSON.parse(localStorage.tasks);

    let len=taskArr.length-1;
    let new_item="";
    
    for(let i=len;i>=0;i--){
       console.log();
       new_item += '<li class="list-group-item" '+ i+'">'+taskArr[i]+'<i class="fas fa-trash" onclick="remove(this)"></i></li>';
    }
    ul.innerHTML=new_item;
 }
   

function remove(span_tag){
   let index_id=span_tag.parentElement.id;
   
   let taskArr=JSON.parse(localStorage.tasks); //get array tasks

   taskArr.splice(index_id,1);

   localStorage.tasks=JSON.stringify(taskArr);

   updatelist();

} 
 