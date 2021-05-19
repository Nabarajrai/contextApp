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
import { withStyles } from "@material-ui/core/styles";
import { LanguageContext } from "./contexts/LanguageContext";

const words = {
  English: {
    signIn: "Sign In",
    email: "Email",
    password: "Password",
    remberme: "Remember me",
  },
  French: {
    signIn: "Se Connecter",
    email: "Adresse Electronique",
    password: "Mo te pass",
    remberme: "soventity moi",
  },
  Spanish: {
    signIn: "Connector",
    email: "Electronique",
    password: "Te pass",
    remberme: "Moi Soventity",
  },
};

class Form extends React.Component {
  static contextType = LanguageContext;
  render() {
    const { language } = this.context;
    const { handleToggle } = this.context;
    const { email, signIn, password, remberme } = words[language];

    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avater className={classes.avatar}>
            <LockOutlinedIcon />
          </Avater>
          <Typography variant="h6">{signIn}</Typography>
          <Select margin="normal" value={language} onChange={handleToggle}>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="French">French</MenuItem>
            <MenuItem value="Spanish">Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" autoFocus name="email" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" autoFocus name="password" />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={remberme}
            />
            <Button
              variant="contained"
              type="submit"
              className={classes.submit}
              fullWidth
              color="primary"
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(useStyle)(Form);
