import React from 'react';
import { Row, Col } from "reactstrap";

export default function List() {
    return (
        <div>
            <b>
            NOTE: Below are given the list of country codes for which this app
            gives support. Please use only those.
          </b>
          <ul>
            <Row>
              <Col>
                <li>CAD</li>
                <li>HKD</li>
                <li>ISK</li>
                <li>PHP</li>
                <li>DKK</li>
                <li>HUF</li>
                <li>CZK</li>
                <li>GBP</li>
                <li>RON</li>
                <li>SEK</li>
                <li>BGN</li>
              </Col>
              <Col>
                <li>IDR</li>
                <li>INR</li>
                <li>BRL</li>
                <li>RUB</li>
                <li>HRK</li>
                <li>JPY</li>
                <li>THB</li>
                <li>CHF</li>
                <li>EUR</li>
                <li>MYR</li>
                <li>PLN</li>
              </Col>
              <Col>
                <li>TRY</li>
                <li>CNY</li>
                <li>NOK</li>
                <li>NZD</li>
                <li>ZAR</li>
                <li>USD</li>
                <li>MXN</li>
                <li>SGD</li>
                <li>AUD</li>
                <li>ILS</li>
                <li>KRW</li>
              </Col>
            </Row>
          </ul>
        </div>
    )
}
