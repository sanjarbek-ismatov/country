import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import select, { data, fetcherThunk } from "../../store/store";

const About = () => {
  const { code } = useParams();
  const state = useSelector((state: { fetcher: data }) => state.fetcher);
  const dispatch: any = useDispatch();

  // useEffect(() => {
  //   state.selected
  // }, []);

  return <div>{state.selected && <p>{state.selected[0].name.common}</p>}</div>;
};

export default About;
