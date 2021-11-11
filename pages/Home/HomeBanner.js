import styles from './HomeBanner.module.css'
import { Container, Row, Col } from 'react-grid-system';
import { Text } from '../../styled-components'

const HomeBanner = () => (
  <Container fluid className={styles.container}>
    <Row justify="center">
      <Col sm="content">
        <Text variant="h1"><i>Soma</i></Text>
      </Col>
    </Row>
    <Row>
      <Col sm={12}></Col>
    </Row>
    <Row justify="center">
      <Col sm="content">HOME</Col>
      <Col sm="content">OUR MENUS</Col>
      <Col sm="content">BLOG ENTRIES</Col>
      <Col sm="content">CONTACT US</Col>
    </Row>
  </Container>
);

export default HomeBanner
