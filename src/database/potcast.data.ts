import type { PodcastModel } from "../models/PodcastModel"

const podcastsImageUrls : string[] = [
    'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B',
    'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    'https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png',
    'https://static.vecteezy.com/system/resources/previews/035/602/141/non_2x/portrait-of-woman-standing-in-power-pose-confident-expression-cross-arms-on-chest-and-smiles-stands-over-white-background-photo.jpg',
    'https://img.freepik.com/free-photo/happy-man-student-with-afro-hairdo-shows-white-teeth-being-good-mood-after-classes_273609-16608.jpg?semt=ais_hybrid&w=740',
    'https://media.istockphoto.com/id/1365223878/photo/attractive-man-feeling-cheerful.jpg?s=612x612&w=0&k=20&c=UfnlXLnX9Te1EgPM9IGepLyWH0M3dIYSoVdf1bslqO4=',
    'https://media.istockphoto.com/id/661799106/photo/portrait-of-a-young-french-man.jpg?s=612x612&w=0&k=20&c=M-8ccbYQZCvQWmKLLyDF5mYjF3KaBTQwX6HDdzvw_pk=',
    'https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-600nw-1703979295.jpg',
    'https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg',
    'https://media.istockphoto.com/id/629517464/photo/stand-out-from-the-pack-by-fulfilling-your-own-purpose.jpg?s=170667a&w=0&k=20&c=tF0mc_i6lzntDwd3yfmcE0BYLx6Nq5YqIZG4Knrz4zM='
  ]


