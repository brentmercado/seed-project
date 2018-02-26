const express = require('express');
const router = express.Router();

const Messagae = require('../models/message');

router.post('/', (req, res, next)=> {     // post is to store information on server
   var message = new Message({
      content: req.body.content
   });
   message.save(function(err, result) {
      if (err) {
         return res.status(500).json({
            title: 'An error occured',
            error: err
         });
      }
      res.status(201).json({
         message: 'Saved message',
         obj: result
      });
   });
});

module.exports = router;
