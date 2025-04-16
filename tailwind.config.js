module.exports = {

    purge: ['./resources/js/pages/*.vue', './resources/js/**/*.js'],
  
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '0rem',
                sm: '0rem',
                lg: '0rem',
                xl: '0rem',
                '2xl': '0rem',
            },
            screens: {
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                '2xl': '1250px'
            }
        },
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
            '2xl': '1400px'
        },
        extend: {
            // You can add more custom extensions here if needed
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
  }