var user = {};
user.id = 10; //dummy as it's primary key no need to provide it
var LoggingTimer;
function validateLoginForm()
{
	var pwd_diveelem = document.getElementById('pwd');
	user.username = document.forms["login"]["username"].value;
	user.password = document.forms["login"]["password"].value;

	if(user.password.length < 6) {
		displayerror('login',"*** Invalid Password");
		return false;
	}
	LoggingIn();
	postdata('login',user,postErrorCallback,postValidateLoginSignup,postDoneCallback);
	return false;
}

function LoggingIn()
{
	var count = 0;
	var message = 'Logging In';
	var dots = '';
	LoggingTimer = setInterval(function(){
		// for (var i = 0; i < count; i++) {
		// }
		if(count == 5) {
			count = 0;
			message = 'Logging In';
			dots = '';
		}
		else {
			count++;
			dots += ' . '; 
		}
		message += dots;
		displayerror('login',message);		
	}, 500);
	
}


function postValidateLoginSignup(data,action)
{
	clearTimeout(LoggingTimer);
	console.log("SUCCESS: ", data);
	if(action === 'login' && data === true) {
		navToBlogPage();
		return true;
	}
	else if(action === 'login' && data === false) {
		displayerror('login','Invalid username or password');
	}
	else if(action === 'signup' && data === true) {
		navToNewUserBlogPage();
		return true;
	}
	else if(action === 'signup' && data === false) {
		displayerror('signup','User already exists');
	}
}

function validateSignUpForm()
{
	var	pass = false;

	var cnfmpwd_diveelem = document.getElementById('cnfmpwd');

	user.username = document.forms["signup"]["username"].value;
	user.password = document.forms["signup"]["password"].value;
	user.cnfmpassword = document.forms["signup"]["confirmpassword"].value;

	if(user.password !== user.cnfmpassword)	{
		displayerror('signup',"*** Passwords don't match");
	} else if(user.password.length < 6) {
		displayerror('signup',"*** Password too small min 6 chars");
	} else if(user.password.length > 15) {
		displayerror('signup',"*** Password too large max 15 chars");
	} else if(checkifNaN(user.password)) {
		displayerror('signup',"*** Password should contain at-least 1 number");
	} else {
		pass = true;
		delete user['cnfmpassword'];
		postdata('signup',user,postErrorCallback,postValidateLoginSignup,postDoneCallback);
		return false;
	}
	if(!pass) {
		cnfmpwd_diveelem.style.display = "block";
		return false;
	}
}

function printusers(data)
{
	console.log('printusers');
	for(index in data){
		console.log('user_id['+index+']'+data[index].id);
		console.log('user_name['+index+']'+data[index].username);
		console.log('user_password['+index+']'+data[index].password);
	}

}

function navToBlogPage()
{
	console.log('navToBlogPage');
	sessionStorage.setItem('username',user.username);
	document.getElementById('loginform').submit();
}

function navToNewUserBlogPage()
{
	console.log('navToNewUserBlogPage');
	sessionStorage.setItem('username',user.username);
	document.getElementById('signupform').submit();
}

