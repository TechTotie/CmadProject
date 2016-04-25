<!DOCTYPE html>
<html>
<script src="scripts/jquery-2.1.3.js" type="text/javascript" charset="utf-8"/></script>
<script src="scripts/util.js" type="text/javascript" charset="utf-8"/></script>
<script src="scripts/userlogin.js" type="text/javascript" charset="utf-8"/></script>
<head>
	<title>CMADAPP Register</title>
<!-- 	<link rel="stylesheet" href="normalize.css">
 -->	<link rel="stylesheet" href="styles/style.css">
</head>
<body>
	<section class="loginform cf">
		<form name="signup" id = "signupform" accept-charset="utf-8" onsubmit="return validateSignUpForm()" method="post" action="blogpage.jsp">
			<ul>

				<li>
					<label for="username"  style="font-weight: bold">UserName</label>
					<input type="username" name="username" oninput = "clearerror('signup')" placeholder="username" required>
				</li>

				<li>
					<label for="password"  style="font-weight: bold">Password</label>
					<input type="password" name="password" oninput = "clearerror('signup')" placeholder="password" required>
				</li>

				<li>
					<label for="password"  style="font-weight: bold">Confirm Password</label>
					<input type="password" name="confirmpassword" oninput = "clearerror('signup')" placeholder="password" required>
					<div id = "cnfmpwd" style="display: none;font-size: 18px;color: red;">
					</div>
				</li>

				<li>
					<input type="submit" value="SignUp">
                    <p>
						<font size="4" >Already a member !!! </font>
						<a href="./index.jsp" class="signup">Login</a>
					</p>
 				</li>
			</ul>
		</form>
	</section>
</body>
</html>