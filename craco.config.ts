import path from 'path';

const config = {
    webpack: {
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@components': path.resolve(__dirname, 'src/components/'),
        },
    },
};

export default config;