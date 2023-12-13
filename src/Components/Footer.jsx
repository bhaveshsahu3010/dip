import React from "react";
import { Box, Typography, Link, styled } from "@mui/material";

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: "#003f87",
  color: "#ecf0f1",
  padding: theme.spacing(3),
  textAlign: "center",
  marginTop: "100px",
  position: "relative",
  bottom: 0,
  width: "100%",
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="h6">IIT JAMMU</Typography>
      <Typography variant="body2">
      NH-44 , PO Nagrota, Jagti, Jammu and Kashmir 181221 | Phone: 0191 257 0381 | Email: cif@iitjammu.ac.in
      </Typography>
      <Box mt={2}>
        <Typography variant="body2">
          &copy; 2020 IIT Jammu. All rights reserved.
        </Typography>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
