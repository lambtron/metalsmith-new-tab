
/**
 * Module dependencies.
 */

var cheerio = require('cheerio');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Plugin to add `target = '_blank'` to all anchor elements.
 *
 * @return {Function}
 */

function plugin() {
  return function(files, metalsmith, done) {
    Object.keys(files).forEach(function(file) {
    if (!~file.indexOf('.html')) return;
    var $ = cheerio.load(files[file].contents);
    var links = $('a');
    for (var i = 0; i < links.length; i++) {
      links[i].attribs.target = '_blank';
    }
    files[file].contents = new Buffer($.html());
  });
    done();
  };
}
