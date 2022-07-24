import React from 'react';
import {Grid , Paper, Avatar, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Portal from '@mui/base/Portal';
import { SxProps } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import AddCardIcon from '@mui/icons-material/AddCard';



const AddProject = ()  => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'fixed',
    width: 200,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  const paperStyle = {padding: '25px 20px' , width: 500 , margin : '20px auto'}
    const headerStyle = {margin: 0 , color: "#1F4690"}
    const avatarStyle2 = {backgroundColor: "#1bbd7e"}

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <Button variant="contained" onClick={handleClick}>ADD PROJECTS +</Button>
        {open ? (
          <Portal>
            <Box sx={styles}> 
            <div>  
            <Grid >
                <Paper elevation={20} style={paperStyle}>
                    <Grid align = "center">
                        <Avatar style={avatarStyle2}>
                              <AddCardIcon />          
                        </Avatar>
                        <h1 style={headerStyle}>Add Projects</h1>
                    </Grid> 
                    <form>
                        <TextField margin="dense" fullWidth label="Project Name"></TextField>
                        <TextField margin="dense" fullWidth label="Developer(s)"></TextField>
                        <TextField margin="dense" fullWidth label="Project Description"></TextField>
                        <Button justify="center" variant="contained" SendIcon={<SendIcon />}>Submit</Button>
                    </form>
                </Paper>
          </Grid>
        </div>
        </Box>
     </Portal>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
  export default AddProject;