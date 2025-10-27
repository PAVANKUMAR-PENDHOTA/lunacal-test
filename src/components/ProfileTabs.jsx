import React, { useState } from "react";
import { Paper, Tabs, Tab, Box, Typography, IconButton, } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";

const tabData = {
    "AboutMe": `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.\n
I was born and raised zin Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters — Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...`,

    "Experience 1": `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.\n
I was born and raised zin Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters — Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...`,

    "Recommended": `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.\n
I was born and raised zin Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters — Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...`,
};

export default function ProfileTabs() {
    const [tab, setTab] = useState("AboutMe");
    const text = tabData["AboutMe"];
    const parts = text.split(/\r?\n/);

    return (
        <Paper
            sx={{
                width: "690px",
                borderRadius: "18px",
                p: 2.25,
                bgcolor: "#363C43",
                boxShadow: "0 10px 30px rgba(3,6,11,0.6)",
            }}
        >
            <Box display="flex" alignItems="center" gap={1}>
                <IconButton
                    sx={{
                        width: "24px",
                        height: "24px",
                        marginBottom: "20px",
                        cursor: "default",
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                        "&:focus": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <HelpOutlineIcon sx={{ fontSize: "24px", color: "#6F787C" }} />
                </IconButton>
                <Tabs
                    value={tab}
                    onChange={(e, v) => setTab(v)}
                    variant="fullWidth"
                    sx={{
                        width: "100%",
                        "& .MuiTabs-flexContainer": {
                            gap: 1,
                            bgcolor: "#171717",
                            borderRadius: "23px",
                            p: 1,
                        },
                        "& .MuiTab-root": {
                            textTransform: "none",
                            minHeight: 40,
                            borderRadius: "18px",
                            fontSize: "18px",
                            px: 2,
                            py: 1,
                            color: "#ccc",
                            flex: 1,
                            "&:hover": {
                                bgcolor: "#28292f",
                                transition: "background-color 0.7s ease",
                            },

                        },
                        "& .Mui-selected": {
                            bgcolor: "#28292f !important", // Material-UI green[800]
                            color: "#fff !important",
                            boxShadow: "5.67px 5.67px 3.78px rgba(0, 0, 0, 0.4)",
                            fontSize: "18px",
                            fontWeight: 500,
                        },
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                        "&:focus": {
                            backgroundColor: "transparent",
                        },
                    }}
                    TabIndicatorProps={{ style: { display: "none" } }}
                >
                    {Object.keys(tabData).map((key) => (
                        <Tab
                            key={key}
                            value={key}
                            label={key}
                            sx={{
                                color: "#969696",
                                fontWeight: tab === key ? 600 : 400,
                            }}
                        />
                    ))}
                </Tabs>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1,
                    mt: 1
                }}
            >
                <IconButton
                    sx={{
                        padding: 0,
                        backgroundColor: "transparent",
                        width: "24px",
                        height: "24px",
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                        "&:focus": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <MenuIcon
                        sx={{
                            width: "24px",
                            height: "24px",
                            color: "#6F787C",
                            marginTop: "80px",
                            lineHeight: "100%",
                            letterSpacing: "0%",
                            cursor: "default",
                        }}
                    />
                </IconButton>

                <Box
                    sx={{
                        flex: 1,
                        borderRadius: "12px",
                        p: 2,
                        color: "#cfd3d6",
                        minHeight: 160,
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            lineHeight: 1.6,
                            fontSize: "20px",
                            font: "Plus Jakarta Sans !important",
                            color: "#969696",
                            size: "20px",
                            fontWeight: 400,
                            overflow: "scroll",
                            height: "195px"

                        }}
                    >
                        {parts?.length > 0
                            ? parts.map((part, i) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i !== parts.length - 1 && <br />}
                                </React.Fragment>
                            ))
                            : tabData[tab]}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}
