function addUser(){
    user_name= document.getElementById("user_name").value;
    console.log(user_name);
    localStorage.setItem("user_name", user_name);
    age= document.getElementById("age").value;
    console.log("Age of User"+ age);
    localStorage.setItem("age", age);
    window.location="kwitter_room.html";
}