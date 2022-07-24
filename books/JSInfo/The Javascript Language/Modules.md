# Dynamic Imports

import(module): loads module and returns a promise that resolves into a module object containing all exports.

import(module)
    .then(obj => object)
    .catch(err => )

let {hi,bye} = await import('./say.js');
let obj = await import('./say.js')
let say = obj.default;
