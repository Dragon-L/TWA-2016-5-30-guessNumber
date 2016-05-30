describe('test for isValid',function () {
    var isValid = null;

    beforeEach(function () {
        isValid = require('../src/kernel/isValid');
    });

    it('should return false when digits is null',function () {
        expect(isValid(null)).toEqual(false);
    });

    it('should return false when number of digits is 0',function () {
        expect(isValid('')).toEqual(false);
    });
    it('should return false when number of digits is 2',function () {
        expect(isValid('12')).toEqual(false);
    });
    it('should return true when number of digits is 4',function () {
        expect(isValid('0123')).toEqual(true);
    });

    it('should return false when digits is repeated',function () {
        expect(isValid('1231')).toEqual(false);
    });
    it('should return true when digits is non-repetition',function () {
        expect(isValid('1234')).toEqual(true);
    });
});

// describe('test for gameController',function () {
//
// });