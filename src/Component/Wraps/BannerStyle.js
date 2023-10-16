import { Box } from "@mui/system";
import { styled } from "@mui/system";

export const BannerStyle = styled(Box)({
    ".main_banner": {
        background: "#F3F1EB",
        width: '100%',
        ".inner-sec1": {
            display: 'flex',
            padding: '117px 109px 270px 100px',
            "@media (max-width:1200px)": {
                padding: '117px 59px 257px 50px',
            },
            "@media (max-width:991px)": {
                display: "block",
                padding: '117px 59px 0 50px',
            },
            "@media (max-width:575px)": {
                padding: "100px 20px",
                paddingBottom: 0,
            },
            "@media (max-width:425px)": {
                paddingBottom: 0,
            },
            '.inner-sec2': {
                display: 'flex',
                alignItems: 'center',
                "@media (max-width:767px)": {
                    display: 'block',
                    justifyContent: 'center',
                    margin: 'auto',

                },
                "h2": {
                    fontSize: 60,
                    color: '#1d4582',
                    marginRight: "40px",
                    fontWeight: "bold",
                    marginTop: '70px',
                    marginBottom: '70px',
                    "@media (max-width:1670px)": {
                        maxWidth: "600px",
                    },
                    "@media (max-width:1399px)": {
                        fontSize: "50px",
                    },
                    "@media (max-width:1200px)": {
                        fontSize: 46,
                    },
                    "@media (max-width:991px)": {
                        margin: 0,
                    },
                    "@media (max-width:576px)": {
                        fontSize: 32,
                    },
                    "@media (max-width:425px)": {
                        fontSize: 28,
                    },
                    "span": {
                        fontWeight: 900,
                        display: "block",
                        color: '#3679b0',
                    }
                },
                '.bestBrandImg': {
                    margin: '50px 0',
                    width: '190px',
                    "@media (max-width:1440px)": {
                        textAlign: 'center',
                    },
                    "@media (max-width:991px)": {
                        margin: "auto",
                    },
                    'img': {
                        width: "100%",
                    }
                }
            },
        }
    }
});
