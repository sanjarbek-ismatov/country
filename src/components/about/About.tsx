import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { data, fetcherThunk, countryType } from "../../store/store";

const About = () => {
  const [country, setCountry] = useState<countryType[]>();
  const { code } = useParams();
  const state = useSelector(
    (state: {
      fetcher: { data: countryType[]; loading: boolean; error: {} };
    }) => state.fetcher
  );
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetcherThunk(code));
  }, []);

  return (
    <div>
      {state &&
        state.loading === false &&
        state.data &&
        state.data.map((el) => {
          return <img src={el.flags.svg} />;
        })}
    </div>
  );
};

export default About;
