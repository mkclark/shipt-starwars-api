import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Menu inverted>
            <Container>
                <Link to='/'>
                    <Menu.Item name="shipt star wars API" />
                </Link>
                <Link to='/people'>
                    <Menu.Item name="people" />
                </Link>
                <Link to='/planets'>
                    <Menu.Item name="people with homeworld and starships" />
                </Link> 
            </Container>
        </Menu>
    );
}