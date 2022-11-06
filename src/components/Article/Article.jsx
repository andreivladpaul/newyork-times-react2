import React from 'react';
import style from '../../css/style.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Article (props) {
  return (
      <Row >
        <Col sm className='text__section d-flex flex-column p-2"'>
            <h3>{props.headline}</h3>
            <p>{props.abstract}</p>
        </Col>
        <img src={props.img} alt={props.headline} />
      </Row>
  )
}
