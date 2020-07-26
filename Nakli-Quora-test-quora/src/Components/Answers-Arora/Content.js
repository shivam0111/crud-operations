import React from 'react';
import { Card, Grid, Button } from '@material-ui/core';


const Content = ({ posts }) => {
    return (

        <Grid container spacing={2} justify={"space-around"} >
            {posts.map((content, key) => (
                <Grid item md={7} lg={7} sm={7} xs={12} style={{marginTop:"30px"}}>
                    <Card>
                        <h2>{content.question}</h2>
                        <p>{content.about}</p>
                        <Grid >

                            <Button variant="outlined" color="primary" href="" style={{
                                margin: "10px",
                                padding: "10px"
                            }} >
                                Edit Article
                            </Button>


                            <Button variant="outlined" color="secondary" href="" style={{
                                margin: "10px",
                                padding: "10px"
                            }}>
                                Delete Article
                            </Button>

                        </Grid>
                    </Card>

                </Grid>
            ))}
        </Grid>
    )
}


export default Content;

