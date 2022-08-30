const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");
const withAntdLess = require('next-plugin-antd-less');
const runtimeCaching = require("next-pwa/cache");


 module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV !== "production",
    dest: "public",
    runtimeCaching,
  },
  i18n,
  images: {
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com/'],
  },
});



/* module.exports = withAntdLess(withPWA(
  {
    pwa: {
      disable: process.env.NODE_ENV !== "production",
      dest: "public",
      runtimeCaching,
    },
    i18n,
    lessVarsFilePathAppendToEndOfContent: false,
  }
));
 */
/*
module.exports = withAntdLess({
  // optional
  // modifyVars: { '@primary-color': '#04f' },
  // optional
  // lessVarsFilePath: './public/style/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {},

  ,
}) */
