const express = require('express');
// eslint-disable-next-line new-cap
const reviewRouter = express.Router();

const axios = require('axios');
// const baseUrl = 'http://ec2-3-138-125-176.us-east-2.compute.amazonaws.com';
const baseUrl = 'http://ReviewServiceLoadBalancer-336710267.us-east-2.elb.amazonaws.com';

// Connect controller methods to their corresponding routes
reviewRouter.get('/:product_id', (req, res) => {
  axios.get(`${baseUrl}/reviews`, {
    params: {
      product_id: req.params.product_id,
      count: req.query.count,
    },
  })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
});

reviewRouter.get('/meta/:product_id', (req, res) => {
  axios.get(`${baseUrl}/reviews/meta`, {
    params: {
      product_id: req.params.product_id,
    },
  })
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
});

reviewRouter.post('/', (req, res) => {
  const {body} = req;
  axios.post(`${baseUrl}/reviews`, body)
      .then((response) => {
        res.status(201).send(response.data);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
});

module.exports = reviewRouter;
