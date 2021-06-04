const {
    extend, origin,
    big, price, priceUppercase, prefixZero, uuid,
    time, timestamp
} = require('@dgteam/helper')
const {md5, base64, base64Decode, base64Encode, base64EncodeURI} = require('@dgteam/helper/dist/hash.js')

module.exports = {

    // 常用方法
    extend, // origin, // origin 和 request 中属性字段冲突

    // 数学方法
    big, price, priceUppercase, prefixZero, uuid,

    // 时间方法
    time, timestamp,

    // 哈希算法
    md5, base64, base64Decode, base64Encode, base64EncodeURI,

    log(...msg) {
        // eslint-disable-next-line no-console
        console.log('\n', ...msg, '\n')
    }
}