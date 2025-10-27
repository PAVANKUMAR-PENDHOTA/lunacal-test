import React, { useState } from "react";
import {
  Paper,
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";

const initialImages = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

export default function Gallery() {
  const [images, setImages] = useState(initialImages);
  const scrollContainerRef = React.useRef(null);

  const scrollToPosition = (position) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: position,
        behavior: 'smooth'
      });
    }
  };

  const shiftLeft = () => {
    setImages(prev => {
      if (prev.length <= 1) return prev;
      const newImages = [...prev.slice(1), prev[0]];

      // Calculate new scroll position
      const currentScroll = scrollContainerRef.current?.scrollLeft || 0;
      const itemWidth = 210; // 190px width + 20px gap
      scrollToPosition(currentScroll - itemWidth);

      return newImages;
    });
  };

  const shiftRight = () => {
    setImages(prev => {
      if (prev.length <= 1) return prev;
      const newImages = [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];

      // Calculate new scroll position
      const currentScroll = scrollContainerRef.current?.scrollLeft || 0;
      const itemWidth = 210; // 190px width + 20px gap
      scrollToPosition(currentScroll + itemWidth);

      return newImages;
    });
  };

  const addImage = () => {
    // Add the same image (image1.jpg) to the end
    setImages(prev => [...prev, "/images/image1.jpg"]);
  };

  return (
    <Paper
      sx={{
        width: "690px",
        height: "330px",
        borderRadius: "18.89px",
        p: 2.25,
        bgcolor: "#363C43",
        boxShadow: "5.67px 5.67px 3.78px rgba(0, 0, 0, 0.4)",
        position: "relative",
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
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
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 500,
              color: "#FFFFFF",
              lineHeight: "100%",
              fontFamily: "Poppins, sans-serif",
              width: "120px",
              height: "45px",
              background: "#171717",
              textAlign: "center",
              borderRadius: "15px",
              padding: "10px",

            }}
          > Gallery</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2} sx={{ marginRight: "48px" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={addImage}
            sx={{
              bgcolor: "#6F787C",
              color: "#ffffff",
              borderRadius: "104px",
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: "context-menu",
              background: "rgba(255, 255, 255, 0.03)",
              boxShadow: "-0.5px -0.5px 6.9px rgba(255, 255, 255, 0.25), 9px 10px 7.1px rgba(0, 0, 0, 0.4), inset 0px 0px 48.9064px rgba(255, 255, 255, 0.05), inset 0px 3.26043px 3.26043px rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(52.28px)",
              "&:hover": {
                cursor: "context-menu",
                background: "rgba(255, 255, 255, 0.03)",
                boxShadow: "-0.5px -0.5px 6.9px rgba(255, 255, 255, 0.25), 9px 10px 7.1px rgba(0, 0, 0, 0.4), inset 0px 0px 48.9064px rgba(255, 255, 255, 0.05), inset 0px 3.26043px 3.26043px rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(52.28px)"
              }
            }}
          >
            Add Image
          </Button>

          <IconButton sx={{
            // bgcolor: "#ffffff",
            color: "#6F787C",
            background: "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
            boxShadow: "-5px -3px 30px -10px #96BEE7, 4px 5px 30px 5px #101213"
          }} onClick={shiftLeft}>
            <ArrowBackIcon fontSize="small" />
          </IconButton>

          <IconButton sx={{
            color: "#6F787C",
            background: "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
            boxShadow: "-5px -3px 30px -10px #96BEE7, 4px 5px 30px 5px #101213"
          }} onClick={shiftRight}>
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Box display="flex" gap={1} alignItems="flex-start" mt={2} p={0}>
        <IconButton padding={0} sx={{
          padding: 0,
          backgroundColor: "none",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:focus": {
            backgroundColor: "transparent",
          },
        }}>
          <MenuIcon
            sx={{
              width: "24px",
              height: "24px",
              marginTop: "18px",
              color: "#6F787C",
              cursor: "default",
            }} />
        </IconButton>

        <Box
          ref={scrollContainerRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            py: 1,
            flex: 1,
            scrollBehavior: 'smooth',
            "&::-webkit-scrollbar": { height: 8 },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#2a2c2e",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#666",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#888",
              },
            },
          }}
        >
          {images.map((src, i) => (
            <Box
              key={`${src}-${i}`}
              sx={{
                position: 'relative',
                width: "190px",
                height: "179px",
                flexShrink: 0,
              }}
            >
              <Box
                component="img"
                src={src}
                alt={`img-${i}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "24px",
                  objectFit: "cover",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5)",
                  transition: "all 0.3s ease-in-out",
                  cursor: "cursor-pointer",
                  filter: "grayscale(100%)",
                  "&:hover": {
                    filter: "grayscale(0%)",
                    transform: "scale(1.15) rotate(-5deg)",
                    zIndex: 10,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.8)",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
