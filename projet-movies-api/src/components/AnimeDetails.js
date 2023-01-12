import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import StyledFab from '@mui/material/Fab';

const AnimeDetails = (props) => {
console.log(props)

return(
    

        <div className="animedetails">
        <React.Fragment>
    
          <CssBaseline />
          <Paper className="detailspanel" square sx={{ pb: '50px' }}>
        
    
            <Typography>
            {props.title}
            </Typography>
            
            <List sx={{ mb: 2 }}>
            
                <React.Fragment>
                  <ListItem >
                   
                    <ListItemText >

                      </ListItemText>
                  </ListItem>
                
                </React.Fragment>
            </List>
          </Paper>
         
        </React.Fragment>
        </div>
      );
    
}

export default AnimeDetails;

