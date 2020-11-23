const QUIZETYPES = ['Result after first wrong answer', 'Result at the end'];
const QUESTIONTYPES = ['Multiple Choice', 'Single Choice',];


class Quiz {
  constructor(type, quetions, result) {
    this.type=type;
    // А НАДО ЛИ ТУТ ГУБОКОЕ КОПИРОВАНИЕ?
    this.quetions=JSON.parse(JSON.stringify(quetions)); //т.к. массив ответов состоит из объектов класса Question, то надо примениять глубокое копирование
    this.result=result;
  }
}

class Question {
  constructor(question, answers, type) {
    this.question = question;
    this.answers = JSON.parse(JSON.stringify(answers)); //т.к. массив ответов состоит из объектов класса Answer, то надо примениять глубокое копирование
  }
}

class Answer {
  constructor(isCorrect, text, picURL, videoURL) {
    this.isCorrect=isCorrect;
    this.text=text;
    this.picURL=picURL;
    this.videoURL=videoURL;
    if(!(this.text&&this.picURL&&this.videoURL)){
      throw
    }
  }
}

// class StandardMembership {
//   constructor(name) {
//     this.name = name;
//     this.cost = 150;
//   }
// }

// class PremiumMembership {
//   constructor(name) {
//     this.name = name;
//     this.cost = 500;
//   }
// }

// class MemberFactory {
//   static list = {
//     simple: SimpleMembership,
//     standard: StandardMembership,
//     premium: PremiumMembership,
//   };

//   create(name, type = "simple") {
//     const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
//     const member = new Membership(name);
//     member.type = type;
//     member.define = function () {
//       console.log(`${this.name} (${this.type}): ${this.cost}`);
//     };
//     return member;
//   }
// }

// const factory = new MemberFactory();

// const members = [
//   factory.create("Vladilen", "simple"),
//   factory.create("Elena", "premium"),
//   factory.create("Vasilisa", "standard"),
//   factory.create("Ivan", "premium"),
//   factory.create("Petr"),
// ];

// members.forEach((m) => {
//   m.define();
// });
