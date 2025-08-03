import createClient from "openapi-fetch";
import type { paths } from "./api-types";
import "server-only";
import { env } from "@/utils/env";

export const api = createClient<paths>({
	baseUrl: env.NEXT_API_URL,
});
