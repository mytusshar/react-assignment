import "./App.css";
import { useState } from "react";

function TableComp(props) {
	return (
		<table className="Div">
			<thead>
				<tr>
					<th id="table-head">Username</th>
					<th id="table-head">Lastname</th>
					<th id="table-head">Mobile</th>
				</tr>
			</thead>
			<tbody>
				{props.userData.map((o, i) => {
					return (
						<tr key={i} id="table-cell">
							<td>{o.username}</td>
							<td>{o.lastname}</td>
							<td>{o.mobile}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

function FormComp(props) {
	const [username, setName] = useState("Ross");
	const [lastname, setLastName] = useState("Geller");
	const [mobile, setMobileNum] = useState("99999999999");

	const submitForm = (e) => {
		e.preventDefault();
		const user = {
			username,
			lastname,
			mobile
		};
		props.setUserData([...props.userData, user]);
	};
	return (
		<form className="Form" onSubmit={(e) => submitForm(e)}>
			<input
				id="input"
				name="username"
				value={username}
				onChange={(e) => setName(e.target.value)}
			></input>
			<input
				id="input"
				name="lastname"
				value={lastname}
				onChange={(e) => setLastName(e.target.value)}
			></input>
			<input
				id="input"
				name="mobile"
				value={mobile}
				onChange={(e) => setMobileNum(e.target.value)}
			></input>

			<button type="submit" id="button">
				Submit
			</button>
		</form>
	);
}

function App() {
	const [userData, setUserData] = useState([]);
	return (
		<div className="App">
			<FormComp userData={userData} setUserData={setUserData} />
			<TableComp userData={userData} />
		</div>
	);
}

export default App;
