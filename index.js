/*
Thrembo
-----
An A.F: Artificial Feller
*/
const Global = {
  utils:{
    RNG: (min,max) => {
      let c1 = Math.random();
      let cs = [];
      for(let i=0;i<10;i++){cs=[...cs,Math.random()];}
      
      let result = ((Math.random()*max-min)+min);
      return result;
    }
  },
  types:{
    newGeneration:()=>{
      
    },
    "evolutionary_basic": (net,options) => {
      if(options.iterations == undefined)options.iterations = 1000;
      if(options.samples == undefined)options.samples = 5;
      let samples = [];
      for(let currentSample = 0; currentSample < options.samples; currentSample++;){
         let newNet = net.nodeFull;
         samples = [...samples,newNet];
         for(let nodeQueue = 0; nodeQueue < newNet.hiddenLayers.length; nodeQueue++;){
            let currentNode = newNet[nodeQueue];
            currentNoode
          }
      }
    }
  }
}

class NeuralThrembo {
  constructor(options){
    if(options.hiddenLayers == undefined)options.hiddenLayers = [10,20,10]; //formatting for hiddenlayers stolen from brain.js
    
    this.config = options;
    this.node = {};
    this.node.hiddenLayers = this.config.hiddenLayers;
  }
  train(options){
    if(options.type == "undefined")options.type = "evolutionary_basic";
  }
}
