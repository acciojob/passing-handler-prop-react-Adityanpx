import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background,label } = config;
  return (
    <button className={config.classname} onClick={() => selectNextBackground({background: background})}>
      {label}
    </button>
  )
}
export default ColourSelector;
