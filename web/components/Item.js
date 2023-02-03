import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Link from "next/link";

const formatDate = (date) => new Date(date).toLocaleString();

const Item = ({ slug, title, subtitle, date, coverImage, author, link }) => {
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          {author?.avatar && (
            <img
              src={author.avatar}
              className="rounded-circle mr-3"
              height="50px"
              width="50px"
              alt="avatar"
            />
          )}
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {author?.name || "Anonymous"}
            </Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          <Card.Img src={coverImage} alt={title} />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      <Link {...link} legacyBehavior>
        <a className="card-button">Read More</a>
      </Link>
    </Card>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  coverImage: PropTypes.string,
  author: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default Item;
