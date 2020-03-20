import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function People({ data }) {
    return (
        <>
            <h1>People</h1>
            <Grid columns={3}>
                {data.map((people, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{people.name}</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>

        </>
    )
}