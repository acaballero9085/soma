import styles from './HomeBanner.module.css'
import { Container, Row, Col } from 'react-grid-system';
import { Text, Button, Divider } from '../components/styled-components'

const HomeBanner = () => (
  <Container fluid className={styles.container}>
    <Row justify="center">
      <Col sm="content">
        <Text variant="h1" className={styles.title}>
          <i>
            Soma
            </i>
        </Text>
      </Col>
    </Row>
    <Row justify="center">
      <Col sm={8}>
        <Divider />
      </Col>
    </Row>
    <Row justify="center">
      <Col sm="content">
        <Button variant="secondary">HOME</Button>
      </Col>
      <Col sm="content">
        <Button variant="secondary">OUR MENUS</Button>
      </Col>
      <Col sm="content">
        <Button variant="secondary">BLOG ENTRIES</Button>
      </Col>
      <Col sm="content">
        <Button variant="secondary">CONTACT US</Button>
      </Col>
    </Row>
  </Container>
);

export default HomeBanner
