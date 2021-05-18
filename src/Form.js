import React from "react";
import Paper from "@material-ui/core/Paper";
import Avater from "@material-ui/core/Avatar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import useStyle from "./stlyes/FormStyle";

const Form = () => {
  const classes = useStyle();
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avater className={classes.avatar}>
          <LockOutlinedIcon />
        </Avater>
        <Typography variant="h6">Sign In</Typography>
        <Select margin="normal" value="English">
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="French">French</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" autoFocus name="email" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" autoFocus name="password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember me"
          />
          <Button
            variant="contained"
            type="submit"
            className={classes.submit}
            fullWidth
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </main>
  );
};

export default Form;
