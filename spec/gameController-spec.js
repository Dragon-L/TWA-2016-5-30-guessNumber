describe('test for gameController',function () {
    var gameController = null;
    var pretendInput = null;
    var generateNumber = null;
    
    beforeEach(function () {
        gameController = require('../src/shell/gameController');
        pretendInput = require('../src/model/pretendInput');
        generateNumber = require('../src/kernel/generateNumber');

        spyOn(generateNumber,'method').and.returnValue('1234');
        });

    it('should return false when guess wrong 6 times',function () {
        spyOn(pretendInput,'method').and.returnValues('1634','2345','3456','4567','5678','6789');
        expect(gameController()).toEqual(false);
    });
    it('should return true when guess right at first time',function () {
        spyOn(pretendInput,'method').and.returnValue('1234');
        expect(gameController()).toEqual(true);
    });
    it('should return true when guess right at last times',function () {
        spyOn(pretendInput,'method').and.returnValues('1634','2345','3456','4567','5678','1234');
        expect(gameController()).toEqual(true);
    });
});