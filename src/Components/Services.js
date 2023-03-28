import React from "react";
import Card from "./Card";
import response from "../response.json";

export default function Services() {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          {response.map((res, index) => (
            <div>
              <Card key={index} title={res.title} imageurl={res.imageurl} />
            </div>
          ))}
          {/* <Card title="title 2" imageurl="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <Card title="title 3" imageurl="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/> */}
        </div>
      </div>
    </section>
  );
}

// function add(a,b){
//   return a+b;
// }

// add(3,4)
