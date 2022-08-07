import { useEffect, useState } from 'react';
import { Container, Grid, Dropdown, Tab } from 'semantic-ui-react'
import ChooseImage from '../ChooseImage'
import ChooseInstanceType from '../ChooseInstanceType'
import Cost from '../Cost'
import { COUNTRY, TABS } from '../../constants'
import './Main.css'

function Main() {
  const [country, setCountry] = useState('India-1')
  const [tab, setTab] = useState('Choose Image')
  const [activeIndex, setActiveIndex] = useState(0)
  const [types, setType] = useState([])
  const [costEstimate, setCostEstimate] = useState([])

  function handleTabChange(selectedTab, selectedTabIndex) {
    setTab(selectedTab)
    setActiveIndex(selectedTabIndex)
  }

  function handleFormSubmit(type, price) {
    setCostEstimate(existingItem => {
    console.log(existingItem,'existingItem')
      const data = existingItem.filter((item) => {
        console.log(item,'item')
        if(item.type === type)
          item.price = price
        return item.type === type
      })
      console.log(data, 'data')
      const options = data.length > 0 ? [ ...data ] : [ { type, price } ]
      return [...existingItem, ...options]
    })
  }

  useEffect(() => {
    renderElement(tab)
  },[tab])

  useEffect(() => {
    console.log(types,'types--------------------')
  },[types])

  function renderElement(tab) {
    switch(tab) {
      case 'Choose Image':
        return <ChooseImage handleTabChange={handleTabChange} country={country} handleFormSubmit={handleFormSubmit} />
      case 'Choose Instance Type':
        return <ChooseInstanceType handleFormSubmit={handleFormSubmit} />
      default: 
        return null
    }
  }

  return (
    <Container fluid>
        <Container>
          <Grid>
            <Grid.Column floated='left' width={12}>
              <h1>{tab}</h1>
            </Grid.Column>
            <Grid.Column floated='right' width={3}>
              <Dropdown placeholder='State' selection 
                options={COUNTRY} 
                value={country} 
                onChange={(e, { value }) => setCountry(value)} />
            </Grid.Column>
          </Grid>
        </Container>
        <Container>
          <Tab menu={{ secondary: true }}
            panes={TABS}
            activeIndex={activeIndex}
          />
        </Container>
        <Container>
          <Grid>
            <Grid.Column width={11}>
              {
                renderElement(tab)
              }
            </Grid.Column>
            <Grid.Column width={5}>
              <Cost costEstimates={costEstimate} />
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
  )
}

export default Main