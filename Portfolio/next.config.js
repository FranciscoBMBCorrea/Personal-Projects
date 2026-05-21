/** @type {import('next').NextConfig} */
const projectRoot = __dirname

const nextConfig = {
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
}

module.exports = nextConfig
