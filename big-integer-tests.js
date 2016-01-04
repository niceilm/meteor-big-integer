describe('BigInteger', function() {
  beforeAll(function() {
    VelocityHelpers.exportGlobals();
  });

  it('Basic', function() {
    var zero = bigInt();
    expect(zero.value).toBe(0);

    var ninetyThree = bigInt(93);
    expect(ninetyThree.value).toBe(93);

    var googol = bigInt("1e100");
    expect(googol.toString()).toBe("10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");

    var largeNumber = bigInt("75643564363473453456342378564387956906736546456235345");
    var bigNumber = bigInt(largeNumber);
    expect(largeNumber.value).toBe(bigNumber.value);
    expect(bigNumber.toString()).toBe("75643564363473453456342378564387956906736546456235345");
  });
});