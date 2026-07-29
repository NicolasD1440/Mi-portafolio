import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';
import endpoints from '../constants/endpoints';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import '../css/timeline.css';

function Education(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.education, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  const renderTimeline = (items) => (
    <div className="tl tl--education">
      {items?.map((item) => (
        <div className="tl-item" key={item.cardTitle + item.title}>
          <div className="tl-node--icon">
            {item.icon && (
              <img src={item.icon.src} alt={item.icon.alt} />
            )}
          </div>

          <div className="tl-card">
            <div className="tl-date">{item.title}</div>

            <h3 className="tl-title">{item.cardTitle}</h3>

            <div className="tl-subtitle">
              <span className="accent">{item.cardSubtitle}</span>
            </div>

            {item.cardDetailedText && (
              <div className="tl-detail">
                {item.cardDetailedText}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Header title={header} />

      {data ? (
        <div className="section-content-container">
          <Fade triggerOnce>

            <h2 className="timeline-title"></h2>
            {renderTimeline(data.education)}
      <Header title="Certificaciones" />
            <h2 className="timeline-title mt-5"></h2>
            {renderTimeline(data.certifications)}

          </Fade>
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
}

Education.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Education;