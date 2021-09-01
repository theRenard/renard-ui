module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ['prismjs', {
      languages: ['javascript', 'css', 'markup', 'tsx', 'typescript'],
      plugins: ['line-numbers'],
      theme: 'tomorrow',
      css: true,
    }],
  ],
};
