/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Encuentra la regla que maneja los archivos SVG y la excluye
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };

export default nextConfig;
