const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');

describe('sendPaymentRequestToApi suite', function() {
    let  calculateNumberSpy;
    beforeEach(function(){
        calculateNumberSpy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        calculateNumberSpy.restore();
    });
    it('sendPaymentRequestToAPI: should test if using Utils.calculateNumber', function() {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(calculateNumberSpy);
        sinon.assert.calledWithExactly(calculateNumberSpy, 'The total is: 120');
    });
    it('sendPaymentRequestToAPI: should test if using Utils.calculateNumber', function() {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledOnce(calculateNumberSpy);
        sinon.assert.calledWithExactly(calculateNumberSpy, 'The total is: 20');
    });
});
