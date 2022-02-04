exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
}


exports.contactme = function(req, res, next) {
    res.render('contactme', { title: 'Contact me' });
}

exports.projects = function(req, res, next) {
    res.render('projects', { title: 'Projects' });
}

exports.services = function(req, res, next) {
    res.render('services', { title: 'Services' });
}

exports.aboutme = function(req, res, next) {
    res.render('aboutme', { title: 'About' });
}