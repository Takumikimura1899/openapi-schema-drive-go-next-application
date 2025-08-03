import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		NEXT_API_URL: z.url(),
	},
	client: {},
	runtimeEnv: {
		NEXT_API_URL: process.env.NEXT_API_URL || "http://localhost:8080",
	},
});
