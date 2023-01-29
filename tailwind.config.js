/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./resources/**/*.{php,html,js}"],
    theme: {
        extend: {
            colors: {
                fontWhite: "#eff2f7",
                fontBlack: "#343a40",
                orange: "#FF9800",
                navbar: "#323645",
                top: "#252B3B",
                qBlue: "#62B5F6",
                qDarkblue: "#106CB5",
                qCoklat: "#C7821B",
                qBwhite: "#F2F7FB",
                blueText: "#4aa3ff",
                redText: "#ff3d60",
                grayText: "#505d69",
                bgcs: "#232631",
            },
            fontFamily: {
                Nunito: "Nunito, sans-serif",
            },
            spacing: {
                17: "4.25rem",
            },
            fontSize: {
                "2.5xl": "1.753rem",
            },
            animation: {
                "bounce-slow": "bounce 3s linear infinite",
                qBounce: "qbounce 2s linear infinite",
                slide: "slide 2s steps(4) infinite",
                typeing: "typeing 3s steps(14) infinite",
            },
            keyframes: {
                qbounce: {
                    " 0%, 100%": {
                        transform: "translateY(0)",
                        animationTimingFunction: "cubic-bezier(0, 0, .6, 1.87)",
                    },
                    "50%": {
                        transform: "translateY(-5%)",
                        animaTiontimingFunction: "cubic-bezier(0, 0, 0, 1)",
                    },
                },
                slide: {
                    "100%": {
                        top: "-80px",
                    },
                },
                typeing: {
                    "40%, 60%": {
                        left: "calc(100% + 30px)",
                    },
                    "100%": {
                        left: "0",
                    },
                },
            },
        },
    },
    plugins: [],
};
