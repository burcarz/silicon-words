const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    post_text: "You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Yes, Yes, without the oops! God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.",
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'https://nasa.gov/donec.json',
    post_text: "Did he just throw my cat out of the window? Jaguar shark! So tell me - does it really exist? Checkmate... Hey, take a look at the earthlings. Goodbye! Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? You really think you can fly that thing?",
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    post_text: "Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Checkmate... Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Yes, Yes, without the oops! Yes, Yes, without the oops!",
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    post_text: "Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Must go faster. Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Must go faster. What do they got in there? King Kong?",
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    post_text: "What do they got in there? King Kong? Must go faster... go, go, go, go, go! God help us, we're in the hands of engineers. Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! You know what? It is beets. I've crashed into a beet truck.",
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_url: 'https://stanford.edu/consequat.png',
    post_text: "God help us, we're in the hands of engineers. So you two dig up, dig up dinosaurs? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Checkmate... Do you have any idea how long it takes those cups to decompose. Must go faster.",
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
    post_text: "What do they got in there? King Kong? You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager? God help us, we're in the hands of engineers. You know what? It is beets. I've crashed into a beet truck. Jaguar shark! So tell me - does it really exist?",
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'http://ucla.edu/consequat/nulla.html',
    post_text: "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.",
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    post_text: "Hey, take a look at the earthlings. Goodbye! This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Hey, take a look at the earthlings. Goodbye! Life finds a way. This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows.",
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
    post_text: "God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. You know what? It is beets. I've crashed into a beet truck. Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.",
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    post_text: "Yes, Yes, without the oops! Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. I was part of something special. What do they got in there? King Kong? Must go faster... go, go, go, go, go! Hey, take a look at the earthlings. Goodbye!",
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_url: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    post_text: "Yes, Yes, without the oops! Hey, take a look at the earthlings. Goodbye! Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!",
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_url: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    post_text: "Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. So you two dig up, dig up dinosaurs? I was part of something special. You really think you can fly that thing? God creates dinosaurs. God destroys dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.",
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_url: 'https://lycos.com/natoque/penatibus/et.html',
    post_text: "Yes, Yes, without the oops! Did he just throw my cat out of the window? Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Must go faster... go, go, go, go, go! You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?",
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_url: 'https://gmpg.org/lorem.jpg',
    post_text: "Must go faster... go, go, go, go, go! Yes, Yes, without the oops! I gave it a cold? I gave it a virus. A computer virus. You really think you can fly that thing? Remind me to thank John for a lovely weekend. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?",
    user_id: 3
  },
  {
    title: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_url: 'https://paginegialle.it/mattis/egestas.jsp',
    post_text: "Yes, Yes, without the oops! They're using our own satellites against us. And the clock is ticking. This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Hey, take a look at the earthlings. Goodbye! I was part of something special.",
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://wikia.com/turpis/eget.jpg',
    post_text: "Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Did he just throw my cat out of the window? Hey, you know how I'm, like, always trying to save the planet? Here's my chance. I gave it a cold? I gave it a virus. A computer virus.",
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_url: 'https://shareasale.com/quis.json',
    post_text: "We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! They're using our own satellites against us. And the clock is ticking. We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!",
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    post_text: "Must go faster... go, go, go, go, go! Yes, Yes, without the oops! I gave it a cold? I gave it a virus. A computer virus. You really think you can fly that thing? Remind me to thank John for a lovely weekend. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?",
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_url: 'https://java.com/at/nibh/in.png',
    post_text: "I gave it a cold? I gave it a virus. A computer virus. I was part of something special. Checkmate... This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. So you two dig up, dig up dinosaurs? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should.",
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
