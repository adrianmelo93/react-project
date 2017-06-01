import React from 'react';
import {cars,numberVotes}from '../Info.js';

class Car extends React.Component{
    constructor(props){
        super(props);
        this.handleNumbVotes=this.handleNumbVotes.bind(this);

    }
handleNumbVotes(){
    this.props.onVote(this.props.id);
}

    render(){


        return(

            <div className="carInfo">
                <ul>
                    <li>
                        <div className="id">{this.props.id}</div>
                        <div className="mark">{this.props.mark}</div>
                        <div className="model">{this.props.model}</div>
                        <div className="countV">
                            <a onClick={this.handleNumbVotes}>
                              <img src={this.props.img} className="img"/>

                            </a>
                             {this.props.votes}
                        </div>



                    </li>
                    <select className="coolOrN" >
                        <option value="Cool">Cool</option>
                        <option value="Not cool">Not Cool</option>
                    </select>
                </ul>

            </div>

        );
    }
}

class ProjectList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            car:[]
        }
        this.handleChildUpVotes=this.handleChildUpVotes.bind(this);
      }


    componentDidMount(){
        this.setState({car:cars});

    }

    handleChildUpVotes(carIds){
        const proxCar=this.state.car.map((car)=>{
            if(car.id === carIds){
                return Object.assign({},car,{
                    votes:car.votes + 1
                });
            }else{
                return car;
            }
        });
        // console.log(proxCar);
        this.setState({
            car:proxCar
        });
}

    render(){


        const sortedVotes=this.state.car.sort((a,b)=>(
            b.votes - a.votes
        ));

            const displayInfo=this.state.car.map((car)=>(
                <Car
                    key={'car-'+ car.id}
                    id={car.id}
                    mark={car.mark}
                    model={car.model}
                    gender={car.gender}
                    img={car.img}
                    onVote={this.handleChildUpVotes}
                    votes={car.votes}

                />
            ));

        return(
            <div className="item">
                {displayInfo}
            </div>

        );



    }


}
export default ProjectList;
