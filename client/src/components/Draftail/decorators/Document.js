import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../../Icon/Icon';

import TooltipEntity from '../decorators/TooltipEntity';

const documentIcon = <Icon name="doc-full" />;

const Document = props => {
  const { entityKey, contentState } = props;
  const { url } = contentState.getEntity(entityKey).getData();
  const filename = url.split('/')[3];

  return (
    <TooltipEntity
      {...props}
      icon={documentIcon}
      label={filename}
      url={url}
    />
  );
};

Document.propTypes = {
  entityKey: PropTypes.string.isRequired,
  contentState: PropTypes.object.isRequired,
};

export default Document;
