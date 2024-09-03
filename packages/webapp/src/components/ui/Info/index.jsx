import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Card } from "..";

const MAX_LENGTH = 250;
const Info = (props) => {
  const { title, className } = props;
  const themeColor = useSelector((state) => state.theme.themeColor);

  const [hover, setHover] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const handleHover = (value) => {
    setHover(value);
    if (!value) {
      setTimeout(() => {
        setIsExpanded(value);
      }, 800);
    }
  };

  const truncatedText = isExpanded ? title : title.slice(0, MAX_LENGTH);
  return (
    <div className="flex items-start gap-1 ml-1 relative">
      <BsInfoCircle
        className="cursor-pointer text-gray-400 dark:text-gray-200"
        size={16}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      />
      <AnimatePresence mode="wait">
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classNames(
              className,
              "w-[300px]",
              "overflow-hidden",
              "absolute left-0 top-6 z-50"
            )}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            <Card
              className="overflow-hidden w-full border-gray-800"
              bodyClass="w-full px-2 py-1 bg-gray-800 text-white text-xs"
            >
              <p style={{ whiteSpace: "break-spaces" }}>
                {truncatedText}
                {!isExpanded && title.length > MAX_LENGTH && (
                  <a href="#" onClick={toggleText}>
                    {" "}
                    <b className={`text-${themeColor}-400`}>more...</b>
                  </a>
                )}
              </p>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Info;
