import { api } from "@/lib/api-client";
import type { components } from "@/lib/api-types";

export type User = components["schemas"]["User"];

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
