import seeder from 'mongoose-seed';
import questions from './questions';
// import dataclaasses from './dataclasses.js'


seeder.connect('', () => {
    seeder.loadModels([
        '../models/Question.js',
        '../models/Dataclass.js'
    ])

    seeder.clearModels(['dataclasses', 'questions'], () => {
        seeder.populateModels(data, () => {
            seeder.disconnect();
        });
    })
})

const data = [questions, dataclasses];