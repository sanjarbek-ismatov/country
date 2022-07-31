import React from "react";
import { useSelector } from "react-redux";
import { data } from "../store/types/types";

const Preloader = () => {
  const state = useSelector((state: { fetcher: data }) => state.fetcher);
  return (
    <div className={state.loading ? "preloader" : ""}>
      <span></span>
    </div>
  );
};

export default Preloader;
