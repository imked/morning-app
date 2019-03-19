import wakeUpPath from '../images/wakingup.png'
import waterPath from '../images/glasofwater.png'
import exercisePath from '../images/exercise.png'
import journalPath from '../images/journal.png'
import meditatePath from '../images/meditate.png'
import visualizePath from '../images/visualize.png'
import readBookPath from '../images/readabook.png'

const routines = [
  {
    img: wakeUpPath,
    alt: 'waking up',
    title: 'Wake up early',
    content:
      'Because if you get up early enough, you have time for yourself. You can already do a few small things in the household like making beds to make the day more lively and dynamic.',
    isSelected: false,
  },
  {
    img: waterPath,
    alt: 'glas of water',
    title: 'Drink water ',
    content:
      'After waking up, drink a large glass of water with a pinch of salt (provided in the evening) and lemon juice. Your body is dehydrated after the night, water right after getting up can work wonders. After waking up, drink a large glass of water with a pinch of salt (provided in the evening) and lemon juice. Your body is dehydrated after the night, water right after getting up can work wonders.',
    isSelected: false,
  },
  {
    img: journalPath,
    alt: 'writing journal',
    title: 'Write in journal',
    content:
      'Writing can do wonders for your health. Beyond keeping your creative juices flowing—a separate topic we´ll get to shortly—regular writing can give you a safe, cathartic release valve for the stresses of your daily life. We`ve discussed some of those mental and emotional benefits of writing before, from the angle of creative writing—but you don`t have to write fiction to get them. For example, we`ve mentioned that keeping an awesomeness journal can do wonders for your self-esteem. Not only does regular writing make you feel good, it helps you re-live the events you experienced in a safe environment where you can process them without fear or stress.',
    isSelected: false,
  },
  {
    img: meditatePath,
    alt: 'meditation',
    title: 'Meditate',
    content:
      'You don`t have to do yoga exercises, but simply breathe in and out deeply in a relaxed position and try not to think of anything. This method also helps to clear your mind and to start working more easily and creatively.',
    isSelected: false,
  },
  {
    img: visualizePath,
    alt: 'visualization',
    title: 'Visualize your goals',
    content:
      'Visualization means to imagine something pictorial. Now it`s about your goals in life. In the near or distant future, that is up to you. Imagine for a few minutes the life you wish for: a wonderful family, a loving spouse, a beautiful house, a great job.If you are absolutely satisfied with your current life, imagine the most beautiful things you already have. About 5 minutes long. The background of the visualization are your mirror neurons. This is a special kind of nerve cells that have to do with visualization and social interactions. The clou: They don`t distinguish between fiction and reality if you repeat a visualization over and over again. Mirror neurons need to be trained for a few days, but the effect is similar to the affirmations that your subconscious is reversed so that it thinks you have already achieved these goals. And so your whole inner attitude will change: it will be adjusted directly to success.',
    isSelected: false,
  },
  {
    img: exercisePath,
    alt: 'man running',
    title: 'Exercise',
    content:
      'Sport is an important part of a successful start to the day. Not only that you go to work and think to yourself "I already did sport today, YES!", you have also taken a big step for your health. Ideally this sport unit is short (max. 20-30 minutes) and trains your aerobic capacity - i.e. endurance training, a demanding training with your body weight or with your kettlebell.The easiest solution is to go jogging.',
    isSelected: false,
  },
  {
    img: readBookPath,
    alt: 'read a book',
    title: 'Read something',
    content:
      'Allow yourself a few minutes (about 20 minutes) to read over a delicious cup of coffee or tea. This can - but does not have to - benefit your education and development. Of course, fiction is also included, but you are most receptive to books that help you get ahead.',
    isSelected: false,
  },
]

export default routines
