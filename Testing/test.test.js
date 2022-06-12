it('should calculate the high tax bracket', function () {
    expect(calculateTaxes(10000)).toEqual(2);
})