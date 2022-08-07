import { useState } from 'react'
import { Segment, Grid, Item, Image, Radio, Form, Button } from 'semantic-ui-react'
import { IMAGE_TYPES } from '../../constants'
import './ChooseImage.css'

function ChooseImage(props) {

  const types = IMAGE_TYPES.filter((element) => {
    return element.country.includes(props.country)
  })

  const [selectedOption, setSelectedOption] = useState(() => types.map((element) => element.selectedOption))

  function handleFormSubmit(name, price) {
    props.handleFormSubmit(name, price)
    props.handleTabChange('Choose Instance Type', 1)
  }
  return (
    <>
      {
        types.map((element, index) => {
          return (
            <Segment raised>
              <Grid>
                <Grid.Column floated='left' width={12}>
                  <Item.Group>
                    <Item>
                      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                      <Item.Content>
                        <Item.Header as='a'>{element.name}</Item.Header>
                        <Item.Description>
                          {element.description}
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Grid.Column>
                <Grid.Column floated='right' width={3}>
                <Form>
                {
                  element.options.map((data) => {
                    return (
                      <Form.Field>
                        <Radio
                          label={data.label}
                          name='radioGroup'
                          value={data.value}
                          checked={data.value === selectedOption[index]}
                          onChange={(e, data) => {
                            const options = [...selectedOption]
                            options[index] = data.value
                            setSelectedOption(options)
                          }}
                        />
                      </Form.Field>
                    )
                  })
                }
                  <Button primary onClick={() => handleFormSubmit(element.name, element.price)}>Select</Button>
                </Form>
              </Grid.Column>
            </Grid>
          </Segment>
          )
        })
      }
    </>
  )
}

export default ChooseImage