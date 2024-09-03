import { Dialog, Spinner } from "@/components/ui";
import React from "react";

const Loader = (props) => {
  const { loading = false, message = "Signing In" } = props;

  return (
    <Dialog
      isOpen={loading}
      closable={false}
      width="fit-content"
      contentClassName="mt-[320px]"
      bodyOpenClassName="overflow-hidden"
    >
      <div className="flex items-center justify-center w-full gap-4">
        <Spinner size={25} />
        <h3 className="font-semibold">{message}</h3>
      </div>
    </Dialog>
  );
};

export default Loader;
