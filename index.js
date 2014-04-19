/**
 * Created by ichetandhembre on 19/4/14.
 */

var lrequire =  require('local-require');
lrequire.registerSync({
    namespace : 'demo',
    basedir : __dirname,
    config : {
        '2.js': './test2/2.js'
    }
});

var test = function() {
    require('demo/2.js').test();
    require('demo/2.js').test1();
};

exports.test = test;
