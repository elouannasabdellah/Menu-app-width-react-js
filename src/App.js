
import { Container } from "react-bootstrap";
import NavbarTop from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/category";
import ItemsList from "./components/ItemsList";

import { items }  from './data';
import { useState } from "react";

function App() {

    const [itemsData, setItemsData]= useState(items);

    //get All Category unique
    const allCategory= ["الكل", ...new Set(items.map((i)=>i.category)) ];

    // console.log(allCategory);

    // filter By Category 
    const filterByCategory=(cat)=>{

      if(cat === 'الكل' ){
        setItemsData(items);
      }else{

        const newArr= items.filter((item)=> item.category === cat );
        setItemsData(newArr);

      }

    }

     // filter By Search Form 
     const filterBySearch=(word)=>{

      if(word !== "" ){
        
        const newArr= items.filter((item)=> item.title === word );
        setItemsData(newArr);

      }

    }

  return (
    <div className="App color-body">

         <NavbarTop filterBySearch= {filterBySearch} />

        <Container> 
          
        <Header/>
        <Category filterByCategory= {filterByCategory} allCategory= {allCategory} />
        <ItemsList itemsData= {itemsData} />

        </Container>
   

    </div>
  );
}

export default App;
