import axios from 'axios';

let data = {
    limit:'',
    launch_year:'',
    launch_success:'',
    landing:''  
}
export const getData = ({limit, name, value }) => async dispatch => {
    data.limit = limit;
    switch(name){
        case 'launch_year' :
            data.launch_year = value;
        break;
        case 'launch_success' :
            data.launch_success = value;
        break;
        case 'landing' :
            data.landing = value;
        break;
        default:
            break;    
    }


      let url = 'https://api.spacexdata.com/v3/launches?limit=100';
      for(let item in data){
          if(item === 'launch_success'){
            data[item].length > 0 ? url+= `&launch_success=${data.launch_success}`:url+= '';
          } else if(item === 'landing'){
            data[item].length > 0 ? url+= `&land_success=${data.landing}`:url+= '';
          } else if(item === 'launch_year'){
            data[item].length > 0 ? url+= `&launch_year=${data.launch_year}`:url+= '';
          }  
      }

    const response = await axios.get(url);
    dispatch({type:'getData', payload:response});
}