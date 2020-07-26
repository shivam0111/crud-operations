import React from 'react';
import { Grid, Card, Typography, Link } from '@material-ui/core';
import "./mystyles.css"

function Question() {
    return (
        <div className="con">
            <Grid item xs={12}>
                <div className="question">
        
                    <Card className="card" style={{ height: "7cm", top: "3.5cm",width:"20cm" }} >

                       
                        <p><a className="card-text1" href="#">Is ++ operator Thread Safe in Java?</a></p>
                        <a><p style={{textAlign:"left", marginLeft:"0.75cm"}}>One of the shocking things I got to know regarding Sushant's murder mystery is that he was playing games on his playstation just one and half hour before his death.
                         A depressive person cant maintain normal routine, cant write brilliant captions (Check his recent IG posts, he was very much learning coding, following Yoga and meditations (more)</p></a>
                        <div className="story_card_footer">
                            <div className="item component write_answer" style={{ float: "left", marginLeft: "0.5cm", marginTop:"1cm" }}>
                                <i className="fa fa-pencil" style={{ color: "blue" }}></i>
                                <a className="card-title" style={{ marginLeft: "5px" }} href="#">Upvote</a>
                            </div>
                            
                            
                            <div className="item component cannot_write_answer" style={{ float: "left", marginLeft: "0.5cm",  marginTop:"1cm" }}>
                                <i className="fa fa-wifi" style={{ color: "grey" }}></i>
                                <a className="card-title" style={{ marginLeft: "5px" }} href="#">Follow</a>
                                <span className="ui-button-count">
                                    <span className="bullet"> · </span>
                                    <span className="ui_button_count_inner">1</span>
                                </span>
                            </div>
                        </div>
                    </Card>
                    <Card className="card" style={{ height: "7cm", top: "11cm", width:"20cm" }} >

                       
                        <p><a className="card-text1" href="#">Is ++ operator Thread Safe in Java?</a></p>
                        <a><p style={{textAlign:"left", marginLeft:"0.75cm"}}>One of the shocking things I got to know regarding Sushant's murder mystery is that he was playing games on his playstation just one and half hour before his death.
                         A depressive person can't maintain normal routine, cant write brilliant captions (Check his recent IG posts, he was very much learning coding, following Yoga and meditations)</p></a>
                         <div className="story_card_footer">
                            <div className="item component write_answer" style={{ float: "left", marginLeft: "0.5cm", marginTop:"1cm" }}>
                                <i className="fa fa-pencil" style={{ color: "blue" }}></i>
                                <a className="card-title" style={{ marginLeft: "5px" }} href="#">Upvote</a>
                            </div>
                            
                            
                            <div className="item component cannot_write_answer" style={{ float: "left", marginLeft: "0.5cm",  marginTop:"1cm" }}>
                                <i className="fa fa-wifi" style={{ color: "grey" }}></i>
                                <a className="card-title" style={{ marginLeft: "5px" }} href="#">Follow</a>
                                <span className="ui-button-count">
                                    <span className="bullet"> · </span>
                                    <span className="ui_button_count_inner">1</span>
                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
            </Grid>

        </div>
    );
}
export default Question;