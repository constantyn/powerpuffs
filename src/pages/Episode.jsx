import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

export default ({ showId, episodeId }) => {
  const [episode, setEpisodeData] = useState({});
  const getEpisode = async id => {
    const { data } = await axios.get(`http://api.tvmaze.com/episodes/${id}`);
    setEpisodeData(data);
  };

  useEffect(() => {
    getEpisode(episodeId);
  }, [episodeId]);

  return (
    <div>
      <div className="row">
        <div className="col col-md-4">
          {episode.image ? (
            <Image src={episode.image.medium} fluid rounded />
          ) : null}
        </div>
        <div className="col col-md-8">
          <h2>{episode.name}</h2>
          <p
            // eslint-disable-next-line react/no-danger, react/jsx-tag-spacing
            dangerouslySetInnerHTML={{ __html: episode.summary }}
          />
        </div>
      </div>
      <hr />
      <p>
        <Link to={`/${showId}`}>&lt; Back</Link>
      </p>
    </div>
  );
};
