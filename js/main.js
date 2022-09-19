class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <!-- mobile header -->
<div class="mobile-header py-2 px-3 mt-4">
    <button class="menu-icon mr-2">
        <span></span>
        <span></span>
        <span></span>
    </button>
    <a href="index.html" class="logo"><img src="./images/2.png" alt="Ken" /></a>
    <a href="index.html" class="site-title dot ml-2">Bako Doe</a>
</div>

<!-- header -->
<header class="left float-left shadow-dark" id="header">
    <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    <div class="header-inner d-flex align-items-start flex-column">
        <a href="index.html"><img src="./images/2.png" alt="Lin Kah Kiat" /></a>
        <a href="index.html" class="site-title dot mt-3">Lin Kah Kiat</a>
	<span class="site-slogan">System Engineer</span>
        <span class="site-slogan">Software Engineer</span>
        <span class="site-slogan">Web Application Developer</span>
        
        <!-- navigation menu -->
        <nav>
            <ul class="vertical-menu scrollspy">
                <li><a href="#" class="active"><i class="icon-home"></i>Home</a></li>
                <li><a href="#about"><i class="icon-user"></i>About</a></li>
                <li><a href="#programming"><i class="icon-bulb"></i>Programming Skills</a></li>
                <li><a href="#technical"><i class="icon-bulb"></i>Technical Skills</a></li>
                <li><a href="#education"><i class="icon-graduation"></i>Eduction</a></li>
                <li><a href="#experience"><i class="icon-briefcase"></i>Experience</a></li>
                <li><a href="#works"><i class="icon-grid"></i>Project/Works</a></li>
                <li><a href="#awards"><i class=" icon-trophy"></i>Awards/Certificates</a></li>
                <li><a href="#contact"><i class="icon-phone"></i>Contact</a></li>
            </ul>
        </nav>
        
        <!-- footer -->
        <div class="footer mt-auto">

            <!-- social icons 
            <ul class="social-icons list-inline">
                <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fab fa-dribbble"></i></a></li>
            </ul>
            -->
            <!-- copyright -->
            <span class="copyright">© 2022 Ken Lin</span>
        </div>
    </div>
</header>
        
        `
    }
}
customElements.define('my-header',MyHeader)


class MyHeader2 extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <!-- mobile header -->
	<div class="mobile-header py-2 px-3 mt-4">
		<button class="menu-icon mr-2">
			<span></span>
			<span></span>
			<span></span>
		</button>
		<a href="index.html" class="logo"><img src="./images/2.png" alt="Ken" /></a>
		<a href="index.html" class="site-title dot ml-2">Bako Doe</a>
	</div>

    <!-- header -->
	<header class="left float-left shadow-dark" id="header">
		<button type="button" class="close" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
		<div class="header-inner d-flex align-items-start flex-column">
			<a href="index.html"><img src="./images/2.png" alt="Lin Kah Kiat" /></a>
			<a href="index.html" class="site-title dot mt-3">Lin Kah Kiat</a>
			<span class="site-slogan">System Engineer</span>
            		<span class="site-slogan">Software Engineer</span>
			<span class="site-slogan">Web Application Developer</span>
            
            <!-- navigation menu -->
			<nav>
				<ul class="vertical-menu scrollspy">
                    <li><a href="index.html#"><i class="icon-home"></i>Home</a></li>
                    <li><a href="index.html#about"><i class="icon-user"></i>About</a></li>
                    <li><a href="index.html#programming"><i class="icon-bulb"></i>Programming Skills</a></li>
                    <li><a href="index.html#technical"><i class="icon-bulb"></i>Technical Skills</a></li>
                    <li><a href="index.html#education"><i class="icon-graduation"></i>Eduction</a></li>
                    <li><a href="index.html#experience"><i class="icon-briefcase"></i>Experience</a></li>
                    <li><a href="index.html#works"><i class="icon-grid"></i>Project/Works</a></li>
                    <li><a href="index.html#awards"><i class=" icon-trophy"></i>Awards/Certificates</a></li>
                    <li><a href="index.html#contact"><i class="icon-phone"></i>Contact</a></li>
				</ul>
			</nav>
            
            <!-- footer -->
			<div class="footer mt-auto">
                <!-- social icons -->
				<ul class="social-icons list-inline">
					<li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
					<li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
					<li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
					<li class="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
					<li class="list-inline-item"><a href="#"><i class="fab fa-dribbble"></i></a></li>
                </ul>
                <!-- copyright -->
				<span class="copyright">© 2022 Ken Lin</span>
			</div>
		</div>
	</header>
        
        `
    }
}
customElements.define('my-header2',MyHeader2);



