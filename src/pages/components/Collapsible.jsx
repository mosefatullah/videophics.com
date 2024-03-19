import React from "react";
import PropTypes from "prop-types";

const Collapsible = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const ref = React.useRef();

  const [height, setHeight] = React.useState();

  const handleToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    setHeight(ref.current.clientHeight);
  };

  const classes = `w-full ${isExpanded ? "is-expanded" : null}`;
  const currentHeight = isExpanded ? height : 0;
  return (
    <div className={classes} onClick={handleToggle}>
      <div className="flex flex-col gap-2 mb-3 border-b border-slate-300">
        <button className="text-xl font-[500] text-slate-700 text-left _collapsible">
          {title + " "}
          <span className="float-right">&rarr;</span>
        </button>
        <div
          className="text-sm text-slate-500 leading-6 _card-collapse mb-3"
          style={{ height: currentHeight + "px" }}
        >
          <div className="_card-body" ref={ref}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string,
};

export default Collapsible;
