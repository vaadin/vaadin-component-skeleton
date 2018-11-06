module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          chrome: 70,
          firefox: 63
        }
      }
    ]
  ]
};
