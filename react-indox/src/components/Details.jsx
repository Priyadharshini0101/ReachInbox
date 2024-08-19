import React from "react";
import PropTypes from 'prop-types'

Details.propTypes = {
  title:PropTypes.string,
  data:PropTypes.string,
}

function Details({ title, data }) {
  return (
    <div className="flex justify-between">
      <h1 className="text-[12px] text-[#637381] dark:text-white">{title}</h1>
      <p className="text-black dark:text-[#B9B9B9] text-[14px]">{data}</p>
    </div>
  );
}

export default Details;
