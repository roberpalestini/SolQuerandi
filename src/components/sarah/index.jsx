import React, { useState } from 'react'
import { Jumbotron } from '../home/migration'
import { Carousel, Container, Row } from 'react-bootstrap'
import {
  antuSlider
} from "../../editable-stuff/config.js";

const Antu = () => {


const [img, setImg] = useState(antuSlider.images)
const [imgTwo, setImgTwo] = useState(antuSlider.imagesTwo)




return (
    <Jumbotron fluid id="antu" className="bg-light m-0">
    <Container className="">
      
      <h2  className="display-4 pb-5 text-center">Antu</h2>
      <Row>
      {/* <h2 className="display-4 pb-5 text-center">{heading}</h2> */}
  
        
        <div className="col-md-12">
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={value.img}
                    alt="First slide"
                    // width={imageSize.width}
                    // height={imageSize.height}
                  />
                  <Carousel.Caption>
                    <h3>{value.label}</h3>
                    <p>
                      {value.paragraph}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </Row>

      <Row>
      <div className="col-md-4">Esta cabaña cuenta con una suite matrimonial muy amplia, con baño completo, y con balcón con vista al mar y a la costa norte hasta Mar Chiquita. Una habitación para dos personas, un sofá cama y una cama plegable. Otro baño completo en planta baja, Cocina equipada a full, comedor, dos televisores Smart de 32", Wifi y DirecTv. Jardín con parrilla techada, mesa de madera con bancos y sillones para reposar con mesa matera. Pergola para dejar el vehículo a la sombra y al resguardo de la intemperie.
</div>
      <div className="col-md-8">
        <Carousel>
            {imgTwo.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={value.img}
                    alt="First slide"
                    // width={imageSize.width}
                    // height={imageSize.height}
                  />
                  <Carousel.Caption>
                    <h3>{value.label}</h3>
                    <p>
                      {value.paragraph}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          </div>
      </Row>
    </Container>
  </Jumbotron>
  )
}

export default Antu