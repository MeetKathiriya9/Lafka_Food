import React from 'react'
import CommonSection from '../CommonSection/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import products from '../Pages/Prodata.js'
import ProductCard from '../Pages/ProductCart.js'
import { useState } from 'react'

import ReactPaginate from 'react-paginate'
import Helmet from '../Components/Helmet.js'

export default function Allfood() {

  const [searchTerm, setSearchTerm] = useState('');
  const [productData, setProductData] = useState(products);
  const [pageNumber, setPageNumber] = useState(0)

  const productPerPage = 8;

  const displayPage = productData
  .filter(item => {
    if (searchTerm === '') {
      return true; // Return all items if searchTerm is empty
    }
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  const updatedProductPerPage = displayPage.length <= productPerPage ? displayPage.length : productPerPage;

  const visitedPage = pageNumber * updatedProductPerPage;
  const currentPageProducts = displayPage.slice(visitedPage, visitedPage + updatedProductPerPage);
  const pageCount = Math.ceil(productData.length / productPerPage)
 
  const pageChangeHandler = ({selected}) =>{
    setPageNumber(selected)
}

  return (
    <Helmet title={'Menu'}>

    <div>

      <CommonSection title="All Foods"></CommonSection>

      <section>
        <Container>
          <Row>
            <Col className='search_bar'>

              <input type='text' placeholder="Search Products" className='search__widget' value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value); setPageNumber(0)}}></input>

            </Col>


            <div className='product_menu'>
              {
                currentPageProducts.filter((item) => {
                  if (searchTerm.value === '') {
                    return item;
                  }
                  if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item;
                  }
                }).map((item) => {
                  return <Col key={item.id} className='mb-4 product_list'>
                    <ProductCard item={item}></ProductCard>
                  </Col>
                })
              }
            </div>

            <div className='item_pagination'>
              <ReactPaginate pageCount={pageCount} onPageChange={pageChangeHandler} previousLabel="< Prev" nextLabel="Next >" className='pagination text-center'></ReactPaginate>
            </div>
          </Row>
        </Container>
      </section>

    </div>
    </Helmet>
  )
}
