import React from 'react';
import ServiceList from './ServiceList';
import Header from "../Header/Header";

function HomePage() {

    const home = {
        paddingBottom: '150px'
    }

    return (
        <div style={home}>
            <Header />
            <ServiceList />
        </div>
    )
}

export default HomePage;