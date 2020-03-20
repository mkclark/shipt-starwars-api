import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

export default function Navbar() {
    return (
        <Container>
            <Menu inverted>
                <Menu.Item name="shipt star wars API" />
                <Menu.Item name="people" />
                <Menu.Item name="planets" />
            </Menu>
        </Container>
    )
}