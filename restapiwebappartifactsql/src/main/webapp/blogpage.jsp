<!DOCTYPE html>
<html>
<script src="scripts/jquery-2.1.3.js" type="text/javascript" charset="utf-8"/></script>
<script src="scripts/util.js" type="text/javascript" charset="utf-8"/></script>
<script src="scripts/blogscript.js" type="text/javascript" charset="utf-8"/></script>
<head>
	<title>CMADAPP BlogPage</title>
<link rel="stylesheet" href="styles/blogstyle.css">
</head>
<body onload = "displayUsername()">
	<section class="loginform cf">
		<form name="blog" id = "blogform" accept-charset="utf-8" onsubmit="return validateSignUpForm()" method="post">
			<ul>

				<li>
					<label id = "username" for="username" style="font-weight: bold;"">UserName</label>
					<br>
						<br>
						</br>
					</br>
						
				</li>
				<li>
					<label for="blogtitle" style="font-weight: bold;">BlogTitle</label>
					<input style="width:85%" type="text" name="blogtitle" placeholder="Your Blog's Title goes here!!!" required>
					<br>
						<br>
						</br>
					</br>
				</li>

				<li>
					<label for="blogpost" style="font-weight: bold;">Blog Post</label>
					<input style="width:85%; height: 250px" type="text" name="blogpost" placeholder="Your Blog's post goes here!!!" required>
				</li>

				<li>
					<input type="submit" value="Post">
					<div id = "blogerror" style="display: none;font-size: 18px;color: red;">
 				</li>
			</ul>
		</form>
	</section>
</body>
</html>