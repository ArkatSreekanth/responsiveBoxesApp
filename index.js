const Box = props => {
  const {boxSize, boxText} = props
  return <p className={`box ${boxSize}`}>{boxText}</p>
}

const element = (
  //  Write your code here.
  <div className='box-container'>
    <h1 className='main-heading'>Boxes</h1>
    <div className='boxes'>
      <Box boxSize='small-box' boxText='Small' />
      <Box boxSize='medium-box' boxText='Medium' />
      <Box boxSize='large-box' boxText='Large' />
    </div>
  </div>
)

const rootElement = document.getElementById('root')
rootElement.className = 'bg-container'

ReactDOM.render(element, rootElement)
