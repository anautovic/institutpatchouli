import React,{useState} from 'react'
import Categories from '../components/galerie/Categories'
import Menu from '../components/galerie/Menu'
import {Row, Container} from 'react-bootstrap'
import items from '../components/galerie/data/galerieData'


const allCategories = ['all', ...new Set(items.map((item) => item.category))];
function GalleryScreen () {
	
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);
  
    const filterItems = (category) => {
      if (category === 'all') {
        setMenuItems(items);
        return;
      }
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    };
  //-fx-image-gal
    return (
<>
      
      <Container fluid='xl lg'>
          <Categories categories={categories} filterItems={filterItems} />
          <Row>
          <Menu items={menuItems} />
          </Row>
          </Container>
    
  
       
          {/*<div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
    <Menu items={menuItems} />*/}
      
      </>
    );
  }
  

export default GalleryScreen
