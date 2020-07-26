const router = require('express').Router();
var Question = require('../Models/question_cr');

router.route('/').get((req, res) => {
    Question.find()
        .then(questions => res.json(questions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addQuestion').post((req, res) => {
    const question = req.body.question
    const about = req.body.about
    const newQuestion = new Question({question,about})

    newQuestion.save()
        .then(() => res.json('Question added!'))
        .catch(err => res.status(400).json('Error: '+ err))
});

router.route('/:id').get((req, res) => {
    Question.findById(req.params.id)
        .then(question => res.json(question))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Question.findByIdAndDelete(req.params.id)
        .then(() => res.json('Question Deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Question.findById(req.params.id)
        .then(question =>{
            question.question = req.body.question;
        
        question.save()
            .then(() => res.json('Question updated!'))
            .catch(err => res.status(400).json('Error: ' + err));       
        })
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;