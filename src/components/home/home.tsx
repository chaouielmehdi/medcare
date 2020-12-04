import React from "react";
import "./home.css";
import Doctor1 from "../../assets/img/Doctor1.png";

function Home() {
	return (
		<div className="container-fluid">
			<div className="row d-flex justify-content-around bg-info mt-3">
				<div className="col-5 border text-center my-3">
					<div className="border">
						<button type="button" className="btn btn-light mx-2">
							<i className="fas fa-building mr-2"></i>
							Au cabinet
						</button>
						<button type="button" className="btn btn-light mx-2">
							<i className="fas fa-video mr-2"></i>
							En video
						</button>
						<button type="button" className="btn btn-light mx-2">
							<i className="fas fa-home mr-2"></i>A domicile
						</button>
					</div>

					<div className="border m-5">
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-user-md"></i>
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								placeholder="Chercher un médecin"
								aria-label="searchDoctor"
								aria-describedby="basic-addon1"
							/>
						</div>
						<p className="text-center">Ou</p>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-briefcase-medical"></i>
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								placeholder="Chercher un médecin"
								aria-label="searchDoctor"
								aria-describedby="basic-addon1"
							/>
						</div>
						<p className="text-center">Ou</p>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i className="fas fa-map-marker-alt"></i>
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								placeholder="Chercher un médecin"
								aria-label="searchDoctor"
								aria-describedby="basic-addon1"
							/>
						</div>
					</div>
				</div>

				<div className=" col-7 border text-center my-3">
					<p>Trouvez votre médcin et prenez rendez-vous ! </p>
					<div className="doctor1 rounded m-5">
						<img src={Doctor1} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
