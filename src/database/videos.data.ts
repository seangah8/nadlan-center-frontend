import type { VideoModel } from '../models/VideoModel'

const storiesImageUrls : string[] = [
    'https://coralhomes.com.au/wp-content/uploads/Web-2800x1575px-Milan-29-Ballina-Pavilion-Facade-1-1060x596.jpg',
    'https://imageio.forbes.com/specials-images/imageserve/657b29edf09ae8354c4debba/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
    'https://www.clvgroup.com/wp-content/uploads/1734370114508_CLV_Group__Real_estate_investing_-scaled.jpg',
    'https://crc.losrios.edu//crc/main/img/social-1200-630/programs-majors-social-share/realestate-social.jpg',
    'https://cms-assets.themuse.com/media/lead/what-is-real-estate.png',
    'https://cdn.confident-group.com/wp-content/uploads/2024/12/27103036/types-of-real-estate-overview-scaled.jpg',
    'https://cdn.prod.website-files.com/620ec747459e13c7cf12a39e/625b10a58137b364b18df2ea_iStock-94179607.jpg',
    'https://www.hallmarkbuilders.in/images/blog/jan25/blog-banner-10Jan2025.jpg',
    'https://upcdn.io/FW25b3d/raw/uploads/2023/04/18/file-6h8s.jpeg',
    'https://assets.everspringpartners.com/fe/06/f23661be455e97d009c6ae418995/real-estate-finance.jpg',
]

const storiesTitles : string[] = [
  'הושק פרויקט מגורים יוקרתי חדש בלב תל אביב עם נוף לים',
  'שכונה חדשה בדרום הארץ מציעה דירות בנות השגה לזוגות צעירים',
  'האם מחירי הדירות בירושלים צפויים להמשיך לעלות גם בשנה הקרובה?',
  'מכרז חדש לבניית אלפי יחידות דיור באזור השרון יוצא לדרך',
  'התושבים נאבקים: בניין משרדים חדש יוקם במקום פארק ציבורי',
  'מגדלי מגורים חדשים בחיפה כוללים שטחים ירוקים ומרכזי קניות',
  'האם כדאי להשקיע בדירות קטנות באזור המרכז או בפריפריה?',
  'הפרויקט החדש בגבעתיים מציע שילוב של מגורים, מסחר וקהילה',
  'תכנית חדשה צפויה לשנות את פני אזור התעשייה הישן ברמת גן',
  'עלייה חדה בביקוש לדירות להשקעה באזורים מתפתחים בצפון הארץ',
]

const storiesDescriptions : string[] = [
  'הפרויקט החדש מציע דירות בסטנדרט גבוה, עם מרפסות מרווחות, חניון תת-קרקעי ונגישות לתחבורה ציבורית ומוסדות חינוך.',
  'בעקבות ביקוש גובר, חברות נדל"ן משקיעות בפרויקטים חדשים גם באזורים שבעבר נחשבו לפחות אטרקטיביים להשקעה.',
  'העירייה אישרה תוכנית פינוי-בינוי רחבת היקף, שתכלול מאות יחידות דיור חדשות ותשתיות מודרניות.',
  'יזמים פרטיים מציעים פתרונות יצירתיים למגורים משותפים במרכז הארץ, במחירים נוחים לצעירים ולסטודנטים.',
  'המגדלים החדשים מציעים שירותים כמו חדר כושר, גן ילדים, סופרמרקט ומרפסת נוף בקומה העליונה.',
  'שכונה חדשה מוקמת בצפון הארץ וכוללת פארקים, שבילי אופניים, בתי ספר ומרכז מסחרי מקומי.',
  'דו"ח חדש חושף: ערך הדירות הסמוכות לרכבת הקלה עלה בשיעור חד בשנתיים האחרונות.',
  'מכרז גדול פורסם לבניית פרויקט מגורים משולב עם שטחי מסחר ומשרדים בלב גוש דן.',
  'במסגרת תוכנית ההתחדשות העירונית, מבנים ישנים יהרסו לטובת בניינים מודרניים עם שטחים קהילתיים.',
  'תושבים רבים מעדיפים לעבור לפריפריה בעקבות עליית מחירים חדה בערים המרכזיות וחיפוש אחר איכות חיים גבוהה יותר.',
]


export const realEstateVideosData: VideoModel[] = [
    {
    id: 'id1',
    title: storiesTitles[7],
    description: storiesDescriptions[7],
    imageUrl: storiesImageUrls[0],
    autor: 'דנה כהן',
    date: '28.03'
  },
  {
    id: 'id2',
    title: storiesTitles[4],
    description: storiesDescriptions[9],
    imageUrl: storiesImageUrls[6],
    autor: 'גל זיו',
    date: '14.11'
  },
  {
    id: 'id3',
    title: storiesTitles[7],
    description: storiesDescriptions[4],
    imageUrl: storiesImageUrls[1],
    autor: 'תום ברק',
    date: '19.07'
  },
  {
    id: 'id4',
    title: storiesTitles[3],
    description: storiesDescriptions[5],
    imageUrl: storiesImageUrls[8],
    autor: 'נועה ברק',
    date: '10.02'
  },
  {
    id: 'id5',
    title: storiesTitles[5],
    description: storiesDescriptions[6],
    imageUrl: storiesImageUrls[2],
    autor: 'לירון רבינוביץ',
    date: '29.04'
  },
  {
    id: 'id6',
    title: storiesTitles[4],
    description: storiesDescriptions[1],
    imageUrl: storiesImageUrls[0],
    autor: 'אייל ברק',
    date: '26.07'
  },
  {
    id: 'id7',
    title: storiesTitles[7],
    description: storiesDescriptions[8],
    imageUrl: storiesImageUrls[0],
    autor: 'מיכל כהן',
    date: '14.10'
  },
  {
    id: 'id8',
    title: storiesTitles[0],
    description: storiesDescriptions[5],
    imageUrl: storiesImageUrls[5],
    autor: 'דנה פרידמן',
    date: '30.01'
  },
  {
    id: 'id9',
    title: storiesTitles[2],
    description: storiesDescriptions[2],
    imageUrl: storiesImageUrls[2],
    autor: 'גל שלו',
    date: '09.10'
  },
  {
    id: 'id10',
    title: storiesTitles[2],
    description: storiesDescriptions[9],
    imageUrl: storiesImageUrls[6],
    autor: 'לירון שלו',
    date: '23.01'
  },
  {
    id: 'id11',
    title: storiesTitles[9],
    description: storiesDescriptions[6],
    imageUrl: storiesImageUrls[0],
    autor: 'דנה רבינוביץ',
    date: '03.08'
  },
  {
    id: 'id12',
    title: storiesTitles[0],
    description: storiesDescriptions[5],
    imageUrl: storiesImageUrls[7],
    autor: 'גל ברק',
    date: '15.12'
  },
  {
    id: 'id13',
    title: storiesTitles[4],
    description: storiesDescriptions[4],
    imageUrl: storiesImageUrls[4],
    autor: 'לירון לוי',
    date: '04.12'
  },
]
