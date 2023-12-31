import React from "react";
import { Link } from 'react-router-dom';
import img1 from './images/headerLogoOrange.png';

function Footer() {
  return (
    <footer className="footer-section bg-grey">
  <div className="mx-auto items-center w-4/5">
    <div className="footer-cta pt-5 pb-5 border-b border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="mb-8">
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt text-orange-500 text-3xl"></i>
            <div className="cta-text ml-4">
              <h4 className="text-white text-lg font-semibold">Find us</h4>
              <span className="text-gray-500">Colombo, western province, sri lanka</span>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex items-center">
            <i className="fas fa-phone text-orange-500 text-3xl"></i>
            <div className="cta-text ml-4">
              <h4 className="text-white text-lg font-semibold">Call us</h4>
              <span className="text-gray-500">0712528831</span>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex items-center">
            <i className="far fa-envelope-open text-orange-500 text-3xl"></i>
            <div className="cta-text ml-4">
              <h4 className="text-white text-lg font-semibold">Mail us</h4>
              <span className="text-gray-500">himansha.official@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-content pt-5 pb-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="mb-8">
          <div className="footer-widget">
            <div className="footer-logo">
              <img
                src={img1}
                className="max-w-full"
                alt="logo"
              />
            </div>
            <div className="footer-text">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="footer-social-icon">
              <span className="text-white">Follow us</span>
              <i className="fab fa-facebook-f facebook-bg text-white"></i>
              <i className="fab fa-twitter twitter-bg text-white"></i>
              <i className="fab fa-google-plus-g google-bg text-white"></i>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3 className="text-white text-lg font-semibold">Useful Links</h3>
            </div>
            <ul>
              <li>
                <span className="text-gray-500 hover:text-orange-500">Home</span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-orange-500">About us</span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-orange-500">Magazines</span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-orange-500">Books</span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-orange-500">Audiobooks</span>
              </li>
              <li>
                <span className="text-gray-500 hover:text-orange-500">Contact</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-8">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3 className="text-white text-lg font-semibold">Subscribe</h3>
            </div>
            <div className="footer-text mb-5">
              <p className="text-gray-500">
                Don’t miss to subscribe to our new feeds, kindly fill the form below.
              </p>
            </div>
            <div className="subscribe-form">
              <form action="#">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-full"
                />

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area pt-5 pb-5  grid">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="copyright-text">
            <p className="text-gray-500">
              Copyright &copy; 2023, All Right Reserved
            </p>
          </div>
        </div>
        <div className="text-right grid">
            <div className="footer-menu">
                <ul className="flex-wrap space-x-4 justify-end">
                <li><span className="text-gray-500 hover:text-orange-500">Home</span></li>
                <li><span className="text-gray-500 hover:text-orange-500">Terms</span></li>
                <li><span className="text-gray-500 hover:text-orange-500">Privacy</span></li>
                <li><span className="text-gray-500 hover:text-orange-500">Policy</span></li>
                <li><span className="text-gray-500 hover:text-orange-500">Contact</span></li>
                </ul>
            </div>
        </div>

      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
