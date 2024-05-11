import React from 'react';


function ServiceList() {

  const serviceStyle = {
    fontFamily: '"Abril Fatface", serif',
  };

  const quicksand = {
    fontFamily: '"Quicksand", sansSerif',
  };

  const boardingStyle = {
    background:
      "url('https://images.unsplash.com/photo-1685343415792-0dafa15f0a05?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    backgroundSize: "contain",
    color: "white",
  };


  const horseSalesStyle = {
    background:
      "url(https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    backgroundSize: "contain",
    color: "white",
  };
   

    return (
      <main className="container text-center mt-50" style={serviceStyle}>
        <section>
          <div className="row">
            <div
              className="flex col col-sm-12 col-md-6 col-lg-4 my-6 mx-auto">
              <div className="card custom-card" style={boardingStyle}>
                <div className="card-body">
                  <h5 className="card-title">Boarding</h5>
                  <p className="card-text" style={quicksand}>
                    Short description.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex col col-sm-12 col-md-6 col-lg-4 my-6 mx-auto">
              <div className="card custom-card" style={horseSalesStyle}>
                <div className="card-body">
                  <h5 className="card-title">Horse Sales</h5>
                  <p className="card-text" style={quicksand}>
                    Short description.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex col col-sm-12 col-md-6 col-lg-4 my-6 mx-auto">
              <div className="card custom-card">
                <div className="card-body">
                  <h5 className="card-title">Events/Clinics</h5>
                  <p className="card-text" style={quicksand}>
                    Short description.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex col col-sm-12 col-md-6 col-lg-4 my-6 mx-auto"
              style={{ marginTop: "150px", marginBottom: "150px" }}
            >
              <div className="card custom-card">
                <div className="card-body">
                  <h5 className="card-title">Training</h5>
                  <p className="card-text" style={quicksand}>
                    Short description.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex col col-sm-12 col-md-6 col-lg-4 my-6 mx-auto"
              style={{ marginTop: "150px", marginBottom: "150px" }}
            >
              <div className="card custom-card">
                <div className="card-body">
                  <h5 className="card-title">Lessons</h5>
                  <p className="card-text" style={quicksand}>
                    Short description.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}

export default ServiceList;
