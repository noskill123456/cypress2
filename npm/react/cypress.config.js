module.exports = {
  'viewportWidth': 400,
  'viewportHeight': 400,
  'projectId': 'k13n18',
  'env': {
    'reactDevtools': true,
  },
  'component': {
    experimentalSingleTabRunMode: true,
    'excludeSpecPattern': [
      '**/__snapshots__/*',
      '**/__image_snapshots__/*',
      'examples/**/*',
    ],
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
}
