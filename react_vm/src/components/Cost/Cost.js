import { useState } from 'react'
import { Segment, Grid, Divider, Header, Container } from 'semantic-ui-react'
import './Cost.css'

function Cost(props) {
  const costEstimates = props.costEstimates || []
  let totalCost = 0

  function calculateCost(cost) {
    totalCost += cost
  }

  return (
    <Segment raised>
      <Header as='h1'>Cost Estimates</Header>
      {costEstimates.map((element) => {
        calculateCost(element.price)
        return (
          <Grid>
            <Grid.Column floated='left' width={10}>
              <Header as='h4'>{element.type}</Header>
            </Grid.Column>
            <Grid.Column floated='right' width={1}>
              <Header as='h4'>${element.price}</Header>
            </Grid.Column>
          </Grid>
        )
      })}
      <Divider />
      <div class='totalCost'>
        <Header as='h4'>${totalCost}/mo</Header>
      </div>
    </Segment>
  )
}

export default Cost