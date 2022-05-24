class BaseHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
     <header>
     <nav class="navbar navbar-expand-lg py-3 fixed-top bgcolor">
     <div class="container-fluid nav-bar">
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon">
         <i class="fas fa-bars"></i>
         </span>
     </button>
     <div class="navbar-collapse collapse navigation" id="navbarCollapse">  
         <ul class="navbar-nav">
             <li class="nav-item">
                 <a href="" class="nav-link cool-link">HOME</a>
             </li>
             <li class="nav-item">
                 <a href="" class="nav-link cool-link">SHOP</a>
             </li>
             <li class="nav-item">
                 <a href="" class="nav-link cool-link">BLOG</a>
             </li>
             <li class="nav-item">
                 <a href="" class="nav-link cool-link">PORTFOLIO</a>
             </li>
             <li class="nav-item cool-link">
                 <a href="" class="nav-link">PAGE</a>
             </li>
             <li class="nav-item cool-link">
                 <a href="" class="nav-link">CONTACT</a>
             </li> 
         </ul>
     </div>
     <div class="nav-img">
         <a class="navbar-brand">
             <img src="img/logo/logo.png">
         </a>
     </div>

     <div class="d-flex flex-row navigation">
         <a href="" class="nav-link"><i class="fas fa-user-friends"></i>&nbsp;&nbsp;<span>Login/Sign Up</span></a>
         <a href="" class="nav-link"><i class="fas fa-search"></i></a>
         <a href="" class="nav-link"><i class="far fa-heart"></i></a>
         <a href="" class="nav-link"><i class="fas fa-shopping-bag"></i></a>
         <a href="" class="nav-link"><i class="fa-solid fa-align-right"></i></a>       
     </div>
 </div>
 </nav>
    </header>
        
        `
    }
}

customElements.define('base-header', BaseHeader)