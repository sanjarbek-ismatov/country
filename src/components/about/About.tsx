import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { data, fetcherThunk } from "../../store/store";

const About = () => {
  const [country, setCountry] = useState<any>();
  const { code } = useParams();
  const state = useSelector((state: data) => state.fetcher);
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(fetcherThunk());

    state &&
      state.error == undefined &&
      state.data.data &&
      setCountry(state.data.data.filter((e) => e.cca3 === code));
  }, []);
  useEffect(() => {
    console.log(country);
  }, [country]);
  return <div>{/* <img src={country.flags.svg} /> */}</div>;
};

export default About;
