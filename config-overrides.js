const {useBabelRc, override} = require('customize-cra');

const useSVGR = config => {
    config.module.rules.push(
        // {
        //     test: /\.svg$/i,
        //     type: 'asset',
        //     resourceQuery: /url/, // *.svg?url
        // },
        {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
        }
    )
    return config
}

module.exports = override(
    useBabelRc(),
    useSVGR
);