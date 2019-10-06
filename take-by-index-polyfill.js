if (!Array.prototype.takeByIndex) {
    Array.prototype.takeByIndex = function (index) {
        'use strict';
        var proxy = function (arr) {
            return new Proxy(arr, {
                get: function (target, propKey, receiver) {
                    return Reflect.get(
                        target,
                        (Number(propKey) < 0)
                            ? String(target.length + Number(propKey))
                            : propKey,
                        receiver
                    );
                },
            });
        }
        return proxy(this)[index];
    };
}