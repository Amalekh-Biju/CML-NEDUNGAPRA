const template = document.createElement('template');
template.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-dark-grayscale"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tablevalues="0 0.498039215686"></fefuncr><fefuncg type="table" tablevalues="0 0.498039215686"></fefuncg><fefuncb type="table" tablevalues="0 0.498039215686"></fefuncb><fefunca type="table" tablevalues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-grayscale"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tablevalues="0 1"></fefuncr><fefuncg type="table" tablevalues="0 1"></fefuncg><fefuncb type="table" tablevalues="0 1"></fefuncb><fefunca type="table" tablevalues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-yellow"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tablevalues="0.549019607843 0.988235294118"></fefuncr><fefuncg type="table" tablevalues="0 1"></fefuncg><fefuncb type="table" tablevalues="0.717647058824 0.254901960784"></fefuncb><fefunca type="table" tablevalues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-red"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tablevalues="0 1"></fefuncr><fefuncg type="table" tablevalues="0 0.278431372549"></fefuncg><fefuncb type="table" tablevalues="0.592156862745 0.278431372549"></fefuncb><fefunca type="table" tablevalues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-midnight"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tablevalues="0 0"></fefuncr><fefuncg type="table" tablevalues="0 0.647058823529"></fefuncg><fefuncb type="table" tablevalues="0 1"></fefuncb><fefunca type="table" tablevalues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-magenta-yellow"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tablevalues="0.780392156863 1"></fefuncr><fefuncg type="table" tablevalues="0 0.949019607843"></fefuncg><fefuncb type="table" tablevalues="0.352941176471 0.470588235294"></fefuncb><fefunca type="table" tablevalues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-green"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tablevalues="0.650980392157 0.403921568627"></fefuncr><fefuncg type="table" tablevalues="0 1"></fefuncg><fefuncb type="table" tablevalues="0.447058823529 0.4"></fefuncb><fefunca type="table" tablevalues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-orange"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tablevalues="0.0980392156863 1"></fefuncr><fefuncg type="table" tablevalues="0 0.662745098039"></fefuncg><fefuncb type="table" tablevalues="0.847058823529 0.419607843137"></fefuncb><fefunca type="table" tablevalues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><div id="container">

	<a class="skip-link screen-reader-text" href="#site-main">Skip to content</a>
	<header class="site-header" role="banner"><div class="wrapper wrapper-header">

			<div id="site-branding">
				<a href="./../index.html" class="custom-logo-link" rel="home"><img height="2080" width="2927" src="./../wp-content/uploads/Website Logo.svg" class="custom-logo" alt="Logo for Cherupushpa Mission League (CML) Nedungapra" loading="eager"></a>			</div>
				<!-- #site-branding -->
			<div id="site-header-navigation">

				<span id="site-mobile-menu-toggle">
	<button class="site-toggle-anchor">
		<span class="site-toggle-icon site-toggle-icon-open is-visible icon-icomoon ilovewp-icon-bars"></span>
		<span class="site-toggle-label site-toggle-label-open is-visible">Menu</span>
		<span class="site-toggle-icon site-toggle-icon-close icon-icomoon ilovewp-icon-bars"></span>
		<span class="site-toggle-label site-toggle-label-close">Menu</span>
	</button><!-- .site-toggle-anchor -->
</span><!-- #site-mobile-menu-toggle --><div id="site-mobile-menu">
	<div class="menu-wrapper">

				<nav class="mobile-menu" aria-label="Mobile Menu"><ul id="menu-main" class="menu">
<li id="menu-item-80" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-80"><a href="./../">Home</a></li>
<li id="menu-item-110" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-110"><a href="./../about-us/">About Us</a></li>
<li id="menu-item-159" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-159">
	<a href="#">Completed Events</a><button class="sub-menu-toggle toggle-anchor"><span class="screen-reader-text">Show sub menu</span><i class="icon-icomoon ilovewp-icon-chevron-down"></i></button>
		<ul class="sub-menu">
			<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-159">
				<a href="#">2021-22</a><button class="sub-menu-toggle toggle-anchor"><span class="screen-reader-text">Show sub menu</span><i class="icon-icomoon ilovewp-icon-chevron-down"></i></button>
				<ul class="sub-menu">
					<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-153"><a href="./../q1-2021-22/">Q1 2021-22</a></li>
					<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-166"><a href="./../q2-2021-22/">Q2 2021-22</a></li>
					<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-166"><a href="./../q3-2021-22/">Q3 2021-22</a></li>
				</ul>
			<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-159">
				<a href="#">2022-23</a><button class="sub-menu-toggle toggle-anchor"><span class="screen-reader-text">Show sub menu</span><i class="icon-icomoon ilovewp-icon-chevron-down"></i></button>
				<ul class="sub-menu">
					<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-163"><a href="./../q1-2022-23/">Q1 2022-23</a></li>
					<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-163"><a href="./../q2-2022-23/">Q2 2022-23</a></li>
					<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-163"><a href="./../q3-2022-23/">Q3 2022-23</a></li>
				</ul>
		</ul>
		</li>
		<li id="menu-item-38" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-38"><a href="https://yvbq7-my.sharepoint.com/:f:/g/personal/mail_amalekhbiju_ml/Ek5UH4NL50NHsSXMUpJ2mxoBShee4Oze3VSo-X9SzWiaJw?e=k6X03P">Photos</a></li>
