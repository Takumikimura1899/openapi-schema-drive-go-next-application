import { UserList } from "../_components/UserList";
import { getUserList } from "../_lib/api/users";

export default async function AuthHome() {
	const userList = await getUserList();
	return <UserList users={userList} />;
}
