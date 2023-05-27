import {React , useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Videos , ChannelCard} from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI';
import zIndex from '@mui/material/styles/zIndex';

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);
  const {id} = useParams();

useEffect(() => {
  fetchFromAPI(`channels?part=snippet&id=${id}`)
  .then((data) => setchannelDetail(data?.items[0]));

  fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
  .then((data) => setvideos(data?.items));
} , [id]);
  
  return (
  <Box minHeight='95vh'>
  <Box>
    <div style={{
      backgroundcolor: '#11a4c8' , 
      backgroundImage: 'linear-gradient(43deg, #11a4c8 0%, #217acc 22%, #682ec8 49%, #ed11e0 75%, #fa00ff 100%)' ,      
      zIndex : 10, 
      height : '300px'
    }} />
    <ChannelCard  marginTop = '-110px' channelDetail={channelDetail} ></ChannelCard>
    </Box>   
    <Box display='flex'  p='2' >
      <Box sx={{ mr : {sm : '74px'} }}/>
      <Videos videos={videos} />
  </Box>
  </Box>
  )
}

export default ChannelDetail