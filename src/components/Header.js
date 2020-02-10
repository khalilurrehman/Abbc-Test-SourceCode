import React from "react";
export default function Header() {
  return (
    <React.Fragment>
      <header id="header" className="fixed-top-absolute">
        <div className="container">
          <div className="nav">
            <div className="logo float-left">
              <a href="#" className="scrollto">
                <svg width="62" height="25">
                  <title>Stripe</title>
                  <path d="M5 10.1c0-.6.6-.9 1.4-.9 1.2 0 2.8.4 4 1.1V6.5c-1.3-.5-2.7-.8-4-.8C3.2 5.7 1 7.4 1 10.3c0 4.4 6 3.6 6 5.6 0 .7-.6 1-1.5 1-1.3 0-3-.6-4.3-1.3v3.8c1.5.6 2.9.9 4.3.9 3.3 0 5.5-1.6 5.5-4.5.1-4.8-6-3.9-6-5.7zM29.9 20h4V6h-4v14zM16.3 2.7l-3.9.8v12.6c0 2.4 1.8 4.1 4.1 4.1 1.3 0 2.3-.2 2.8-.5v-3.2c-.5.2-3 .9-3-1.4V9.4h3V6h-3V2.7zm8.4 4.5L24.6 6H21v14h4v-9.5c1-1.2 2.7-1 3.2-.8V6c-.5-.2-2.5-.5-3.5 1.2zm5.2-2.3l4-.8V.8l-4 .8v3.3zM61.1 13c0-4.1-2-7.3-5.8-7.3s-6.1 3.2-6.1 7.3c0 4.8 2.7 7.2 6.6 7.2 1.9 0 3.3-.4 4.4-1.1V16c-1.1.6-2.3.9-3.9.9s-2.9-.6-3.1-2.5H61c.1-.2.1-1 .1-1.4zm-7.9-1.5c0-1.8 1.1-2.5 2.1-2.5s2 .7 2 2.5h-4.1zM42.7 5.7c-1.6 0-2.5.7-3.1 1.3l-.1-1h-3.6v18.5l4-.7v-4.5c.6.4 1.4 1 2.8 1 2.9 0 5.5-2.3 5.5-7.4-.1-4.6-2.7-7.2-5.5-7.2zm-1 11c-.9 0-1.5-.3-1.9-.8V10c.4-.5 1-.8 1.9-.8 1.5 0 2.5 1.6 2.5 3.7 0 2.2-1 3.8-2.5 3.8z"></path>
                </svg>
              </a>
            </div>

            <nav className="main-nav float-right d-none d-lg-block">
              <ul>
                <li className="drop-down">
                  <a href="#">Products</a>
                  <ul className="ninehundred">
                    <div className="row">
                      <div className="col-lg-7">
                        <li>
                          <a href="#">ACCEPT PAYMENTS</a>
                        </li>
                        <li>
                          <a href="#">
                            <svg viewBox="0 0 48 48">
                              <path
                                fill="#87BBFD"
                                className="hover-fillLight"
                                d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z"
                              ></path>
                              <path
                                fill="#555ABF"
                                className="hover-fillDark"
                                d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z"
                              ></path>
                              <path
                                fill="#FFF"
                                d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z"
                              ></path>
                            </svg>
                            <span className="text-header">
                              Payments <br />
                              <span className="padding-left-desc">
                                Full platform for online payments
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                            >
                              <path
                                className="hover-fillLight"
                                d="M38,8H10L.19,27a24,24,0,0,0,47.62,0Z"
                                fill="#87bbfd"
                              ></path>
                              <path
                                d="M10,24V39.48A3,3,0,0,0,11.29,42a22,22,0,0,0,25.42,0A3,3,0,0,0,38,39.48V24Z"
                                fill="#fff"
                              ></path>
                              <path
                                className="hover-fillDark"
                                d="M24,0A24,24,0,0,0,.19,27H47.81A24,24,0,0,0,24,0ZM38,21H10V14a4,4,0,0,1,4-4H34a4,4,0,0,1,4,4Z"
                                fill="#555abf"
                              ></path>
                            </svg>
                            <span className="text-header">
                              Terminal <br />
                              <span className="padding-left-desc">
                                Programmeable in-person payment
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg viewBox="0 0 48 48">
                              <path
                                className="hover-fillLight"
                                fill="#F6A4EB"
                                d="M41.364 21.886h6.538c.06.697.098 1.4.098 2.114 0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0c6.833 0 12.993 2.86 17.364 7.442v14.444z"
                              ></path>
                              <path
                                fill="#FFF"
                                d="M37.746 37.4a1.3 1.3 0 0 1 .92-.38c.72 0 1.303.444 1.303 1.163 0 .503-.353.982-.708 1.292-3.484 3.122-8.325 5.53-13.783 5.53-11.75 0-19.486-9.538-19.486-18.83 0-8.72 7.195-16.19 15.25-16.19s11.227 5.54 11.227 5.54L37.747 37.4z"
                              ></path>
                              <path
                                className="hover-fillDark"
                                fill="#9251AC"
                                d="M47.995 24zm0 0c0-.995-.807-1.974-1.802-1.974-1.15 0-1.8.94-1.8 1.83-.09 3.174-1.228 7.127-3.453 10.182-2.355 3.232-6.91 6.956-13.242 6.956-7.625 0-13.213-5.767-13.213-11.925 0-4.3 2.886-7.17 5.828-7.17 1.588 0 2.48.683 2.965 1.312.362.468 1.063.493 1.482.074L40.968 7.032A23.926 23.926 0 0 1 47.995 24z"
                              ></path>
                            </svg>
                            <span className="text-header">
                              Radar <br />
                              <span className="padding-left-desc">
                                Fraud prevention with machine learning
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">BUSINESS MODELS</a>
                        </li>
                        <li>
                          <a href="#">
                            <svg viewBox="0 0 48 48">
                              <path
                                fill="#87BBFD"
                                className="hover-fillLight"
                                d="M24 48C12.11 48 2.244 39.35.338 28H6.5V9H5.27C9.67 3.515 16.423 0 24 0c13.255 0 24 10.745 24 24S37.255 48 24 48z"
                              ></path>
                              <path
                                fill="#555ABF"
                                className="hover-fillDark"
                                d="M25 21v8H.526A24.082 24.082 0 0 1 0 24 23.908 23.908 0 0 1 6.116 8H31.5c.828 0 1.5.67 1.5 1.5V21h-8zm-10.502-8.995a6.497 6.497 0 1 0 0 12.994 6.497 6.497 0 0 0 0-12.996z"
                              ></path>
                              <path
                                fill="#FFF"
                                d="M39.823 39.276a2.44 2.44 0 0 1-1.76.724H16.5a1.5 1.5 0 0 1-1.5-1.5v-18c0-.828.67-1.5 1.5-1.5h27.693a1.51 1.51 0 0 1 1.484 1.256c.21 1.217.323 2.467.323 3.744 0 5.936-2.355 11.32-6.177 15.276zM33.5 23.002a6.497 6.497 0 1 0 0 12.995 6.497 6.497 0 0 0 .002-12.994z"
                              ></path>
                            </svg>
                            <span className="text-header">
                              Billing <br />
                              <span className="padding-left-desc">
                                Smart invoicing & subscription management
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                            >
                              <path
                                className="hover-fillLight"
                                d="M38,8H10L.19,27a24,24,0,0,0,47.62,0Z"
                                fill="#87bbfd"
                              ></path>
                              <path
                                d="M10,24V39.48A3,3,0,0,0,11.29,42a22,22,0,0,0,25.42,0A3,3,0,0,0,38,39.48V24Z"
                                fill="#fff"
                              ></path>
                              <path
                                className="hover-fillDark"
                                d="M24,0A24,24,0,0,0,.19,27H47.81A24,24,0,0,0,24,0ZM38,21H10V14a4,4,0,0,1,4-4H34a4,4,0,0,1,4,4Z"
                                fill="#555abf"
                              ></path>
                            </svg>
                            <span className="text-header">
                              Connect <br />
                              <span className="padding-left-desc">
                                Multi-party payments for platforms &
                                marketplaces
                              </span>
                            </span>
                          </a>
                        </li>
                      </div>
                      <div className="col-lg-5">
                        <div className=" svg18">
                          <li>
                            <a href="#">MOVE MONEY</a>
                          </li>
                          <li>
                            <a href="#">
                              <svg viewBox="0 0 48 48">
                                <circle
                                  className="hover-fillLight"
                                  cx="24"
                                  cy="24"
                                  r="24"
                                  fill="#68d4f8"
                                ></circle>
                                <path
                                  d="M10.41,25.41a2,2,0,0,1,0-2.82L16.5,16.5,9.93,9.93a2,2,0,0,0-2.83,0l-.1.11A22,22,0,0,0,7,38a2,2,0,0,0,2.82.23l.12-.11L16.5,31.5Z"
                                  fill="#fff"
                                ></path>
                                <path
                                  className="hover-fillLight"
                                  d="M10.41,25.41,16.5,31.5,24,24l-7.5-7.5-6.09,6.09A2,2,0,0,0,10.41,25.41Z"
                                  fill="#68d4f8"
                                ></path>
                                <path
                                  className="hover-fillDark"
                                  d="M16.5,31.5,31.72,46.72A23.94,23.94,0,0,0,41,41L24,24Z"
                                  fill="#217ab7"
                                ></path>
                                <path
                                  className="hover-fillDark"
                                  d="M31.72,1.28,16.5,16.5h0L24,24,41,7A23.94,23.94,0,0,0,31.72,1.28Z"
                                  fill="#217ab7"
                                ></path>
                                <path
                                  d="M39.41,25.41a2,2,0,0,1,0-2.82L44,18a2,2,0,0,0,.43-2.19,22.1,22.1,0,0,0-4.86-7.38L24,24,39.56,39.56a22.1,22.1,0,0,0,4.86-7.38A2,2,0,0,0,44,30Z"
                                  fill="#fff"
                                ></path>
                              </svg>
                              <span className="text-header">
                                Payouts <br />
                                <span className="padding-left-asc">
                                  Fast payouts for global platforms
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg viewBox="0 0 48 48">
                                <g fill="none">
                                  <circle
                                    className="hover-fillLight"
                                    fill="#87BBFD"
                                    cx="24"
                                    cy="24"
                                    r="24"
                                  ></circle>
                                  <path
                                    fill="#FFF"
                                    d="M38.27 8H20a4 4 0 0 0-4 4v3H4.59a1 1 0 0 0-.93.61 22.5 22.5 0 0 0-1.44 5.27 1 1 0 0 0 1 1.12H16v14a4 4 0 0 0 4 4h18.27a2 2 0 0 0 1.41-.58 22 22 0 0 0 0-30.84A2 2 0 0 0 38.27 8z"
                                  ></path>
                                  <path
                                    className="hover-fillDark"
                                    fill="#555ABF"
                                    d="M46.25 15H16v7h31.91c-.2-2.4-.75-4.76-1.66-7z"
                                  ></path>
                                </g>
                              </svg>
                              <span className="text-header">
                                Issuing <br />
                                <span className="padding-left-asc">
                                  Toolkit for creating & managing cards
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">FINANCIAL SERVICES</a>
                          </li>
                          <li>
                            <a href="#">
                              <svg
                                id="shapes"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                              >
                                <path
                                  fill="#87bbfd"
                                  className="hover-fillLight"
                                  d="M21.2 45.82a1.68 1.68 0 0 1-1.4-2.02l2.09-9.82-6.84-3.34a6.04 6.04 0 0 1-2.23-8.97L28.28.39a24 24 0 0 0-9.26 47.09l.89.15 1.31-1.81z"
                                ></path>
                                <path
                                  fill="#555abf"
                                  fill-rule="evenodd"
                                  className="hover-fillDark"
                                  d="M29 .52L28.27.4c-.1.12-15.46 21.27-15.46 21.27a6.04 6.04 0 0 0 2.23 8.98l6.83 3.34 4.2-19.76 6.7 3.27a6.25 6.25 0 0 1 3.33 3.8 6.06 6.06 0 0 1-.91 5.26L21.22 45.82l-1.31 1.81-.01.01A24 24 0 0 0 29 .52z"
                                ></path>
                                <path
                                  fill="#fff"
                                  fill-rule="evenodd"
                                  d="M32.78 17.49l-6.7-3.27L19.8 43.8a1.68 1.68 0 0 0 1.4 2.02h.02L35.2 26.55a6.06 6.06 0 0 0 .9-5.26 6.25 6.25 0 0 0-3.32-3.8z"
                                ></path>
                              </svg>
                              <span className="text-header">
                                Corporate cardg <br />
                                <span className="padding-left-asc">
                                  Corporate cards & expense management
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                              >
                                <circle
                                  className="hover-fillLight"
                                  cx="24"
                                  cy="24"
                                  r="24"
                                  fill="#87bbfd"
                                ></circle>
                                <path
                                  className="hover-fillDark"
                                  d="M22 44A22 22 0 0 0 .09 22C0 22.66 0 23.33 0 24a24 24 0 0 0 24 24v-2a2 2 0 0 1-2-2z"
                                  fill="#555abf"
                                  fill-rule="evenodd"
                                ></path>
                                <path
                                  className="hover-fillDark"
                                  d="M22 44A22 22 0 0 0 .09 22C0 22.66 0 23.33 0 24a24 24 0 0 0 24 24v-2a2 2 0 0 1-2-2z"
                                  fill="#555abf"
                                  fill-rule="evenodd"
                                ></path>
                                <path
                                  d="M22.69 7a30 30 0 0 0-10.38 18.77A22 22 0 0 1 22 44a2 2 0 0 0 2 2V6.56a2 2 0 0 0-1.31.44z"
                                  fill="#fff"
                                  fill-rule="evenodd"
                                ></path>
                                <path
                                  className="hover-fillDark"
                                  d="M25.31 7a30 30 0 0 1 10.38 18.77A22 22 0 0 0 26 44a2 2 0 0 1-2 2V6.56a2 2 0 0 1 1.31.44z"
                                  fill="#555abf"
                                  fill-rule="evenodd"
                                ></path>
                                <path
                                  d="M44 22.36A22 22 0 0 0 26 44a2 2 0 0 1-2 2c.71 0 1.4 0 2.09-.11h.29c.48-.06.95-.12 1.42-.2l.56-.1c.58-.12 1.15-.25 1.71-.42A22 22 0 0 0 46 24a1.66 1.66 0 0 0-2-1.64z"
                                  fill="#fff"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="text-header">
                                Capital <br />
                                <span className="padding-left-asc">
                                  Flexible financing in as little as one day
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">Business Operations</a>
                          </li>
                          <li>
                            <a href="#">
                              <svg viewBox="0 0 48 48">
                                <path
                                  fill="#FCD669"
                                  className="hover-fillLight"
                                  d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0z"
                                ></path>
                                <path
                                  fill="#CE7C3A"
                                  className="hover-fillDark"
                                  d="M24.012 1.834c.366.005.73.196.92.575l16.825 33.72c.396.79-.314 1.685-1.175 1.48L24 33.626V1.834h.01z"
                                ></path>
                                <path
                                  fill="#FFF"
                                  d="M24 1.834v31.794l-16.584 3.98A1.043 1.043 0 0 1 6.24 36.13L23.067 2.41c.195-.39.572-.58.947-.576H24z"
                                ></path>
                              </svg>
                              <span className="text-header">
                                Atlas <br />
                                <span className="padding-left-asc">
                                  Incorporation for startups
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg viewBox="0 0 48 48">
                                <path
                                  className="hover-fillLight"
                                  d="M24 48c-2.6 0-5-.3-7.2-1.1V35.2H4v2.1c-2.6-4-4-8.6-4-13.3C0 12.6 7.8 3.2 18.4.6V4h14.4V1.6C41.8 5.1 48 13.8 48 24c0 13.3-10.7 24-24 24z"
                                  fill="#beb0f4"
                                ></path>
                                <path
                                  className="hover-fillDark"
                                  d="M45.6 24H32.8v17.6H17.6v-.2 5.8c-6.4-1.8-11.7-6.1-14.9-12 2.1-6.6 8-10.9 14.9-11.2V.8C19.7.3 21.9 0 24 0c3.4 0 6.7.6 9.6 1.9v8c0 6.1 4.5 10.9 10.2 11.7 1 .2 1.8 1.3 1.8 2.4z"
                                  fill="#7356b6"
                                ></path>
                                <path
                                  d="M45.6 24c0 1.1-.8 2.1-1.8 2.2-5.8 1-10.2 5.8-10.2 11.7v5.3c-3 1.4-6.2 2.2-9.6 2.2-2.2 0-4.3-.3-6.4-1V40c0-7 5.8-13 12.5-13.8C31.2 26 32 25.1 32 24h13.6zM4 15.7C6.6 9.8 11.5 5.3 17.6 3.4V8c0 7 5.8 12.8 12.5 13.8 1.1.2 1.9 1.1 1.9 2.2H17.9C12 24 6.7 20.6 4 15.7z"
                                  fill="#FFF"
                                ></path>
                              </svg>
                              <span className="text-header">
                                Sigma <br />
                                <span className="padding-left-asc">
                                  Advanced business analytics & reporting
                                </span>
                              </span>
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="drop-down">
                  <a href="">Developers</a>
                  <ul className="fivehundred">
                    <li>
                      <a href="#">
                        <svg width="17" height="17">
                          <path
                            fill="#87BBFD"
                            className="hover-fillLight"
                            d="M.945 1.998h3.632C6.744 1.998 8.5 3.005 8.5 4.83v11.583c-.512 0-1.015-.337-1.33-.59-1.03-.828-3.057-.828-5.222-.828H.945A.944.944 0 0 1 0 14.052V2.944C0 2.422.423 2 .945 2z"
                          ></path>
                          <path
                            fill="#6772E5"
                            className="hover-fillDark"
                            d="M16.055 1.998h-3.632C10.257 1.998 8.5 3.005 8.5 4.83v11.583c.512 0 1.015-.337 1.33-.59 1.03-.828 3.057-.828 5.222-.828h1.003A.944.944 0 0 0 17 14.05V2.945A.944.944 0 0 0 16.055 2z"
                          ></path>
                        </svg>
                        <span className="text-header">Documentation</span>
                        <p>Start integrating Stripe’s products and tools</p>
                      </a>
                    </li>
                    <div className="row">
                      <div className="col-lg-6">
                        <li>
                          <a href="#">GET STARTED</a>
                        </li>
                        <li>
                          <a href="#">Prebuilt checkout</a>
                        </li>
                        <li>
                          <a href="#">Libraries and SDKs</a>
                        </li>
                        <li>
                          <a href="#">Plugins</a>
                        </li>
                        <li>
                          <a href="#">Code samples</a>
                        </li>
                      </div>
                      <div className="col-lg-6">
                        <li>
                          <a href="#">GUIDES</a>
                        </li>
                        <li>
                          <a href="#">Accept online payments</a>
                        </li>
                        <li>
                          <a href="#">Manage subscriptions</a>
                        </li>
                        <li>
                          <a href="#">Send payouts</a>
                        </li>
                        <li>
                          <a href="#">Set up in-person payments</a>
                        </li>
                      </div>
                      <div className="col-lg-12">
                        <li className="defination">
                          <a href="#">
                            <svg width="17" height="17">
                              <path
                                d="M2 15h13M2 11h13M2 7h13M2 3h13"
                                fill="none"
                                stroke="#6772e5"
                                className="hover-strokeDark"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <span className="text-header">
                              Full API Reference
                            </span>
                          </a>
                        </li>
                        <li className="defination">
                          <a href="#">
                            <svg width="17" height="17">
                              <path
                                d="M1 9h2.95l3-6.5 3 12 3-5.45L16 9"
                                fill="none"
                                stroke="#6772e5"
                                className="hover-strokeDark"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                            <span className="text-header">API Status</span>
                          </a>
                        </li>
                        <li className="defination">
                          <a href="#">
                            <svg width="17" height="17">
                              <path
                                fill="#6772E5"
                                className="hover-fillDark"
                                d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zM6.987 6.078a.684.684 0 0 0-.968-.968L3.116 8.012a.684.684 0 0 0 0 .967l2.9 2.9a.684.684 0 0 0 .97-.967l-2.42-2.418 2.42-2.42zm6.996 1.95L11.08 5.123a.684.684 0 0 0-.966.968l2.418 2.42-2.418 2.417a.684.684 0 0 0 .967.967l2.904-2.902a.684.684 0 0 0 0-.966z"
                              ></path>
                            </svg>
                            <span className="text-header">API Changelog</span>
                          </a>
                        </li>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="drop-down ">
                  <a href="">Company</a>
                  <ul className="fourhundred">
                    <li>
                      <a href="#">
                        <svg width="17" height="17">
                          <path
                            fill="#6772E5"
                            className="hover-fillDark"
                            d="M8.5 17a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zm.178-10.89c.76 0 1.726.278 2.486.69V4.443c-.828-.33-1.656-.502-2.484-.502-2.028 0-3.41 1.06-3.41 2.83 0 2.77 3.8 2.32 3.8 3.513 0 .462-.37.612-.93.612-.827 0-1.867-.366-2.706-.823v2.388c.93.4 1.843.592 2.705.592 2.077 0 3.48-1.027 3.48-2.827 0-2.98-3.82-2.447-3.82-3.572-.003-.39.352-.542.877-.542z"
                          ></path>
                        </svg>
                        <span className="text-header">About Stripe</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg width="17" height="17">
                          <path
                            fill="#87BBFD"
                            className="hover-fillLight"
                            d="M2 16a1 1 0 0 1-1-1V9a4 4 0 0 1 8 0v7H2zm3-9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                          ></path>
                          <path
                            fill="#6772E5"
                            className="hover-fillDark"
                            d="M15 16H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h.55a2.5 2.5 0 0 1 4.9 0H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1z"
                          ></path>
                          <path
                            fill="#87BBFD"
                            className="hover-fillLight"
                            d="M11 12h2v4h-2v-4z"
                          ></path>
                        </svg>
                        <span className="text-header">Customers</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                        >
                          <circle
                            cx="8.5"
                            cy="8.5"
                            r="8.5"
                            fill="#6772e5"
                            className="hover-fillDark"
                          ></circle>
                          <path
                            d="M8.5,0A8.5,8.5,0,0,0,1.23,4.1l1.09-.39a.2.2,0,0,1,.24.08l.21.31a.21.21,0,0,0,.32,0l.85-1,0,0L4.1,2.8A.19.19,0,0,0,4,2.57l-.18-.12a.18.18,0,0,1,0-.3l.95-.61.33.17-.41.61,1.36-.53a.21.21,0,0,1,.2,0l.41.29-1.58.66A.17.17,0,0,0,5,2.84l-.26.39A.19.19,0,0,0,5,3.51l.59-.21h.09l.67.07a.19.19,0,0,0,.14,0l1.16-.87a.18.18,0,0,0,0-.26l-.64-1A.19.19,0,0,1,7.22.94L9,.65a.22.22,0,0,1,.12,0l1.22.6a.22.22,0,0,1,.1.1l.14.33a.19.19,0,0,1-.15.25l-.85.13.6.39a.19.19,0,0,1,.05.26l-.64.9a.2.2,0,0,1-.2.08l-.9-.13a.22.22,0,0,0-.15,0l-1.16.85a.18.18,0,0,0-.06.22l.18.44a.19.19,0,0,1-.08.22L7,5.49a.2.2,0,0,1-.29-.08L6.52,5a.2.2,0,0,0-.31-.07l-.56.44a.19.19,0,0,0-.07.18l.13.8a.2.2,0,0,1-.19.22H5.22A.2.2,0,0,0,5,6.68L4.75,7.85A.18.18,0,0,1,4.68,8L3.4,9a.17.17,0,0,0-.07.11L3,10.38a.17.17,0,0,0,0,.15l1,1.22a.2.2,0,0,0,.13.07l2,.29a.2.2,0,0,1,.16.12L7,13.85A.19.19,0,0,1,7,14l-.22.54a.19.19,0,0,0,0,.2l1,1a.21.21,0,0,0,.2.06l2-.49a.19.19,0,0,0,.15-.18v-.39a.19.19,0,0,1,.1-.16l.59-.31a.2.2,0,0,0,.1-.17v-1a.18.18,0,0,1,0-.11l1.13-1.48a.19.19,0,0,0-.21-.3l-.51.13a.21.21,0,0,1-.21-.07L9.62,9.42l.29-.17a.21.21,0,0,1,.25,0l1.24,1.26a.21.21,0,0,0,.28,0l.77-.66a.19.19,0,0,0,0-.29l-.87-.72.09-.28,1,.34a.2.2,0,0,0,.13,0l.77-.24a.22.22,0,0,1,.15,0l.61.31a.19.19,0,0,1,.1.11l.36,1a.2.2,0,0,0,.24.12l.3-.07a.19.19,0,0,0,.14-.23l-.26-.92a.15.15,0,0,1,0-.1l.32-1.13a.2.2,0,0,1,.26-.1l.3.1a7.76,7.76,0,0,1,.85.46A8.5,8.5,0,0,0,8.5,0Zm1.63,8.47a.22.22,0,0,1-.25.2L8.43,8.54a.18.18,0,0,0-.16.07l-.16.22a.19.19,0,0,1-.22.05L6.61,8.81a.22.22,0,0,1-.19-.3L6.65,8a.22.22,0,0,0-.19-.3l-.54,0a.21.21,0,0,1-.1-.39l.88-.55A.24.24,0,0,1,7,6.78l.44.61a.2.2,0,0,1,0,.16L7.39,8,7.75,8a.21.21,0,0,0,.17-.3L7.34,6.52h.51A.23.23,0,0,1,8,6.63l.56,1a.24.24,0,0,0,.18.11l1.13.1a.22.22,0,0,1,.2.22Zm.17-1.41-.59.08a.22.22,0,0,1-.25-.27l.1-.32a.23.23,0,0,1,.32-.13l.48.24a.21.21,0,0,1-.07.4Z"
                            transform="translate(0 0)"
                            fill="#87bbfd"
                            className="hover-fillLight"
                          ></path>
                        </svg>
                        <span className="text-header">Enterprise</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg width="17" height="17">
                          <path
                            fill="#6772E5"
                            className="hover-fillDark"
                            d="M1.5 4h14c.828 0 1.5.67 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 0 13.5v-8C0 4.67.67 4 1.5 4z"
                          ></path>
                          <path
                            fill="#87BBFD"
                            className="hover-fillLight"
                            d="M13 15V4h2v11h-2zM2 4h2v11H2V4z"
                          ></path>
                          <path
                            fill="#6772E5"
                            className="hover-fillDark"
                            d="M11.5 3.5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1V4H4v-.5A2.5 2.5 0 0 1 6.5 1h4A2.5 2.5 0 0 1 13 3.5V4h-1.5v-.5z"
                          ></path>
                        </svg>
                        <span className="text-header">Partners</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg width="17" height="17">
                          <path
                            className="hover-fillLight"
                            fill="#87BBFD"
                            d="M16.17 1.51c-4.33 6.16-7.92 9.65-12.88 11.91-.32-1.3-1.38-6.55 1.27-9.27 2.76-2.82 6.83-1.68 10.73-2.9a.8.8 0 0 1 .88.26z"
                          ></path>
                          <path
                            className="hover-fillDark"
                            fill="#6772E5"
                            d="M1 14.37c.68-.26 1.33-.6 1.92-1.02.11-.05.22-.11.32-.18 4.61-3 8.17-6.06 12.8-11.79.19.15.29.37.28.6-.11 3.38-.57 7.9-3.13 10.52-2.33 2.38-6.84 1.83-8.83 1.45-.89.7-1.88 1.27-2.93 1.67A.66.66 0 0 1 1 14.37z"
                          ></path>
                        </svg>
                        <span className="text-header">Jobs</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg width="17" height="17">
                          <path
                            className="hover-fillLight"
                            fill="#87BBFD"
                            d="M16.17 1.51c-4.33 6.16-7.92 9.65-12.88 11.91-.32-1.3-1.38-6.55 1.27-9.27 2.76-2.82 6.83-1.68 10.73-2.9a.8.8 0 0 1 .88.26z"
                          ></path>
                          <path
                            className="hover-fillDark"
                            fill="#6772E5"
                            d="M1 14.37c.68-.26 1.33-.6 1.92-1.02.11-.05.22-.11.32-.18 4.61-3 8.17-6.06 12.8-11.79.19.15.29.37.28.6-.11 3.38-.57 7.9-3.13 10.52-2.33 2.38-6.84 1.83-8.83 1.45-.89.7-1.88 1.27-2.93 1.67A.66.66 0 0 1 1 14.37z"
                          ></path>
                        </svg>
                        <span className="text-header">Enviornment</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg width="17" height="15">
                          <path
                            fill="#87BBFD"
                            className="hover-fillLight"
                            d="M1 2h4.5v11H1.75C.78 13 0 12.22 0 11.25V3a1 1 0 0 1 1-1z"
                          ></path>
                          <path
                            fill="#6772E5"
                            className="hover-fillDark"
                            d="M14 13H2v-.03c1.14-.12 2-1.08 2-2.22V1a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3zm1-11h-4v4h4V2zM6 2v1h3V2H6zm0 3v1h3V5H6zm0 3v1h9V8H6z"
                          ></path>
                        </svg>
                        <span className="text-header">Newsroom</span>
                      </a>
                    </li>
                    <li className="defination">
                      <a href="#">
                        <svg width="17" height="17">
                          <path
                            fill="#6772E5"
                            className="hover-fillDark"
                            d="M4.5.8v6.29a1.5 1.5 0 1 0 1 0V.8L10 8l-2 7H2L0 8 4.5.8z"
                          ></path>
                          <path
                            fill="#87BBFD"
                            className="hover-fillLight"
                            d="M.5 14h9c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5z"
                          ></path>
                        </svg>
                        <span className="text-header">From the Blog</span>
                        <p>Introducing increement subscription</p>
                        <p>Introducing google pay on the new stripe</p>
                        <p>Stripe CLI</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li> </li>
                <li>
                  <a href="#">Sign in</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <nav className="productNav">
        <div className="container">
          <div className="container-lg colorize">
            <a className="home colorize" href="#">
              <figure className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48px"
                  height="48px"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M40 39c-9.37 9.37-21.6 9.4-31 0S-.37 18.37 9 9 31.6-2.34 41 7a23.94 23.94 0 0 1 6.9 19.17c-.48 5.4-3.8 8.67-7.9 12.83z"
                    fill="#9251ac"
                  ></path>
                  <path
                    d="M46.77 24a1.18 1.18 0 0 0-1.18 1.07 20 20 0 0 1-7.42 13.1c-.25.21-.51.4-.77.59l.6 1.53C34.34 43.22 30.29 44 24.75 44 14 44 7 36.78 7 26c0-9.68 5.44-15 14.52-15 6 0 10.2 1.48 11 4.51L41 7a24 24 0 1 0 7 18.2 1.19 1.19 0 0 0-1.23-1.2z"
                    fill="#f6a4eb"
                  ></path>
                  <path
                    d="M26.89 42.14c-9.75 0-14.56-7.38-14.56-13.22s3.6-8.91 7-8.91a4.38 4.38 0 0 1 3.65 1.75A2 2 0 0 0 26 22l6.51-6.51c-.77-3-4.93-6.87-11-6.87C12.44 8.64 5.26 16.28 5.26 26a19.17 19.17 0 0 0 19.49 19.1 22 22 0 0 0 13.94-4.81 1 1 0 0 0 .1-1.5 1 1 0 0 0-1.31-.09 17.78 17.78 0 0 1-10.59 3.44z"
                    fill="#fff"
                  ></path>
                </svg>
              </figure>
              <span>Radar</span>
            </a>
            <div className="mask-container">
              <ul>
                <li>
                  <a className="colorize active" href="#">
                    Overview
                  </a>
                </li>
                <li>
                  <a className="colorize " href="#">
                    Radar for Fraud Teams
                  </a>
                </li>
                <li>
                  <a className="colorize " href="#">
                    Chargeback Protection
                  </a>
                </li>
                <li>
                  <a className="colorize smoothlink" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="colorize external" href="#">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src="img/intro-img.svg" alt="" className="img-fluid" />
          </div>

          <div className="intro-info">
            <h2>
              <br />
              <span>
                Fight fraud with the strength of <br />
                <span className="colorSPan">the Stripe network</span>
              </span>
              <br />
            </h2>
            <div>
              <a href="#" className="btn-get-started scrollto">
                SIGN IN TO RADAR
              </a>
              <a href="#" className="btn-services scrollto">
                CREATE ACCOUNT
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
