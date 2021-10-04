const isLocal = process.env.NODE_ENV !== 'production';

export default {
  isLocal,
  logger: {
    level: (process.env.LOG_LEVEL || 'warn').toLowerCase()
  },
  service: {
    name: 'cms'
  },
}
