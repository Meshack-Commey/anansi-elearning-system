// components/DocxViewer.js
import React from 'react';

const IFrameDocxViewer = ({ docxUrl }) => {
  return (
    <iframe
      src={`https://docs.google.com/gview?url=${docxUrl}&embedded=true`}
      width="100%"
      height="600px"
    />
  );
};

export default IFrameDocxViewer;