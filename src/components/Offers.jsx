import React from "react";
  import { useState } from "react";
import '../design/Offers.css';

export default function PaymantPlans () {
        const [toggle, setToggle] = useState(false);

        function handleButtonClick () {
          setToggle(!toggle)
        }

        return (
            <>
            <button onClick={handleButtonClick} className="btn-toggle">
                Voir les tarifs
            </button>
            {toggle && (
                <div class="columns">
                <ul class="price">
                  <li class="header">Basic</li>
                  <li class="grey">$ 9.99 / year</li>
                  <li>10GB Storage</li>
                  <li>10 Emails</li>
                  <li>10 Domains</li>
                  <li>1GB Bandwidth</li>
                  <li class="grey"><a href="#" class="button">Sign Up</a></li>
                </ul>
                <ul class="price">
                  <li class="header">Advanced</li>
                  <li class="grey">$ 29.99 / year</li>
                  <li>50GB Storage</li>
                  <li>100 Emails</li>
                  <li>100 Domains</li>
                  <li>10GB Bandwidth</li>
                  <li class="grey"><a href="#" class="button">Sign Up</a></li>
                </ul>
                <ul class="price">
                  <li class="header">SuperUser</li>
                  <li class="grey">$ 59.99 / year</li>
                  <li>1000GB Storage</li>
                  <li>1000 Emails</li>
                  <li>1000 Domains</li>
                  <li>100GB Bandwidth</li>
                  <li class="grey"><a href="#" class="button">Sign Up</a></li>
                </ul>
              </div>
            )}
            </>
        )
} 