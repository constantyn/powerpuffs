import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

export default ({ showId = '6771' }) => {
  const [show, setShowData] = useState({});
  const [episodes, setEpisodes] = useState([]);

  const getShow = async id => {
    const { data } = await axios.get(`http://api.tvmaze.com/shows/${id}`);
    setShowData(data);
  };

  const getEpisodes = async id => {
    const { data } = await axios.get(
      `http://api.tvmaze.com/shows/${id}/episodes`
    );
    setEpisodes(data);
  };

  useEffect(() => {
    getShow(showId);
    getEpisodes(showId);
  }, [showId]);

  return (
    <div>
      <div className="row">
        <div className="col col-md-4">
          {show.image ? <Image src={show.image.medium} fluid rounded /> : null}
        </div>
        <div className="col col-md-8">
          <h2>{show.name}</h2>
          <p
            // eslint-disable-next-line react/no-danger, react/jsx-tag-spacing
            dangerouslySetInnerHTML={{ __html: show.summary }}
          />
        </div>
      </div>

      <h3 className="pt-3">Episodes:</h3>
      <ListGroup>
        {episodes.map(({ id: episodeId, name }) => (
          <ListGroup.Item key={episodeId}>
            <Link to={`/${showId}/episode/${episodeId}`}>{name} &gt;</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