export const realEstatePodcastsData: PodcastModel[] = [
  {
    id: 'id1',
    host: 'רוני סבן',
    aboutHost: 'מרצה לנדל"ן ומנחת תוכניות רדיו על שוק הדיור.',
    description: 'שיחה מרתקת עם מומחה להתחדשות עירונית על מגמות, אתגרים והזדמנויות שקשה לזהות מראש.',
    imageUrl: podcastsImageUrls[5],
    autor: 'מור שחר',
    date: '01.10'
  },
  {
    id: 'id2',
    host: 'שירה כהן',
    aboutHost: 'יועצת השקעות ובעלת ניסיון עשיר בעולם המשכנתאות.',
    description: 'בפרק זה אנחנו מנתחים מקרה אמיתי של השקעה שנראתה מבטיחה – אך הפכה להפסד כואב.',
    imageUrl: podcastsImageUrls[1],
    autor: 'אייל ברק',
    date: '29.01'
  },
  {
    id: 'id3',
    host: 'נועם בן דוד',
    aboutHost: 'משקיע נדל"ן סדרתי עם סיפור חיים יוצא דופן.',
    description: 'איך טכנולוגיות בינה מלאכותית משנות את הדרך שבה אנחנו מתכננים ובונים ערים חכמות.',
    imageUrl: podcastsImageUrls[5],
    autor: 'לירון שלו',
    date: '14.09'
  },
  {
    id: 'id4',
    host: 'איתי גל',
    aboutHost: 'עיתונאי בכיר ומנחה פודקאסטים על כלכלה וחדשנות.',
    description: 'שיחה אישית עם יזם נדל"ן על הדרך הקשה לצמיחה כלכלית דרך טעויות והצלחות.',
    imageUrl: podcastsImageUrls[9],
    autor: 'שיר לוי',
    date: '28.01'
  },
  {
    id: 'id5',
    host: 'נועם בן דוד',
    aboutHost: 'משקיע נדל"ן סדרתי עם סיפור חיים יוצא דופן.',
    description: 'מדריך מעשי למשקיע המתחיל – מה לבדוק לפני שקונים דירה ראשונה.',
    imageUrl: podcastsImageUrls[8],
    autor: 'מור שחר',
    date: '14.02'
  },
  {
    id: 'id6',
    host: 'נועם בן דוד',
    aboutHost: 'משקיע נדל"ן סדרתי עם סיפור חיים יוצא דופן.',
    description: 'מאחורי הקלעים של שוק השכירות: איך דיירים ובעלי דירות מתמודדים עם עליית המחירים.',
    imageUrl: podcastsImageUrls[5],
    autor: 'רועי כץ',
    date: '21.11'
  },
  {
    id: 'id7',
    host: 'מיכל ברק',
    aboutHost: 'עורכת דין לנכסים מסחריים ומגישה סדרות על זכויות דיירים.',
    description: 'האם השקעה בנדל"ן מסחרי עדיין רלוונטית בעידן המסחר המקוון? שיחה עם מומחה.',
    imageUrl: podcastsImageUrls[6],
    autor: 'מיכל כהן',
    date: '04.10'
  },
  {
    id: 'id8',
    host: 'דוד רוזן',
    aboutHost: 'מומחה למשפט נדל"ן ויזם בתחום ההתחדשות העירונית.',
    description: 'איך לבחור בין מסלול קבוע או משתנה במשכנתא – עם טיפים מעשיים מהשטח.',
    imageUrl: podcastsImageUrls[9],
    autor: 'אייל ברק',
    date: '24.05'
  },
  {
    id: 'id9',
    host: 'רן שלו',
    aboutHost: 'מנהל קרן השקעות נדל"ן עם ניסיון גלובלי.',
    description: 'סיפור אישי של אישה שהתחילה מדירת חדר והיום מחזיקה עשרה נכסים ברחבי הארץ.',
    imageUrl: podcastsImageUrls[7],
    autor: 'דנה כהן',
    date: '07.08'
  },
  {
    id: 'id10',
    host: 'רוני סבן',
    aboutHost: 'מרצה לנדל"ן ומנחת תוכניות רדיו על שוק הדיור.',
    description: 'פרק מיוחד עם עיתונאית ותיקה על איך התקשורת משפיעה על החלטות נדל"ן של הציבור.',
    imageUrl: podcastsImageUrls[7],
    autor: 'דנה לוי',
    date: '23.01'
  },
  {
    id: 'id11',
    host: 'שירה כהן',
    aboutHost: 'יועצת השקעות ובעלת ניסיון עשיר בעולם המשכנתאות.',
    description: 'סודות מס הכנסה: מה רוב האנשים לא מבינים לגבי מיסוי על מכירת נכסים.',
    imageUrl: podcastsImageUrls[9],
    autor: 'אייל ברק',
    date: '01.02'
  },
  {
    id: 'id12',
    host: 'דוד רוזן',
    aboutHost: 'מומחה למשפט נדל"ן ויזם בתחום ההתחדשות העירונית.',
    description: 'האם כדאי להשקיע עם שותפים או לבד? סיפורי הצלחה וכישלון מהשטח.',
    imageUrl: podcastsImageUrls[1],
    autor: 'רועי כץ',
    date: '12.10'
  },
  {
    id: 'id13',
    host: 'רוני סבן',
    aboutHost: 'מרצה לנדל"ן ומנחת תוכניות רדיו על שוק הדיור.',
    description: 'איך לבנות תיק השקעות נדל"ני יציב גם בתקופות של אי ודאות כלכלית.',
    imageUrl: podcastsImageUrls[6],
    autor: 'רועי כץ',
    date: '25.05'
  },
  {
    id: 'id14',
    host: 'אורית שפירא',
    aboutHost: 'עורכת מגזין נדל"ן מוביל ואשת תקשורת מוערכת.',
    description: 'מהם ההבדלים המהותיים בין נדל"ן למגורים לעומת נדל"ן לתעשייה ולמסחר.',
    imageUrl: podcastsImageUrls[1],
    autor: 'מיכל כהן',
    date: '27.07'
  },
  {
    id: 'id15',
    host: 'אלעד סויסה',
    aboutHost: 'מרצה לפיננסים ואנליסט שוק הנדל"ן הארצי.',
    description: 'פרק השראה על משפחה שירשה שטח חקלאי – והפכה אותו למתחם מגורים מבוקש.',
    imageUrl: podcastsImageUrls[1],
    autor: 'תום ברק',
    date: '22.04'
  },
  {
    id: 'id16',
    host: 'שירה כהן',
    aboutHost: 'יועצת השקעות ובעלת ניסיון עשיר בעולם המשכנתאות.',
    description: 'מה לעשות כשהשוכרים לא משלמים? עורך דין עונה על כל השאלות הקשות.',
    imageUrl: podcastsImageUrls[3],
    autor: 'שיר לוי',
    date: '02.02'
  },
  {
    id: 'id17',
    host: 'שירה כהן',
    aboutHost: 'יועצת השקעות ובעלת ניסיון עשיר בעולם המשכנתאות.',
    description: 'איך משפיעה הריבית של בנק ישראל על מחירי הדירות והמשכנתאות שלכם בפועל.',
    imageUrl: podcastsImageUrls[1],
    autor: 'תום ברק',
    date: '14.03'
  },
  {
    id: 'id18',
    host: 'אורית שפירא',
    aboutHost: 'עורכת מגזין נדל"ן מוביל ואשת תקשורת מוערכת.',
    description: 'שיחה עם מתווך ותיק על עסקאות שלא ישכח – ומה הוא למד מהן.',
    imageUrl: podcastsImageUrls[3],
    autor: 'דנה כהן',
    date: '12.02'
  },
  {
    id: 'id19',
    host: 'איתי גל',
    aboutHost: 'עיתונאי בכיר ומנחה פודקאסטים על כלכלה וחדשנות.',
    description: 'האם שווה להשקיע בדירה לתיירים או לבחור בשכירות ארוכת טווח? השוואה מפתיעה.',
    imageUrl: podcastsImageUrls[5],
    autor: 'דנה לוי',
    date: '06.06'
  },
  {
    id: 'id20',
    host: 'גלי אברהם',
    aboutHost: 'יזמית טכנולוגית שמשלבת בין נדל"ן לטכנולוגיה.',
    description: 'איך לתכנן פרויקט פינוי-בינוי בלי להסתבך עם שכנים, עירייה ורגולציה.',
    imageUrl: podcastsImageUrls[4],
    autor: 'מור שחר',
    date: '25.01'
  },
  {
    id: 'id21',
    host: 'שירה כהן',
    aboutHost: 'יועצת השקעות ובעלת ניסיון עשיר בעולם המשכנתאות.',
    description: 'מחשבות על שוויון בשוק הנדל"ן – האם לכולם יש באמת גישה להזדמנויות?',
    imageUrl: podcastsImageUrls[2],
    autor: 'לירון שלו',
    date: '08.09'
  },
  {
    id: 'id22',
    host: 'אורית שפירא',
    aboutHost: 'עורכת מגזין נדל"ן מוביל ואשת תקשורת מוערכת.',
    description: 'הסיפור מאחורי עסקה שנסגרה בשיחת טלפון אחת – ומה אפשר ללמוד ממנה.',
    imageUrl: podcastsImageUrls[0],
    autor: 'תום ברק',
    date: '21.04'
  },
  {
    id: 'id23',
    host: 'מיכל ברק',
    aboutHost: 'עורכת דין לנכסים מסחריים ומגישה סדרות על זכויות דיירים.',
    description: 'מומחים מסבירים למה דווקא עכשיו זה זמן טוב לקנות – למרות התחזיות השליליות.',
    imageUrl: podcastsImageUrls[0],
    autor: 'לירון שלו',
    date: '03.08'
  },
  {
    id: 'id24',
    host: 'גלי אברהם',
    aboutHost: 'יזמית טכנולוגית שמשלבת בין נדל"ן לטכנולוגיה.',
    description: 'איך קרנות ריט פועלות, למי הן מתאימות ואילו סיכונים צריך לקחת בחשבון.',
    imageUrl: podcastsImageUrls[1],
    autor: 'גל זיו',
    date: '24.09'
  },
  {
    id: 'id25',
    host: 'גלי אברהם',
    aboutHost: 'יזמית טכנולוגית שמשלבת בין נדל"ן לטכנולוגיה.',
    description: 'מהן חמש הטעויות הנפוצות שמשקיעי נדל"ן מתחילים עושים וכיצד להימנע מהן מראש.',
    imageUrl: podcastsImageUrls[6],
    autor: 'נועה ברק',
    date: '29.01'
  },
  {
    id: 'id26',
    host: 'שירה כהן',
    aboutHost: 'יועצת השקעות ובעלת ניסיון עשיר בעולם המשכנתאות.',
    description: 'בפרק הזה אנחנו עונים לשאלות שהמאזינים שלחו לנו – בלי פילטרים ובלי מסכות.',
    imageUrl: podcastsImageUrls[7],
    autor: 'גל זיו',
    date: '06.10'
  },
  {
    id: 'id27',
    host: 'רן שלו',
    aboutHost: 'מנהל קרן השקעות נדל"ן עם ניסיון גלובלי.',
    description: 'האם לעבור לפריפריה זו בריחה או הזדמנות כלכלית חכמה? דעה אישית נוקבת.',
    imageUrl: podcastsImageUrls[5],
    autor: 'לירון רבינוביץ',
    date: '20.05'
  },
  {
    id: 'id28',
    host: 'נועם בן דוד',
    aboutHost: 'משקיע נדל"ן סדרתי עם סיפור חיים יוצא דופן.',
    description: 'סיפור מעורר השראה על זוג צעיר שקנה נכס נטוש ושיפץ אותו לבד מאפס.',
    imageUrl: podcastsImageUrls[6],
    autor: 'גל שלו',
    date: '06.12'
  },
  {
    id: 'id29',
    host: 'גלי אברהם',
    aboutHost: 'יזמית טכנולוגית שמשלבת בין נדל"ן לטכנולוגיה.',
    description: 'ניתוח מגמה עולמית: איך משבר האקלים משנה את מפת הנדל"ן הבינלאומית.',
    imageUrl: podcastsImageUrls[7],
    autor: 'לירון רבינוביץ',
    date: '17.03'
  },
  {
    id: 'id30',
    host: 'שירה כהן',
    aboutHost: 'יועצת השקעות ובעלת ניסיון עשיר בעולם המשכנתאות.',
    description: 'איך לזהות עסקאות לא משתלמות שנראות טוב רק על הנייר – ולחסוך כסף רב.',
    imageUrl: podcastsImageUrls[6],
    autor: 'מיכל כהן',
    date: '14.10'
  },
];
