import React from "react";
import {Box, Button, Select, MenuItem, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    wrapper:{
        backgroundColor: "#fff",
        display: "flex",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        "& > *":{
            flex: 1,
            height: "45px", 
            margin: "20px"
        }

    }
})

export default (props) => {
   const classes = useStyles();
   return (
    <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
    <Select disabelUnderline variant="filled" defaultValue="Full time">
          <MenuItem value="Full time">  Full Time</MenuItem>
          <MenuItem value="Internship"> Internship </MenuItem>
          <MenuItem value="Entry level"> Entry Level</MenuItem>
     
     </Select>
     <Select disabelUnderline variant="filled" defaultValue="Remote">
          <MenuItem value="Remote"> Remote</MenuItem>
          <MenuItem value="In-office"> In-office </MenuItem>
          
      </Select>
      <Button variant="contained" color="primary"> Filter </Button>
  </Box>
  
   )

}    
