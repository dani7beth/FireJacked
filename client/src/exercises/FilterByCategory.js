import {ButtonGroup, Button} from 'react-bootstrap';
const FilterByCategory = ({dataByCategory}) => {

  return (
    <>
      <h1>Exercise Categories</h1>
      <ButtonGroup size="sm" className="mb-2">
        <Button onClick={() => dataByCategory('Barbell Strength/Power')}>Barbell Strength/Power</Button>
        <Button onClick={() => dataByCategory('KettleBell Strength/Power')}>KettleBell Strength/Power</Button>
        <Button onClick={() => dataByCategory('Cardio-Respiratory Power')}>Cardio-Respiratory Power</Button>
        <Button onClick={() => dataByCategory('Power/Strength Endurance')}>Power/Strength Endurance</Button>
        <Button onClick={() => dataByCategory('Power Endurance')}>Power Endurance</Button>
        <Button onClick={() => dataByCategory('GYM Endurance')}>GYM Endurance</Button>
        <Button onClick={() => dataByCategory('All')}>All</Button>
      </ButtonGroup>
    </>
  )
}

export default FilterByCategory;
