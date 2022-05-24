class BaseFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer>
        <div class="container">
          <div class="row footer">
              <div class="col-md-5 col-xs-12 footer-img">
                <img src="/img/logo/logo2.png" class="footer-logo">
                <p>Mazia store is a premium theme with advanced admin module. It’s extremely customizable, easy to use and fully responsive and retina ready.</p>
                <img src="/img/paypal/paypal.png">
              </div>
              <div class="col-md-2 footer-account">
                <p>MY ACCOUNT</p>
                <ul>
                    <li><a href="">My account</a></li>
                    <li><a href="">Checkout</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Wishlist</a></li>
                    <li><a href="">Frequently</a></li>
  
               </ul>
              </div>
  
              <div class="col-md-2 footer-account">
                  <p>QUICK LINKS</p>
                  <ul>
                      <li><a href="">Special Offers</a></li>
                      <li><a href="">Gift Cards</a></li>
                      <li><a href="">F21 Red</a></li>
                      <li><a href="">Privacy Policy</a></li>
                      <li><a href="">Teams of Use</a></li>
                      <li><a href="">Portfolio</a></li>
                 </ul>
                </div>
  
                <div class="col-md-2 footer-account">
                  <p>COMPANY INFO</p>
                  <ul>
                      <li><a href="">About us</a></li>
                      <li><a href="">Careers</a></li>
                      <li><a href="">Business With Us</a></li>
                      <li><a href="">Find a Store</a></li>
                      <li><a href="">Teams of Use</a></li>
                      <li><a href="">Press & Talent</a></li>
                 </ul>
                </div>
            </div>
       </div>
             
  
      </footer>
        
        `
    }
}

customElements.define('base-footer', BaseFooter)