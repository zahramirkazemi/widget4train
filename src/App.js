import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import { useState } from "react";

const items=[
  {
    title: 'what\'s react?',
    content: 'React is a front-end javascript framework'
  },  
  {
    title: 'why use react?',
    content: 'React is a favorite js framework amoung engineers'
  },
  {
    title: 'how do I use react?',
    content: 'You use React by create components'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  }
]

function App() {
  const [selected,setSelected] = useState(options[0]);
  return (
    <div style={{marginTop: '18px'}} className="ui container">
      <Header/>
        <Route path="/">
          <Accordion items={items}/>
        </Route>
        <Route path="/list">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown label="color" options={options} selected={selected} onSelectedChange={setSelected}/>
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
    </div>
  );
}

export default App;
