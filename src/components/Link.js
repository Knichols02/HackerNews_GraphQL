import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.description} ({link.url})
      </div>
    </div>
  );
};

export default Link;

//This is a simple React component that expects a link in its props and renders the link’s description and url. Easy as pie! 🍰