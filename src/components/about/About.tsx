import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { data, fetcherThunk, countryType } from '../../store/store';

const About = () => {
  const [country, setCountry] = useState<countryType>()
  const { code } = useParams();
  const state = useSelector((state: { fetcher: data }) => state.fetcher);
  const dispatch: any = useDispatch();

  useEffect(() => {
    state && !state.data.data ? dispatch(fetcherThunk()) : setCountry(state.data.data.filter((el) => el.cca3 === code));
  }, []);

  return (
    <div>{state.data.data && <p>{state.data.data[0].name.common}</p>}</div>
  );
};

export default About;
