import './App.css'
import Select from 'react-select'

function App() {
  const options = [
    { value: 'Orange', label: 'Orange' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Yellow', label: 'Yellow' },
    { value: 'Ocean', label: 'Ocean' },
    { value: 'Purple', label: 'Purple' },
    { value: 'Red', label: 'Red' },
    { value: 'Green', label: 'Green' },
    { value: 'Forest', label: 'Forest' },
    { value: 'Slate', label: 'Slate' },
    { value: 'Silver', label: 'Silver' },
  ]

  return (
    <div className='select-select'>
      <h1>select your option</h1>
      <Select className='select-form' options={options} />
    </div>
  )
}

export default App
