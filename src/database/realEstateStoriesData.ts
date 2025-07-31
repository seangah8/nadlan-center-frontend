import type { StoriesCardModel } from '../models/StoryCardModel'

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

const storiesCategories : string[] = [
    'נדל”ן למגורים',
    'התחדשות עירונית',
    'נדל”ן מניב והשקעות',
    'דעות וניתוחים',
    'חדשות הענף',
    'הפנים מאחורי ',
    'עיצוב ואדריכלות',
]

export const realEstateStoriesData: StoriesCardModel[] = [
{
    title: 'מכרז חדש לבניית דירות בגוש דן',
    description: 'הוקם מתחם מגורים חדש עם דירות יוקרתיות, חניונים תת-קרקעיים ושטחים קהילתיים.',
    imageUrl: storiesImageUrls[8],
    category: storiesCategories[4],
    autor: 'שירה פרידמן',
    date: '11.05'
},
{
    title: 'הוזלה במחירי שכירות בפריפריה הדרומית',
    description: 'שכונה חדשה תוקם ליד אוניברסיטה ותמשוך סטודנטים ומשפחות צעירות עם מחירים נוחים.',
    imageUrl: storiesImageUrls[3],
    category: storiesCategories[1],
    autor: 'נועה ברק',
    date: '04.08'
},
{
    title: 'מכרז חדש לבניית דירות בגוש דן',
    description: 'הפרויקט מציע שילוב של מגורים, משרדים וחנויות באזור מרכזי ומתפתח בעיר.',
    imageUrl: storiesImageUrls[0],
    category: storiesCategories[2],
    autor: 'שירה לוי',
    date: '15.03'
},
{
    title: 'יזמים החלו בבניית פרויקט מגדלים חדש',
    description: 'העירייה אישרה תוכנית להרחבת שכונת מגורים הכוללת גנים, שבילים ותשתיות חכמות.',
    imageUrl: storiesImageUrls[5],
    category: storiesCategories[3],
    autor: 'יואב פרידמן',
    date: '14.07'
},
{
    title: 'הרחבת תוכנית תמ"א 38 אושרה במרכז',
    description: 'יזמים חושפים תוכנית לבניית שכונה חכמה עם תשתיות ירוקות וחיבור מהיר לרכבת הקלה.',
    imageUrl: storiesImageUrls[9],
    category: storiesCategories[2],
    autor: 'ליאן פרידמן',
    date: '22.06'
},
{
    title: 'עלייה חדה בביקוש לדירות חדשות',
    description: 'הפרויקט מציע שילוב של מגורים, משרדים וחנויות באזור מרכזי ומתפתח בעיר.',
    imageUrl: storiesImageUrls[1],
    category: storiesCategories[5],
    autor: 'דניאל שטרן',
    date: '10.08'
},
{
    title: 'יזמים החלו בבניית פרויקט מגדלים חדש',
    description: 'העירייה אישרה תוכנית להרחבת שכונת מגורים הכוללת גנים, שבילים ותשתיות חכמות.',
    imageUrl: storiesImageUrls[8],
    category: storiesCategories[6],
    autor: 'ליאן ברק',
    date: '08.04'
},
{
    title: 'מחירי הדירות בירושלים עולים שוב',
    description: 'מחירי השכירות בירושלים עולים בעקבות ביקוש גובר ואספקה מוגבלת של דירות איכות.',
    imageUrl: storiesImageUrls[0],
    category: storiesCategories[3],
    autor: 'ליאן שטרן',
    date: '18.07'
},
{
    title: 'מחירי הדירות בירושלים עולים שוב',
    description: 'הפרויקט מציע שילוב של מגורים, משרדים וחנויות באזור מרכזי ומתפתח בעיר.',
    imageUrl: storiesImageUrls[1],
    category: storiesCategories[1],
    autor: 'שירה ברק',
    date: '27.10'
},
{
    title: 'דירה בתל אביב נמכרה במחיר שיא',
    description: 'בניין חדש יוקם עם דירות קטנות למשפחות צעירות במחיר מוזל יחסית לשוק.',
    imageUrl: storiesImageUrls[8],
    category: storiesCategories[1],
    autor: 'רוני אזולאי',
    date: '10.09'
},
{
    title: 'שכונה חדשה תוקם סמוך לפארק עירוני',
    description: 'מחירי השכירות בירושלים עולים בעקבות ביקוש גובר ואספקה מוגבלת של דירות איכות.',
    imageUrl: storiesImageUrls[1],
    category: storiesCategories[2],
    autor: 'דניאל שטרן',
    date: '13.03'
},
{
    title: 'עלייה חדה בביקוש לדירות חדשות',
    description: 'יזמים חושפים תוכנית לבניית שכונה חכמה עם תשתיות ירוקות וחיבור מהיר לרכבת הקלה.',
    imageUrl: storiesImageUrls[3],
    category: storiesCategories[3],
    autor: 'יואב אביב',
    date: '09.12'
},
{
    title: 'הוזלה במחירי שכירות בפריפריה הדרומית',
    description: 'העירייה אישרה תוכנית להרחבת שכונת מגורים הכוללת גנים, שבילים ותשתיות חכמות.',
    imageUrl: storiesImageUrls[0],
    category: storiesCategories[1],
    autor: 'ליאן לוי',
    date: '21.12'
},
{
    title: 'דירה בתל אביב נמכרה במחיר שיא',
    description: 'מחירי השכירות בירושלים עולים בעקבות ביקוש גובר ואספקה מוגבלת של דירות איכות.',
    imageUrl: storiesImageUrls[8],
    category: storiesCategories[2],
    autor: 'נועה בן דוד',
    date: '07.04'
},
{
    title: 'דירה בתל אביב נמכרה במחיר שיא',
    description: 'הפרויקט כולל דירות עם נוף לים, גני ילדים, חנויות ונגישות גבוהה לתחבורה ציבורית.',
    imageUrl: storiesImageUrls[7],
    category: storiesCategories[2],
    autor: 'נועה בן דוד',
    date: '07.11'
},
{
    title: 'עלייה חדה בביקוש לדירות חדשות',
    description: 'שכונה חדשה תוקם ליד אוניברסיטה ותמשוך סטודנטים ומשפחות צעירות עם מחירים נוחים.',
    imageUrl: storiesImageUrls[2],
    category: storiesCategories[5],
    autor: 'שירה בן דוד',
    date: '06.07'
},
{
    title: 'עלייה חדה בביקוש לדירות חדשות',
    description: 'הבנייה מתבצעת בסמוך לפארק מרכזי, וכוללת שטחים פתוחים ומרכזי קניות מודרניים.',
    imageUrl: storiesImageUrls[7],
    category: storiesCategories[6],
    autor: 'עידן מלכה',
    date: '10.09'
},
{
    title: 'תוכנית חדשה לשכונת מגורים ירוקה',
    description: 'יזמים חושפים תוכנית לבניית שכונה חכמה עם תשתיות ירוקות וחיבור מהיר לרכבת הקלה.',
    imageUrl: storiesImageUrls[6],
    category: storiesCategories[4],
    autor: 'דניאל בן דוד',
    date: '04.03'
},
{
    title: 'מחירי הדירות בירושלים עולים שוב',
    description: 'הבנייה מתבצעת בסמוך לפארק מרכזי, וכוללת שטחים פתוחים ומרכזי קניות מודרניים.',
    imageUrl: storiesImageUrls[3],
    category: storiesCategories[0],
    autor: 'שירה פרידמן',
    date: '08.10'
},
{
    title: 'עלייה חדה בביקוש לדירות חדשות',
    description: 'הפרויקט מציע שילוב של מגורים, משרדים וחנויות באזור מרכזי ומתפתח בעיר.',
    imageUrl: storiesImageUrls[8],
    category: storiesCategories[3],
    autor: 'שירה שטרן',
    date: '07.04'
},
{
    title: 'הוזלה במחירי שכירות בפריפריה הדרומית',
    description: 'הפרויקט מציע שילוב של מגורים, משרדים וחנויות באזור מרכזי ומתפתח בעיר.',
    imageUrl: storiesImageUrls[3],
    category: storiesCategories[4],
    autor: 'שירה אביב',
    date: '25.02'
},
{
    title: 'שכונה חדשה תוקם סמוך לפארק עירוני',
    description: 'הבנייה מתבצעת בסמוך לפארק מרכזי, וכוללת שטחים פתוחים ומרכזי קניות מודרניים.',
    imageUrl: storiesImageUrls[3],
    category: storiesCategories[6],
    autor: 'דניאל רוזן',
    date: '27.04'
},
{
    title: 'הרחבת תוכנית תמ"א 38 אושרה במרכז',
    description: 'העירייה אישרה תוכנית להרחבת שכונת מגורים הכוללת גנים, שבילים ותשתיות חכמות.',
    imageUrl: storiesImageUrls[1],
    category: storiesCategories[0],
    autor: 'עידן אביב',
    date: '22.10'
},
{
    title: 'שכונה חדשה תוקם סמוך לפארק עירוני',
    description: 'הבנייה תתמקד בדירות קטנות עם פתרונות חניה וגישה מהירה למרכזי תעסוקה.',
    imageUrl: storiesImageUrls[0],
    category: storiesCategories[3],
    autor: 'רוני מלכה',
    date: '28.11'
},
{
    title: 'משקיעים רוכשים קרקעות חקלאיות להשקעה',
    description: 'הוקם מתחם מגורים חדש עם דירות יוקרתיות, חניונים תת-קרקעיים ושטחים קהילתיים.',
    imageUrl: storiesImageUrls[6],
    category: storiesCategories[2],
    autor: 'שירה מלכה',
    date: '06.08'
},
{
    title: 'עלייה חדה בביקוש לדירות חדשות',
    description: 'בניין חדש יוקם עם דירות קטנות למשפחות צעירות במחיר מוזל יחסית לשוק.',
    imageUrl: storiesImageUrls[2],
    category: storiesCategories[4],
    autor: 'יואב אזולאי',
    date: '06.10'
},
{
    title: 'הרחבת תוכנית תמ"א 38 אושרה במרכז',
    description: 'הבנייה תתמקד בדירות קטנות עם פתרונות חניה וגישה מהירה למרכזי תעסוקה.',
    imageUrl: storiesImageUrls[6],
    category: storiesCategories[5],
    autor: 'רוני פרידמן',
    date: '24.02'
},
{
    title: 'שכונה חדשה תוקם סמוך לפארק עירוני',
    description: 'העירייה אישרה תוכנית להרחבת שכונת מגורים הכוללת גנים, שבילים ותשתיות חכמות.',
    imageUrl: storiesImageUrls[8],
    category: storiesCategories[3],
    autor: 'שירה כהן',
    date: '17.04'
},
{
    title: 'דירה בתל אביב נמכרה במחיר שיא',
    description: 'שכונה חדשה תוקם ליד אוניברסיטה ותמשוך סטודנטים ומשפחות צעירות עם מחירים נוחים.',
    imageUrl: storiesImageUrls[2],
    category: storiesCategories[4],
    autor: 'איתי כהן',
    date: '21.01'
},
{
    title: 'הוזלה במחירי שכירות בפריפריה הדרומית',
    description: 'הוקם מתחם מגורים חדש עם דירות יוקרתיות, חניונים תת-קרקעיים ושטחים קהילתיים.',
    imageUrl: storiesImageUrls[3],
    category: storiesCategories[1],
    autor: 'איתי כהן',
    date: '22.03'
},
{
    title: 'מחירי הדירות בירושלים עולים שוב',
    description: 'שכונה חדשה תוקם ליד אוניברסיטה ותמשוך סטודנטים ומשפחות צעירות עם מחירים נוחים.',
    imageUrl: storiesImageUrls[8],
    category: storiesCategories[4],
    autor: 'איתי רוזן',
    date: '23.11'
},
{
    title: 'הוזלה במחירי שכירות בפריפריה הדרומית',
    description: 'בניין חדש יוקם עם דירות קטנות למשפחות צעירות במחיר מוזל יחסית לשוק.',
    imageUrl: storiesImageUrls[1],
    category: storiesCategories[2],
    autor: 'איתי בן דוד',
    date: '26.02'
},
{
    title: 'הוזלה במחירי שכירות בפריפריה הדרומית',
    description: 'בניין חדש יוקם עם דירות קטנות למשפחות צעירות במחיר מוזל יחסית לשוק.',
    imageUrl: storiesImageUrls[2],
    category: storiesCategories[4],
    autor: 'איתי אזולאי',
    date: '20.11'
},
{
    title: 'מחירי הדירות בירושלים עולים שוב',
    description: 'מחירי השכירות בירושלים עולים בעקבות ביקוש גובר ואספקה מוגבלת של דירות איכות.',
    imageUrl: storiesImageUrls[5],
    category: storiesCategories[5],
    autor: 'מיכל פרידמן',
    date: '11.03'
},
{
    title: 'דירה בתל אביב נמכרה במחיר שיא',
    description: 'העירייה אישרה תוכנית להרחבת שכונת מגורים הכוללת גנים, שבילים ותשתיות חכמות.',
    imageUrl: storiesImageUrls[4],
    category: storiesCategories[6],
    autor: 'תומר פרידמן',
    date: '06.04'
},
{
    title: 'מכרז חדש לבניית דירות בגוש דן',
    description: 'מחירי השכירות בירושלים עולים בעקבות ביקוש גובר ואספקה מוגבלת של דירות איכות.',
    imageUrl: storiesImageUrls[8],
    category: storiesCategories[1],
    autor: 'ליאן לוי',
    date: '05.10'
},
{
    title: 'הרחבת תוכנית תמ"א 38 אושרה במרכז',
    description: 'העירייה אישרה תוכנית להרחבת שכונת מגורים הכוללת גנים, שבילים ותשתיות חכמות.',
    imageUrl: storiesImageUrls[2],
    category: storiesCategories[4],
    autor: 'תומר ברק',
    date: '23.07'
},
{
    title: 'דירה בתל אביב נמכרה במחיר שיא',
    description: 'הבנייה מתבצעת בסמוך לפארק מרכזי, וכוללת שטחים פתוחים ומרכזי קניות מודרניים.',
    imageUrl: storiesImageUrls[2],
    category: storiesCategories[1],
    autor: 'שירה אזולאי',
    date: '17.11'
},
{
    title: 'יזמים החלו בבניית פרויקט מגדלים חדש',
    description: 'בניין חדש יוקם עם דירות קטנות למשפחות צעירות במחיר מוזל יחסית לשוק.',
    imageUrl: storiesImageUrls[4],
    category: storiesCategories[2],
    autor: 'שירה ברק',
    date: '08.12'
},
{
    title: 'מכרז חדש לבניית דירות בגוש דן',
    description: 'הפרויקט כולל דירות עם נוף לים, גני ילדים, חנויות ונגישות גבוהה לתחבורה ציבורית.',
    imageUrl: storiesImageUrls[1],
    category: storiesCategories[0],
    autor: 'שירה רוזן',
    date: '23.09'
},
{
    title: 'הרחבת תוכנית תמ"א 38 אושרה במרכז',
    description: 'הפרויקט מציע שילוב של מגורים, משרדים וחנויות באזור מרכזי ומתפתח בעיר.',
    imageUrl: storiesImageUrls[6],
    category: storiesCategories[1],
    autor: 'ליאן רוזן',
    date: '22.07'
},
{
    title: 'הוזלה במחירי שכירות בפריפריה הדרומית',
    description: 'הפרויקט מציע שילוב של מגורים, משרדים וחנויות באזור מרכזי ומתפתח בעיר.',
    imageUrl: storiesImageUrls[8],
    category: storiesCategories[6],
    autor: 'שירה כהן',
    date: '21.04'
},
{
    title: 'עלייה חדה בביקוש לדירות חדשות',
    description: 'העירייה אישרה תוכנית להרחבת שכונת מגורים הכוללת גנים, שבילים ותשתיות חכמות.',
    imageUrl: storiesImageUrls[7],
    category: storiesCategories[4],
    autor: 'מיכל לוי',
    date: '19.02'
},
{
    title: 'דירה בתל אביב נמכרה במחיר שיא',
    description: 'יזמים חושפים תוכנית לבניית שכונה חכמה עם תשתיות ירוקות וחיבור מהיר לרכבת הקלה.',
    imageUrl: storiesImageUrls[9],
    category: storiesCategories[3],
    autor: 'ליאן מלכה',
    date: '07.11'
},
{
    title: 'דירה בתל אביב נמכרה במחיר שיא',
    description: 'הפרויקט כולל דירות עם נוף לים, גני ילדים, חנויות ונגישות גבוהה לתחבורה ציבורית.',
    imageUrl: storiesImageUrls[9],
    category: storiesCategories[0],
    autor: 'יואב לוי',
    date: '21.01'
},
{
    title: 'יזמים החלו בבניית פרויקט מגדלים חדש',
    description: 'מחירי השכירות בירושלים עולים בעקבות ביקוש גובר ואספקה מוגבלת של דירות איכות.',
    imageUrl: storiesImageUrls[5],
    category: storiesCategories[2],
    autor: 'מיכל לוי',
    date: '23.02'
},
{
    title: 'משקיעים רוכשים קרקעות חקלאיות להשקעה',
    description: 'הבנייה מתבצעת בסמוך לפארק מרכזי, וכוללת שטחים פתוחים ומרכזי קניות מודרניים.',
    imageUrl: storiesImageUrls[7],
    category: storiesCategories[1],
    autor: 'נועה בן דוד',
    date: '21.02'
},
{
    title: 'משקיעים רוכשים קרקעות חקלאיות להשקעה',
    description: 'הבנייה תתמקד בדירות קטנות עם פתרונות חניה וגישה מהירה למרכזי תעסוקה.',
    imageUrl: storiesImageUrls[6],
    category: storiesCategories[2],
    autor: 'תומר אביב',
    date: '02.11'
},
{
    title: 'הרחבת תוכנית תמ"א 38 אושרה במרכז',
    description: 'הבנייה תתמקד בדירות קטנות עם פתרונות חניה וגישה מהירה למרכזי תעסוקה.',
    imageUrl: storiesImageUrls[2],
    category: storiesCategories[0],
    autor: 'עידן לוי',
    date: '20.12'
},
{
    title: 'דירה בתל אביב נמכרה במחיר שיא',
    description: 'הבנייה תתמקד בדירות קטנות עם פתרונות חניה וגישה מהירה למרכזי תעסוקה.',
    imageUrl: storiesImageUrls[2],
    category: storiesCategories[6],
    autor: 'תומר ברק',
    date: '10.01'
}
]
