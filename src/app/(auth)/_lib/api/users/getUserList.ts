import type { User } from "@/app/(auth)/types";
import { api } from "@/lib/api-client";

/**
 * @throws {Error}
 */
export const getUserList = async (): Promise<User[]> => {
	const { data, error } = await api.GET("/users");

	if (error) {
		throw new Error("Failed to fetch user list");
	}

	return data || [];
};
