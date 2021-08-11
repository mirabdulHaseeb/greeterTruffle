const { expect } = require("chai");
const Greeter = artifacts.require("Greeter");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const greeter = await Greeter.new("Hello, world!");

    expect(await greeter.greet()).to.equal("Hello, world!");

    await greeter.setGreeting("Hola, mundo!");

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});