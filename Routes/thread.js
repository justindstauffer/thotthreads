const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const db = require('../Config/db');

const Thread = require('../Models/Thread');

router.get("/", (req,res) => {
    Thread.find(function (err, threads) {
        if (err) return console.log(err);
        res.send(threads);
    })
});

router.post("/", async (req,res) => {
    const newThread = new Thread({ parentThread: req.body.parentThread, title: req.body.title, content: req.body.content });
    try {
        const thread = await newThread.save();
        if (!thread) throw Error('Something went wrong saving the item');
    
        res.status(200).json(thread);
      } catch (e) {
        res.status(400).json({ msg: e.message });
      }
});

router.delete("/:id", async (req, res) =>{
    try {
        const thread = await Thread.findById(req.params.id);
        if (!thread) throw Error('No item found');

        const removed = await thread.remove();
        if(!removed)
            throw Error('Something went wrong while trying to delete the thread');

        res.status(200).json({ success: true});
    } catch (e) {
        res.status(400).json({ msg: e.message, success: false});
    }
})

module.exports = router;