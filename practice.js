
var firebaseConfig = {
    apiKey: "AIzaSyD6Mq7NuofSh7naRBnT0Y78Vv7FYqqems8",
    authDomain: "social-web-practice-activity.firebaseapp.com",
    databaseURL: "https://social-web-practice-activity-default-rtdb.firebaseio.com",
    projectId: "social-web-practice-activity",
    storageBucket: "social-web-practice-activity.appspot.com",
    messagingSenderId: "828605721602",
    appId: "1:828605721602:web:24ebbf5eba63511a0e8b1b"
  };
  
  
   firebase.initializeApp(firebaseConfig);

   function addUser(){
       user_name= document.getElementById("user_name").value;
       DOB = document.getElementById("DOB").value;
       Email= document.getElementById("Email").value;
       Phone_Number = document.getElementById("Phone_Number").value;
       Address= document.getElementById("Address").value;
       firebase.database().ref("/").child(user_name).update({
           name: user_name,
           DOB:DOB,
           Email:Email,
           Phone_Number:Phone_Number,
           Address:Address
       });
   }