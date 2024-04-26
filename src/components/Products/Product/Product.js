import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardActionArea,
} from "@material-ui/core";
import { Favorite, MenuBook} from "@material-ui/icons";

import { Link } from "react-router-dom";
import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Link to={`product-view/${product.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.media.source}
            title={product.name}
          />
        </CardActionArea>
      </Link>
      <CardContent>
        <div className={classes.cardContent}>
          <p className={classes.cardContentName}> {product.name}</p>
        </div>
        <CardActions disableSpacing className={classes.cardActions}>
          <Button
            variant="contained"
            className={classes.button}
            endIcon={<MenuBook />}
            onClick={() => onAddToCart(product.id, 1)}
          >
            <b>Read Book</b>
          </Button>
        </CardActions>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Button
          variant="contained"
          className={classes.button}
          endIcon={<MenuBook />}
          // onClick={() => onAddToCart(product.id, 1)}
        >
          <b>Read Book</b>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
