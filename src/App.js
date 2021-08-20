import { useEffect, useState } from 'react';
import './App.css';
import { OrgChartComponent } from './OrgChart';
import { makeStyles } from '@material-ui/core/styles';
import { SelectionCard } from './SelectionCard';
import { Fab } from '@material-ui/core';
import { Share } from '@material-ui/icons';
import { toBlob } from 'html-to-image';
import { saveAs } from 'file-saver';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        {/* <SelectionCard /> */}
        <OrgChartComponent />
        <Fab variant="extended" color="primary" aria-label="add"
          onClick={() => {
            toBlob(document.getElementById('TREE'))
              .then(function (blob) {
                saveAs(blob, 'my-Cabinet.png');
              });

          }}
          className={classes.margin}>
          <Share className={classes.extendedIcon} />
          Export
        </Fab>
      </header>
    </div >
  );
}

export default App;
