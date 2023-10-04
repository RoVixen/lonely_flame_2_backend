
module.exports = {
  apps : [{
    name   : "template_backend",
    // script : "./src/index.ts",
    script : "./build/index.js",
    env_production: {
      PORT: process.env.SERVER_PORT,
      NODE_ENV: 'production',
    },
  }]
}
