//In your react App.js or yourComponent.js file add these lines to import
import React, { Component } from "react";
import * as Survey from "survey-react";
import "./Survey.scss";

class MySurvey extends Component {
    constructor(){
        super();
    }
 //Define Survey JSON
 //Here is the simplest Survey with one text question
 json = {
  elements: [
   { type: "text", name: "customerName", title: "What is your name?", isRequired: true},
   { type: "text", name: "zipCode", title: "What is your zipcode?", isRequired: true},
   { type: "text", name: "substances", title: "Are you or someone you know abusing substances? If so which?", isRequired: true},
   { type: "text", name: "number", title: "If you'd like a member of our team to reach out to you, please leave your number.", isRequired: false}
  ]
 };

 //Define a callback methods on survey complete
//  onComplete(survey, options) {
//   //Write survey results into database
//   console.log("Survey results: " + JSON.stringify(survey.data));
//  }
 render() {
  //Create the model and pass it into react Survey component
  //You may create survey model outside the render function and use it in your App or component
  //The most model properties are reactive, on their change the component will change UI when needed.
  var model = new Survey.Model(this.json);
  return (<Survey.Survey model={model} onComplete={this.onComplete}/>);
  /*
  //The alternative way. react Survey component will create survey model internally
  return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
  */
  //You may pass model properties directly into component or set it into model
  // <Survey.Survey model={model} mode="display"/>
  //or 
  // model.mode="display"
  // <Survey.Survey model={model}/>
  // You may change model properties outside render function. 
  //If needed react Survey Component will change its behavior and change UI.
 }
} 

export default MySurvey