import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { data, fetcherThunk } from "../store/store";

const Main = ({ filter }: { filter: string }) => {
  const state = useSelector((state: data) => state.fetcher);

  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(fetcherThunk());
  }, []);

  return (
    <>
      <div className={state.loading ? "preloader" : ""}>
        <span></span>
      </div>
      <main>
        <h1>Countries in the world</h1>
        <div>
          {state &&
            state.error === undefined &&
            state.data.data &&
            state.data.data
              .filter((country, id) =>
                country.name.common.toLowerCase().includes(filter.toLowerCase())
              )
              .map((country, id) => {
                return (
                  <div className="country">
                    <div className="img">
                      <Link to={"/country/" + country.cca3}>
                        <img className="flag" src={country.flags.svg} />
                      </Link>
                    </div>
                    <div className="desc">
                      <h3>{country.name.common}</h3>
                      <p>Region: {country.region}</p>
                      <p>
                        Population:
                        {Math.floor(country.population / 100000) / 10 > 0
                          ? " " +
                            Math.floor(country.population / 100000) / 10 +
                            "M+"
                          : " " + country.population}
                      </p>
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
