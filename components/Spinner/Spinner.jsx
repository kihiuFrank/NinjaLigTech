import React from "react";
import Image from "next/image";
import css from "./spinner.module.scss";
const Spinner = () => {
  return (
    <div className={css.main}>
      <Image
        width={100}
        height={100}
        src="/loader.svg"
        alt="loader"
        className={css.img}
      />
      <p className="text-white">
        Loading in progress <br /> Please wait...
      </p>
    </div>
  );
};
export default Spinner;
