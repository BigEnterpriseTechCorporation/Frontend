import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	// ...
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '100.126.9.5',
				port: '',
				pathname: '/**',
			},
		],
	},
	// ...
}


export default nextConfig
