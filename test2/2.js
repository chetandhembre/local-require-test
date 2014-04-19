/**
 * Created by ichetandhembre on 20/4/14.
 */
var lrequire =  require('local-require');

lrequire.registerSync({
    namespace : 'demo1',
    basedir : __dirname,
    config : {
        '1.js': '../test/1.js',
        'test1': '../test1'
    }
});

exports.test = function() {
    require('demo1/1.js');
};

exports.test1 = function() {
    require('demo1/test1').test1();
};
