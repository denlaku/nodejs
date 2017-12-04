//断言
const assert = require('assert');

assert(true, '输入错误');

assert.ok(true, '错误信息：assert.ok');

// assert.equal(false, true, '错误信息：assert.equal');

// assert.notEqual(false, false, '错误信息：assert.notEqual');

// assert.deepEqual({}, {a: 100}, '错误信息：assert.deepEqual');

// assert.notDeepEqual({a: 100}, {a: 100}, '错误信息：assert.notDeepEqual');

// assert.strictEqual(1, '1', '错误信息：assert.strictEqual');

// assert.notStrictEqual(1, 12, '错误信息：assert.notStrictEqual');

assert.throws(function() {
  throw Error();
}, Error, '错误信息：assert.notStrictEqual');

console.log('===end===');
