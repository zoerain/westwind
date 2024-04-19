import React from 'react';
import "./ServiceList.css";


function ServiceList() {

    return (
      <main className="container text-center text-secondary mt-50">
        <section>
          <ul className="row">
            <li className="col">
              <h6>Boarding</h6>
              <p>Short description.</p>
            </li>
            <li className="col">
              <h6>Horse Sales</h6>
              <p>Short description.</p>
            </li>
            <li className="col">
              <h6>Events</h6>
              <p>Short description.</p>
            </li>
          </ul>
        </section>
      </main>
    );
}

export default ServiceList;
