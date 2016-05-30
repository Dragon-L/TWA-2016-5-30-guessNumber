describe('test for compareNumber',function () {
    var compareNumber = null;
    beforeEach(function () {
        compareNumber = require('../src/kernel/compareNumber');
    });
    
    it('should return 0A0B when digits are 1234 and 5678',function () {
        var result = compareNumber('1234','5678');
        expect(result).toEqual('0A0B');
    });
    it('should return 0A4B when digits are 1234 and 4321',function () {
        var result = compareNumber('1234','4321');
        expect(result).toEqual('0A4B');
    });
    it('should return 2A2B when digits are 1234 and 1243',function () {
        var result = compareNumber('1234','1243');
        expect(result).toEqual('2A2B');
    });
    it('should return 4A0B when digits are 1234 and 1234',function () {
        var result = compareNumber('1234','1234');
        expect(result).toEqual('4A0B');
    });
});
