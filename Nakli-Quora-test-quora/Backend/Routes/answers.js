const router = require('express').Router();
var Question = require('../Models/answer_cr');
const Answer = require('../Models/answer_cr');

router.route('/').get((req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addAnswer').post((req, res) => {
    const question = req.body.question
    const answer = req.body.answer
    const newAnswer = new Answer({answer})
  

    newAnswer.save()
        .then(() => res.json('Answer added!'))
        .catch(err => res.status(400).json('Error: '+ err))
});

router.route('/:id').get((req, res) => {
    Answer.findById(req.params.id)
        .then(answer => res.json(answer))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Answer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Answer Deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Answer.findById(req.params.id)
        .then(answer =>{
            answer.answer = req.body.answer;
        
        answer.save()
            .then(() => res.json('Answer updated!'))
            .catch(err => res.status(400).json('Error: ' + err));       
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;