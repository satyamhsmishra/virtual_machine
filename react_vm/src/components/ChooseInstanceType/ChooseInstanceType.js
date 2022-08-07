import { useEffect, useState } from 'react'
import { Tab, Header, Container, Dropdown, Grid } from 'semantic-ui-react'
import { INSTANCE_TYPE, CPU_CORES, MEMORY } from '../../constants'
import './ChooseInstanceType.css'

function ChooseInstanceType(props) {
  const [tab, setTab] = useState('gp')
  const [activeIndex, setActiveIndex] = useState(0)
  const [cpu, setCPU] = useState([])
  const [memory, setMemory] = useState([])
  const [selectedCPU, setSelectedCPU] = useState()
  const [selectedMemory, setSelectedMemory] = useState()
  const [cpuPrice, setCPUPrice] = useState(0)
  const [memoryPrice, setMemoryPrice] = useState(0)

  useEffect(() => {
    setCPU(CPU_CORES[activeIndex][tab])
    setMemory(MEMORY[activeIndex][tab])
  }, [tab])

  function handleCPUChange(value) {
    setSelectedCPU(value)
    props.handleFormSubmit('CPU', 40)
  }

  function handleMemoryChange(value) {
    setSelectedMemory(value)
    props.handleFormSubmit('Memory', 40)
  }

  return (
    <>
      <Tab 
        menu={{ secondary: true }}
        panes={INSTANCE_TYPE} 
        activeIndex={activeIndex} 
        className='instanceType' 
        onTabChange={(e, { activeIndex, data }) => {
          setActiveIndex(activeIndex)
          setTab(INSTANCE_TYPE[activeIndex].key) 
        }}
        />
      <Header size='large'>Create Configuration</Header>
      <Container>
        <Grid>
          <Grid.Column width={4}>
            <Dropdown selection 
              options={cpu}
              placeholder='CPU Cores'
              value={cpu.value} 
              onChange={(e, { value }) => handleCPUChange(value)} 
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Dropdown selection 
              options={memory}
              placeholder='Memory'
              value={memory.value} 
              onChange={(e, { value }) => handleMemoryChange(value)} 
            />
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}

export default ChooseInstanceType