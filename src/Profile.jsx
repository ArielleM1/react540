import styles from "./Profile.module.css";

const Profile = (props) => {
	let userID = window.location.pathname.split("/")[2];
	let user = props.function(userID);
	// console.log(user);
	return (
		<div className="row">
			<div className="col-md-3">
				<img src={user.avatar} alt="" />
			</div>
			<div className="col-md-9">
				<h2>
					{user.name} {user.lastname}
				</h2>
				<p className={styles.about}>{user.about}</p>
				<p className={styles.user}>Просто какой-то длинный текст от автора</p>
			</div>
		</div>
	);
};

export default Profile;
