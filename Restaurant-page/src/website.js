function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "HappyBurger";
  
    header.appendChild(restaurantName);
    const nav = document.createElement("NAV");
    nav.classList.add("nav");

    const button0 = document.createElement("BUTTON");
    button0.addEventListener("click", function() {
      createMainHome();
    });
    button0.innerHTML = "Home"

    const button1 = document.createElement("BUTTON");
    button1.addEventListener("click", function() {
      createMainMenu();
    });
    button1.innerHTML = "Menu"




    const button2 = document.createElement("BUTTON");
    button2.addEventListener("click", function() {
      createMainContact();
    });
    button2.innerHTML = "Contact"

    
    nav.append(button0,button1,button2)
    header.appendChild(nav)
    const content = document.getElementById("content");
    content.appendChild(header)
  }


  function createMainHome(){
    var middleDel = document.getElementById("MIDDLE");

    if (middleDel != null)
    {    middleDel.parentNode.removeChild(middleDel)

      var FOOTERDel = document.getElementById("FOOTER");
      FOOTERDel.parentNode.removeChild(FOOTERDel)
    }
 


    const middle = document.createElement("div");
    middle.classList.add("middle");
    middle.id = "MIDDLE"

    const p0 = document.createElement("p1");
    p0.classList.add("home-p");
    p0.innerText = "Best burgers in the whole world\n"

    const p1 = document.createElement("p2");
    p1.classList.add("home-p");
    p1.innerText = "\nMade since 1969"

    const image = document.createElement('img')
    image.classList.add("chef-image");
    image.src  = 'images/Chef.jpg'

    middle.append(p0,image,p1)
    const content = document.getElementById("content");
    content.appendChild(middle)
    createFooter();

  }


  function createMainMenu(){

    var middleDel = document.getElementById("MIDDLE");
    middleDel.parentNode.removeChild(middleDel)

    var FOOTERDel = document.getElementById("FOOTER");
    FOOTERDel.parentNode.removeChild(FOOTERDel)

    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.id = "MIDDLE"
  
    menu.appendChild(
      createMenuItem(
        "Hamburger",
        "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Cheeseburger",
        "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
      )
    );


     
    const content = document.getElementById("content");
    content.appendChild(menu)
    
    createFooter();
  } 

  function createMainContact(){
    var middleDel = document.getElementById("MIDDLE");
    middleDel.parentNode.removeChild(middleDel)

    var FOOTERDel = document.getElementById("FOOTER");
    FOOTERDel.parentNode.removeChild(FOOTERDel)
    
    const content = document.getElementById("content");

    const middle = document.createElement("div");
    middle.classList.add("middle-Contact");
    middle.id="MIDDLE"
    const p0 = document.createElement("p1");
    p0.classList.add("Contact-p");
    p0.innerText = "Phone: 123 456 789\n"
    
    const p1 = document.createElement("p2");
    p1.classList.add("Contact-p");
    p1.innerText = "\nAddress: Šafaříkova 1, 120 00\n Vinohrady, Czechia"

    const image = document.createElement('img')
    image.classList.add("chef-image");
    image.src  = 'images/Address.png'

    middle.append(p0,image,p1)
    
    content.appendChild(middle)
    createFooter();
  } 

  function createFooter(){
    const footer = document.createElement("footer");
    footer.classList.add("footer")
    footer.id = "FOOTER"
    
    const copyRight = document.createElement("h1");
    copyRight.classList.add("copyRight");
    copyRight.textContent = "Copyright © Peter Plevko 2021";
    copyRight.classList.add("home-p");
    
    footer.appendChild(copyRight)
    const content = document.getElementById("content");
    content.appendChild(footer)
  }

  function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.src = `images/burgers/${name.toLowerCase()}.jpg`;
    foodImage.alt = `${name}`;
  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }



function initializeWebsite() {
    const content = document.getElementById("content");
  
    createHeader()
    createMainHome()

  
    //setActiveButton(document.querySelector(".button-nav"));
    //loadHome();
  }
  
export default initializeWebsite;