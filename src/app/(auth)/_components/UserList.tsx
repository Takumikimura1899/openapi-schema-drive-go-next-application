import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { User } from "../types";

export const UserList = ({ users }: { users: User[] }) => {
	if (!users || users.length === 0) {
		return <div>No users found.</div>;
	}

	return (
		<Table>
			<TableCaption>ユーザーリスト</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">ID</TableHead>
					<TableHead>Name</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{users.map((user) => (
					<TableBodyRow key={user.id} user={user} />
				))}
			</TableBody>
		</Table>
	);
};

const TableBodyRow = ({ user }: { user: User }) => {
	return (
		<TableRow>
			<TableCell className="font-medium">{user.id}</TableCell>
			<TableCell>{user.name}</TableCell>
		</TableRow>
	);
};
