import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const ItemsList = ( {itemsData} ) => {
  return (
    <Row>

    {
        itemsData.length >=1 ? ( itemsData.map( (item)=>{

            return ( <Col key={item.id} sm="12" className='mt-3 mb-3' >
            <Card className='d-flex flex-row'   >
                <Card.Img variant="top" src= {item.imgUrl} style={{width:"200px",height:"150px",objectFit:"cover"}} />
               
                <Card.Body>
                
                    <Card.Title className='d-flex justify-content-between ' >
                        <div style={{lineHeight:'30px'}} > {item.title} </div>
                        <div style={{color:"MediumBlue", fontSize:"16px",lineHeight:"30px"}} > {item.price} </div>
                    </Card.Title>
                
                    <Card.Text className='py-2' >
                        <div style={{lineHeight:'30px',fontSize:"17px" }} > {item.description} </div>
                    </Card.Text>
                
                </Card.Body>
            </Card>
        </Col> )

        } ) ) : <h3 className=' text-danger text-center' >لا يوجد اصناف</h3>
    }

       
    </Row>
  )
}

export default ItemsList
