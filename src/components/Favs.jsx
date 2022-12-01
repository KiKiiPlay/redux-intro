import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const Favs = () => {
  const favs = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col></Col>
    </Row>
  );
};

export default Favs;
