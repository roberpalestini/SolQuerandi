import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

const antu = {
  name: 'Antu',
  description: 'Esta cabaña cuenta con una suite matrimonial muy amplia, con baño completo, y con balcón con vista al mar y a la costa norte hasta Mar Chiquita.\nUna habitación para dos personas, un sofá cama y una cama plegable. Otro baño completo en planta baja, Cocina equipada a full, comedor, dos televisores Smart de 32", Wifi y DirecTv.\nJardín con parrilla techada, mesa de madera con bancos y sillones para reposar con mesa matera.\n\nPergola para dejar el vehículo a la sombra y al resguardo de la intemperie.',
  img: require('../../assets/img/AntuCard.jpg'),
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

const cuyen = {
  name: 'Cuyen',
  description: 'Esta cabaña cuenta con una suite matrimonial muy amplia, con baño completo, y con balcón con vista al mar y a la costa norte hasta Mar Chiquita.\nUna habitación para dos personas, un sofá cama y una cama plegable. Otro baño completo en planta baja, Cocina equipada a full, comedor, dos televisores Smart de 32", Wifi y DirecTv.\nJardín con parrilla techada, mesa de madera con bancos y sillones para reposar con mesa matera.\n\nPergola para dejar el vehículo a la sombra y al resguardo de la intemperie.',
  img: require('../../assets/img/CuyenCard.jpg'),
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

const sarah = {
  name: 'Saráh',
  description: 'La cabaña cuenta con un dormitorio muy amplio con cama King de 1,60m. \nUn Baño completo, Dos camas cuchetas, existe la posibilidad de agregar una cama plegable. \nCocina equipada a full con cocina eléctrica, microondas, cafetera, pava eléctrica, tostadora, todo a estrenar, mesa circular con sillas, TV Smart de 32" con WiFi y DirecTv. \nPatio cerrado con jardín, parrilla, mesa con bancos y sillones con mesa matera.\n\nAcceso independiente, y pérgola para estacionar el vehículo.',
  img: require('../../assets/img/SarahCard.jpg'),
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const Project = ({ heading, username, length, specfic }) => {

  const [projectsArray, setProjectsArray] = useState([]);

  useEffect(() => {
    setProjectsArray([antu, cuyen, sarah])
  },[])

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
