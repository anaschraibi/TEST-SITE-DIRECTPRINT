class Myheader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
  <body>
	  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     <a class="navbar-brand" href="index.html"><img class="rounded-circle" src="petit logoblc.webp" alt=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <<li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Qui sommes-nous</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="index.html">Acceuil</a>
              <a class="dropdown-item" href="Activites.html">Activités</a>
				 <a class="dropdown-item" href="Galerie.html">Galerie</a>
			
			
			  <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nos produits</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="Commercial.html">Commercial</a>
              <a class="dropdown-item" href="Edition.html">Edition</a>
				 <a class="dropdown-item" href="Packaging.html">Packaging</a>
				<a class="dropdown-item" href="Etiquettes.html">Etiquettes</a></div></li>
			
			  <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Notre expertise</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
             <a class="dropdown-item" href="Studio.html">Le Studio</a>
              <a class="dropdown-item" href="Equipements.html">Les équipements</a>
				<a class="dropdown-item" href="Activites.html">Activtés</a>

  <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ateliers</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
              <a class="dropdown-item" href="Serigraphie.html">Sérigraphie</a>
              <a class="dropdown-item" href="Decoupe.html">Découpe </a>
				 <a class="dropdown-item" href="Embellissement.html">Embellissement</a>
				<a class="dropdown-item" href="Reliure.html">Reliure</a></div>
		  <li class="nav-item">
            <a class="nav-link" href="Secteurs.html">Nos secteurs</a></li>
          </li>
		  <li class="nav-item">
            <a class="nav-link" href="Contact.html">Contact</a>
          </li></ul> </div>
    </nav>
<div class="text-center col-4"><img src="ACCEUIL/logo201.gif" alt="Placeholder image" class="LOGODP col-lg-12"></div>
`;
		
	} 
} 

customElements.define('my-header', Myheader)

class Myfooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
<footer class="text-center">
<!-- Bar de pied -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark"><<a class="navbar-brand" href="index.html"><img class="rounded-circle" src="petit logoblc.webp" alt=""></a>
	          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
	          <div class="collapse navbar-collapse" id="navbarSupportedContent1">
	            <ul class="navbar-nav mr-auto">
	              <li class="nav-item"> <a class="nav-link" href="https://goo.gl/maps/eQyrEgveLSJr67du5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>Itinéraire : 50 Zone Industrielle Zenata Maroc</li>
					    <li class="nav-item"> <a class="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-outbound" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"/></svg>
							
							  Téléphone: 0522350304 </li>
							 <li class="nav-item"> <a href="mailto:contact@directprint.ma?">contact@directprint.ma</a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg></li>
  </div>
</nav>
      <div class="container">
        <div class="row">
				<section>
		      <div class="align-content-lg-center col-xl-12"><a href="https://www.linkedin.com/company/directprint/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BUUQl9AWaRDy1rgO90UaT4Q%3D%3D"</a> <img class="rounded-circle" src="ACCEUIL/372102050_LINKEDIN_ICON_TRANSPARENT_400.gif" alt="">
		      <a href="https://m.facebook.com/photo.php?fbid=760913185275198&id=100040695715276&set=a.760913158608534&eav=Afb9Tb43eJRaQfdCTd88MeGcbJ2CJRderzJhDp_Cpxy-lmBCn8jKUE58rsBfiYjo_1g&paipv=0&source=11&refid=17"</a><img class="rounded-circle" src="ACCEUIL/371907490_FACEBOOK_ICON_400.gif" alt="">
		      <a href="https://www.instagram.com/directprint_ma/#"</a><img class="rounded-circle" src="ACCEUIL/371907300_INSTAGRAM_ICON_400.gif" alt=""></
			   </section>
          <div class="col-12">
            <p>Copyright © Directprint 2022. All rights reserved.</p>
          </div>
        </div>
      </div>
		 </footer>
		`;
		
	} 
} 

customElements.define('my-footer', Myfooter)