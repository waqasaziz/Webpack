if(process.env.NODE_ENV === 'production') { // Only for production mode
    module.exports = {
        plugins: [
            require('autoprefixer'),
            require('cssnano')
        ]
    }
}