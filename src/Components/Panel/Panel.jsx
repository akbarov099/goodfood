import React from 'react';
import PropTypes from 'prop-types'; // Добавьте PropTypes
import { BsArrowLeftSquare } from 'react-icons/bs';
import { CardActionArea } from '@mui/material';

const Panel = ({ title, icon }) => {
  return (
    <section>
      <div className="panel__naviget">
        <div>
          <CardActionArea className="panel__icon-animation">
            <BsArrowLeftSquare className="panel_icon" />
          </CardActionArea>
        </div>
        <h2 className="panel_title">
          {title} {icon}
        </h2>
      </div>
    </section>
  );
};

export default Panel;
