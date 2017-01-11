exports.checkNotEmpty = function(obj) {
    if (typeof obj == 'number') {
        return true;
    }
    if (!obj) {
        return false;
    }
    if (typeof obj == 'string') {
        return obj.length != 0;
    }
    return true;
}