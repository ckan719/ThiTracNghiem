import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Content from './Content.js';
function Dashboard(){
    const [user, setUser] = React.useState(null);
    return (
        <>
            <Header exUser = {user} />
            <Content />
            <Footer />
        </>
    );
}
export default Dashboard;