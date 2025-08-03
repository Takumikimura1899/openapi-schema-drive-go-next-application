import { api } from "@/lib/api-client";

export const getUserList = async () => {
	const { data, error } = await api.GET("/users");

	if (error) {
		throw new Error("Failed to fetch user list");
	}

	return data || [];
};
