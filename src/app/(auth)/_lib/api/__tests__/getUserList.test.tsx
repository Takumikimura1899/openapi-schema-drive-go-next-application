import { vi, describe, beforeEach, it, expect } from "vitest";
import { getUserList } from "../users/getUserList";
import * as apiClient from "@/lib/api-client";

vi.mock("@/lib/api-client", () => ({
	api: {
		GET: vi.fn(),
	},
}));

const mockApiGet = vi.mocked(apiClient.api.GET);

describe("getUserList", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should return user list when API call is successful", async () => {
		const mockUsers = [
			{ id: "1", name: "Alice" },
			{ id: "2", name: "Bob" },
		];
		mockApiGet.mockResolvedValue({
			data: mockUsers,
			error: undefined,
		});

		const result = await getUserList();

		expect(mockApiGet).toHaveBeenCalledWith("/users");
		expect(result).toEqual(mockUsers);
	});

	it("should return empty array when data is null", async () => {
		mockApiGet.mockResolvedValue({
			data: null,
			error: undefined,
		});

		const result = await getUserList();

		expect(result).toEqual([]);
	});

	it("should return empty array when data is undefined", async () => {
		mockApiGet.mockResolvedValue({
			data: undefined,
			error: undefined,
		});

		const result = await getUserList();

		expect(result).toEqual([]);
	});

	it("should throw error when API call fails", async () => {
		mockApiGet.mockResolvedValue({
			data: undefined,
			error: { message: "Network error" },
		});

		await expect(getUserList()).rejects.toThrow("Failed to fetch user list");
		expect(mockApiGet).toHaveBeenCalledWith("/users");
	});

	it("should handle API rejection", async () => {
		mockApiGet.mockRejectedValue(new Error("Network failure"));

		await expect(getUserList()).rejects.toThrow("Network failure");
	});
});
