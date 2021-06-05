import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ComputerIcon from "@material-ui/icons/Computer";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";

const client = createClient({
  space: "uft3dmmgumai",
  accessToken: "eV4BJ2vX1jK-dc16eFlJByU0rBGIEZ2lIyUkPD7Rwac"
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Paul-005?tab=repositories">
        Paul B github
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Album() {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    client.getEntries({ content_type: "onlineClass3a" }).then((res) => {
      setData(res.items);
      console.log(res.items);
    });
  }, []);

  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <ComputerIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            3A Online Class
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Online Class Shortcuts
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              This is an website developed by PaulB Chavar.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link
                    target="_blank"
                    href="https://photos.google.com/share/AF1QipMpoWSv75QJY1yN3qrT_Ib46xMy-n4osoqXU7xtmohBZpUp-MDeQzMQDOrzoPks1A/photo/AF1QipPw3kOBOfSUTQChh8wQMBYcQFoiQpmwfxUcKyrV?key=LUd2LUJ2Yk5OVVV1VkV2QjVkS05UR3NCVzZjOU5B"
                  >
                    <Button variant="contained" color="primary">
                      Time Table
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    target="_blank"
                    href="./assets/Zoom Id and Password of Teachers_Class 10D 2021-22.pdf"
                  >
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Link
                  target="_blank"
                  href={card.fields.url}
                  style={{ textDecoration: "none" }}
                >
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.fields.thumbnail.fields.file.url}
                      title={card.fields.subject}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.fields.subject}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Enter
                      </Button>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Paul Dev Org
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Designed and built with all the love in the world by the Paul Dev Org
          team with the help of our Google, Facebook, CodeSandBox and
          Contentful.
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </div>
  );
}
