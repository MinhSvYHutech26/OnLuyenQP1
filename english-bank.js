/*
 * English 1 practice bank, Units 1–6.
 * Self-authored questions based on the supplied vocabulary list, mid-term sample,
 * and final-exam structure. Each exam draws 15 vocabulary, 10 grammar,
 * 10 listening, and 15 reading questions from these larger pools.
 */
(function () {
  const letters = ['A', 'B', 'C', 'D'];
  const make = (prefix, rows) => rows.map(([id, text, choices, answerIndex, extra = {}]) => ({
    id: `en-${prefix}-${String(id).padStart(3, '0')}`,
    text,
    options: choices.map((choice, index) => ({ label: letters[index], text: choice })),
    answerIndex,
    ...extra
  }));

  const vocabulary = make('v', [
    [1, 'Please choose an ____ seat if you want to stand up and walk around easily during the flight.', ['aisle', 'window', 'middle', 'empty'], 0],
    [2, 'Linh is an ____. She enjoys meeting people and talking at parties.', ['introvert', 'only child', 'extrovert', 'psychologist'], 2],
    [3, 'After four years of study, Minh hopes to ____ from university next June.', ['judge', 'graduate', 'memorize', 'influence'], 1],
    [4, 'Our new team leader is ____; she always finishes the work she promises to do.', ['reliable', 'worried', 'formal', 'tiny'], 0],
    [5, 'A good teacher should be ____ with students who need more time to understand.', ['serious', 'patient', 'successful', 'raw'], 1],
    [6, 'She feels ____ about speaking in front of the class because she has practised a lot.', ['confident', 'filthy', 'vegan', 'freezing'], 0],
    [7, 'Regular exercise can ____ stress and help you sleep better.', ['reduce', 'affect', 'serve', 'judge'], 0],
    [8, 'Lack of sleep may ____ your memory and your mood.', ['effect', 'affect', 'research', 'relaxation'], 1],
    [9, 'The noun meaning “a change or result caused by something” is ____.', ['affect', 'influence', 'effect', 'study'], 2],
    [10, 'Students used interviews and surveys to do ____ on study habits.', ['research', 'relaxation', 'chemistry', 'feedback'], 0],
    [11, 'Flashcards can help you ____ new words more effectively.', ['reduce', 'memorize', 'serve', 'celebrate'], 1],
    [12, 'Friends can ____ the way a person thinks and behaves.', ['influence', 'prepare', 'graduate', 'recommend'], 0],
    [13, 'A person who eats no meat, fish, eggs, or dairy follows a ____ diet.', ['vegetarian', 'vegan', 'raw', 'tinned'], 1],
    [14, 'The carrots are ____. They have not been cooked.', ['raw', 'tinned', 'delicious', 'spectacular'], 0],
    [15, 'A ____ gives you instructions for preparing and cooking a dish.', ['recipe', 'ingredient', 'teaspoon', 'pastry'], 0],
    [16, 'Flour is an important ____ in this bread.', ['dish', 'ingredient', 'spice', 'comfort'], 1],
    [17, 'The restaurant will ____ dinner at seven o’clock.', ['serve', 'prepare', 'reduce', 'fold'], 0],
    [18, 'The soup tastes ____. Could I have another bowl?', ['awful', 'raw', 'delicious', 'filthy'], 2],
    [19, 'Learning to speak in public was a ____ for Nam, but he kept practising.', ['challenge', 'prize', 'purpose', 'reward'], 0],
    [20, 'My classmates ____ me to apply for the speaking competition.', ['punished', 'encouraged', 'judged', 'served'], 1],
    [21, 'The teacher gave us useful ____ on our first drafts.', ['ambition', 'feedback', 'prize', 'race'], 1],
    [22, 'The winner of the art competition received a ____.', ['goal', 'prize', 'purpose', 'motivation'], 1],
    [23, 'Mai received a small ____ for helping the new students.', ['reward', 'challenge', 'feedback', 'race'], 0],
    [24, 'His ____ is to become an aerospace engineer.', ['ambition', 'ingredient', 'aisle', 'schedule'], 0],
    [25, 'The kitchen floor was ____, so we cleaned it before cooking.', ['tidy', 'filthy', 'tiny', 'brilliant'], 1],
    [26, 'It is ____ outside; the lake has frozen.', ['freezing', 'enormous', 'empty', 'delicious'], 0],
    [27, 'We stopped at the mountain viewpoint to admire the ____ scenery.', ['spectacular', 'filthy', 'formal', 'raw'], 0],
    [28, 'The room is very ____, but it has enough space for a bed and a desk.', ['enormous', 'tiny', 'freezing', 'awful'], 1],
    [29, 'Please keep your desk ____ and put the books back on the shelf.', ['tidy', 'disgusting', 'unusual', 'freezing'], 0],
    [30, 'Can you ____ a good book for practising English?', ['recommend', 'empty', 'fold', 'punish'], 0],
    [31, 'They are going ____: travelling cheaply and staying in hostels.', ['roller skating', 'backpacking', 'snowboarding', 'sightseeing'], 1],
    [32, 'The place you are travelling to is your ____.', ['community', 'destination', 'border', 'schedule'], 1],
    [33, 'The main road was closed, so we took an ____ route.', ['average', 'alternative', 'appropriate', 'complicated'], 1],
    [34, 'The hikers followed a narrow ____ through the forest.', ['trail', 'queue', 'nest', 'bunk'], 0],
    [35, 'Everyone on the boat wore a ____ in case they fell into the water.', ['helmet', 'lifejacket', 'goggles', 'wetsuit'], 1],
    [36, 'This jacket is ____, so rain cannot pass through it.', ['waterproof', 'rural', 'rough', 'nervous'], 0],
    [37, 'A person who has no brothers or sisters is an ____.', ['extrovert', 'only child', 'psychologist', 'graduate'], 1],
    [38, 'Our new neighbour is kind and pleasant to everyone. She is very ____.', ['friendly', 'formal', 'serious', 'worried'], 0],
    [39, 'Reading every day can ____ your vocabulary.', ['reduce', 'improve', 'affect', 'serve'], 1],
    [40, 'In ____, students learn about living things such as plants and animals.', ['history', 'biology', 'drama', 'geography'], 1],
    [41, 'This ____ meal contains no meat or fish, but it has cheese.', ['vegan', 'vegetarian', 'raw', 'tinned'], 1],
    [42, 'The recipe asks for ____ tomatoes that have been preserved in a metal can.', ['raw', 'tinned', 'vegan', 'fresh'], 1],
    [43, 'The coach asked the team to ____ every day for the race.', ['train', 'judge', 'fold', 'recommend'], 0],
    [44, 'The desire that makes you want to work towards a goal is ____.', ['motivation', 'purpose', 'recipe', 'feedback'], 0],
    [45, 'The rubbish had a ____ smell, so we closed the kitchen door.', ['disgusting', 'brilliant', 'tidy', 'tiny'], 0],
    [46, 'We ____ paper and plastic bottles so they can be used again.', ['empty', 'recycle', 'fold', 'celebrate'], 1],
    [47, 'I can’t ____ a new laptop this month because I do not have enough money.', ['intend', 'afford', 'board', 'land'], 1],
    [48, 'We plan to ____ a car for two days while we are on holiday.', ['hire', 'queue', 'land', 'summarize'], 0],
  ]);

  const grammar = make('g', [
    [1, 'My brother ____ his grandparents every Sunday.', ['visit', 'visits', 'is visiting', 'visited'], 1],
    [2, 'I ____ coffee in the evening because it keeps me awake.', ['never drink', 'am never drinking', 'never drank', 'will never drinking'], 0],
    [3, 'Be quiet. The baby ____.', ['sleeps', 'is sleeping', 'slept', 'will sleep'], 1],
    [4, 'How often ____ your classmates ____ English outside class?', ['are / practising', 'do / practise', 'does / practise', 'did / practised'], 1],
    [5, 'We usually ____ dinner at home, but tonight we ____ at a restaurant.', ['have / are eating', 'are having / eat', 'had / eat', 'have / ate'], 0],
    [6, 'There ____ in the classroom when I arrived; everyone was outside.', ['was nobody', 'was anybody', 'were somebody', 'was everybody'], 0],
    [7, 'I looked ____ for my bus card, but I could not find it.', ['somewhere', 'anywhere', 'nowhere', 'everywhere'], 3],
    [8, 'We have ____ to eat at home, so let’s buy some food.', ['anything', 'nothing', 'somewhere', 'anybody'], 1],
    [9, 'They ____ to Da Lat last weekend and ____ a small museum.', ['go / visit', 'went / visited', 'were going / visit', 'have gone / visited'], 1],
    [10, 'When I ____ the email, I ____ on the bus.', ['read / was sitting', 'was reading / sat', 'read / sat', 'am reading / was sitting'], 0],
    [11, 'While the students ____ the project, the teacher ____ them some advice.', ['discussed / was giving', 'were discussing / gave', 'discuss / gave', 'are discussing / gives'], 1],
    [12, 'She ____ her keys on the desk and then ____ the room.', ['leaves / was leaving', 'left / left', 'was leaving / leaves', 'leave / left'], 1],
    [13, '“I can’t carry these books.” “I ____ you.”', ['help', 'am helping yesterday', 'will help', 'helped tomorrow'], 2],
    [14, 'Look at those dark clouds! It ____.', ['rains', 'is going to rain', 'will raining', 'rained'], 1],
    [15, 'We ____ our English tutor at 3 p.m. tomorrow; the appointment is fixed.', ['meet', 'are meeting', 'will met', 'met'], 1],
    [16, 'I think more students ____ online courses in the future.', ['take', 'are taking yesterday', 'will take', 'took'], 2],
    [17, 'If you heat ice, it ____.', ['melted', 'melts', 'will melt', 'is melting'], 1],
    [18, 'If the bus ____ late tomorrow, we ____ a taxi.', ['is / will take', 'will be / take', 'was / took', 'is / take yesterday'], 0],
    [19, 'You ____ feel tired if you ____ enough sleep.', ['will / do not get', 'are / will not get', 'will / did not get', 'do / will not got'], 0],
    [20, 'Choose the correctly ordered question.', ['Where you did buy that jacket?', 'Where did you buy that jacket?', 'Where bought you that jacket?', 'Where did buy you that jacket?'], 1],
    [21, 'Choose the correctly ordered question.', ['How often does she go swimming?', 'How often she goes swimming?', 'How often does she goes swimming?', 'How often is she go swimming?'], 0],
    [22, 'Choose the correctly ordered question.', ['What you are doing now?', 'What are you doing now?', 'What do you doing now?', 'What are doing you now?'], 1],
    [23, 'Choose the correctly ordered question.', ['Did they enjoy the trip?', 'Did they enjoyed the trip?', 'Enjoyed they the trip?', 'Were they enjoy the trip?'], 0],
    [24, 'We ____ for the bus when it suddenly ____.', ['waited / was starting to rain', 'were waiting / started to rain', 'wait / starts to rain', 'are waiting / started to rain'], 1],
    [25, 'We ____ dinner in the dining room at the moment.', ['have', 'are having', 'had', 'will have'], 1],
    [26, 'Did you ____ the new student at the library yesterday?', ['meet', 'met', 'meeting', 'meets'], 0],
    [27, 'There is ____ in my bag. It is completely empty.', ['something', 'anything', 'nothing', 'somewhere'], 2],
    [28, '“The phone is ringing.” “I ____ it.”', ['answer', 'am going to answer yesterday', 'will answer', 'answered tomorrow'], 2],
    [29, 'If water reaches 100°C at sea level, it ____.', ['boils', 'will boil tomorrow', 'boiled', 'is boiling yesterday'], 0],
    [30, 'Our flight ____ at 8:30 tomorrow morning, according to the timetable.', ['leaves', 'is leave', 'left', 'will leaving'], 0],
  ]);

  const audioScripts = {
    airport: 'Passenger: Excuse me, what time does the flight to Da Nang leave? Agent: It departs at ten fifteen from Gate Twelve. Passenger: When should I be at the airport? Agent: Please arrive by eight fifteen so you have time to check your bag and pass security. Passenger: Can I take this small backpack on board? Agent: Yes, but the larger suitcase must be checked in. Boarding begins at nine thirty-five. Passenger: Thank you. Is there a bus from the city centre? Agent: Yes, the airport bus leaves every thirty minutes.',
    studyGroup: 'An: Are we meeting for the biology project today? Bao: Yes, at the library at half past four. An: I thought we were meeting in the science building. Bao: The room is being used for an experiment, so I booked a table on the second floor. An: What should I bring? Bao: Please bring your research notes and the pictures of the plants. I will bring my laptop. An: How long will we work? Bao: About an hour. Then we can get dinner nearby.',
    hiking: 'Guide: The weather forecast says it may rain after lunch, so we should start early. Mai: Is the trail difficult? Guide: The first part is narrow and a little rough, but it is safe if we walk slowly. Mai: Should I wear my helmet? Guide: Yes, and keep your lifejacket on until we finish crossing the stream. Mai: What if the water gets too high? Guide: We will use the alternative path through the village. The scenery is beautiful there, too. Mai: Great. I packed a waterproof jacket and some food.',
    work: 'Manager: Can you work at the café this Saturday, Linh? Linh: I can work in the morning, but I have a class at two. Manager: That is fine. Your shift will be from eight until one. Linh: Will I serve customers or prepare food? Manager: You will take orders and serve drinks. Hoa will prepare the sandwiches. Linh: Do I need to wear a uniform? Manager: Please wear the green shirt we gave you. Linh: No problem. I will check the timetable again tonight.',
    cooking: 'Teacher: Today we are making a vegan vegetable dish. First, wash the carrots and cut them into small pieces. Student: Should we cook the vegetables now? Teacher: Not yet. We will add the raw carrots to the salad at the end. Student: What is in the dressing? Teacher: Lemon juice, olive oil, and half a teaspoon of salt. Student: Can I add more spices? Teacher: A little, but taste it first. We will serve the dish with bread. Student: It smells delicious already.',
    bus: 'Nam: Is this the queue for the bus to the beach? Clerk: Yes. The next bus boards at platform four at eleven ten. Nam: I thought the timetable said eleven o’clock. Clerk: The schedule changed this week. The bus is ten minutes late today. Nam: Can I buy a ticket here? Clerk: Yes, one ticket costs forty thousand dong. Nam: I will take one, please. Clerk: Here you are. Keep it with you until you get off. Nam: Thanks. How long is the journey? Clerk: About fifty minutes, depending on traffic.'
  };
  const listen = (rows, script) => make('l', rows.map(row => [...row, { audioText: script }]));
  const listening = [
    ...listen([
      [1, 'Where is the passenger flying?', ['Da Nang', 'Bangkok', 'Singapore', 'Ha Noi'], 0],
      [2, 'What time does the flight depart?', ['8:15', '9:35', '10:15', '10:50'], 2],
      [3, 'When should the passenger arrive at the airport?', ['7:15', '8:15', '9:30', '9:35'], 1],
      [4, 'Which item must be checked in?', ['The small backpack', 'The passenger’s phone', 'The larger suitcase', 'The boarding pass'], 2],
      [5, 'How often does the airport bus leave?', ['Every 15 minutes', 'Every 30 minutes', 'Every 45 minutes', 'Every hour'], 1],
    ], audioScripts.airport),
    ...listen([
      [6, 'Where will An and Bao meet?', ['In the science building', 'At a café', 'On the second floor of the library', 'At the bus station'], 2],
      [7, 'Why can they not meet in the science building?', ['The room is being used for an experiment.', 'The building closes at four.', 'Bao forgot to book a room.', 'There is no electricity.'], 0],
      [8, 'What will An bring?', ['A laptop', 'Research notes and plant pictures', 'Dinner', 'An experiment kit'], 1],
      [9, 'How long do they plan to work?', ['About thirty minutes', 'About an hour', 'Two hours', 'Until the library closes'], 1],
      [10, 'What will they probably do after the meeting?', ['Go to dinner', 'Take a bus home together', 'Visit the science building', 'Start another experiment'], 0],
    ], audioScripts.studyGroup),
    ...listen([
      [11, 'When does the guide want the group to start?', ['Early in the morning', 'After lunch', 'At sunset', 'The next day'], 0],
      [12, 'How is the first part of the trail described?', ['Wide and smooth', 'Narrow and a little rough', 'Flat and very short', 'Closed to visitors'], 1],
      [13, 'What should Mai keep on while crossing the stream?', ['Her goggles', 'Her helmet', 'Her lifejacket', 'Her backpack'], 2],
      [14, 'What will the group do if the water gets too high?', ['Cancel the trip', 'Wait until the next day', 'Use a path through the village', 'Hire a boat'], 2],
      [15, 'What has Mai packed?', ['A waterproof jacket and some food', 'A tent and a cooking pot', 'A new timetable', 'A pair of roller skates'], 0],
    ], audioScripts.hiking),
    ...listen([
      [16, 'When can Linh work?', ['Saturday morning', 'Saturday afternoon', 'Sunday morning', 'All day Saturday'], 0],
      [17, 'What time does Linh’s shift finish?', ['12:00', '1:00', '2:00', '4:00'], 1],
      [18, 'What will Linh do at the café?', ['Prepare sandwiches', 'Take orders and serve drinks', 'Clean the kitchen all day', 'Manage the timetable'], 1],
      [19, 'Who will prepare the sandwiches?', ['Linh', 'Hoa', 'The manager', 'A customer'], 1],
      [20, 'What should Linh wear?', ['A green shirt', 'A white jacket', 'A black uniform', 'Any formal clothes'], 0],
    ], audioScripts.work),
    ...listen([
      [21, 'What kind of dish are the students making?', ['A raw fish dish', 'A vegan vegetable dish', 'A meatball soup', 'A sweet pastry'], 1],
      [22, 'When should the raw carrots be added?', ['At the beginning', 'After the bread is baked', 'At the end', 'Before they are washed'], 2],
      [23, 'How much salt should they use?', ['A pinch', 'Half a teaspoon', 'One tablespoon', 'Two teaspoons'], 1],
      [24, 'What does the teacher say about adding spices?', ['Add as much as possible.', 'Do not use any spices.', 'Taste the dish first and add a little.', 'Only add them after serving.'], 2],
      [25, 'What will they serve with the dish?', ['Rice', 'Bread', 'Soup', 'Fruit'], 1],
    ], audioScripts.cooking),
    ...listen([
      [26, 'Which bus is Nam waiting for?', ['The bus to the airport', 'The bus to the beach', 'The bus to the university', 'The bus to the village'], 1],
      [27, 'Where does the bus board?', ['Platform two', 'Platform three', 'Platform four', 'Platform five'], 2],
      [28, 'Why is the bus timetable different?', ['The schedule changed this week.', 'The bus company has closed.', 'The journey is shorter now.', 'The clerk made a mistake about the destination.'], 0],
      [29, 'How much is one ticket?', ['Twenty thousand dong', 'Thirty thousand dong', 'Forty thousand dong', 'Fifty thousand dong'], 2],
      [30, 'How long is the journey?', ['About thirty minutes', 'About forty minutes', 'About fifty minutes', 'About one hour'], 2],
    ], audioScripts.bus)
  ];

  const passages = [
    {
      id: 'study',
      text: 'When Paulo started university, he worried that he would not make friends. He is an introvert and prefers quiet evenings, but he wanted to get to know his classmates. A biology tutor encouraged him to join a small study group. At first Paulo listened more than he spoke. Later, he began sharing his notes and asking questions. His classmates discovered that he was reliable: he always completed his part of the project on time. They invited him to have lunch after class. Paulo still enjoys spending time alone, but he now has several good friends at university.'
    },
    {
      id: 'goals',
      text: 'Mai wanted to improve her English, so she set a small goal: learn six new words each day. She studied for twenty minutes after breakfast and reviewed the words before bed. Her teacher gave her feedback on pronunciation and encouraged her to speak in class. At first, Mai felt worried about making mistakes. After a month, she felt more confident and could remember most of the words. She did not study for hours at a time. Instead, she practised regularly and took short breaks. Mai says that this routine helped her make progress without feeling too tired.'
    },
    {
      id: 'food',
      text: 'A food festival at the community centre introduced visitors to dishes from different countries. One table served a vegan salad made with raw carrots, tomatoes, and herbs. The cook explained that the dressing contained lemon juice and olive oil. Another group prepared a traditional fish dish using a family recipe. Visitors could taste a small portion before choosing a meal. The festival was not only about food: students also collected money for a local charity. By the end of the day, they had raised enough to buy books for the children’s library.'
    },
    {
      id: 'journey',
      text: 'Last summer, Thu went backpacking with her cousin in northern Laos. They stayed in a hostel and checked the bus timetable each evening. On the second day, a guide took them along a narrow trail through a rural area. Heavy rain made part of the path rough, so the guide chose an alternative route through a small village. Thu wore a waterproof jacket and carried a lifejacket for a short boat crossing. The scenery was spectacular, and people in the village showed them how they grew vegetables. Thu says the journey was sometimes tiring, but she learned about a different way of life.'
    },
    {
      id: 'sleep',
      text: 'A group of students researched how sleep affects learning. They asked classmates about their habits and compared the answers with their test results. Students who slept well usually found it easier to concentrate, but the researchers did not claim that sleep was the only reason for good marks. They also noticed that many students used their phones late at night. The group recommended turning off screens before bed and keeping a regular schedule. Their teacher praised the careful research and suggested that the students present their findings at the school science day.'
    },
    {
      id: 'charity',
      text: 'The student club organised a clothes collection for a local charity. Volunteers sorted the donations into three groups: clean clothes in good condition, clothes that needed washing, and items that could not be used again. They folded the clean clothes and placed them in boxes. A few damaged items were sent for recycling. The club asked people not to donate anything filthy or wet. By the end of the week, the volunteers had filled twelve large boxes. The organiser said the project had been a challenge, but the community had helped them achieve their goal.'
    },
    {
      id: 'career',
      text: 'After graduating, Huy plans to work in the travel industry. He enjoys meeting new people and has a friendly, easygoing personality. During his final year, he worked part time at a hotel and learned how to answer guests’ questions. His manager gave him positive feedback and said he was professional and reliable. Huy still needs to improve his English, so he practises speaking with a language partner twice a week. He is confident that the experience he has gained will help him find a successful career. His first goal is to work at a hotel near the airport.'
    },
    {
      id: 'sports',
      text: 'Nina had never tried roller skating because she was nervous about falling. Her friend invited her to a park where beginners could practise on a smooth track. Nina borrowed a helmet and protective pads, then started slowly beside the rail. After an hour, she could move across the track without holding on. She did not become the fastest skater, but she felt proud of her progress. Her friend encouraged her to keep practising once a week. Nina now sees the activity as a fun way to exercise and spend time with people.'
    }
  ];
  const read = (passage, rows) => make('r', rows.map(([id, text, choices, answerIndex]) => [id, text, choices, answerIndex, { passage: passage.text }]));
  const reading = [
    ...read(passages[0], [
      [1, 'What is the passage mainly about?', ['How Paulo made friends at university', 'Why Paulo changed his biology course', 'How to organise a large party', 'Why Paulo moved to another city'], 0],
      [2, 'Why did Paulo join the study group?', ['He wanted to meet classmates and study.', 'His classmates needed a new tutor.', 'He wanted to stop spending time alone.', 'His family asked him to join.'], 0],
      [3, 'What does “reliable” mean in the passage?', ['Able to be trusted', 'Easily worried', 'Very talkative', 'Interested in biology'], 0],
      [4, 'What did Paulo do after he became more comfortable in the group?', ['He shared notes and asked questions.', 'He left the university.', 'He stopped doing the project.', 'He organised a large party.'], 0],
      [5, 'What can we infer about Paulo?', ['He can make friends and still enjoy quiet time.', 'He no longer likes being alone.', 'He joined only to get a better grade.', 'He prefers large parties to study groups.'], 0],
    ]),
    ...read(passages[1], [
      [6, 'What goal did Mai set?', ['Learn six words each day', 'Study for three hours every morning', 'Speak only English at home', 'Finish a vocabulary book in a week'], 0],
      [7, 'When did Mai review the words?', ['Before breakfast', 'Before bed', 'During her English class', 'Only at weekends'], 1],
      [8, 'How did Mai feel at first about speaking in class?', ['Worried about making mistakes', 'Angry with her teacher', 'Bored with the lessons', 'Confident about every answer'], 0],
      [9, 'What does “routine” refer to?', ['Mai’s regular way of studying and reviewing words', 'The teacher’s work schedule', 'The class timetable', 'Mai’s breakfast recipe'], 0],
      [10, 'Which statement is true?', ['Mai made progress by practising regularly.', 'Mai studied for hours without taking breaks.', 'Mai stopped learning new words after a week.', 'Mai never received feedback from her teacher.'], 0],
    ]),
    ...read(passages[2], [
      [11, 'What was one purpose of the food festival?', ['To introduce visitors to dishes from different countries', 'To teach people how to grow vegetables', 'To sell books to the community', 'To choose the best school cook'], 0],
      [12, 'Which ingredients were in the vegan salad?', ['Raw carrots, tomatoes, and herbs', 'Fish, rice, and spices', 'Eggs, cheese, and potatoes', 'Chicken, bread, and lemon'], 0],
      [13, 'What does “recipe” mean in the passage?', ['Instructions for preparing a dish', 'A list of festival visitors', 'A kind of community centre', 'A charity organisation'], 0],
      [14, 'Why did the students collect money?', ['To buy books for the children’s library', 'To pay for a new kitchen', 'To travel to another country', 'To build a community centre'], 0],
      [15, 'How could visitors try the food?', ['They could taste a small portion first.', 'They had to buy a full meal.', 'They could only smell the dishes.', 'They needed to bring their own ingredients.'], 0],
    ]),
    ...read(passages[3], [
      [16, 'Where did Thu go backpacking?', ['Northern Laos', 'Southern Thailand', 'Central Vietnam', 'Northern Japan'], 0],
      [17, 'Why did the guide choose another route?', ['Heavy rain made part of the trail rough.', 'The village was too far away.', 'Thu had lost the bus timetable.', 'The boat was not available.'], 0],
      [18, 'What did Thu wear?', ['A waterproof jacket', 'A wetsuit', 'A formal coat', 'A lifejacket all day'], 0],
      [19, 'What does “alternative” mean here?', ['Another possible route', 'A dangerous destination', 'A regular bus schedule', 'A kind of hostel'], 0],
      [20, 'What did Thu learn about?', ['A different way of life', 'How to repair a bus', 'How to build a hostel', 'How to make a lifejacket'], 0],
    ]),
    ...read(passages[4], [
      [21, 'What did the student group research?', ['How sleep affects learning', 'How to improve school buildings', 'How students travel to school', 'How to prepare for a sports competition'], 0],
      [22, 'What did students who slept well usually find easier?', ['Concentrating', 'Using their phones', 'Writing a research report', 'Changing their schedules'], 0],
      [23, 'What did the researchers notice about many students?', ['They used phones late at night.', 'They never studied with classmates.', 'They slept all day at weekends.', 'They preferred science to other subjects.'], 0],
      [24, 'What did the group recommend?', ['Turn off screens before bed and keep a regular schedule.', 'Study all night before a test.', 'Stop doing research with classmates.', 'Use a phone to check the time every hour.'], 0],
      [25, 'Why did the teacher praise the group?', ['They did careful research.', 'They received the highest test marks.', 'They built a new science room.', 'They organised a sports event.'], 0],
    ]),
    ...read(passages[5], [
      [26, 'What did the student club collect?', ['Clothes for a local charity', 'Books for a science class', 'Food for a festival', 'Money for a sports team'], 0],
      [27, 'What happened to clothes in good condition?', ['They were folded and placed in boxes.', 'They were sent for recycling.', 'They were washed by the organiser.', 'They were given back to the owners.'], 0],
      [28, 'Which items did the club ask people not to donate?', ['Filthy or wet items', 'Clean shirts', 'Warm jackets', 'Clothes in good condition'], 0],
      [29, 'How many boxes did the volunteers fill?', ['Twelve', 'Ten', 'Twenty', 'Two'], 0],
      [30, 'What can we infer about the project?', ['It was challenging but the community helped.', 'The volunteers did not reach their goal.', 'The club collected only new clothes.', 'The charity refused the donations.'], 0],
    ]),
    ...read(passages[6], [
      [31, 'What does Huy plan to do after graduating?', ['Work in the travel industry', 'Become a biology teacher', 'Open a clothing charity', 'Study aerospace engineering'], 0],
      [32, 'Where did Huy work part time?', ['At a hotel', 'At an airport bus station', 'At a university library', 'At a food festival'], 0],
      [33, 'What did Huy’s manager say about him?', ['He was professional and reliable.', 'He was nervous and unfriendly.', 'He was creative but often late.', 'He was serious and difficult to work with.'], 0],
      [34, 'How does Huy practise English?', ['With a language partner twice a week', 'By working every night at the hotel', 'By reading only travel timetables', 'By taking a class once a month'], 0],
      [35, 'What is Huy’s first career goal?', ['Work at a hotel near the airport', 'Become a travel writer', 'Manage a language school', 'Graduate next month'], 0],
    ]),
    ...read(passages[7], [
      [36, 'Why had Nina never tried roller skating?', ['She was nervous about falling.', 'She did not know anyone at the park.', 'She had injured her friend.', 'She thought the track was too short.'], 0],
      [37, 'What did Nina borrow?', ['A helmet and protective pads', 'A bicycle and a map', 'A lifejacket and goggles', 'A pair of boots'], 0],
      [38, 'How did Nina feel after an hour?', ['Proud of her progress', 'Disappointed with her friend', 'Angry about the track', 'Tired of meeting people'], 0],
      [39, 'How often did her friend encourage her to practise?', ['Once a week', 'Every day', 'Twice a year', 'Only at weekends in winter'], 0],
      [40, 'What does Nina now think about roller skating?', ['It is a fun way to exercise and spend time with people.', 'It is too difficult for beginners.', 'It is only for the fastest skaters.', 'It is safer without protective equipment.'], 0],
    ])
  ];

  window.ENGLISH_BANK = [
    { id: 1, section: 'vocabulary', title: 'Part 1 · Vocabulary · Units 1–6', questions: vocabulary },
    { id: 2, section: 'grammar', title: 'Part 2 · Grammar & Word Order', questions: grammar },
    { id: 3, section: 'listening', title: 'Part 3 · Listening', questions: listening },
    { id: 4, section: 'reading', title: 'Part 4 · Reading', questions: reading }
  ];
})();
