module.exports = ({ config, mode }) => {
    config.module.rules.push(
        {
            test: /\.stories\.tsx?$/,
            loaders: [
                {
                    loader: require.resolve('@storybook/addon-storysource/loader'),
                    options: {
                        parser: 'typescript',
                        prettierConfig: {
                            tabWidth: 4,
                            printWidth: 90,
                            singleQuote: true,
                            semi: false,
                        },
                    },
                },
            ],
            enforce: 'pre',
        },
        {
            test: /\.tsx?$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { flow: false, typescript: true }]],
            },
        }
    )
    config.resolve.extensions.push('.ts', '.tsx')
    return config
}
