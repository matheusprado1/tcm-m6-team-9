import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    interface DefaultTheme {
        color: {
            brand: IBrandColors;
            greyScale: IGreyColors;
            feedback: IFeedbackColors;
            randomColors: IRandomColors;
        };
        typo: ITextTypos;
    }
}

interface ITextTypos {
    heading1_700: ITextStyle;
    heading2_600: ITextStyle;
    heading3_600: ITextStyle;
    heading3_500: ITextStyle;
    heading4_600: ITextStyle;
    heading4_500: ITextStyle;
    heading5_600: ITextStyle;
    heading5_500: ITextStyle;
    heading6_600: ITextStyle;
    heading6_500: ITextStyle;
    heading7_600: ITextStyle;
    heading7_500: ITextStyle;
    body1_600: ITextStyle;
    body1_400: ITextStyle;
    body2_500: ITextStyle;
    body2_400: ITextStyle;
    btn_bigText: ITextStyle;
    btn_mediumText: ITextStyle;
    input_placeholder: ITextStyle;
    input_label: ITextStyle;
}

interface IBrandColors {
    brand1: string;
    brand2: string;
    brand3: string;
    brand4: string;
}

interface IGreyColors {
    grey0: string;
    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
    grey5: string;
    grey6: string;
    grey7: string;
    grey8: string;
    grey9: string;
    grey10: string;
    whiteFixed: string;
}

interface IFeedbackColors {
    alert1: string;
    alert2: string;
    alert3: string;
    sucess1: string;
    sucess2: string;
    sucess3: string;
}

interface IRandomColors {
    random1: string;
    random2: string;
    random3: string;
    random4: string;
    random5: string;
    random6: string;
    random7: string;
    random8: string;
    random9: string;
    random10: string;
    random11: string;
    random12: string;
}

interface ITextStyle {
    weight: string;
    size: string;
    fontFamily: string;
}

export const styleGuide: DefaultTheme = {
    color: {
        brand: {
            brand1: "#4529E6",
            brand2: "#5126EA",
            brand3: "#B0A6F0",
            brand4: "#EDEAFD",
        },
        greyScale: {
            grey0: "#0B0D0D",
            grey1: "#212529",
            grey2: "#495057",
            grey3: "#868E96",
            grey4: "#ADB5BD",
            grey5: "#CED4DA",
            grey6: "#DEE2E6",
            grey7: "#E9ECEF",
            grey8: "#F1F3F5",
            grey9: "#F8F9FA",
            grey10: "#FDFDFD",
            whiteFixed: "#FFFFFF",
        },
        feedback: {
            alert1: "#CD2B31",
            alert2: "#FDD8D8",
            alert3: "#FFE5E5",
            sucess1: "#18794E",
            sucess2: "#CCEBD7",
            sucess3: "#DDF3E4",
        },
        randomColors: {
            random1: "#E34D8C",
            random2: "#C04277",
            random3: "#7D2A4D",
            random4: "#7000FF",
            random5: "#7000FF",
            random6: "#36007D",
            random7: "#349974",
            random8: "#2A7D5F",
            random9: "#153D2E",
            random10: "#6100FF",
            random11: "#5700E3",
            random12: "#30007D",
        },
    },
    typo: {
        heading1_700: {
            weight: "700",
            size: "44px",
            fontFamily: "'Lexend', sans-serif",
        },
        heading2_600: {
            weight: "600",
            size: "36px",
            fontFamily: "'Lexend', sans-serif",
        },
        heading3_600: {
            weight: "600",
            size: "32px",
            fontFamily: "'Lexend', sans-serif",
        },
        heading3_500: {
            weight: "500",
            size: "32px",
            fontFamily: "'Lexend', sans-serif",
        },
        heading4_600: {
            weight: "600",
            size: "28px",
            fontFamily: "'Lexend', sans-serif",
        },
        heading4_500: {
            weight: "500",
            size: "28px",
            fontFamily: "'Lexend', sans-serif",
        },
        heading5_600: {
            weight: "600",
            size: "24px",
            fontFamily: "'Lexend', sans-serif",
        },
        heading5_500: {
            weight: "500",
            size: "24px",
            fontFamily: "'Lexend', sans-serif",
        },
        heading6_600: {
            weight: "600",
            size: "20px",
            fontFamily: "'Lexend', sans-serif",
        },
        heading6_500: {
            weight: "500",
            size: "20px",
            fontFamily: "'Lexend', sans-serif",
        },
        heading7_600: {
            weight: "600",
            size: "16px",
            fontFamily: "'Lexend', sans-serif",
        },
        heading7_500: {
            weight: "500",
            size: "16px",
            fontFamily: "'Lexend', sans-serif",
        },
        body1_600: {
            weight: "600",
            size: "16px",
            fontFamily: "'Inter', sans-serif",
        },
        body1_400: {
            weight: "400",
            size: "16px",
            fontFamily: "'Inter', sans-serif",
        },
        body2_500: {
            weight: "500",
            size: "14px",
            fontFamily: "'Inter', sans-serif",
        },
        body2_400: {
            weight: "400",
            size: "14px",
            fontFamily: "'Inter', sans-serif",
        },
        btn_bigText: {
            weight: "600",
            size: "16px",
            fontFamily: "'Inter', sans-serif",
        },
        btn_mediumText: {
            weight: "600",
            size: "14px",
            fontFamily: "'Inter', sans-serif",
        },
        input_placeholder: {
            weight: "400",
            size: "16px",
            fontFamily: "'Inter', sans-serif",
        },
        input_label: {
            weight: "500",
            size: "14px",
            fontFamily: "'Inter', sans-serif",
        },
    },
};
