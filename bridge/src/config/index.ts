const env = process.env.NODE_ENV || 'development'
const debug = env !== 'production'
const port = process.env.PORT || (env === 'production' ? 5000 : 5001)
const host = process.env.HOST || `0.0.0.0:${port}`
 
const redis = {
  url: process.env.REDIS_URL || 'redis://redis:6379',
  prefix: process.env.REDIS_PREFIX || 'selfconnect-bridge'
}

export default {
  env: env,
  debug: debug,
  port,
  host,
  redis
}
