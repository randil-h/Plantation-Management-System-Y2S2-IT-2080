import React from 'react';
import Navbar from "../../../components/utility/Navbar";
import SideBar from "../../../components/SideBar";

export default function Home(){
    return(
        <div>
            <Navbar/>
            <div>
                <SideBar/>
            </div>
        </div>
    )
}