import {useEffect, useRef, useState} from "react";
import {NavLink} from "react-router-dom";

import {Box, Button, Stack, Typography, IconButton} from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import slides from "../consts/LandingPageSlides"

export default function LandingPage() {

    const [current, setCurrent] = useState(0);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const slide = slides[current];

    useEffect(() => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        video.load();
        video.play().catch(() => {

        });
    }, [current]);

    const handleEnded = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }

    const handlePrev = () => {
        setCurrent((prev) => prev === 0 ? 2 : prev - 1)
    }

    const handleNext = () => {
        handleEnded()
    }

    return (

        <Box
            sx={{
                inset: 0,
                overflow: "hidden",
            }}
        >
            <video
                ref={videoRef}
                muted
                autoPlay
                playsInline
                onEnded={handleEnded}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                }}
            >
                <source src={slide.video} type="video/mp4"/>
            </video>
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Stack
                    width="100%"
                    direction="row"
                    spacing={3}
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        width: "100%",
                        px: 10
                    }}
                >
                    <IconButton onClick={handlePrev}>
                        <ArrowBackIosNewRoundedIcon fontSize="large"/>
                    </IconButton>

                    <Stack
                        spacing={3}
                        alignItems="center"
                        maxWidth={700}
                        px={2}
                    >
                        <Typography
                            variant="h4"
                            color="white"
                            fontWeight="bold"
                        > {slide.title}
                        </Typography>

                        <Typography
                            variant="h6"
                            color="white"
                            textAlign="center"
                            fontWeight={300}
                        >
                            {slide.description}
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={2}
                        >
                            <Button
                                component={NavLink}
                                to="/patient/sign-up"
                                variant="outlined"
                                size="large"
                                sx={{
                                    color: '#fff',
                                    borderColor: '#fff',
                                    '&:hover': {
                                        color: '#fff',
                                        borderColor: '#fff',
                                        backgroundColor: 'rgba(255,255,255,0.12)'
                                    }
                                }}
                            >
                                Sign Up
                            </Button>

                            <Button
                                component={NavLink}
                                to="/login"
                                variant="contained"
                                size="large"
                                sx={{
                                    color: '#000000',
                                    backgroundColor: '#ffffff',
                                    '&:hover': {
                                        color: '#ffffff',
                                        backgroundColor: 'rgba(255,255,255,0.12)'
                                    },
                                }}
                            >
                                Login
                            </Button>
                        </Stack>
                    </Stack>

                    <IconButton onClick={handleNext}>
                        <ArrowForwardIosRoundedIcon fontSize="large"/>
                    </IconButton>

                </Stack>
            </Box>
        </Box>
    )
}
