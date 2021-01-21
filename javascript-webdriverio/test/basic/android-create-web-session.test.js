const webdriverio = require('webdriverio');
const androidOptions = require('../../helpers/caps').androidWebOptions;
const assert = require('chai').assert;
const expect = require('expect.js');
describe('Load the player', ()=> {

  it('should create and destroy Android browser session',  async function(){
   
    const client =  await webdriverio.remote(androidOptions);
    await client.url('https://motivation.vudoo.io/embed/12373082862');
    await client.pause(5000);
    expect(((await client.$("button.vjs-big-play-button")).isDisplayed)).to.be.ok();
    expect(((await client.$("button.vjs-big-play-button")).isEnabled)).to.be.ok();
    expect(((await client.$("button.vjs-big-play-button")).isClickable)).to.be.ok();
    (await client.elementClick("button.vjs-big-play-button"));
   


    
  });
});
 
