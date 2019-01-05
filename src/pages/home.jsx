import React, { Component } from 'react';
import Navbar from "../components/Navbar/navbar"
import Button from "../components/Cards"
import img from "../img.json"
import Card from "../components/Card/card"


class Home extends Component {

    state = {
        number: 0,
        text: "Not clicked"

    }

    handleclick = (event) => {

    

        console.log(event.target.getAttribute("value"))
      


        this.setState({ number: this.state.number + 1, text: "Clicked" })
    }


    render() {
        return (

            <div>

                <Navbar name="Home" number={this.state.number} text={this.state.text} />
               

                <div className="container">

                    {

                        img.map(player => {

                            return (
                                <Card handleclick={this.handleclick} img={player.image} value={player.id} />

                            )





                        })



                    }



                </div>

            </div>



        );
    }
}

export default Home;
