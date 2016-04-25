<html>
<script src="scripts/jquery-2.1.3.js"></script>
<script>
	window.onload = function(){
		alert("Window.onload");
	}
	$(document).ready(function(){
		$.get("rest/user", function(data){
			var rowTemplate = $("#templates table").html();
			console.log(rowTemplate);
			for(index in data){
				var row = rowTemplate.replace("flight_no",data[index].id)
							.replace("airline",data[index].name)
							.replace("capacity",data[index].email);
				$("#flights").append(row);
			}
		});
	})
	

</script>

<body>
<div id="templates" style="display: none;">
	<table>
		<tr><td>flight_no</td><td>airline</td><td>capacity</td></tr>
	</table>
</div>
<table id="flights">
<tr><td>Flight No</td><td>Airline</td><td>Capacity</td></tr>
</table>
</body>
</html>
