import {Box} from 'native-base';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from '../../components/SilaComponents/Card';

// import Card from '../../components/SilaComponents/Card';
import {setDATA} from '../Redux/counter/CounterSlice';

const SilaScreen = () => {
  const datas: any = useSelector((state: any) => state.counter.DATA);
  const email = useSelector((state: any) => state.counter.Email);
  const displact = useDispatch();
  console.log('email' + email);
  const GetData = async () => {
    const res = await fetch('http://localhost:3001/user');
    const data = await res.json();
    displact(setDATA(data));
  };
  // console.log('---------------------Get datan in font end');
  // datas.map((i: any) => {
  //   console.log(i);
  // });
  useEffect(() => {
    GetData();
  }, []);

  return (
    <Box flexDirection="row" flexWrap="nowrap">
      {datas.map((i: any) => {
        return <Card name={i.name} email={i.email} id={i.id} />;
      })}
    </Box>
  );
};

export default SilaScreen;
