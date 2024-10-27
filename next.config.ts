import type { NextConfig } from 'next'
import { host } from './config'

const nextConfig: NextConfig = {
	// ...
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: host,
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'placehold.co',
				pathname: "/**"
			},
		],
	},
	// ...
}


export default nextConfig
