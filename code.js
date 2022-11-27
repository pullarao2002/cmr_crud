<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <script>
      function AddRow()
    {
      var usernamee = document.getElementById("usernamee").value;
      var passwordd = document.getElementById("passwordd").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
      if (usernamee==""|| passwordd==""|| email==""|| phone=="") {
        return false;
      }
      else {
      google.script.run.AddRecord(usernamee,passwordd,email,phone);
      document.getElementById("page2_id1").className = "page2_id1-off";
      document.getElementById("page3_id1").className = "page3_id1";
     }
    }

     function LoginUser()
    {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    google.script.run.withSuccessHandler(function(output) 
    {
      if(output == 'TRUE')
      {
         document.getElementById("displayusername").innerHTML = username;
         document.getElementById("page1_id1").className = "page1_class1-off";
         document.getElementById("page4_id1").className = "page4_id1";    
      }
      else if(output == 'FALSE')
      {
        document.getElementById("errorMessage").innerHTML = "Invalid data";     
      }    
    }).checkLogin(username, password);
    }
    
function function1(){
    document.getElementById("page1_id1").className = "page1_class1-off";
    document.getElementById("page2_id1").className = "page2_id1";
}
 
function function3(){ 
  document.getElementById("page3_id1").className = "page3_id1-off";
  document.getElementById("page1_id1").className = "page1_id1"; 
}

  </script>
  <style>

/*page1*/
.page1_class1-off{
    display: none;
  }


/*page2*/
.page2_class1{
    display: none;
  }

.page2_id1-off{
    display:none;
}

/*page3*/
.page3_class1{
    display:none;

}
.page3_id1-off{
    display:none;
}

/*page4*/
.page4_class1{
    display:none;

}
.page4_id1-off{
    display:none;
}

input[type=text]:hover{
        border-bottom:2px solid black;
      }
input[type=number]:hover{
        border-bottom:2px solid black;
      }
input[type=password]:hover{
        border-bottom:2px solid black;
      }

.user{
display: inline-block;
width: 75px;
height: 75px;
border: 8px solid black;
border-radius: 50%;
position: relative;
overflow: hidden;
box-sizing: border-box;
}

/*the head/*/
.user::before{
content: '';
display: inline-block;
width: 24px;
height: 24px;
background: black;
border-radius: 50%;
position: absolute;
left: calc(50% - 11px);
top: 10px;
}

/*the body*/
.user::after{
content: '';
display: inline-block;
width:50px;
height:40px;
background: black;
border-radius: 50%;
position: absolute;
left: calc(50% - 24px);
top: 39px;
}

</style>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <br><br>
<!--page1-->
<center>
 <div class="page1_class1" id="page1_id1" style="background:none;border:2px solid gray;border-radius: 20px;width: 250px;padding-top: 10px;padding-bottom: 20px;padding-left: 20px;padding-right: 20px;"> 
    <h1>Login Form</h1>
    <br>
    <input type="text" id="username" placeholder="Username" style="border-top: none;border-right: none;border-left: none;outline: none; text-align: center;font-size:0.9em ;width: 50%;font-weight:bold;"/><br>
    <br>
    <input type="password" id="password" placeholder="Password" style="border-top: none;border-right: none;border-left: none;outline: none; text-align: center;font-size:0.9em ;width: 50%;font-weight:bold;"/>
    <br><span id="errorMessage" style="color: red" ></span><br>
    <input type="submit" value="Login" onclick="LoginUser()"  style="float: right;padding-top: 1px;padding-bottom: 1px;padding-left: 10px;padding-right: 10px;font-size: 0.9em;font-weight:bold;" /><br>
    <br>
    <b>If you don't have an account,</b><input type="button" onClick="function1()" value="Create New" style="margin-top: 5px;font-weight:bold;" />
 </div>

<!--page2-->
<div class="page2_class1" id="page2_id1" style="background:none;border:2px solid gray;border-radius: 20px;width: 250px;padding-top: 10px;padding-bottom: 20px;padding-left: 20px;padding-right: 20px;">
 <h1>Create Account</h1>
    <input type="text" id="usernamee" placeholder="Name" style="border-top: none;border-right: none;border-left: none;outline: none; text-align: center;font-size:0.9em ;width: 50%;font-weight:bold;"/><br>
    <br>
    <input type="password" id="passwordd" placeholder="Create password" style="border-top: none;border-right: none;border-left: none;outline: none; text-align: center;font-size: 0.9;width: 50%;font-weight:bold;" /><br>
        <br>
    <input type="text" id="email" placeholder="Email" style="border-top: none;border-right: none;border-left: none;outline: none; text-align: center;font-size:0.9em ;width: 50%;font-weight:bold;"/><br>
    <br>
    <input type="number" id="phone" placeholder="Phone no." style="border-top: none;border-right: none;border-left: none;outline: none; text-align: center;font-size:0.9em ;width: 50%;font-weight:bold;" /><br><br>
    <b style="color:red;">Password must contain letters and numbers. It will not work without letters and numbers.</b><br><br>
    <input type="submit" value="Create" onclick="AddRow()" style="float: right;padding-top: 1px;padding-bottom: 1px;padding-left: 10px;padding-right: 10px;font-size: 0.9em;font-weight:bold;" />
    <br>
</div>

<!--page3-->
 <div class="page3_class1" id="page3_id1" style="background:none;border:2px solid gray;border-radius: 20px;width: 250px;padding-top: 10px;padding-bottom: 20px;padding-left: 20px;padding-right: 20px;"><center>
    <h2> Your account has been successfully created. Login to your account</h2>
    <input type="submit"  onClick="function3()" value="Login" style="font-weight:bold;"><br>
 </div> 

<!--page4-->
<div class="page4_class1" id="page4_id1" style="background:none;border:2px solid gray;border-radius: 20px;width: 250px;padding-top: 10px;padding-bottom: 20px;padding-left: 20px;padding-right: 20px;" ><center>
    <br>
    <h2>Hi <b id="displayusername" style="color:red;"></b>!</h2>
    <div class="user"></div>
    <h2> You are successfully logged in.</h2>
    <h2>**************</h2>
    <br>
  </div>
</center>
  </body>
</html>