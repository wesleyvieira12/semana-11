const generateUniqueId = require("../../src/util/generateUniqueId");
describe('Generate Unique ID', () => {
  it('should gererate an unique ID', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  })
});