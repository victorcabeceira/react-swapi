import React, { useEffect } from 'react';

const planet = props => {

  useEffect(() => {
    console.log('[planet] props', props);
  }, []);

  return (
    <div>
      Planet
    </div>
  )
}

export default planet;