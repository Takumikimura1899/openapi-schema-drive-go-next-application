import type { User } from "../types";

export const UserList = ({ users }: { users: User[] }) => {
	return (
		<ul>
			{users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
	);
};
