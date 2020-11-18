export default class DinoIpsumService {
  static makeDinoIpsum(paragraphNumber, wordNumber) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraphNumber}&words=${wordNumber}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}