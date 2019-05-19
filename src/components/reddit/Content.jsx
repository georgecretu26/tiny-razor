import React, { Fragment } from 'react';

import {
    Card, 
    CardContent, 
    CardMedia,
    CardActionArea,
    CardActions,
    Typography,
    Button,
} from '@material-ui/core';


const Content = props => (
    <div>
        <h3>Hurra Content appeared</h3>
        <CardList data = {props.data} hide={props.hide}/>
        }

    </div>
)

const CardList = props => (
    <Fragment>
        {props.data.map((article, index) => (
            <Card 
                key={index} 
                style={{
                    'maxWidth': '350px', 
                    'display': 'inline-block', 
                    'margin': '15px',
                }}
            >
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={article.title}
                    height="280"
                    image={article.imgSrc}
                    title={article.title}
                    />
                    <CardContent>
                    <Typography component="p">
                        Someone on reddit decided to share a picture with
                        title <b>{article.title}</b>
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        upvote
                    </Button>
                    <Button onClick={() => props.hide(article.id)} size="small" color="primary">
                        hide
                    </Button>
                </CardActions>
            </Card>
        ))}
    </Fragment>
)

export default Content;