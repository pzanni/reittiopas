import React from 'react';
import { Select } from 'semantic-ui-react'

export const SelectStop = (props) => {

  const getOptions = (list) => {
    let opts = [];
    list.forEach(item => {
      opts.push({
        key: item,
        value: item,
        text: 'Stop ' + item
      })
    })
    return opts;
  }

  return (
    <div>
      <label className="select-label">{props.label}</label>
      <Select
        id="select"
        onChange={(event) => props.onChange(event.target.value)}
        options={getOptions(props.options)}
      />
    </div>
  )
};