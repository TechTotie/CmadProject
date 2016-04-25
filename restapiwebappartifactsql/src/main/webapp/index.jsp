<!DOCTYPE html>
<html>
<script src="scripts/jquery-2.1.3.js" type="text/javascript" charset="utf-8"/></script>
<script src="scripts/util.js" type="text/javascript" charset="utf-8"/></script>
<script src="scripts/userlogin.js" type="text/javascript" charset="utf-8"/></script>
<head>
	<title>CMADAPP Login</title>
<!-- 	<link rel="stylesheet" href="normalize.css">
 -->	<link rel="stylesheet" href="styles/style.css">
</head>
<body>
	<section class="loginform cf">
		<form name="login" id = "loginform" accept-charset="utf-8" onsubmit="return validateLoginForm()" method="post" action="blogpage.jsp">
			<ul>

				<li>
					<label for="username" style="font-weight: bold">UserName</label>
					<input type="username" name="username" oninput = "clearerror('login')" placeholder="username" required>
				</li>

				<li>
					<label for="password" style="font-weight: bold">Password</label>
					<input type="password" name="password" oninput = "clearerror('login')" placeholder="password" required>
					<br>
					</br>
					<div id = "pwd" style="display: none;font-size: 18px;color: red;">
					</div>
				</li>

<!-- 				<li>
				<font size="3" color="red">Not a member !!! </font>
				</li>
 -->
				<li>
					<input type="submit" value="Login">
                    <p>
						<font size="4" >Not a member yet ? </font>
						<a href="./register.jsp" class="signup">Join us</a>
					</p>
				</li>

				<!-- <li> -->
					<!-- <input type="submit" value="SignUp"> -->
				<!-- </li> -->


			</ul>
		</form>
	</section>
</body>
</html>