const {useBabelRc, override} = require('customize-cra');

const useSVGR = config => {
    config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    })
    return config
}

module.exports = override(
    useBabelRc(),
    useSVGR
);