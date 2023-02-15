const withMdxEnhanced = require("next-mdx-enhanced");

const isProd = process.env.NODE_ENV === 'production'


module.exports = withMdxEnhanced({
  defaultLayout: true,
  fileExtensions: ["mdx", "md"],
})({
  assetPrefix: isProd ? '/new-profile/' : '',
  pageExtensions: ["js", "jsx", "mdx"],
  images: {
    unoptimized: true
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
});
