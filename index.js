var some = require("iterators").someSync

module.exports = contentTypes

function contentTypes(req, object) {
    var contentType = req.headers["content-type"] || ""

    return some(object, findFirstMatch, contentType) || object.default
}

function findFirstMatch(value, key) {
    if (this.indexOf(key) !== -1) {
        return value
    }
}