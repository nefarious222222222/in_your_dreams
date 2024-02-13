import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <a class="logo">IYD</a>
                    <i class='bx bx-menu' ></i>
                    
                    <nav class="links">
                        <a href="#featured">Featured</a>
                        <a href="#category">Category</a>
                        <a href="#special-offer">Special Offer</a>
                        <a href="#services">Services</a>
                    </nav>
                    <div class="login">
                        <button class="signup">Start Shopping</button>
                        <button>Login</button>
                    </div>
                </header>

                <section class="hero">
                    <div class="hero-left">
                        <h1 class="hero-title">In Your <span>Dreams</span></h1>
                        <p>Dare to stand out with In Your <span>Dreams</span> Clothing Line, where imagination meets fashion, turning your wildest style fantasies into reality.</p>
                        <p>Unleash your inner fashionista with In Your <span>Dreams</span> Clothing Line, Each piece embodies the characteristics of <span>dreamy</span> elegance and daring innovation.</p>
                        <a href="#">
                            <i class='bx bx-shopping-bag'></i>
                            <span>Buy Now</span>
                        </a>
                    </div>
                    <img src="assets/hero.jpg" alt="hero-image"/>
                </section>

                <section class="featured" id="featured">
                    <h2 class="featured-title">Featured</h2>

                    <div class="featured-container">
                        <div class="image-container">
                            <div class="image-collection">
                                <img class="main-image" src="assets/featured-1.jpg"/>
                                <div class="image-carousell">
                                    <img src="assets/featured-1.jpg"/>
                                    <img src="assets/featured-1.jpg"/>
                                    <img src="assets/featured-1.jpg"/>
                                    <img src="assets/featured-1.jpg"/>
                                </div>
                            </div>
                        </div>

                        <div class="text-container">
                            <h2>Description</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod diam vel arcu volutpat, nec pharetra libero hendrerit. Nullam aliquam nisi vitae lorem ullamcorper, vel scelerisque odio tincidunt. Integer ut risus eget nulla posuere vehicula. Proin consequat magna at nibh congue, sit amet vestibulum eros tempor.</p>
                        </div>
                    </div>
                </section>

                <section class="category" id="category">
                    <h2 class="category-title">Category</h2>

                    <div class="button-container">
                        <button>T-shirts</button>
                        <button>Longsleeves</button>
                        <button>Hodies</button>
                        <button>All</button>
                    </div>

                    <div class="card-container">
                        <div class="card">
                            <img src="assets/category-1.jpg" alt=""/>
                            <h4>Black Tee</h4>
                            <p>Medium Size</p>
                            <p>$19.99</p>
                            <button>Buy Now</button>
                        </div>

                        <div class="card">
                            <img src="assets/category-1.jpg" alt=""/>
                            <h4>Black Tee</h4>
                            <p>Medium Size</p>
                            <p>$19.99</p>
                            <button>Buy Now</button>
                        </div>

                        <div class="card">
                            <img src="assets/category-1.jpg" alt=""/>
                            <h4>Black Tee</h4>
                            <p>Medium Size</p>
                            <p>$19.99</p>
                            <button>Buy Now</button>
                        </div>

                        <div class="card">
                            <img src="assets/category-1.jpg" alt=""/>
                            <h4>Black Tee</h4>
                            <p>Medium Size</p>
                            <p>$19.99</p>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </section>

                <section class="special-offer" id="special-offer">
                    <h2 class="special-offer-title">Special Offer</h2>

                    <div class="text-container">
                        <h4>Exclusive Deal</h4>
                        <p>For first-time shoppers, revel in the exceptional with our special 30% discount, enhancing your inaugural experience with our premium clothing collection.</p>
                    </div>

                    <div class="carousell">
                        <i class='bx bxs-left-arrow' ></i>

                        <div class="image-container">
                            <img src="assets/special-offer-1.jpg" alt=""/>
                            <img src="assets/special-offer-2.jpg" alt=""/>
                            <img src="assets/special-offer-3.jpg" alt=""/>
                        </div>

                        <i class='bx bxs-right-arrow' ></i>
                    </div>
                </section>

                <section class="services" id="services">
                    <h2 class="services-title">Services</h2>

                    <div class="left">
                        <h4><span>Dreamy</span> Attire For <span>Dreamy</span> Souls</h4>
                        <p>
                            Are you yearning for the epitome of luxury, where comfort intertwines seamlessly with style? Allow us to transport you into a realm of premium craftsmanship, where every step is a journey of unparalleled elegance and refinement.</p>
                    </div>

                    <div class="right">
                        <div class="card-container">
                            <div class="card">
                                <div class="title-container">
                                    <i class='bx bx-package'></i>
                                    <h4>Shipping</h4>
                                </div>
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus non nulla efficitur condimentum.</p>
                            </div>

                            <div class="card">
                                <div class="title-container">
                                    <i class='bx bx-money' ></i>
                                    <h4>Secure Payment</h4>
                                </div>
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus non nulla efficitur condimentum.</p>
                            </div>

                            <div class="card">
                                <div class="title-container">
                                    <i class='bx bx-donate-heart' ></i>
                                    <h4>Passionate in assisting</h4>
                                </div>
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et risus non nulla efficitur condimentum.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="footer">
                    <div class="container">
                        <div class="left">
                            <h2>In Your Dreams</h2>
                            <p>Follow your dreams, and let your style speak volumes. Discover more at 'In Your Dreams' Clothing Co. #DreamClothing</p>
                        </div>
                
                        <div class="right">
                            <div class="container">
                                <h4>Contact</h4>
                                <p>+63 1234567890</p>
                                <p>inyourdreams@gmail.com</p>
                                <p>123 Dream Street, Serenityville, Cloud County, Wonderland</p>
                            </div>

                            <div class="container">
                                <h4>Social</h4>

                                <div class="text-container">
                                    <i class='bx bxl-facebook-square' ></i>
                                    <p>@InYourDreams</p>
                                </div>

                                <div class="text-container">
                                    <i class='bx bxl-twitter' ></i>
                                    <p>@InYourDreams</p>
                                </div>
                                
                                <div class="text-container">
                                    <i class='bx bxl-instagram-alt' ></i>
                                    <p>@InYourDreams</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bottom">
                        <p>Copyright © 2024 In Your Dreams. All rights reserved.</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;