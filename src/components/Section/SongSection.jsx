import { Box, Grid2, Tab, Tabs, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import CSS styles
import Cart from "../Cart/Cart";

// import required modules
import { Zoom, Navigation } from "swiper/modules";

const SongSection = () => {
  const [albums, setAlbums] = useState([]);
  const [tabs, setTabs] = useState([]);

  const [filteredAlbum, setFilteredAlbum] = useState([]);

  // State for tab value
  const [value, setValue] = useState("all");

  // Handle change for new value
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // Api url
  const API_URL = "https://qtify-backend-labs.crio.do/songs";
  const API_URL_TABS = "https://qtify-backend-labs.crio.do/genres";

  useEffect(() => {
    getAlbumData();
    getTabs();
  }, []);

  useEffect(() => {
    if (value === "all") {
      return setFilteredAlbum(albums);
    }
    const filterData = albums.filter((item) => item.genre.key === value);
    setFilteredAlbum(filterData);
  }, [albums, value]);

  const getAlbumData = async () => {
    try {
      const response = await axios.get(API_URL);
      setAlbums(response.data);
    } catch (err) {
      console.log(err, "error from catch block");
    }
  };

  const getTabs = async () => {
    try {
      const res = await axios.get(API_URL_TABS);
      setTabs(res.data.data);
    } catch (err) {
      console.log(err, "error from tabs function");
    }
  };

  // const filter = useMemo(() => albums.filter((item) => item.genre.key===value) ,[albums, value]);
  // console.log(filter, "+++++++++++");

  return (
    <>
      <Box
        sx={{
          px: "30px",
          display: "block",
        }}
      >
        <Box
          sx={{
            padding: "0px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            Songs
          </Typography>
        </Box>

        {/* Tabs component*/}
        <Typography component="div" sx={{ width: "100%", mb: 3 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="info"
            TabIndicatorProps={{
              style: {
                backgroundColor: "var(--green)",
                height: "4px",
                borderRadius: "2px",
              },
            }}
            // indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab
              value="all"
              label="All"
              sx={{
                fontFamily: "Poppins, system-ui",
                fontWeight: 600,
                fontSize: "16px",
              }}
            />
            {tabs.map((tab) => (
              <Tab
                key={tab.key}
                value={tab.key}
                label={tab.label}
                sx={{
                  fontFamily: "Poppins, system-ui",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              />
            ))}
          </Tabs>
        </Typography>

        {/* Swiper use here */}
        <Swiper
          slidesPerView={7}
          style={{
            "--swiper-navigation-color": "var(--color-white)",
            "--swiper-pagination-color": "var(--color-white)",
            "--swiper-navigation-size": "16px",
          }}
          zoom={true}
          navigation={true}
          modules={[Zoom, Navigation]}
          className="mySwiper"
        >
          <Grid2 container spacing={0}>
            {filteredAlbum.map((item) => (
              <SwiperSlide key={item.id}>
                <Grid2>
                  <Cart
                    title={item.title}
                    image={item.image}
                    likes={item.likes}
                  />
                </Grid2>
              </SwiperSlide>
            ))}
          </Grid2>
        </Swiper>
      </Box>
    </>
  );
};

export default SongSection;
