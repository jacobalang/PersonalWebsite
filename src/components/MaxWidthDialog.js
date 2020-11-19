import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Commerce1 from '../images/commerce1.png'
import Commerce2 from '../images/commerce2.png'
import Commerce3 from '../images/commerce3.png'
import { ThemeProvider} from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';


const theme1 = createMuiTheme({
    palette: {
      primary: {
        main: red[400],
      },
      secondary: {
        main: green[500],
      },
    },
  });

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function MaxWidthDialog() {
  const [currentPic, setCurrentPic] = React.useState(Commerce1);
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleNext = () => {
    if (currentPic === Commerce1)
    {
        setCurrentPic(Commerce2);
    }
    else if (currentPic === Commerce2)
    {
        setCurrentPic(Commerce3);
    }
    else if (currentPic === Commerce3)
    {
        setCurrentPic(Commerce1);
    }

    
  };



  return (
      <ThemeProvider theme = {theme1}>
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{margin:'auto'}}>
        Image Gallery
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
     
        <DialogContent>
          <img style={{width: '100%'}}src={currentPic}></img>
          
        </DialogContent>
        <DialogActions>
        <Button onClick={handleNext} color="primary">
              Next
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </ThemeProvider>
  );
}
