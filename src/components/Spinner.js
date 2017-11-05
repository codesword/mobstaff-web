import React       from 'react';
import PropTypes   from 'prop-types';
import SpinnerIcon from 'react-loader';

const propTypes = {
  spinColor:      PropTypes.string,
  spinConfig:     PropTypes.object,
  spinAlignment:  PropTypes.string
};

const Spinner = ({
  spinColor       = '#fff',
  spinConfig      = {
    length: 8,
    lines:  15,
    radius: 4,
    width:  2,
  },
  spinAlignment   = 'left',
  ...rest,
}) => {
  const style = {
    display:      'inline-block',
    height:       '11px',
    position:     'relative',
    width:        '16px',
  };

  const spinAlignmentStyle = {
    display: 'inline=block',
    float:   spinAlignment + ' !important',
    padding: '2px 10px'
  };

  return (
    <div style={spinAlignmentStyle} {...rest}>
      <div style={style}>
        <SpinnerIcon {...spinConfig} color={spinColor} loaded={false} />
      </div>
    </div>
  );
}

Spinner.propTypes = propTypes;

export default Spinner;