import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
        <div id="mainFooter">
          <div class="about">
            <div class="mainText">
              <span class="block">ABOUT</span>
            </div>
            <div class="subText">
              <span class="block">Contact Us</span>
              <span class="block">About Us</span>
              <span class="block">Careers</span>
              <span class="block">Flipkart Stories</span>
              <span class="block">Press</span>
              <span class="block">Flipkart Wholesale</span>
              <span class="block">Corporate Information</span>
            </div>
          </div>


          <div class="about">
            <div class="mainText">
              <span class="block">HELP</span>
            </div>
            <div class="subText">
              <span class="block">Payments</span>
              <span class="block">Shipping</span>
              <span class="block">Cancellation & Returns</span>
              <span class="block">FAQ</span>
              <span class="block">Report</span>
              <span class="block">Report Infrigement</span>
            </div>
          </div>

          <div class="about">
            <div class="mainText">
              <span class="block">POLICY</span>
            </div>
            <div class="subText">
              <span class="block">Return Policy</span>
              <span class="block">Terms of Use</span>
              <span class="block">Security</span>
              <span class="block">Privacy</span>
              <span class="block">Sitemap</span>
              <span class="block">EPR Compliance</span>
              <span class="block">Corporate Information</span>
            </div>
          </div>

          <div class="about" style={{borderRight: '1px solid gray'}}>
            <div class="mainText" >
              <span class="block">SOCIAL</span>
            </div>
            <div class="subText">
              <span class="block">Facebook</span>
              <span class="block">Twitter</span>
              <span class="block">YouTube</span>
              <span class="block">Instagram</span>
              <span class="block">LinkedIn</span>
            </div>
          </div>
          <div class="about address mail">
            <div class="mainText">
              <span class="block">Registered Office Address:</span>
            </div>
            <div class="subText">
              <span class="block">Flipkart Internet Private Limited</span>
              <span class="block">Buildings Alyssa, Begonia &</span>
              <span class="block">Clove Embassy Tech Village,</span>
              <span class="block">Outer Ring Road, Changefal Village,</span>
              <span class="block">Akola, 444001</span>
              <span class="block">Maharashtra, India</span>
              <span class="block">Telephone: 7447640893</span>
            </div>
          </div>

          <div class="about address mailus">
            <div class="mainText">
              <span class="block">Mail Us:</span>
            </div>
            <div class="subText">
              <span class="block">Flipkart Internet Private Limited,</span>
              <span class="block">Buildings Alyssa, Begonia &</span>
              <span class="block">Clove Embassy Tech, Village</span>
              <span class="block">Outer Ring Road, Changefal Village</span>
              <span class="block">Akola, 444001</span>
              <span class="block">Maharashtra India</span>
            </div>
          </div>
          
        </div>
        <hr/>
        <div id="subFooter">
          <div class="subFootText">
            <p>Become a Seller</p>
          </div>

          <div class="subFootText">
            <p>Advertise</p>
          </div>

          <div class="subFootText">
            <p>Gift Cards</p>
          </div>

          <div class="subFootText">
            <p>Help Center</p>
          </div>

          <div class="subFootText1">
            <p>&copy; Devloper Rushikesh</p>
          </div>

          <div class="payimg">
            <img style={{height:'25px', widht:'100px'}} src="https://wildpremiumsalmon.com/wp-content/uploads/2019/02/http___pluspng.com_img-png_payment-method-png-payment-options-1003.png" alt="payment"/>
          </div>

        </div>
    </footer> 
    )
}

export default Footer;