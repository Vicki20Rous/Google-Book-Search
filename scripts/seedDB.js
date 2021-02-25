const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/google-book-search", {
  useNewUrlParser: true,
});

const bookSeed = [
    {
        // eslint-disable-next-line no-script-url
        title: "Javascript: The Good Parts",
        author: "Douglas Crockford",
        description: "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: Syntax Objects Functions Inheritance Arrays Regular expressions Methods Style Beautiful features The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
        publishedDate: new Date(Date.now())

    },
    {
        title: "Javascript & Jquery",
        author: "Jon Duckett",
        description: "jQuery was written to express, in short-order, the concepts essential to intermediate and advanced jQuery development. Its purpose is to instill in you, the reader, practices that jQuery developers take as common knowledge. Each chapter contains concepts essential to becoming a seasoned jQuery developer.This book is intended for two types of readers. The first is someone who has read introductory material on jQuery and is looking for the next logical step. The second type of reader is a JavaScript developer, already versed in another library, now trying to quickly learn jQuery. I crafted this book to be used as my own personal reference point for jQuery concepts. This is exactly the type of book I wish every JavaScript library had available. This updated and expanded second edition of Book provides a user-friendly introduction to the subject, Taking a clear structural framework, it guides the reader through the subject's core elements. A flowing writing style combines with the use of illustrations and diagrams throughout the text to ensure the reader understands even the most complex of concepts. This succinct and enlightening overview is a required reading for all those interested in the subject . We hope you find this book useful in shaping your future career & Business.",
        publishedDate: new Date(Date.now())

    },
    {
        title: "Javascript", 
        subtitle: "Best Practices to Programming Code with Javascript",
        author: "Jon Duckett",
        description: "Learn how to write effective and efficient JavaScript code for programming success and continue your progress towards JavaScript programming mastery! In this Definitive JavaScript Guide on Best Practices, you're about to discover how to... Code more efficiently for Better Performance and Results! Spot the Common JavaScript Mistakes - From mismatched quotes, bad line breaks, HTML conflicts and more! Apply Recommended JavaScript approaches - The DO's and DONT's of JavaScript programming that will help you code achieve its goals immensely! Use Comments and Logging – the proper way to use comments and logging approaches that readers would thank you for ... And much, much more! Added Benefits of owning this book: Gain a better grasp of efficient and effective JavaScript code to achieve programming success Speed up your programming abilities by avoiding time-wasting mistakes Gain the most important Best Practice concepts in your path towards JavaScript programming mastery! Learning JavaScript can help you in many ways both professionally and personally. By implementing the lessons in this book, not only would you learn one of today's most popular computer languages, but it will serve as your guide in accomplishing your JavaScript goals – whether as a fun hobby or as a starting point into a successful and long term Web Development career. Take action today and make your programming career goals a reality! Scroll to the top of the page and select the \"Buy now\" button.",
        publishedDate: new Date(Date.now())
    }
    {
        title: "Javascript Patterns",
        subtitle: "Build Better Applications with Coding and Design Patterns",
        author: "Stoyan Stefanov",
        description: "What's the best approach for developing an application with JavaScript? This book helps you answer that question with numerous JavaScript coding patterns and best practices. If you're an experienced developer looking to solve problems related to objects, functions, inheritance, and other language-specific categories, the abstractions and code templates in this guide are ideal—whether you're using JavaScript to write a client-side, server-side, or desktop application. Written by JavaScript expert Stoyan Stefanov—Senior Yahoo! Technical and architect of YSlow 2.0, the web page performance optimization tool—JavaScript Patterns includes practical advice for implementing each pattern discussed, along with several hands-on examples. You'll also learn about anti-patterns: common programming approaches that cause more problems than they solve. Explore useful habits for writing high-quality JavaScript code, such as avoiding globals, using single var declarations, and more Learn why literal notation patterns are simpler alternatives to constructor functions Discover different ways to define a function in JavaScript Create objects that go beyond the basic patterns of using object literals and constructor functions Learn the options available for code reuse and inheritance in JavaScript Study sample JavaScript approaches to common design patterns such as Singleton, Factory, Decorator, and more Examine patterns that apply specifically to the client-side browser environment",
        publishedDate: new Date(Date.now())
    }
]



db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
