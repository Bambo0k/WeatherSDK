const weatherInKyiv = new Weather("London");
weatherInKyiv.init().then((el) => {
  console.log(el);
});

function Weather(city) {
  this.city = city;

  Weather.prototype.init = function () {
    return fetch(
      `https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=${this.city}&aqi=no`
    )
      .then((response) => response.json())
      .then((data) => {
        return new Promise(function (resolve, reject) {
          return resolve({
            city: data.location.name,
            temp: data.current.temp_c,
            condition: data.current.condition.text,
            humidity: data.current.cloud,
          });
        });
      });
  };
}
