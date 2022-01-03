import React from "react";

import {Box, IconButton, Button, makeStyles, Grid, FilledInput, Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@material-ui/core";
import { Close as CloseIcon} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({

    skillChip:{
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        transition: "0.3x",
        
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,

        "&:hover":{
            backgroundColor: theme.palette.secondary.main,
            color:"#fff"
        }
    }
}))
export default props => {
  const skills = ["JavaSccript", "React", "Node", "Vue", "firebase", "MOngoDB", "SQL"]
  const classes = useStyles();
  return(

    <Dialog open={true} fullWidth >
        <DialogTitle>
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                Post Job
                <IconButton>
                    <CloseIcon />
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <Grid   container spacing={2}>
                <Grid item xs={6}>
                    <FilledInput placeholder="Job title *" disableUnderline fullWidth />
                </Grid>
                <Grid item xs={6}>
                   <Select fullWidth  disabelUnderline variant="filled" defaultValue="Full time">
                         <MenuItem value="Full time">  Full Time</MenuItem>
                         <MenuItem value="Internship"> Internship </MenuItem>
                         <MenuItem value="Entry level"> Entry Level</MenuItem>
         
                    </Select>
                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder="Company Name *" disableUnderline fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder="Company URL *" disableUnderline fullWidth />
                </Grid>
                <Grid item xs={6}>
                    <Select fullWidth disabelUnderline variant="filled" defaultValue="Remote">
                           <MenuItem value="Remote"> Remote</MenuItem>
                           <MenuItem value="In-office"> In-office </MenuItem>
          
                    </Select>
                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder="Job URL *" disableUnderline fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FilledInput placeholder="Job Description *" disableUnderline fullWidth multiline rows={4} />
                </Grid>
            </Grid>
            <Box at={2}>
                <Typography>Skills</Typography>
                <Box display="flex" > 
                    {skills.map(skill => <Box key={skill}  className={classes.skillChip}>{skill}</Box>)}
                </Box>
            </Box>
        </DialogContent>
        <DialogActions>
            <Box alignItems="center" color="red" width="100%" display="flex" justifyContent="space-between">
                <Typography>*Required feild</Typography>
                <Button variant="contained" disableElevation color="primary" >
                  Post Job
                </Button>
            </Box>
        </DialogActions>
    </Dialog>
  )
}