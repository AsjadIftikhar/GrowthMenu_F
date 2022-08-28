module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    plugins: [
        require('flowbite/plugin')
    ],
    theme: {
        extend: {
            colors: {
                DarkBlue: "#050F94",
                LightBlue: "#4ABFD4",
                LightYellow: "#F7F651",
                LightGrey: "#F8F9FA",

                //Service Logo Colors:
                ExtraLightBlue: "#EAF9FF",
                LightPink: "#FFECEF",
                ExtraLightYellow: "#FFF6D3",
                LightOrange: "#FDEEE4",
                LightIndigo: "#F4F4FF",
                LightGreen: "#E4FFEE",

                DarkPurple: "#262A4E",
                IconGrey: "#A9A9A9",
                DarkIndigo: "#4E2D92",
                Grey_1: "#616368",
                Green: '#00A389',
                Yellow_2: '#FFC107',
                Red: "#FF4A55",
                Grey_2: '#C2C2C2',
                Grey_3: '#8D8D8D',

            },
        },
    },

};
