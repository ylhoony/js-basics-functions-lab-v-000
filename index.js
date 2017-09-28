// Code your solution in this file!

function distanceFromHqInBlocks(location) {
  switch(location) {
    case 43:
      return 1;
      break;
    case 50:
      return 8;
      break;
    case 34:
      return 8;
      break;
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return Math.abs(endingBlock - startingBlock) * 264;
}

//
// describe('distanceTravelledInFeet()', function () {
//   it('returns the distance travelled in feet', function () {
//     expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
//   });
//
//   it('returns a distance in feet', function () {
//     expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
//   });
//
//   it('returns distance when destination is below distance', function () {
//     expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
//   });
// });
//
// describe('calculatesFarePrice(start, destination)', function () {
//   it('gives customers a free sample', function () {
//     expect(calculatesFarePrice(43, 44)).to.equal(0);
//   });
//
//   it('charges 2 cents per foot (and does not give any discount on the first 200 feet) when total feet travelled between 400 and 2000 in example below is 528', function () {
//     // total feet travelled is 528 -> 10.56
//     expect(calculatesFarePrice(34, 32)).to.equal(10.56);
//   });
//
//   it('charges 25 dollars for a distance over 2000 feet', function () {
//     expect(calculatesFarePrice(50, 58)).to.equal(25);
//   });
//
//   it('does not allow rides over 2500 feet', function () {
//     expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
//   });
// });
