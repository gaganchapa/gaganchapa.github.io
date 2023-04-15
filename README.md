<!DOCTYPE html>
<html lang="en">

<head>
    <script src="https://code.responsivevoice.org/responsivevoice.js"></script>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Website</title>
    <!-- for icons  -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <!-- bootstrap  -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <!-- custom css  -->
    <link rel="stylesheet" href="style.css">
    <script src="//code.responsivevoice.org/responsivevoice.js"></script>
  <script src="https://code.responsivevoice.org/responsivevoice.js?key=voCTLB83"></script>
  <link rel="stylesheet" href="styling.css">
</head>

<body class="body-fixed">
    <div id="viewport">
        <div id="js-scroll-content">
            <button id="speakBtn">Speak</button>

            <section style="background-image: url(assets/images/menu-bg.png);"
                class="our-menu section bg-light repeat-img" id="menu">
                <div class="sec-wp">
                    <div class="container">
                        <div class="menu-tab-wp">
                            <div class="row">
                                <div class="col-lg-12 m-auto">
                                    <div class="menu-tab text-center">
                                        <ul class="filters">
                                            <div class="filter-active"></div>
                                            <li class="filter" data-filter=".breakfast" onclick="responsiveVoice.speak('Breakfast');">
                                                <img src="assets/images/menu-2.png" alt="">
                                                Breakfast
                                            <li class="filter" data-filter=".lunch" onclick="responsiveVoice.speak('You have panner noodles and chicken noodles in lunch');">
                                                <img src="assets/images/menu-3.png" alt="">
                                                Lunch
                                                
                                            </li>
                                            <li class="filter" data-filter=".Snacks" onclick="responsiveVoice.speak('Snacks');">
                                                <img src="assets/images/burgir.png" alt="">
                                                Snacks
                                            </li>
                                            <li class="filter" data-filter=".dinner" onclick="responsiveVoice.speak('Dinner');">
                                                <img src="assets/images/menu-4.png" alt="">
                                                Dinner
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="menu-list-row">
                            <div class="row g-xxl-5 bydefault_show" id="menu-dish">
                                <div class="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
                                    <div class="dish-box text-center">
                                        <div class="dist-img">
                                            <img src="assets/images/dish/1.png" alt="">
                                        </div>
                                        
                                        <div class="dish-title">
                                            <h3 class="h3-title">Fresh Chicken Veggies</h3>
                                        </div>
                                        
                                        <div class="dist-bottom-row">
                                            <ul>
                                                <li>
                                                    <button class="cssbuttons-io-button" > Eat Now
                                                        <div class="icon">
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                                                        </div>
                                                      </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <!-- 2 -->
                                <div class="col-lg-4 col-sm-6 dish-box-wp breakfast" data-cat="breakfast">
                                    <div class="dish-box text-center">
                                        <div class="dist-img">
                                            <img src="assets/images/dish/2.png" alt="">
                                        </div>
                                        
                                        <div class="dish-title">
                                            <h3 class="h3-title">Grilled Chicken</h3>
                                           
                                        </div>
                                        
                                        <div class="dist-bottom-row">
                                            <ul>
                                                
                                                <li>
                                                    <button class="cssbuttons-io-button" > Eat Now
                                                        <div class="icon">
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                                                        </div>
                                                      </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!-- 3 -->
                                <div class="col-lg-4 col-sm-6 dish-box-wp lunch" data-cat="lunch">
                                    <div class="dish-box text-center">
                                        <div class="dist-img">
                                            <img src="assets/images/dish/3.png" alt="">
                                        </div>
                                       
                                        <div class="dish-title">
                                            <h3 class="h3-title">Panner Noodles</h3>
                                            
                                        </div>
                                        
                                        <div class="dist-bottom-row">
                                            <ul>
                                                
                                                <li>
                                                    <button class="cssbuttons-io-button" > Eat Now
                                                        <div class="icon">
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                                                        </div>
                                                      </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <!-- 4 -->
                                <div class="col-lg-4 col-sm-6 dish-box-wp lunch" data-cat="lunch">
                                    <div class="dish-box text-center">
                                        <div class="dist-img">
                                            <img src="assets/images/dish/4.png" alt="">
                                        </div>
                                        
                                        <div class="dish-title">
                                            <h3 class="h3-title">Chicken Noodles</h3>
                                            
                                        </div>
                                        
                                        <div class="dist-bottom-row">
                                            <ul>
                                                
                                                <li>
                                                    <button class="cssbuttons-io-button" > Eat Now
                                                        <div class="icon">
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                                                        </div>
                                                      </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <!-- 5 -->
                                <div class="col-lg-4 col-sm-6 dish-box-wp dinner" data-cat="dinner">
                                    <div class="dish-box text-center">
                                        <div class="dist-img">
                                            <img src="assets/images/dish/5.png" alt="">
                                        </div>
                                        
                                        <div class="dish-title">
                                            <h3 class="h3-title">Bread Boiled Egg</h3>
                                            
                                        </div>
                                        
                                        <div class="dist-bottom-row">
                                            <ul>
                                                
                                                <li>
                                                    <button class="cssbuttons-io-button" > Eat Now
                                                        <div class="icon">
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                                                        </div>
                                                      </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!-- 6 -->
                                <div class="col-lg-4 col-sm-6 dish-box-wp dinner" data-cat="dinner">
                                    <div class="dish-box text-center">
                                        <div class="dist-img">
                                            <img src="assets/images/dish/6.png" alt="">
                                        </div>
                                        
                                        <div class="dish-title">
                                            <h3 class="h3-title">Immunity Dish</h3>
                                            
                                        </div>
                                        
                                        <div class="dist-bottom-row">
                                            <ul>
                                                
                                                <li>
                                                    <button class="cssbuttons-io-button" > Eat Now
                                                        <div class="icon">
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                                                        </div>
                                                      </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!-- <7> -->
                                <div class="col-lg-4 col-sm-6 dish-box-wp Snacks" data-cat="Snacks">
                                    <div class="dish-box text-center">
                                        <div class="dist-img">
                                            <img src="assets/images/pizza.png" alt="">
                                        </div>
                                        
                                        <div class="dish-title">
                                            <h3 class="h3-title">Pizza</h3>
                                            
                                        </div>
                                       
                                        <div class="dist-bottom-row">
                                            <ul>
                                                
                                                <li>
                                                    <button class="cssbuttons-io-button" > Eat Now
                                                        <div class="icon">
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                                                        </div>
                                                      </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <!-- 8 -->
                                <div class="col-lg-4 col-sm-6 dish-box-wp Snacks" data-cat="Snacks">
                                    <div class="dish-box text-center">
                                        <div class="dist-img">
                                            <img src="assets/images/fries.png" alt="">
                                        </div>
                                        <!-- <div class="dish-rating">
                                            5
                                            <i class="uil uil-star"></i>
                                        </div> -->
                                        <div class="dish-title">
                                            <h3 class="h3-title">French Fries</h3>
                                            <!-- <p>120 calories</p> -->
                                        </div>
                                        <!-- <div class="dish-info">
                                            <ul>
                                                <li>
                                                    <p>Type</p>
                                                    <b>Non Veg</b>
                                                </li>
                                                <li>
                                                    <p>Persons</p>
                                                    <b>2</b>
                                                </li>
                                            </ul>
                                        </div> -->
                                        <div class="dist-bottom-row">
                                            <ul>
                                                <!-- <li>
                                                    <b>Rs. 499</b>
                                                </li> -->
                                                <li>
                                                    <!-- <button class="dish-add-btn">
                                                        <i class="uil uil-plus"></i>
                                                    </button> -->
                                                    <button class="cssbuttons-io-button" > Eat Now
                                                        <div class="icon">
                                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                                                        </div>
                                                      </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    <form action="waste.html">
    <button id="hi">click</button>
    </form>
    <script src="all.js"></script>

    <!-- jquery  -->
    <script src="assets/js/jquery-3.5.1.min.js"></script>
    <!-- bootstrap -->
    <script src="assets/js/bootstrap.min.js"></script>
    <!-- <script src="assets/js/popper.min.js"></script> -->

    <!-- fontawesome  -->
    <!-- <script src="assets/js/font-awesome.min.js"></script> -->

    <!-- swiper slider  -->
    <script src="assets/js/swiper-bundle.min.js"></script>

    <!-- mixitup -- filter  -->
    <script src="assets/js/jquery.mixitup.min.js"></script>

    <!-- fancy box  -->
    <!-- <script src="assets/js/jquery.fancybox.min.js"></script> -->

    <!-- parallax  -->
    <!-- <script src="assets/js/parallax.min.js"></script> -->

    <!-- gsap  -->
    <script src="assets/js/gsap.min.js"></script>

    <!-- scroll trigger  -->
    <!-- <script src="assets/js/ScrollTrigger.min.js"></script> -->
    <!-- scroll to plugin  -->
    <!-- <script src="assets/js/ScrollToPlugin.min.js"></script> -->
    <!-- rellax  -->
    <!-- <script src="assets/js/rellax.min.js"></script> -->
    <!-- <script src="assets/js/rellax-custom.js"></script> -->
    <!-- smooth scroll  -->
    <script src="assets/js/smooth-scroll.js"></script>
    <!-- custom js  -->
    <script src="main.js"></script>
</body>

</html>
