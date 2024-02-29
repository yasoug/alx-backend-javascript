const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi suite', function() {
    it('should test if using Utils.calculateNumber', function() {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const calculateNumberSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 100, 20);
        sinon.assert.calledWithExactly(calculateNumberSpy, 'The total is: 10');
        calculateNumberStub.restore();
        calculateNumberSpy.restore();
    });
});