<li id="menu-item-51" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51"><a href="./../action-plan/">Action Plan</a></li>
</ul></nav><!-- .mobile-menu -->
</div>
<!-- .menu-wrapper -->
</div>
<!-- #site-mobile-menu -->	
									<div id="site-header-search">
						<div id="zoom-social-icons-widget-2" class="widget zoom-social-icons-widget">
<p class="widget-title">Follow us</p>
		
<ul class="zoom-social-icons-list zoom-social-icons-list--with-canvas zoom-social-icons-list--round zoom-social-icons-list--no-labels">
<li class="zoom-social_icons-list__item">
		<a class="zoom-social_icons-list__link" href="https://m.facebook.com/CML-Nedungapra-109829481445577/" target="_blank">
									
						<span class="screen-reader-text">facebook</span>
			
						<span class="zoom-social_icons-list-span social-icon socicon socicon-facebook" data-hover-rule="background-color" data-hover-color="#1877F2" style="background-color : #1877F2; font-size: 18px; padding:8px"></span>
			
					</a>
	</li>

	
				<li class="zoom-social_icons-list__item">
					<a class="zoom-social_icons-list__link" href="https://www.instagram.com/cml_nedungapra/" target="_blank">
									
						<span class="screen-reader-text">instagram</span>
			
						<span class="zoom-social_icons-list-span social-icon socicon socicon-instagram" data-hover-rule="background-color" data-hover-color="#e4405f" style="background-color : #e4405f; font-size: 18px; padding:8px"></span>
			
					</a>
	</li>

	
				<li class="zoom-social_icons-list__item">
		<a class="zoom-social_icons-list__link" href="https://www.youtube.com/channel/UCbf0kGfUX1nkw2r-WWEha8w" target="_blank">
									
						<span class="screen-reader-text">youtube</span>
			
						<span class="zoom-social_icons-list-span social-icon socicon socicon-youtube" data-hover-rule="background-color" data-hover-color="#e02a20" style="background-color : #e02a20; font-size: 18px; padding:8px"></span>
			
					</a>
	</li>

	
</ul>
</div>					</div>
<!-- #site-header-search -->
				
				<nav id="faith-site-menu-main"><ul id="menu-main-menu" class="navbar-nav dropdown sf-menu">
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-80"><a href="./../">Home</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-110"><a href="./../about-us/">About Us</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-159">
<a href="#">Completed Events</a>
	<ul class="sub-menu">
	<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-159">
		<a href="#">2021-22</a>
		<ul class="sub-menu">
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-153"><a href="./../q1-2021-22/">Q1 2021-22</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-166"><a href="./../q2-2021-22/">Q2 2021-22</a></li>
			<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-166"><a href="./../q3-2021-22/">Q3 2021-22</a></li>
		</ul>
		<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-159">
			<a href="#">2022-23</a>
			<ul class="sub-menu">
				<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-163"><a href="./../q1-2022-23/">Q1 2022-23</a></li>
				<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-166"><a href="./../q2-2022-23/">Q2 2022-23</a></li>
				<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-167"><a href="./../q3-2022-23/">Q3 2022-23</a></li>
			</ul>
	</ul>
	</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-38"><a href="https://yvbq7-my.sharepoint.com/:f:/g/personal/mail_amalekhbiju_ml/Ek5UH4NL50NHsSXMUpJ2mxoBShee4Oze3VSo-X9SzWiaJw?e=k6X03P">Photos</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51"><a href="./../action-plan/">Action Plan</a></li>
</ul></nav><!-- #menu-main -->
</div>
<!-- #site-header-navigation -->
						
		</div>
<!-- .wrapper .wrapper-header -->

	</header><!-- .site-header --><div id="ilovewp-hero" class="ilovewp-hero-blankfill">
	</div>
`
document.body.appendChild(template.content);