module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', '../piccaso/src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            transformOrigin: {
                0: '0%'
            },
            zIndex: {
                '-1': '-1'
            },
            keyframes: {
                wiggle: {
                    '0%': { opacity: '0' },
                    '20%': { opacity: '1' },
                    '60%': { opacity: '1' },
                    '100%': { opacity: '0' }
                },
                fadeIn: {
                    '0%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '1'
                    }
                },
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                }
            },
            animation: {
                wiggle: 'wiggle 6s ease-in-out'
            }
        }
    },
    plugins: [],
    variants: {
        borderColor: ['responsive', 'hover', 'focus', 'focus-within'],

        backgroundColor: ['responsive', 'hover', 'focus']
    }
};
