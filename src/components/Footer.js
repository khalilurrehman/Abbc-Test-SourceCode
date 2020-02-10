import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <section id="pricing">
        <div className="container">
          <div className="row margin-top-price">
            <div className="col-lg-6">
              <h3>
                <span className="footer-h3"> Radar is built into Stripe.</span>
                <br /> Radar’s advanced machine learning is available to every
                Stripe account.
              </h3>
            </div>
            <div className="col-lg-6">
              <a href="#" className="btn btn-success margin-btn footer-success">
                SIGN IN TO RADAR
              </a>
              <a href="#" className="btn btn-info margin-btn footer-info">
                CREATE ACCOUNT
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 footer-links">
                <h4 className="footer-h4">United States</h4>
                <h4 className="footer-h4">English</h4>
                <ul>
                  <li>© Stripe</li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>PRODUCTS</h4>
                <ul>
                  <li>
                    <a href="#">Payments</a>
                  </li>
                  <li>
                    <a href="#">Billing</a>
                  </li>
                  <li>
                    <a href="#">Connect</a>
                  </li>
                  <li>
                    <a href="#">Payouts</a>
                  </li>
                  <li>
                    <a href="#">Atlas</a>
                  </li>
                  <li>
                    <a href="#">Radar</a>
                  </li>
                  <li>
                    <a href="#">Issuing</a>
                  </li>
                  <li>
                    <a href="#">Terminal</a>
                  </li>
                  <li>
                    <a href="#">Corporate card</a>
                  </li>
                  <li>
                    <a href="#">Capital</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4 className="color-none">d</h4>
                <ul>
                  <li>
                    <a href="#">SaaS</a>
                  </li>
                  <li>
                    <a href="#">Platforms</a>
                  </li>
                  <li>
                    <a href="#">Marketplaces</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Global</a>
                  </li>
                  <li>
                    <a href="#">Guides</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>DEVELOPERS</h4>
                <ul>
                  <li>
                    <a href="#">Documentation</a>
                  </li>
                  <li>
                    <a href="#">API reference</a>
                  </li>
                  <li>
                    <a href="#">API status</a>
                  </li>
                  <li>
                    <a href="#">Open source</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Enterprise</a>
                  </li>
                  <li>
                    <a href="#">Customers</a>
                  </li>
                  <li>
                    <a href="#">Partners</a>
                  </li>
                  <li>
                    <a href="#">Partner Program</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Newsroom</a>
                  </li>
                  <li>
                    <a href="#">Enviornment</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>RESOURCES</h4>
                <ul>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Privacy & terms</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
