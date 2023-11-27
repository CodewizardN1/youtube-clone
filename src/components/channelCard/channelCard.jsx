import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ item, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "28px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", xl: "360px", lg: '340px', md: '320px' },
        height: "324px",
        margin: "auto",
        marginTop: marginTop
      }}
    >   
          <Link to={`/channel/${item?.id}`}>

          <CardContent sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column'}}>
            <CardMedia image={item?.snippet?.thumbnails?.default?.url} alt={item?.snippet?.title} sx={{borderRadius :'50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}} />
            <Typography variant="h6">{item?.snippet?.title} <CheckCircle sx={{fontSize: '14px' ,color: 'gray', ml: '5px'}} /></Typography>
            {item?.statistics?.subscriberCount && (
              <Typography sx={{fontSize: '15px', color: 'gray', fontWeight: '600'}}>{parseInt(item?.statistics?.subscriberCount).toLocaleString("en-US")} Subscribers</Typography>
              )}
              </CardContent>
          </Link>
    </Box>
  );
};

export default ChannelCard;
