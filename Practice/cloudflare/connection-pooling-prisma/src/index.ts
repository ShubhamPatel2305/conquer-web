/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export interface Env{
	DATABASE_URL: string
}

export default {
	async fetch(request:Request, env:Env, ctx:ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

		// Prevent handling of favicon.ico requests
		if (url.pathname === '/favicon.ico') {
		return new Response('Not found', { status: 404 });
		}
		
		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL,
		}).$extends(withAccelerate())
		const resp=await prisma.log.create({
			data:{
				level:'Info',
				message:`${request.method} , ${request.url}`,
				meta:{
					headers: JSON.stringify(request.headers),
				},
			},
		})

		return Response.json(resp);
	},
} satisfies ExportedHandler<Env>;
