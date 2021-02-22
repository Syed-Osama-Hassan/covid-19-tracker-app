import React,  {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {fetchCountries} from '../../api';

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 240,
      width: '30%',
      marginBottom: '30px'
    },
  }));

const CountryPicker = (props) => {
    const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(() => {
        const callAPI = async () => {
            setFetchCountries(await fetchCountries());
        }
        callAPI();
    }, [setFetchCountries]);

    const classes = useStyles();
    const [open, setOpen] = useState(false);
  
    const handleChange = (event) => {
        props.country[1](event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    return (
        <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.country[0]}
          onChange={handleChange}
        >
          <MenuItem value="global">
            <em>Global</em>
          </MenuItem>
          {
              fetchedCountries.map((country, i) =>
                <MenuItem key = {i} value={country}>
                <em>{country}</em>
              </MenuItem>
              )
          }
        </Select>
      </FormControl>
        </div>
    )
}

export default CountryPicker;