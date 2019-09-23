import { Planet } from './Planet';
import './styles.css';
import  './planets.jpg';
import $ from 'jquery';

$(document).ready(function() {
  let mercury = new Planet(0.24);
  let venus = new Planet(0.62);
  let mars = new Planet(1.88);
  let jupiter = new Planet(11.86);
  let planets = [mercury, venus, mars, jupiter];
  $("#age-form").submit(function(event) {
    event.preventDefault();
    let inputAge = parseInt($("input#age-input").val());
    let ages = [];
    for (let x = 0; x<planets.length; x++) {
      let solarAge = planets[x].yearCalculator(inputAge);
      ages.push(solarAge);
    }
    $("#output").show();
    $("#mercury").html(ages[0] + " " + "years");
    $("#venus").html(ages[1] + " " + "years");
    $("#mars").html(ages[2] + " " + "years");
    $("#jupiter").html(ages[3] + " " + "years");
  });

});