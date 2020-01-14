import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import './Footer.css';

export default class Header extends Component {
  render() {
    return (
      <footer class="mainfooter" role="contentinfo">
        <div class="footer-middle">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4>Heading 1</h4>
                  <ul class="list-unstyled">
                    <li><a href="/#"></a></li>
                    <li><a href="/#">Payment Center</a></li>
                    <li><a href="/#">Contact Directory</a></li>
                    <li><a href="/#">Forms</a></li>
                    <li><a href="/#">News and Updates</a></li>
                    <li><a href="/#">FAQs</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 copy">
                <p class="text-center">&copy; Copyright 2020 - VENADOS F.C.  Todos los derechos reservados.</p>
              </div>
            </div>


          </div>
        </div>
      </footer>
    )
  }
}
