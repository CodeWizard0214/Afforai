import React from 'react';

export const TextBadge = (props) => {
  const { text } = props;

  return (
    <div className='px-4 py-1.5 rounded-lg border-2 border-solid border-afforai-purple text-sm text-afforai-purple w-fit'>
      { text }
    </div>
  )
};