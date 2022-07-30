import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { data, fetcherThunk } from "../store/store";

const Main = ({ filter }: { filter: string }) => {
  const state = useSelector((state: { fetcher: data }) => state.fetcher);

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
              .filter((country: { name: { common: string } }, id: number) =>
                country.name.common.toLowerCase().includes(filter.toLowerCase())
              )
              .map(
                (
                  country: {
                    cca3: string;
                    flags: { svg: string | undefined };
                    name: {
                      common:
                        | string
                        | number
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | ReactFragment
                        | ReactPortal
                        | null
                        | undefined;
                    };
                    region:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | ReactPortal
                      | null
                      | undefined;
                    population: number;
                  },
                  id: any
                ) => {
                  return (
                    <div className="country" key={id}>
                      <div className="img">
                        <Link to={"/country/" + country.cca3}>
                          <img
                            onClick={() => dispatch(fetcherThunk(country.cca3))}
                            className="flag"
                            src={country.flags.svg}
                          />
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
                }
              )}
        </div>
      </main>
    </>
  );
};

export default Main;
