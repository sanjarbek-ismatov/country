import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { data, fetcherThunk, countryType } from "../../store/store";
import Preloader from "../preloader";
import Header from "./Header";
import "../../styles/about.scss";

const About = () => {
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
    <>
      <div className={`${localStorage.getItem("theme") || "light"}`}>
        <Header />
        <Preloader />
        {state &&
          state.loading === false &&
          state.data &&
          state.data.map((el) => {
            return (
              <div className="country-one">
                <div>
                  <img src={el.flags.svg} />
                  <h1>
                    {el.name.common} <sup>{el.flag}</sup>
                  </h1>
                </div>
                <div className="desc">
                  <img className="gerb" src={el.coatOfArms.svg} />

                  <p>
                    <span>Maydoni:</span> {el.area / 10000} KM kvadrat
                  </p>
                  <p>
                    <span>Poytaxti:</span> {el.capital}
                  </p>
                  <p>
                    <span>Google xarita:</span>{" "}
                    <a target="_blank" href={el.maps.googleMaps}>
                      Bu yerda
                    </a>
                  </p>
                  <p>
                    <span>Rasmiy nomi:</span> {el.name.official}
                  </p>
                  <p>
                    <span>Hududi:</span>
                    {el.region}, {el.subregion}
                  </p>
                  <p>
                    <span>Aholisi:</span> {el.population} kishi
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default About;
