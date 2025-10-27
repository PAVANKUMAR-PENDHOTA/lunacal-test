import React from "react";
import { Box } from "@mui/material";
import ProfileTabs from "./ProfileTabs";
import Gallery from "./Gallery";

export default function RightWidgets() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignSelf: "start", marginTop: { xs: 0, md: 8 } }}>
            <ProfileTabs />
            <Box
                sx={{
                    width: "500px",
                    height: "4px",
                    borderRadius: "2.46px",
                    opacity: 1,
                    background: `linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),
                      linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`,
                    backdropFilter: "blur(9.837319374084473px)",
                    boxShadow: "0px 4px 4px 0px #00000054",
                    marginLeft: "90px"

                }}
            />
            <Gallery />
            <Box
                sx={{
                    width: "500px",
                    height: "4px",
                    borderRadius: "2.46px",
                    opacity: 1,
                    background: `linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%),
                      linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`,
                    backdropFilter: "blur(9.837319374084473px)",
                    boxShadow: "0px 4px 4px 0px #00000054",
                    marginLeft: "90px"

                }}
            />

        </Box>
    );
}
