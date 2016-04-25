var blog = {};
blog.id = 10; //dummy as it's primary key no need to provide it
function displayUsername()
{
	var username = sessionStorage.getItem('username');
	document.getElementById('username').innerText = 'Welcome ' + username + '!';
	blog.username = username;
}

function postBlogContents()
{
	var pwd_diveelem = document.getElementById('pwd');
	blog.title = document.forms["blog"]["blogtitle"].value;
	blog.contents = document.forms["blog"]["blogpost"].value;

	postdata('blog',blog,postErrorCallback,postValidateBlog,postDoneCallback);
	return false;
}

function postValidateBlog(data,action)
{
	console.log("SUCCESS: ", data);
	if(action === 'blog' && data === true) {
		navFromBlogPost();
	}
	else if(action === 'blog' && data === false) {
		displayerror('blog',"***Could not post these Blog Contents");
	}
}

function navFromBlogPost()
{
	console.log('navToBlogPage');
	document.getElementById('blogform').submit();
}

function displayerror(action,errormessage)
{
	var divelem;
	if(action === 'blog')
		divelem = document.getElementById('blogerror');
	divelem.innerText = errormessage;
	divelem.style.display = "block";
}

