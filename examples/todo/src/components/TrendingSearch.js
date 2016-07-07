/**
 * Nikhil Surti
 * 07/01/2016
 */

import React,{Component} from 'react';


class TrendingSearch extends Component {
  render(){
  return (

    <div className="panel panel-default visible-md-block visible-lg-block">
      <div className="panel-body">
        <h5 className="m-t-0">Trending Searches <small>· <a href="#">Change</a></small></h5>
        <ul className="list-unstyled list-spaced">
          <li><a href="#">#Bootstrap</a></li>
          <li><a href="#">Mdo for pres</a></li>
          <li><a href="#">#fatsux</a></li>
          <li><a href="#">#buyme</a></li>
          <li><a href="#">#designishard</a></li>
          <li><a href="#">#helpawesomepeople</a></li>
          <li><a href="#">#doawesomestuff</a></li>
          <li><a href="#">Tom Brady</a></li>
          <li><a href="#">Magna Carta</a></li>
          <li><a href="#">Mark Otto</a></li>
          <li><a href="#">Dave Gamache</a></li>
          <li><a href="#">Jacob Thornton</a></li>
        </ul>
      </div>
    </div>


  );
}
}
export default TrendingSearch;
