
function* generatorExample(max){
    let n=0;
      while(n<max) {
      n++;
      yield n * n;
      }
  }
  //generator function return value and done
  for(const n of generatorExample(10)){
  console.log(n); 
  }