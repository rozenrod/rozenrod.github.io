<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta charset="windows-1251">
	<!-- <meta name="theme-color" content="#F44336"> -->
	<meta name="theme-color" content="#333">
	<title>Rozenrod &#8212; Вау! У нас есть сайт!</title>
	<link href="img/favicon.ico" rel="shortcut icon" type="image/x-icon" />
	<meta name="description" content="Официальный сайт. Новости, видео, обсуждения." />
	<meta name="keywords" content="Rozenrod, it, сайт, визитка, rosenrot, Rozenrod.com, Rozenrod.pro" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Шрифт-->
	<link href="https://fonts.googleapis.com/css?family=Arimo:400i" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed|Russo+One|Oleo+Script" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet">
	<!--Bootstrap-->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	<!-- CSS -->
	<link href="css/main.css" rel="stylesheet" type="text/css">
	<link href="css/media.css" rel="stylesheet" type="text/css">
	<link href="libs/animate.min.css" rel="stylesheet">
	<!-- <link href="css/light.css" rel="stylesheet" type="text/css">  -->
</head>

<body>
	<!-- <div class="loader">
		<div class="loader_inner"></div>
	</div> -->

	<div style="background: #2f2f2f">
		<header class="header">
			<div class="logo">
				<!-- <a href=""><img src="img/logo.svg" /></a> -->
				<a href="https://rozenrod.pro" title="ROZENROD">ROZENROD</a>
			</div>

			<div class="menu">
				<a href="https://rozenrod.pro#contact">Контакты</a>
				<a href="https://rozenrod.pro#project">Работы</a>
				<a href="https://rozenrod.pro#scale">Навыки</a>
			</div>
			<div class="menu-button">
	            <i class="menu_buttom">
	                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24" enable-background="new 0 0 24 24">
	                    <g>
	                        <path d="M24,3c0-0.6-0.4-1-1-1H1C0.4,2,0,2.4,0,3v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3z"/>
	                        <path d="M24,11c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V11z"/>
	                        <path d="M24,19c0-0.6-0.4-1-1-1H1c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V19z"/>
	                    </g>
	                </svg>
	            </i>
	        </div>
		</header>

		<div class="main_head menu_little">
			<div class="top_wrapper">
				<div class="top_descr">
					<div class="top_centered">
						<div class="top_text">
							<nav class="menu_button_a fadeInUp animated">
								<ul>
									<li><a href="https://rozenrod.pro#scale">Навыки</a></li>
									<li><a href="https://rozenrod.pro#project">Работы</a></li>
									<li><a href="https://rozenrod.pro#contact">Контакты</a></li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>

		 <div class="header_color"></div> <!-- Для фиксации блока -->
	</div>



		<center>
			<a name="project"></a>
			<div class="content" style="background: #ededed;">
				<div class="title">Работы</div>
				<div class="block_content" style="white-space: inherit;">

					<?php
						include ('admin/php/database.php');
						$query = mysql_query("SELECT * FROM article ORDER BY id DESC");
						$row = mysql_fetch_array($query);
						do {
							echo '
							<div class="slide-item">
								<div class="project">
									<img src="img/project/'.$row{"img"}.'"/>
									<div class="detail_project">
										<span class="name">'.$row{"name"}.'</span><br />
										<span class="text">'.$row{"text"}.'</span>
										<a target="_blank" href="'.$row{"href"}.'">Перейти</a>
									</div>
								</div>
							</div>
							';
						} while($row = mysql_fetch_array($query));
					?>

				</div>
			</div>
		</center>


	<footer>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			© 2016 – 2018 Rozenrod inc. Все права защищены!
		</div>
	</footer>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="libs/parallax/parallax.min.js"></script>
	<script src="https://use.fontawesome.com/d760793044.js"></script>
	<script src="js/form.js"></script>
	<script src="js/common.js"></script>
	<script src="libs/animate-css.js"></script>

</body>

</html>
