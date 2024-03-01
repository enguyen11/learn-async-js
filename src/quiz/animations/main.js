const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  

  async function main(){
      try {
          const alice1 = document.querySelector("#alice1");
          const alice2 = document.querySelector("#alice2");
          const alice3 = document.querySelector("#alice3");
          await aliceAnimation(alice1);
          await aliceAnimation(alice2);
          await aliceAnimation(alice3);

          //console.log(productName);
      }
      catch(err) {
          console.log(`Failure: ${err.message}`);
      }
  }
    main();
    console.log('End main thread');


  async function aliceAnimation(alice){
      try {
          await alice.animate(aliceTumbling, aliceTiming).finished;
      }
      catch (err) {
          console.log(`Error when animating: ${err.message}`)
      }
  }
  // Promise chain  
  // alice1.animate(aliceTumbling, aliceTiming).finished  
  //   .then(() => {
  //       return alice2
  //               .animate(aliceTumbling, aliceTiming)
  //               .finished;     
  //   })
  //   .then(() => {
  //     return alice3
  //             .animate(aliceTumbling, aliceTiming)
  //             .finished;
  //   })
  //   .catch((err) => alert(`Error when promising ... ${err.message}`));