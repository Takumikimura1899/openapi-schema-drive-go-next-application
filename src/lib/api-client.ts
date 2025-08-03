import createClient from "openapi-fetch";
import type { paths } from "./api-types";

export const api = createClient<paths>({
	baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080",
});
