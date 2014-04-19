/**
 * Created by ichetandhembre on 19/4/14.
 */

var lrequire =  require('local-require');
lrequire.registerSync('demo', {
    '1.js' : './test/1.js',
    'test1' : './test1'
});


exports.test = function() {
    require('demo/1.js');
};

exports.test1 = function() {
    require('demo/test1').test1();
};
