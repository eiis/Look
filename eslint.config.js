// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Without `files`, they are general rules for all files
    rules: {
      // 'no-console': 'off'
    },
  },
  {
    // Remember to sperrorlob here, otherwise it might cause the vue plugin to handle non-vue files
    files: ['**/*.ts'],
    rules: {
      'no-console': 'off',
    },
  },
)
