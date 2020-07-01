


//create a new input element
let input = document.getElementById('item');
input.addEventListener('change', createInput);

 //function for new input to create another new input element
function createInput(){
    let newInput = document.createElement('input') ;
    let mylist = document.getElementsByClassName('mylist');
    let button = document.getElementById('button');
    button.style.display = "block";
    button.style.marginTop = '15px';
newInput.placeholder = 'Enter list of things you want to do';

mylist[0].insertBefore(newInput, button); //append new input b4 save button
mylist[0].style.boxSizing = 'contentBox';
mylist[0].style.overflowY = 'auto';
newInput.addEventListener('change', createInput);
newInput.style.width = '400px';
newInput.style.height = '30px';
newInput.style.fontSize = '16px';
newInput.style.paddingLeft = '10px';
}

    
    let save = document.getElementById('button');

//function for save button to log input values to the console
    save.onclick = function createArrays(){
        let input = document.querySelectorAll('input');
        input.forEach((item)=>{ //using callback function to loop through the input values
            let mylist = "";
    mylist += item.value ;
    
          console.log(mylist)
           
   // document.getElementById('output').innerHTML = mylist;
    
    //document.getElementById('out').value = mylist;
        })
        
    }
    let txt = document.getElementById('outtxt').value; // show the content of the textarea element


   let date = new Date() ;
 
document.getElementById("date").innerHTML =  date.toLocaleString();
