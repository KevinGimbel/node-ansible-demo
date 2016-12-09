var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'ansible-node demo website',
    content: `This website serves as an example for deploying a Node Application
    using ansible and DigitalOcean Droplets. The Node Application was generated with express-generator.`,
    references: [
      {
        url: 'https://ansible.com',
        name: 'Ansible'
      },
      {
        url: 'https://digitalocean.com',
        name: 'Digital Ocean'
      }
    ]
  });
});

module.exports = router;
