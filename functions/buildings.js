exports.handler = function(event, context, callback) {
  const listOfBuildings = {
    data: [
      {
        name: "Bauhaus Archive",
        img: "bauhaus.jpg",
        addressOne: "7246 Woodland Rd.",
        addressTwo: "Waukesha, WI 53186",
        users: 906,
        offices: 36,
        rent: 75
      },
      {
        name: "Lotus Temple",
        img: "lotus.jpg",
        addressOne: "164 S. Carson Court",
        addressTwo: "Newport News, VA 23601",
        users: 876,
        offices: 20,
        rent: 65
      },
      {
        name: "Dome of the Rock",
        img: "dome.jpg",
        addressOne: "123 Johnson Court",
        addressTwo: "Roy, UT 84067",
        users: 564,
        offices: 46,
        rent: 96
      },
      {
        name: "Lloyd's Building",
        img: "lloyds.jpg",
        addressOne: "36 Squawq Creek Dr.",
        addressTwo: "Harleysville, PA 19438",
        users: 466,
        offices: 120,
        rent: 120
      },
      {
        name: "Beetham Tower",
        img: "beetham.jpg",
        addressOne: "1 Deansgate",
        addressTwo: "Manchester",
        users: 333,
        offices: 44,
        rent: 55
      },
      {
        name: "Manchester Town Hall",
        img: "townhall.jpg",
        addressOne: "1 Albert Square",
        addressTwo: "Manchester",
        users: 123,
        offices: 432,
        rent: 125
      }
    ]
  };
  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(listOfBuildings)
  });
};
