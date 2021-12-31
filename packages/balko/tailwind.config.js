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
                keyout: {
                    '0%': { opacity: '1' },
                    '50%': { opacity: '0' }
                },
                fadeIn: {
                    '0%': {
                        opacity: '1'
                    },
                    '1%': {
                        opacity: '1'
                    },
                    '8%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '0'
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
                wiggle: 'fadeIn 60.1s ease-out'
            }
        }
    },
    plugins: [],
    variants: {
        borderColor: ['responsive', 'hover', 'focus', 'focus-within'],

        backgroundColor: ['responsive', 'hover', 'focus']
    }
};
