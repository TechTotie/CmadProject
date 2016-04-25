var divMap = {};
(function()
{
	console.log('initDivMap');
	divMap['login']='pwd';
	divMap['signup']='cnfmpwd';
	divMap['blog']='blogerror';

})();

function clearerror(action)
{
	var divelem;
	divelem = document.getElementById(divMap[action]);
	divelem.style.display = "none";	
}

function checkifNaN(str)
{
	for (var i = str.length - 1; i >= 0; i--) {
		if(!isNaN(str[i])) {
				return false;
			}
	}
	return true;
}

function postErrorCallback(err)
{
	console.log("Error: "+err);
}


function postDoneCallback(data)
{
	console.log("Done: "+data);
}


function postdata(action,data,errorcb,successcb,donecb)
{
	// var data = {id:10,username:"User3",password:"password3"};
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "rest/user/"+action,
		data : JSON.stringify(data),
		dataType : 'json',
		timeout : 100000,
		success : function(data){
					console.log('postdata success callback '+data);
					successcb(data,action)
				},
		error : function(e){
					console.log('postdata error callback '+e);
					errorcb(err)
				},
		done : function(e){
					console.log('postdata done callback '+e);
					donecb(done)
				}
	});
}

function displayerror(action,errormessage)
{
	var divelem;
	divelem = document.getElementById(divMap[action]);
	divelem.innerText = errormessage;
	divelem.style.display = "block";
}

function getdata(url,successcb)
{
	$.get("rest/user"+url, function(data){
		successcb(data);
	});
}
