import React from "react";

export const AfforaiButton = (props) => {
  const { text, onClick } = props;

  return (
    <button
      className="px-4 py-1 rounded-lg text-sm font-medium text-white violet-fill"
      onClick={() => onClick()}
    >
      { text }
    </button>
  )
};