import classNames from "classnames";
import { useState } from "react";
import Loader from "./loader";
import Facebook from "./facebook";


const SocialMediaSignIn = (props) => {
  const { checkOnlineStatus = true, className } = props;
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  return (
    <div
      className={classNames(
        "flex flex-col gap-4 w-full items-center",
        className
      )}
    >
      <Loader loading={loading} message={message} />
      <Facebook
        checkOnlineStatus={checkOnlineStatus}
        useLoading={{
          setMessage,
          globalLoading: loading,
          setGlobalLoading: setLoading,
        }}
      />
     
    </div>
  );
};

export default SocialMediaSignIn;
