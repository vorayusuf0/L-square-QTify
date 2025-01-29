import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
// import englishSong from "../../assets/english_song.png";

function Cart(props) {
  const { title, image, follows, likes } = props;

  return (
    <Box sx={{ marginLeft: 0 }}>
      <Card
        sx={{
          maxWidth: 259,
          mx: 3,
          maxHeight: 300,
          background: "var(--color-black)",
          borderRadius: "10px",
          // gap: "40px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="210"
            image={image}
            alt="song1"
            sx={{ borderRadius: "10px 10px 0px 0px" }}
          />
          <CardContent
            sx={{
              background: "var(--color-white)",
              borderRadius: "0px 0px 10px 10px",
              padding: "10px",
            }}
          >
            {follows && (
              <Chip
                sx={{
                  borderRadius: "10px !important",
                  background: "var(--color-black)",
                  color: "var(--color-white)",
                }}
                label={`${follows} Follows`}
              />
            )}

            {likes && (
              <Chip
                sx={{
                  borderRadius: "10px !important",
                  background: "var(--color-black)",
                  color: "var(--color-white)",
                }}
                label={`${likes} Likes`}
              />
            )}
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Typography sx={{color: "var(--color-white)"}}>New English Songs</Typography>
        </CardActions> */}
      </Card>
      <Typography
        sx={{
          mt: 1,
          px: 3,
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          color: "var(--color-white)",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default Cart;
