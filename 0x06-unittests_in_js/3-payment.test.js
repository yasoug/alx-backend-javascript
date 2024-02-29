const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment')
const sinon = require('sinon');

describe('sendPaymentRequestToApi suite', function() {
    it('should test if using Utils.calculateNumber', function(){
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20)
        sinon.assert.calledOnce(calculateNumberSpy);
        sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);
        calculateNumberSpy.restore();
    })

})
