import React from "react";

const Iconstext = ({ img, title, text, className }) => {
  return (
    <div className={className}>
      <img src={img} alt="" className="w-8 h-8" />
      <p className="font-bold text-text-header text-base tracking-tight py-1">
        {title}
      </p>
      <p className="text-sm text-text-light">{text}</p>
    </div>
  );
};

export default Iconstext;
