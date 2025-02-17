module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dapo4u.github.io/' : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`
      }
    }
  }
};
