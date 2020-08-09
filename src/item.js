import React from 'react';

const Item = ({data}) => {
    return (
      <div key={data.flight_number} className="col-md-3">
        <div className="data">
        <img src={data.links.mission_patch_small} alt={data.rocket.rocket_name} />
        <h4>{data.rocket.rocket_name} </h4>
        <ul>
          <li><strong>Mission Ids: </strong> 
          {data.mission_id.length > 0 ? 
          data.mission_id.map((item, i)=>(
              <span key={i}>{item}</span>
          )): 'NA' }
          </li>
          <li><strong>Launch Year: </strong> {data.launch_year} </li>
          <li><strong>SuccessFul Launch: </strong> {data.launch_success} </li>
          <li><strong>SuccessFul Landing: </strong> {data.rocket.first_stage.cores[0].land_success} </li>
        </ul>
      </div>
      </div>
    );
}

export default Item;
