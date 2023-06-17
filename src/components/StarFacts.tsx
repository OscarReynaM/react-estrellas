// StarFacts.tsx
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function StarFacts() {
  return (
    <Accordion defaultActiveKey={['0','1','2','3']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Curiosidades sobre las Estrellas #1</Accordion.Header>
        <Accordion.Body>
        Las estrellas más brillantes en el cielo se llaman estrellas "primera magnitud"
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Curiosidades sobre las Estrellas #2</Accordion.Header>
        <Accordion.Body>
        Las estrellas más grandes conocidas son llamadas "hipergigantes"
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Curiosidades sobre las Estrellas #3</Accordion.Header>
        <Accordion.Body>
        El Sol es una estrella enana amarilla y es nuestra estrella más cercana.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Curiosidades sobre las Estrellas #4</Accordion.Header>
        <Accordion.Body>
        Las estrellas emiten luz debido a las reacciones nucleares en su núcleo.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default StarFacts;
