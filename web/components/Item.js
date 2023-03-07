import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Link from "next/link";
import { urlFor } from "@/lib/api";

const Item = ({
  title,
  subtitle,
  date,
  coverImage,
  author,
  link,
  mode = "normal",
}) => {
  return (
    <Card className={`fj-card ${mode}`}>
      <div
        className={`card-body-wrapper ${!coverImage?.asset} ? 'no-image' : ''`}
      >
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
            {mode === "placeholder" ? (
              <>
                <Card.Title className="font-weight-bold mb-1">
                  Placeholder Title
                </Card.Title>
                <Card.Text className="card-date">
                  Placeholder Placeholder Date
                </Card.Text>
              </>
            ) : (
              <>
                <Card.Title className="font-weight-bold mb-1">
                  {author?.name || "Anonymous"}
                </Card.Title>
                <Card.Text className="card-date">{date}</Card.Text>
              </>
            )}
          </div>
        </Card.Header>
        <div className="view overlay">
          {mode === "placeholder" ? (
            <div className="image-placeholder" />
          ) : (
            coverImage?.asset && (
              <Card.Img
                src={urlFor(coverImage)
                  .height(300)
                  .crop("center")
                  .fit("clip")
                  .url()}
                alt={title}
              />
            )
          )}
        </div>
        <Card.Body>
          {mode === "placeholder" ? (
            <>
              <Card.Title className="card-main-title">
                Placeholder title
              </Card.Title>
              <Card.Text>Placeholder subtitle</Card.Text>
            </>
          ) : (
            <>
              <Card.Title className="card-main-title">{title}</Card.Title>
              <Card.Text>{subtitle}</Card.Text>
            </>
          )}
        </Card.Body>
      </div>
      {link && (
        <Link {...link} legacyBehavior>
          <a className="card-button">Read More</a>
        </Link>
      )}
    </Card>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  coverImage: PropTypes.object,
  author: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default Item;
