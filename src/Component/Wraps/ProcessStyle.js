import { Box } from "@mui/system";
import { styled } from "@mui/system";

export const ProcessStyle = styled(Box)({
    ".main-process": {
        background: "#142b67",
        color: "white",
        ".inner-process": {
            padding: "116px 130px",
            '@media (max-width:1400px)': {
                padding: "120px 50px",
            },
            '@media (max-width:600px)': {
                padding: "60px 20px",
            },
            "h2": {
                fontSize: 60,
                textAlign: 'center',
                '@media (max-width:1200px)': {
                    fontSize: 46,
                },
                '@media (max-width:425px)': {
                    fontSize: 34,
                },
            },
            ".inner-process-sec": {
                ".MuiGrid-root ": {
                    alignItems: "center",
                },
                ".main-process-1": {
                    margin: 'auto',
                    ".process-1": {
                        margin: "100px 0",
                        '@media (max-width:899px)': {
                            margin: "0 0",
                        },
                        "h4": {
                            fontSize: 26,
                            fontWeight: 400,
                        },
                        ".process-1-txt": {
                            padding: "1rem",
                            '@media (max-width:600px)': {
                                padding: "10px 0",
                            },
                            "h3": {
                                fontWeight: 600,
                                fontSize: 34,
                                '@media (max-width:425px)': {
                                    fontSize: 24,
                                },
                            },
                            "p": {
                                marginTop: 10,
                                fontWeight: 300,
                                fontSize: 26,
                                lineHeight: "42px",
                                '@media (max-width:1440px)': {
                                    fontSize: 22,
                                },
                                '@media (max-width:1200px)': {
                                    fontSize: 20,
                                },
                                '@media (max-width:425px)': {
                                    lineHeight: "32px",
                                    fontSize: 18,
                                },
                            }

                        }
                    },
                },

                ".MuiPaper-root": {
                    backgroundColor: "transparent",
                    color: "#fff",
                    boxShadow: "none",
                },
                ".process-1-img": {
                    justifyContent: 'center',
                    display: 'flex',
                    '@media (max-width:899px)': {
                        justifyContent: 'center !important',
                        margin: "50px 0",
                    },
                    "img": {
                        width: "60%",
                        '@media (max-width:1200px) and (min-width:900px)': {
                            width: "72%",
                        },
                        '@media (max-width:900px)': {
                            width: "50%",
                        },
                        '@media (max-width:600px)': {
                            width: "80%",
                        }
                    }
                }
            }
        }
    },
    ".features": {
        ".heading": {
            textAlign: 'center',
            paddingTop: 60,
            fontSize: 78,
            color: "white",
            fontWeight: 500,
        },
        ".feature-box": {
            position: 'relative',
            ".feature-box-1": {
                marginTop: 70,
                ".feature-1-img": {
                    "img": {
                        display: 'flex',
                        margin: "auto",
                        height: "134px",
                        width: "163px",
                    },
                    "h2": {
                        textAlign: 'center',
                        fontSize: 30,
                        color: "white",
                        width: "75%",
                        margin: "auto",
                        paddingTop: 20,
                    }
                }
            },
            ".feature-box-position": {
                position: 'absolute',
                top: 0,
                zIndex: -1,
                "img": {
                    width: "100%",
                }
            }
        }
    }
});