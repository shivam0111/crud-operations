import React from 'react'
import avatar from "./avatar.jpg"
import DisabledTabs from './switch'
import ImgMediaCard from './CardOne'
import CardTwo from './CardTwo'


function Prof() {
    return (
    <div>
        <DisabledTabs />
        <ImgMediaCard />
        <CardTwo />
        
        <br></br>
        <a><img src={avatar} style ={{ marginRight: "50%", height: '2.9%', width: '2.9%' }} /></a>&nbsp;
        <h1 style ={{ position:"absolute", left: '11%', top: '2.8%' }} >Name</h1>
        <p class="text-muted" style ={{ position:"absolute", left: '11%', top: '4%' }}>
            <a href="#addcred" class='text-reset'>Add Profile Credentials</a>
        </p>
        <p class="text-muted" style ={{ position:"absolute", left: '8%', top: '5.7%' }}>
            <a href="#descr" class='text-reset'>Write a description about yourself</a>
        </p>
        <p class="text-muted" style ={{ position:"absolute", left: '8%', top: '6.3%' }}>
            <a class='text-reset'>No. of followers</a>
        </p>

        
        
        
    </div>
    )
}

export default Prof
