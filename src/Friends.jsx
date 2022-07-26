const TableRow = (props) => {
	return (
		<tr>
			<th scope="row">{props.index + 1}</th>
			<td>
				{props.name} {props.lastname}
			</td>
			<td>Otto</td>
			<td>@mdo</td>
		</tr>
	);
};

const Friends = (props) => {
	let users = props.function();
	let usersCount = Object.keys(users).length;
	let userRow = [];
	for (let i = 0; i < usersCount; i++) {
		userRow.push(<TableRow key={i} index={i} name={users[i].name} lastname={users[i].lastname} />);
	}
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">ФИО друга</th>
				</tr>
			</thead>
			<tbody>{userRow}</tbody>
		</table>
	);
};

export default Friends;