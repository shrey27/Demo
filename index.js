let list = document.querySelector('#todo-list');
let popup = document.querySelector('.popup');
let forms = document.querySelector('#forms');
let toDelete = null;

function createTodo(){   
    let inputValue = document.querySelector('#todo-input').value;

    if (inputValue === '') {
        alert("You must write something!");
      } 
    else {
        let div = document.createElement('div');
        div.className = 'todo-item';
        
        let span = document.createElement('span');
        span.className = 'todo-item-span';
              
        let node = document.createTextNode(inputValue);
        span.appendChild(node);
        
        document.querySelector('#todo-input').value = '';        
        
        const button1 = document.createElement('button');
        node = document.createTextNode('Done');
        button1.className = 'donebtn';
        button1.onclick = function(){
          var elem = this.parentElement.childNodes;
          elem[0].classList.toggle('done');
        }
        button1.appendChild(node);

        const button2 = document.createElement('button');
        node = document.createTextNode('Delete');
        button2.className = 'deletebtn';
        button2.onclick = function(){    
          forms.classList.toggle('haze');
          popup.classList.toggle('show',true);
          toDelete = this.parentElement;
        }
        button2.appendChild(node);

        div.appendChild(span);
        div.appendChild(button1);
        div.appendChild(button2);
        list.appendChild(div);
    }
}

function deleteNode(){
    toDelete.classList.toggle('none',true);
    toDelete=null;
    popup.classList.toggle('show');
    forms.classList.toggle('haze');
}

function notDelete(){
  toDelete=null;
  popup.classList.toggle('show');
  forms.classList.toggle('haze');
}