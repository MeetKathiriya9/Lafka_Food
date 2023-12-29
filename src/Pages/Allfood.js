import React from 'react'
import CommonSection from '../CommonSection/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import products from '../Pages/Prodata.js'
import ProductCard from '../Pages/ProductCart.js'
import { useState } from 'react'

import ReactPaginate from 'react-paginate'


export default function Allfood() {

  const [searchTerm, setSearchTerm] = useState('');
  // const [productData, setProductData] = useState(products);
  const [pageNumber, setPageNumber] = useState(0)
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = products.slice(visitedPage, visitedPage + productPerPage)
  const pageCount = Math.ceil(products.length / productPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div>

      <CommonSection title="BURGER HAHAHAHAH..."></CommonSection>

      <section>
        <Container>
          <Row>
            <Col className='search_bar'>

              <input type='text' placeholder="Search Products" className='search__widget' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>

            </Col>


            <div className='product_menu'>
              {
                displayPage.filter((item) => {
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

            <div>
              <ReactPaginate pageCount={pageCount} onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"} containerClassName=" paginationBttns ">

              </ReactPaginate>
            </div>
          </Row>
        </Container>
      </section>

    </div>
  )
}
