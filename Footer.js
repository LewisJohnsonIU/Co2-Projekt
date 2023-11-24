import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 mt-3">
            <p>&copy; 2023 Climate Organization. All rights reserved.</p>
          </div>
          <div className="col-12">
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://privacy.com"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://service.com"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <h2>Folgen Sie uns auf sozialen Medien</h2>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mx-auto mb-3">
            <select id="language-select" className="form-select">
              <option value="de">Deutsch</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
