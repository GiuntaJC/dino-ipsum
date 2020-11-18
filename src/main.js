import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoIpsumService from './services/DinoIpsumService.js';

$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    const paragraphNumber = $("#paragraph-number").val();
    const wordNumber = $("#word-number").val();
    $("#paragraph-number, #word-number").val("");
    let promise = DinoIpsumService.makeDinoIpsum(paragraphNumber, wordNumber);
    promise.then(function(response) {
      const body = JSON.parse(response);
      body.forEach((index) => {
        const finalOutput = index.join(" ");
        $("#output").append(finalOutput + "<br><br>");
      });
    }, function(error) {
      $("#output").text(`There was an error: ${error}`);
    });
  });
});