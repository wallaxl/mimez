"use strict"

/*
 * mimez
 *
 * a mimetype parser
 * version: 1.0.0
 * author: wallax
 * email: wallax@126.com
 *
 * http://wallax.wang
 *
 * 2015-12-25
 */

var path = require("path")
var url = require("url")
var fs = require("fs")

// default mimetypes
var default_mime = {
    "text/plain": ["txt"],
    "text/html": ["htm", "html", "shtml"],
    "text/css": ["css"],
    "image/jpeg": ["jpg", "jpeg"],
    "application/javascript": ["js"],
    "image/png": ["png"],
    "image/gif": ["gif"]
}

// 缺省默认mimetype
var def_mime = "application/octec-stream"

// 加载外部类型
var mime_file = __dirname + "/mimetype.json"
fs.readFile(mime_file, function(err, data){
	if(err){
		console.log("read ext mimetype file error")
	}
	
	try{
		var mimes = JSON.parse(data.toString())
	}catch(e){
		console.log("parse mimetype file error")
		return
	}
	
	for(var i in mimes){
		if(default_mime[i]){
			default_mime[i] = default_mime[i].concat(mimes[i])
		}else{
			default_mime[i] = mimes[i]
		}
	}
})

module.exports = {
    // get mimetype by file ext name
    ext: function(str){
        for(var key in default_mime){
            if(default_mime[key].indexOf(str) != -1){
                return key
            }
        }
        
        return def_mimes
    },
    
    // get mimetype by file path
    path: function(str){
        var fext = path.extname(str)
        return this.ext(fext.slice(1))
    },
    
    // get mimetype by url
    url: function(str){
        var pname = url.parse(str).pathname
        var fext = path.extname(str)
        return this.ext(fext)
    }
}