import styles from "../styles/Home.module.css";

const userCard = ({ user }) => {
	return (
		<div key={user.id} className={styles.user_container}>
			<h3>{user.name}</h3>
			<h3>{user.website}</h3>
		</div>
	);
};

export default userCard;
