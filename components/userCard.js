import styles from "../styles/Home.module.css";
import Link from "next/link";

const userCard = ({ user, key }) => {
	return (
		<div key={key} className={styles.user_container}>
			<h3>{user.name}</h3>
			<Link href={`userslist/${user.id}`}>
				<a>Details</a>
			</Link>
		</div>
	);
};

export default userCard;
