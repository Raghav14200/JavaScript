console.log("hi");
var map=new ol.Map(
  {
    target:'map',
    view: new ol.View({
      zoom:5,
      center:[0,0]
    }),
    layers:[
      new ol.layer.Tile({
        source:new ol.source.OSM()
      })
    ]
  });

