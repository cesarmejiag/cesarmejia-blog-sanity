import { Card } from "react-bootstrap";
import Link from "next/link";

const ListItem = ({ title, subtitle, date, author, link, mode = "normal" }) => {
  return (
    <Card className={`fj-card fj-card-list ${mode}`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          {author?.avatar && (
            <img
              src={author?.avatar}
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
                  Placeholder title
                </Card.Title>
                <Card.Text className="card-date">Placeholder date</Card.Text>
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

export default ListItem;
