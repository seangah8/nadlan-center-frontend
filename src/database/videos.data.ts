import type { VideoModel } from '../models/VideoModel'

const videosImageUrls : string[] = [
    'https://media.istockphoto.com/id/2001191442/video/real-estate-agent-showing-a-new-home-to-prospective-buyers.jpg?s=640x640&k=20&c=MnSV0WZj9rliJpRwxwlAO8VdeBt5DQPyjcByX99YCmw=',
    'https://www.adorama.com/alc/wp-content/uploads/2018/12/shutterstock_569669149.jpg',
    'https://media.istockphoto.com/id/1372309567/photo/cheerful-african-woman-opening-door-welcoming-you-standing-at-home.jpg?s=612x612&w=0&k=20&c=Jk4-l5wUcIglbroy39CdGBz2L5WGszvFdcgiYCXJ9qA=',
    'https://t3.ftcdn.net/jpg/02/14/61/10/360_F_214611015_svKzJ5ynqOZXshFe1PwBCI1SDOaK9mor.jpg',
    'https://www.citizen-times.com/gcdn/presto/2020/10/21/PASH/902694f0-6fd0-49c6-89d0-3eb46ae81a97-Housing_03.JPG?width=660&height=447&fit=crop&format=pjpg&auto=webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtCfi8FZdK_alLRpDdmH-Ut9EoWbcCqDzMqg&s',
    'https://img.freepik.com/fotos-gratis/jovem-barbudo-com-camisa-listrada_273609-5677.jpg?semt=ais_hybrid&w=740',
    'https://img.freepik.com/fotos-premium/homem-sorridente-apontando-e-oferecendo-anuncio-homem-apontando-e-oferecendo-anuncio_474717-92702.jpg',
    'https://media.gettyimages.com/id/1635403579/video/video-call-communication-face-or-man-wave-hello-discussion-and-consulting-with-webinar.jpg?s=640x640&k=20&c=ok5TDCZBzxcWIE5ZSwZgSkdWRl29uj1aiXvLpN7GMkw=',
    'https://media.istockphoto.com/id/1332741385/photo/man-doing-a-virtual-business-call-at-home-webcam-point-of-view.jpg?s=612x612&w=0&k=20&c=TvGnfwksyVcPYp0nv_q_4UAgRrug2RUl_3phKAzbOoo=',
]

const videosTitles : string[] = [
  'איך לזהות הזדמנות נדל"ן אמיתית בשוק מוצף באפשרויות מבלבלות ולא ברורות',
  'המדריך השלם להשקעה חכמה בדירה ראשונה גם בלי הרבה הון עצמי',
  'כל מה שחובה לבדוק לפני שקונים דירה מהקבלן או משוק יד שנייה',
  'כך תבחרו נכס נדל"ן שישרת אתכם לטווח הארוך וגם יניב תשואה',
  'איך למצוא דירות שמתחת למחיר השוק בעזרת כלים ואנליזה פשוטה ויעילה',
  'האם עדיף להשקיע בדירה קטנה בעיר מבוקשת או בפריפריה מתפתחת',
  'מהם הסיכונים הכי גדולים שמשקיעי נדל"ן מתחילים לא לוקחים בחשבון בזמן רכישה',
  'איך מבצעים ניתוח כלכלי נכון לנכס פוטנציאלי בעזרת נתונים זמינים לציבור הרחב',
  'השוואה מעמיקה בין השקעות בנדל"ן למגורים לבין נדל"ן מסחרי בישראל ובחו"ל',
  'כל השלבים שצריך לדעת כדי להפוך למשקיע נדל"ן מצליח גם בלי ניסיון',
]

