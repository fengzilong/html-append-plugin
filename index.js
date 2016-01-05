var path = require('path');
var _    = require('lodash');

function HtmlAppendPlugin( options ){
	this.options = options || {};
}

HtmlAppendPlugin.prototype.apply = function( compiler ){
	var append = this.options.append;
	
	compiler.plugin('emit', function( compilation, callback ){
		var filenames = Object.keys( compilation.assets );

		_.each(filenames, function( filename ){
			var ext = path.extname( filename );
			if( ext === '.html' ){
				var source = compilation.assets[ filename ].source();
				var appendContent;

				if( typeof append === 'function' ){
					appendContent = append();
				} else if( typeof append === 'string' ) {
					appendContent = append;
				}

				if( typeof appendContent !== 'undefined' ){
					source = source.replace(/([\s\S]+?)(<\/body>)/, '$1\n' + appendContent + '\n$2');
					compilation.assets[ filename ] = {
						source: function(){
							return source;
						},
						size: function(){
							return source.length;
						}
					};
				}
			}
		});
		
		callback();
	});
};

module.exports = HtmlAppendPlugin;