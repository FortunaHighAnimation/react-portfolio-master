import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [showPortfolio2D, setShowPortfolio2D] = useState(true);
  const [showPortfolio3D, setShowPortfolio3D] = useState(false);
  const [showPortfolioUnity, setShowPortfolioUnity] = useState(false);

  const handle2DButtonClick = () => {
    setShowPortfolio2D(true);
    setShowPortfolio3D(false); // Optional: Hide 3D content when 2D button is clicked
    setShowPortfolioUnity(false);
  };

  const handle3DButtonClick = () => {
    setShowPortfolio3D(true);
    setShowPortfolio2D(false); // Optional: Hide 2D content when 3D button is clicked
    setShowPortfolioUnity(false);
  };

  const handleUnityButtonClick = () => {
    setShowPortfolioUnity(true);
    setShowPortfolio2D(false);
    setShowPortfolio3D(false); // Optional: Hide 3D content when 2D button is clicked
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          <Col lg="12">
            <Button onClick={handle2DButtonClick} className="bMargin">
              2D
            </Button>
            <Button onClick={handle3DButtonClick} className="bMargin">
              3D
            </Button>
            <Button onClick={handleUnityButtonClick} className="bMargin">
              Unity
            </Button>
          </Col>
        </Row>
        {showPortfolio2D && (
          <div className="mb-5 po_items_ho">
            {dataportfolio.map((data, i) => (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            ))}
          </div>
        )}
        {showPortfolio3D && (
          <div className="mb-5 po_items_ho">
            {
              /* 3D content should be defined here, replacing the content of dataportfolio */
              <img
                src={
                  "https://t4.ftcdn.net/jpg/05/78/85/01/360_F_578850184_cpckwjxJRSc1NwJzY7suowU1Urt5A8qm.jpg"
                }
                alt=""
              />
            }
          </div>
        )}
        {showPortfolioUnity && (
          <div className="mb-5 po_items_ho">
            {
              /* 3D content should be defined here, replacing the content of dataportfolio */
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBc7xzSd4RCuXPUV8TtBNavIMjR6ZocDqbQxArUBk7qeaikTRVW25UUACAnM1pXREO3A&usqp=CAU"
                }
                alt=""
              />
            }
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};