const videosDescriptions : string[] = [
  'תלמדו איך לזהות נכסי נדל"ן שמוסתרים מהעין בשוק עמוס ומבולבל, ולגלות אילו פרמטרים באמת מעידים על פוטנציאל רווח גבוה לאורך זמן.',
  'גם אם אין לכם הרבה כסף פנוי להשקעה, בסרטון הזה תגלו דרכים יצירתיות ויעילות להיכנס לעולם הנדל"ן ולהתחיל לבנות הון עצמי.',
  'לפני שקונים דירה, חשוב לדעת אילו בדיקות משפטיות, כלכליות ופיזיות הכרחיות כדי לא ליפול לעסקאות שעלולות לגרום להפסדים או תביעות מיותרות.',
  'משקיעים חכמים לא בוחרים סתם דירה – הם מחפשים נכסים עם פוטנציאל אמיתי לעליית ערך ושוכרים איכותיים שמבטיחים הכנסה פסיבית יציבה.',
  'דירות במחירי מציאה לא נעלמות מעצמן – נלמד אתכם איך לחפש נכון, לאבחן נתונים ולעקוב אחרי מגמות שוק שיכולות לחשוף הזדמנויות נדירות.',
  'מתלבטים איפה להשקיע? השוואה מקיפה בין דירות קטנות במרכז יקר לבין השקעות באזורים מתפתחים יכולה לשנות לגמרי את תפיסת ההשקעה שלכם.',
  'בסרטון הזה תגלו מהם הסיכונים הנפוצים ביותר שמשקיעים מתחילים מדלגים עליהם – טעויות קטנות שיכולות להפוך להפסדים כספיים משמעותיים בעתיד הקרוב.',
  'תלמדו איך לבצע ניתוח כלכלי לנכס עוד לפני שמגיעים לשטח – בעזרת כלים חינמיים שמספקים תובנות על שווי, תשואה וסיכון פוטנציאלי.',
  'האם נדל"ן מסחרי באמת משתלם יותר ממגורים? נבחן את ההבדלים בין הסקטורים, ונראה דוגמאות להשקעות בישראל ובחו"ל עם תובנות מקצועיות מהשטח.',
  'חושבים שנדל"ן זה רק למי שכבר מצליח? בסרטון הזה נעבור שלב אחר שלב על הדרך להפוך למשקיע נדל"ן – גם בלי שום ניסיון קודם.',
]


