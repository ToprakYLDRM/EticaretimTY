import { useEffect, useState } from "react"
import { Container, Row, Col } from "reactstrap"
import Header from "./Header"
import Product from "./Products"
import Categories from "./Categories"

function App() {
  const [currentCategory, setCurrentCategory] = useState("")
  const [product, setproducts] = useState([])
  const [cart, setcart] = useState([])

  const getProducts = (categoryId) => {
    let url = "http://localhost:3000/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setproducts(data))
  }

  const chanceCategory = (category) => {
    setCurrentCategory(category.categoryName)
    getProducts(category.id)
  }


  useEffect(() => {
    getProducts()
  }, [])


  const addtocard = (product) => {
    let newcart = [...cart]
    let addedItem = newcart.find((c) => c.product.id === product.id)
    if(addedItem){
      addedItem.quantity += 1
    }else {
      newcart.push({product: product, quantity: 1})
    }
    setcart(newcart)
  }


  const removetocart=(product)=>{
    let newcart=cart.filter((c)=>c.product.id !== product.id)
    setcart(newcart)
  }


  return (
    <Container>
      <Header cart={cart} removetocart={removetocart}/>
      <Row>
        <Col xs="3">
          <Categories chanceCategory={chanceCategory} currentCategory={currentCategory} />
        </Col>
        <Col xs="9">
          <Product product={product} currentCategory={currentCategory} addtocart={addtocard}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
