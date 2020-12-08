import React from "react";
import Container from "../../../components/Container/Container";
import DoctorCard from "../../../components/DoctorCard/DoctorCard";
import Row from "../../../components/Row/Row";
import { doctors } from "../../../models/Doctor";

function Doctors() {
	return (
		<Container>
			<>
				<Row></Row>
				{doctors.map((doctor, index) => (
					<DoctorCard key={index} className="mb-4" doctor={doctor} />
				))}
			</>
		</Container>
	);
}

export default Doctors;
