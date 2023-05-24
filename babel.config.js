module.exports = function(api) {
  api.cache(true);
  const presets = ['expo'];
  return {
    presets: ['babel-preset-expo'],
    presets,
    plugins: ['react-native-reanimated/plugin']
  };
};

