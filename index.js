/**
 * Created by ichetandhembre on 19/4/14.
 */

var lrequire =  require('local-require');
lrequire.register('demo', {
    '1.js' : './test/1.js',
    'test1' : './test1'
}, function(err) {
    console.log(err);
    require('demo/1.js');
    console.log(require('demo/test1').test1());
});

