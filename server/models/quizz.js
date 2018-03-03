const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const quizzSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  treshold: {
    type: Number,
    min: 0,
    max: 100,
  },
  usersAnswered: {
    type: Array,
  },
  music: {
    answer: {
      type: String,
    },
    hint: {
      type: String,
    },
    badResponses: {
      type: Array
    }
  },
  // venue: {
  //   answer: {
  //     type: String,
  //   },
  //   hint: {
  //     type: String,
  //   },
  //   badResponses: {
  //     type: Array
  //   }
  // },
  movie: {
    answer: {
      type: String,
    },
    hint: {
      type: String,
    },
    badResponses: {
      type: Array
    }
  },
  // book: {
  //   answer: {
  //     type: String,
  //   },
  //   hint: {
  //     type: String,
  //   },
  //   badResponses: {
  //     type: Array
  //   }
  // },
  traits: {
    quality: {
      answer: {
        type: String,
      },
      hint: {
        type: String,
      },
      badResponses: {
        type: Array
      }
    },
    defect: {
      answer: {
        type: String,
      },
      hint: {
        type: String,
      },
      badResponses: {
        type: Array
        }
      },
    },
});

const Quizz = mongoose.model('Quizz', quizzSchema);
module.exports = Quizz;