export const realEstateVideosData: VideoModel[] = [
  {
    id: 'id1',
    title: videosTitles[9],
    description: videosDescriptions[3],
    imageUrl: videosImageUrls[0],
    autor: 'תום ברק',
    date: '03.10'
  },
  {
    id: 'id2',
    title: videosTitles[1],
    description: videosDescriptions[2],
    imageUrl: videosImageUrls[4],
    autor: 'מיכל כהן',
    date: '26.08'
  },
  {
    id: 'id3',
    title: videosTitles[3],
    description: videosDescriptions[8],
    imageUrl: videosImageUrls[9],
    autor: 'דנה לוי',
    date: '15.12'
  },
  {
    id: 'id4',
    title: videosTitles[3],
    description: videosDescriptions[4],
    imageUrl: videosImageUrls[2],
    autor: 'גל שלו',
    date: '08.10'
  },
  {
    id: 'id5',
    title: videosTitles[4],
    description: videosDescriptions[6],
    imageUrl: videosImageUrls[7],
    autor: 'יואב סגל',
    date: '02.01'
  },
  {
    id: 'id6',
    title: videosTitles[2],
    description: videosDescriptions[4],
    imageUrl: videosImageUrls[2],
    autor: 'גל שלו',
    date: '06.05'
  },
  {
    id: 'id7',
    title: videosTitles[2],
    description: videosDescriptions[2],
    imageUrl: videosImageUrls[2],
    autor: 'דנה כהן',
    date: '13.10'
  },
  {
    id: 'id8',
    title: videosTitles[8],
    description: videosDescriptions[7],
    imageUrl: videosImageUrls[1],
    autor: 'יואב סגל',
    date: '20.06'
  },
  {
    id: 'id9',
    title: videosTitles[6],
    description: videosDescriptions[5],
    imageUrl: videosImageUrls[7],
    autor: 'מור שחר',
    date: '27.03'
  },
  {
    id: 'id10',
    title: videosTitles[6],
    description: videosDescriptions[2],
    imageUrl: videosImageUrls[6],
    autor: 'יואב סגל',
    date: '02.07'
  },
  {
    id: 'id11',
    title: videosTitles[0],
    description: videosDescriptions[4],
    imageUrl: videosImageUrls[2],
    autor: 'גל זיו',
    date: '14.06'
  },
  {
    id: 'id12',
    title: videosTitles[3],
    description: videosDescriptions[9],
    imageUrl: videosImageUrls[8],
    autor: 'מור שחר',
    date: '29.04'
  },
  {
    id: 'id13',
    title: videosTitles[8],
    description: videosDescriptions[4],
    imageUrl: videosImageUrls[8],
    autor: 'מיכל כהן',
    date: '20.11'
  },
  {
    id: 'id14',
    title: videosTitles[1],
    description: videosDescriptions[1],
    imageUrl: videosImageUrls[8],
    autor: 'דנה כהן',
    date: '15.08'
  },
  {
    id: 'id15',
    title: videosTitles[0],
    description: videosDescriptions[1],
    imageUrl: videosImageUrls[2],
    autor: 'מיכל כהן',
    date: '15.01'
  },
  {
    id: 'id16',
    title: videosTitles[1],
    description: videosDescriptions[8],
    imageUrl: videosImageUrls[5],
    autor: 'דנה לוי',
    date: '07.10'
  },
  {
    id: 'id17',
    title: videosTitles[6],
    description: videosDescriptions[0],
    imageUrl: videosImageUrls[8],
    autor: 'נועה ברק',
    date: '26.07'
  },
  {
    id: 'id18',
    title: videosTitles[8],
    description: videosDescriptions[2],
    imageUrl: videosImageUrls[9],
    autor: 'דנה פרידמן',
    date: '01.02'
  },
  {
    id: 'id19',
    title: videosTitles[3],
    description: videosDescriptions[8],
    imageUrl: videosImageUrls[1],
    autor: 'תום ברק',
    date: '28.10'
  },
  {
    id: 'id20',
    title: videosTitles[3],
    description: videosDescriptions[7],
    imageUrl: videosImageUrls[1],
    autor: 'גל שלו',
    date: '18.04'
  },
  {
    id: 'id21',
    title: videosTitles[4],
    description: videosDescriptions[2],
    imageUrl: videosImageUrls[6],
    autor: 'מיכל כהן',
    date: '06.02'
  },
  {
    id: 'id22',
    title: videosTitles[3],
    description: videosDescriptions[7],
    imageUrl: videosImageUrls[8],
    autor: 'יואב סגל',
    date: '28.09'
  },
  {
    id: 'id23',
    title: videosTitles[5],
    description: videosDescriptions[2],
    imageUrl: videosImageUrls[7],
    autor: 'שיר לוי',
    date: '04.05'
  },
  {
    id: 'id24',
    title: videosTitles[6],
    description: videosDescriptions[6],
    imageUrl: videosImageUrls[6],
    autor: 'דנה לוי',
    date: '13.09'
  },
  {
    id: 'id25',
    title: videosTitles[7],
    description: videosDescriptions[3],
    imageUrl: videosImageUrls[3],
    autor: 'שיר לוי',
    date: '07.02'
  },
  {
    id: 'id26',
    title: videosTitles[9],
    description: videosDescriptions[1],
    imageUrl: videosImageUrls[8],
    autor: 'יואב סגל',
    date: '30.11'
  },
  {
    id: 'id27',
    title: videosTitles[1],
    description: videosDescriptions[7],
    imageUrl: videosImageUrls[4],
    autor: 'מור שחר',
    date: '21.07'
  },
  {
    id: 'id28',
    title: videosTitles[5],
    description: videosDescriptions[4],
    imageUrl: videosImageUrls[2],
    autor: 'גל שלו',
    date: '12.09'
  },
  {
    id: 'id29',
    title: videosTitles[9],
    description: videosDescriptions[9],
    imageUrl: videosImageUrls[8],
    autor: 'לירון רבינוביץ',
    date: '01.02'
  },
  {
    id: 'id30',
    title: videosTitles[1],
    description: videosDescriptions[0],
    imageUrl: videosImageUrls[9],
    autor: 'דנה לוי',
    date: '15.08'
  },
  {
    id: 'id31',
    title: videosTitles[1],
    description: videosDescriptions[1],
    imageUrl: videosImageUrls[3],
    autor: 'דנה לוי',
    date: '01.06'
  },
  {
    id: 'id32',
    title: videosTitles[2],
    description: videosDescriptions[7],
    imageUrl: videosImageUrls[6],
    autor: 'אייל ברק',
    date: '20.01'
  },
  {
    id: 'id33',
    title: videosTitles[8],
    description: videosDescriptions[5],
    imageUrl: videosImageUrls[6],
    autor: 'דנה כהן',
    date: '08.07'
  },
  {
    id: 'id34',
    title: videosTitles[3],
    description: videosDescriptions[8],
    imageUrl: videosImageUrls[9],
    autor: 'שיר לוי',
    date: '16.07'
  },
  {
    id: 'id35',
    title: videosTitles[1],
    description: videosDescriptions[7],
    imageUrl: videosImageUrls[9],
    autor: 'רועי כץ',
    date: '26.02'
  },
  {
    id: 'id36',
    title: videosTitles[4],
    description: videosDescriptions[6],
    imageUrl: videosImageUrls[7],
    autor: 'מור שחר',
    date: '17.12'
  },
  {
    id: 'id37',
    title: videosTitles[9],
    description: videosDescriptions[8],
    imageUrl: videosImageUrls[9],
    autor: 'דנה כהן',
    date: '10.03'
  },
  {
    id: 'id38',
    title: videosTitles[0],
    description: videosDescriptions[6],
    imageUrl: videosImageUrls[7],
    autor: 'נועה ברק',
    date: '03.08'
  },
  {
    id: 'id39',
    title: videosTitles[2],
    description: videosDescriptions[7],
    imageUrl: videosImageUrls[3],
    autor: 'תום ברק',
    date: '26.07'
  },
  {
    id: 'id40',
    title: videosTitles[4],
    description: videosDescriptions[0],
    imageUrl: videosImageUrls[3],
    autor: 'דנה כהן',
    date: '14.10'
  },
  {
    id: 'id41',
    title: videosTitles[4],
    description: videosDescriptions[5],
    imageUrl: videosImageUrls[2],
    autor: 'תום ברק',
    date: '24.12'
  },
  {
    id: 'id42',
    title: videosTitles[7],
    description: videosDescriptions[7],
    imageUrl: videosImageUrls[2],
    autor: 'אייל ברק',
    date: '16.08'
  },
  {
    id: 'id43',
    title: videosTitles[4],
    description: videosDescriptions[9],
    imageUrl: videosImageUrls[4],
    autor: 'דנה לוי',
    date: '22.02'
  },
  {
    id: 'id44',
    title: videosTitles[9],
    description: videosDescriptions[4],
    imageUrl: videosImageUrls[5],
    autor: 'לירון רבינוביץ',
    date: '01.09'
  },
  {
    id: 'id45',
    title: videosTitles[2],
    description: videosDescriptions[1],
    imageUrl: videosImageUrls[4],
    autor: 'נועה ברק',
    date: '05.04'
  },
  {
    id: 'id46',
    title: videosTitles[2],
    description: videosDescriptions[3],
    imageUrl: videosImageUrls[9],
    autor: 'דנה לוי',
    date: '13.02'
  },
  {
    id: 'id47',
    title: videosTitles[2],
    description: videosDescriptions[0],
    imageUrl: videosImageUrls[8],
    autor: 'דנה פרידמן',
    date: '14.04'
  },
  {
    id: 'id48',
    title: videosTitles[3],
    description: videosDescriptions[6],
    imageUrl: videosImageUrls[2],
    autor: 'דנה כהן',
    date: '01.09'
  },
  {
    id: 'id49',
    title: videosTitles[1],
    description: videosDescriptions[9],
    imageUrl: videosImageUrls[7],
    autor: 'מור שחר',
    date: '08.10'
  },
  {
    id: 'id50',
    title: videosTitles[3],
    description: videosDescriptions[9],
    imageUrl: videosImageUrls[9],
    autor: 'גל שלו',
    date: '16.09'
  },
];
