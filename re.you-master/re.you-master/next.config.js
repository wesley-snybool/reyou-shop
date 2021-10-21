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
  i18n:{
    locale: ['en-US', 'fr', 'nl-NL'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'example.nl',
        defaultLocale: 'nl-NL',
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr',
        // an optional http field can also be used to test
        // locale domains locally with http instead of https
        http: true,
      },
    ],
  },
});

 


 module.exports = withAntdLess(withPWA(
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
 

module.exports = withAntdLess({
  // optional
  // modifyVars: { '@primary-color': '#04f' },
  // optional
  // lessVarsFilePath: './public/style/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {},

  
}) 
