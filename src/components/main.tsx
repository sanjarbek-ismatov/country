import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { data, fetcherThunk } from "../store/store";
import Preloader from "./preloader";

const Main = ({ filter }: { filter: string }) => {
  const state = useSelector((state: { fetcher: data }) => state.fetcher);

  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(fetcherThunk());
  }, []);

  return (
    <>
      <Preloader />
      <main>
        <h1>Dunyodagi barcha mamlakatlar</h1>
        <div className="main">
          {state &&
            state.error === undefined &&
            state.data.data &&
            state.data.data
              .filter((country: { name: { common: string } }, id: number) =>
                country.name.common.toLowerCase().includes(filter.toLowerCase())
              )
              .map((country, id) => {
                return (
                  <div className="country" key={id}>
                    <div className="img">
                      <Link to={"/country/" + country.cca2.toLowerCase()}>
                        <img
                          onClick={() => dispatch(fetcherThunk(country.cca2))}
                          className="flag"
                          src={country.flags.svg}
                        />
                      </Link>
                      <div className="desc">
                        <h3>{country.name.common}</h3>
                        <p>Hududi: {country.region}</p>
                        <p>
                          Aholisi:
                          {Math.floor(country.population / 100000) / 10 > 0
                            ? " " +
                              Math.floor(country.population / 100000) / 10 +
                              "M+"
                            : " " + country.population}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </main>
    </>
  );
};

export default Main;
