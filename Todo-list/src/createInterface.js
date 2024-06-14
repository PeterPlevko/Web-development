export function thing(){
    console.log("sss")
}

export function nieco(){
    console.log("kkk")
}

class Project {

    constructor(name) {
      this.name = name;
    }

    set todos(todo) {
    this.todosList = todo;
  }
  todosList 




};

var currently_clicked_thing 
var p_list = []

var inboxFullTime

var task = []

function createHeader(){
    var content = document.getElementById('content');
    var header = document.createElement("header");
    header.classList.add("HEADER")
    var div = document.createElement("div");
    div.classList.add("logo_div")
    var h1 = document.createElement("h1");
    h1.textContent = "Todo List"
    h1.classList.add("h1_logo")
    var image = document.createElement('img')
    image.classList.add("image_logo")
    image.src  = './images/logo.png'    
    div.appendChild(image)
    div.appendChild(h1)
    header.appendChild(div)
    content.appendChild(header)
}





function createDropDown(){
    var content = document.getElementById('content');
    var nav = document.createElement("nav");
    nav.classList.add("nav")
    var Inbox = document.createElement("div");
    Inbox.classList.add("inbox")
    var buttonInbox = document.createElement("BUTTON");

    buttonInbox.addEventListener("click", function() {

        if(currently_clicked_thing == undefined){
            currently_clicked_thing = buttonInbox
            currently_clicked_thing.classList.add("currently_clicked")
        }
        else{
            currently_clicked_thing.classList.remove("currently_clicked")
            currently_clicked_thing = buttonInbox
            currently_clicked_thing.classList.add("currently_clicked")
        }



        button.classList.remove("currently_clicked")
        buttonInbox.classList.add("currently_clicked")
        
        var el = document.getElementById('idInbox');
        if (el != null) {el.remove();}


        var inboxDiv = document.createElement("div");
        inboxDiv.id = "idInbox"
        

        inboxDiv.classList.add("inbox_div")
        var buttonTask = document.createElement("button");
        buttonTask.classList.add("button_add_task")
        buttonTask.textContent = "Add Task"
        buttonTask.addEventListener("click", function() {

            var addTaskDiv = document.createElement("div");
            var input = document.createElement("input");
            input.type = "text";
            addTaskDiv.appendChild(input)
            var addRemove = document.createElement("button");
            addRemove.textContent = "Send"
            addRemove.addEventListener("click", function(){
                
               task.push(input.value);
               addTaskDiv.remove();
              
               
               var newDiv = document.createElement("div");
               newDiv.classList.add("newDiv")
               var h1TaskName = document.createElement("h1");
               var buttonToCloseTask = document.createElement("button");
               h1TaskName.classList.add("h1TaskName")

               task.forEach(element => {
                h1TaskName.textContent=element;
                
                newDiv.appendChild(h1TaskName)

                buttonToCloseTask.textContent = "remove task"
                buttonToCloseTask.addEventListener("click", function(){

                    newDiv.remove();
                });
                newDiv.appendChild(buttonToCloseTask)
                


               });
               
               inboxDiv.appendChild(newDiv)

            });



            addTaskDiv.appendChild(addRemove)

            


            inboxDiv.appendChild(addTaskDiv)


        });



        inboxDiv.appendChild(buttonTask)

        if (inboxFullTime == undefined){
            content.appendChild(inboxDiv)
            inboxFullTime = inboxDiv
        }

        else{

            content.appendChild(inboxFullTime)
        }
        
        

      });

    
    buttonInbox.textContent = "Inbox"
    buttonInbox.classList.add("inbox_button")
    



    var h1 = document.createElement("h1");
    h1.textContent = "Projects"
    h1.classList.add("h1_inbox")

    var button  = document.createElement("BUTTON");
    button.addEventListener("click", function() {
        //buttonInbox.classList.remove("currently_clicked")
        //button.classList.add("currently_clicked")

      });


    button.textContent = "Add Project"
    button.classList.add("button_project")
    button.addEventListener("click", function() {
        //const p = new Rectangle();
        var div  = document.createElement("div");
        var button  = document.createElement("button");
        button.textContent = "Add Project"

        var input = document.createElement("input");

        button.addEventListener("click", function() {
            var p = new Project(input.value);
            
            div.remove();
            var button  = document.createElement("button");
            button.textContent = p.name;
            button.classList.add("button_clickable_project")
            button.addEventListener("click", function() {
            //--
            


            if (currently_clicked_thing != null){
                currently_clicked_thing.classList.remove("currently_clicked")
                currently_clicked_thing = button
                currently_clicked_thing.classList.add("currently_clicked")
            }
            else{
                button.classList.add("currently_clicked")
                currently_clicked_thing = button
            }



            var el = document.getElementById('idInbox');

            
            if (el != null) {el.remove();}
    


            var inboxDiv = document.createElement("div");
            inboxDiv.id = "idInbox"
            
    
            inboxDiv.classList.add("inbox_div")
            var buttonTask = document.createElement("button");

            buttonTask.classList.add("button_add_task")
            buttonTask.textContent = "Add Task"
            buttonTask.id = "Add_Task_Id"
            buttonTask.addEventListener("click", function() {
    
                var addTaskDiv = document.createElement("div");
                var input = document.createElement("input");
                input.type = "text";
                addTaskDiv.appendChild(input)
                var addRemove = document.createElement("button");
                addRemove.textContent = "Send"
                addRemove.addEventListener("click", function(){
                    
                   task.push(input.value);
                   addTaskDiv.remove();
                  
                   
                   var newDiv = document.createElement("div");
                   newDiv.classList.add("newDiv")
                   var h1TaskName = document.createElement("h1");
                   var buttonToCloseTask = document.createElement("button");
                   h1TaskName.classList.add("h1TaskName")
    
                   task.forEach(element => {
                    h1TaskName.textContent=element;
                    
                    newDiv.appendChild(h1TaskName)
    
                    buttonToCloseTask.textContent = "remove task"
                    buttonToCloseTask.addEventListener("click", function(){
    
                        newDiv.remove();
                    });
                    newDiv.appendChild(buttonToCloseTask)
                    
    
    
                   });
                   
                   inboxDiv.appendChild(newDiv)
    
                });
    
    
    
                addTaskDiv.appendChild(addRemove)
    
                
    
    
                inboxDiv.appendChild(addTaskDiv)
    
    
            });
    
    
    
            inboxDiv.appendChild(buttonTask)

            var flag = 0
            p_list.forEach(element => {

                if (element.name === p.name){


                    content.append(element.todosList)
                    

                    flag = 1;
                    

                }


            });


            
            

            if (flag==0){
                p.todos = inboxDiv
                p_list.push(p)
                content.appendChild(inboxDiv)
            }





            //--


            });
            nav.appendChild(button)


        });
        div.appendChild(input)
        div.appendChild(button)


        nav.appendChild(div)

        
        

    });



    Inbox.appendChild(buttonInbox)
    nav.appendChild(Inbox)
    nav.appendChild(h1)
    nav.appendChild(button)
    content.appendChild(nav)
    
}


export function createMain(){

    createHeader();
    createDropDown();

}

