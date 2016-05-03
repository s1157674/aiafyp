<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>AIA Form System</title>

    <!-- Bootstrap Core CSS -->
    <link rel="stylesheet" type="text/css" href="assets/bootstrap/css/bootstrap.min.css">
    
    <!-- Font Awesome CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
    
    
    <!-- Animate CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/animate.css">
    
    <!-- Owl-Carousel -->
    <link rel="stylesheet" type="text/css" href="assets/css/owl.carousel.css" >
    <link rel="stylesheet" type="text/css" href="assets/css/owl.theme.css" >
    <link rel="stylesheet" type="text/css" href="assets/css/owl.transitions.css" >

    <!-- Materialize CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/material.css">
    
    
    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="assets/css/responsive.css">
    
    <script src="bootstrap/jquery.min.js"></script>
    <script src="bootstrap/bootstrap.min.js"></script>

    <!-- Colors CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/color/blue.css" title="blue">
    

    <!-- Custom Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    
    
    <!-- Modernizer js -->
    <script src="assets/js/modernizr.custom.js"></script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <script> 
        $(document).ready(function(){                  
            $.ajax({
                type: "POST",
                url: "php/fillform.php",
                data:{action:"showroom", tableName:""},
                success: function (data) {
                    $("#formlist").html(data);
                    
                    $("#formlist").owlCarousel({
                            pagination: false,
                            navigation : true,
                            slideSpeed : 2500,
                            stopOnHover: true,
                            autoPlay: 3000,
                            singleItem:false,
                            itemsMobile : [550,1],
                            itemsDesktopSmall : [991,2],
                            items: 3,
                            transitionStyle : "fade",
                            navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']

                    });
                }
            });

            $.ajax({
                type: "POST",
                url: "php/formNumber.php",
                data:{action:"allform"},
                success: function (data) {
                    $('#allForm').html('<div class="timer" data-to="'+data+'" data-speed="500"></div>');
                }
            });
            
            $.ajax({
                type: "POST",
                url: "php/formNumber.php",
                data:{action:"enableform"},
                success: function (data) {
                    $('#enableForm').html('<div class="timer" data-to="'+data+'" data-speed="500"></div>');
                }
            });
            
        });
        
        function reply_click(clicked_id){
            $.ajax({
               type: "POST",
               url: "php/fillform.php",
                    data:{action:"select", tableName:clicked_id},
                    //contentType:"application/json",
                    success: function (data) {
                       location.href = "highuserFillform.php";
                    }
            });
        }  
        
        function Logout(){
            if (confirm("Are you sure to Logout?") == true) {
                location.href = "index.html";
            }else{

            }
        } 
    </script>
</head>

<body class="index">
    
    <!-- Start Off=Canvas Navigation Section -->
    <div class="menu-wrap">
		<nav class="menu">
			<div class="icon-list">
				<a href="#home" class="logo page-scroll waves-effect">Home Page</a>
				<a href="#client" class="page-scroll waves-effect"><i class="fa fa-fw fa-comment-o"></i><span>Fill Form</span></a>
				<a href="#contact" class="page-scroll waves-effect"><i class="fa fa-fw fa-envelope-o"></i><span>Comment</span></a>
                <a onclick="Logout()" class="page-scroll waves-effect"><i></i><span>Logout</span></a>
			</div>
		</nav>
		<button class="close-button" id="close-button">Close Menu</button>
	</div>
	<button class="menu-button waves-effect" id="open-button">Open Menu</button>
    <!-- End Off-Canvas Navigation Section -->
    
    
    <!-- ***************************************************************** -->
    <!-- Start Header Section -->
    <!-- ***************************************************************** -->
    <section class="header" id="home">
        <div class="container">
            <div class="intro-text">
                <h1>Welcome To The <span>AIA Form System</span></h1>
                <p>Easy To Manage Form!</p>
            </div>
        </div>
    </section>
    <!-- End Header Section -->   
    
    <!-- Start E - report Section -->
    <section class="fun-facts" id="e-report">
        <div class="container">
            <h1>E - report</h1>
            <div class="row">
                <a href="highuserSeeform.php">
                <div style="width:50%" class="col-xs-12 col-sm-6 col-md-3">
                  <div class="counter-item waves-effect">
                    <i class="fa fa-cloud-upload"></i>
                    <div id="allForm"></div>
                    <h5>Form uploaded</h5>                               
                  </div>
                </div>
                </a>
                <a href="highuserSelectform.php">
                <div style="width:50%" class="col-xs-12 col-sm-6 col-md-3">
                  <div class="counter-item waves-effect">
                    <i class="fa fa-check"></i>
                    <div id="enableForm"></div>
                    <h5>From created</h5>                               
                  </div>
                </div>
                </a>
            </div>
        </div>
    </section>
    <!-- End E - report Section -->    
    
    <!-- Start Intro -->
    <section class="call-to-action">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Our <strong>Form Filling System</strong> is <br> very very very good!</h1>
                </div>
            </div>
        </div>
    </section>
    <!-- End Intro -->     
    
    <!-- Start Fill Form Section -->
    <section id="client" class="client-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title text-center wow fadeInDown" data-wow-duration="2s" data-wow-delay="50ms">
                        <h2>Fill Form</h2>
                        <p>Choose The form</p>
                    </div>
                </div>
            </div>
            <div class="row">
                 
                <div class="col-md-12" id="formlist">
                    <div class="testimonial-section" >
                    </div>
                </div>
                
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section>
    <!-- End Fill Form Section -->
    
    
    
    
    <!-- Start Comment Section -->
    <section id="contact" class="contact contact-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center wow fadeInDown" data-wow-duration="2s" data-wow-delay="50ms">
                        <h2>Comment area</h2>
                        <p>Give us the comment to make it better!</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <form name="sentMessage" id="contactForm" novalidate>
                        <div class="row">
                            <div class="col-md-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="600ms">
                                <div class="form-group waves-effect">
                                    <input type="text" class="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group waves-effect">
                                    <input type="email" class="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address.">
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="form-group waves-effect">
                                    <input type="tel" class="form-control" placeholder="Your Phone *" id="phone" required data-validation-required-message="Please enter your phone number.">
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="col-md-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="600ms">
                                <div class="form-group waves-effect">
                                    <textarea class="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="col-lg-12 text-center">
                                <div id="success"></div>
                                <button type="submit" class="btn btn-primary waves-effect">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </section>
    
    
    
    
    
    
    <!-- jQuery Version 2.1.3 -->
    <script src="assets/js/jquery-2.1.3.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="assets/js/jquery.easing.1.3.js"></script>
    <script src="assets/js/classie.js"></script>
    <script src="assets/js/count-to.js"></script>
    <script src="assets/js/jquery.appear.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/jquery.fitvids.js"></script>

    <!-- Contact Form JavaScript -->
    <script src="assets/js/jqBootstrapValidation.js"></script>
    <script src="assets/js/contact_me.js"></script>

    <!-- Materialize js -->
    <script src="assets/js/material.js"></script>
    <script src="assets/js/waypoints.min.js"></script>

    <!-- Google Map -->
    <script src="https://maps.googleapis.com/maps/api/js"></script>
    <script src="assets/js/google-map-init.js"></script>

    <!-- Custom JavaScript -->
    <script src="assets/js/script.js"></script>
    
    
</body>
</html>
