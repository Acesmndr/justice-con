import React from 'react';

const ChannelImage = ({name}) => {
  return <div className="channel-wrapper"><img src={require(`../../logos/${name}.jpg`)} className='channel-logo' alt={name} /></div>
};

export default ChannelImage;
