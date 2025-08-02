
export const svgService = {
    getSvg
}



function getSvg(
    name: string, 
    color: string = 'white', 
    width: number = 10, 
    height: number = 10, 
    color2: string = 'black'
): string {
  switch (name) {
    case 'search':
      return `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.0002 19.0002L14.6572 14.6572M14.6572 14.6572C15.4001 13.9143 15.9894 13.0324 16.3914 12.0618C16.7935 11.0911 17.0004 10.0508 17.0004 9.00021C17.0004 7.9496 16.7935 6.90929 16.3914 5.93866C15.9894 4.96803 15.4001 4.08609 14.6572 3.34321C13.9143 2.60032 13.0324 2.01103 12.0618 1.60898C11.0911 1.20693 10.0508 1 9.00021 1C7.9496 1 6.90929 1.20693 5.93866 1.60898C4.96803 2.01103 4.08609 2.60032 3.34321 3.34321C1.84288 4.84354 1 6.87842 1 9.00021C1 11.122 1.84288 13.1569 3.34321 14.6572C4.84354 16.1575 6.87842 17.0004 9.00021 17.0004C11.122 17.0004 13.1569 16.1575 14.6572 14.6572Z" stroke="#F15723" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    
    case 'nadlan-white-logo':
      return `<svg width="128" height="53" viewBox="0 0 128 53" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8577 30.4176H23.5926V35.0988L17.9132 48.7087H12.7588L18.4382 35.0988H10.8577H6.17651V30.4176V26.1382H10.8577V30.4176Z" fill="white"/>
        <path d="M44.3179 30.4177V35.0989H48.0883L48.6252 35.6398V44.0595H47.619H43.1526V48.7446H49.5559H53.3103V33.6989L50.0252 30.4177H44.3179Z" fill="white"/>
        <path d="M43.1882 35.0989V30.4177H24.8892V35.0989H32.064H35.6315H38.9883L35.6315 38.2448V48.7088H40.3127V35.0989H43.1882Z" fill="white"/>
        <path d="M4.68116 31.6267H0V53.0001H4.68116V31.6267Z" fill="white"/>
        <path d="M67.5444 30.4177H54.4038V35.0989H65.6036L67.3177 36.813V48.7088H72.0029V34.8722L67.5444 30.4177Z" fill="white"/>
        <path d="M67.4572 11.2158H54.3762V15.6305H55.0643H58.0114L54.8455 18.5935V28.449H59.2562V15.6305H65.6317L67.4651 17.464V24.0701H61.5869V28.4808H69.227H71.8758V15.6345L67.4572 11.2158Z" fill="#F15723"/>
        <path d="M49.1144 17.2413V28.449H53.5251V15.4157L49.3291 11.2158H38.5271V15.6305H47.5036L49.1144 17.2413Z" fill="#F15723"/>
        <path d="M59.3357 39.2988H54.6545V48.7089H59.3357V39.2988Z" fill="white"/>
        <path d="M18.2593 15.6305H21.3059V11.2158H11.5896V15.6305H13.8486H17.0105L13.8486 18.5935V28.449H18.2593V15.6305Z" fill="#F15723"/>
        <path d="M37.7552 24.0621V15.6345L33.3365 11.2158H22.3118V15.6305H31.511L33.3445 17.464V22.2366L31.511 24.0701H22.3118V28.4808H33.3365L37.7552 24.0621Z" fill="#F15723"/>
        <path d="M0 30.2267H1.34032L2.67665 26.1382H0.548854L0 30.2267Z" fill="white"/>
        <path d="M2.13574 30.2228H3.47605L5.4368 26.1382H3.29707L2.13574 30.2228Z" fill="white"/>
        <path d="M98.9443 0L90.9342 7.9504V0L75.7612 11.4742V52.5864L90.9103 37.3537L106.135 52.1608H127.978V0H98.9483H98.9443ZM114.034 37.2861H90.9382V13.5543H114.034V37.2861Z" fill="white"/>
        </svg>`

    case 'menu-icon':
      return `<svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="15" width="10" height="3" transform="rotate(-180 10 15)" fill="white"/>
        <rect x="16" y="9" width="16" height="3" transform="rotate(-180 16 9)" fill="#F15723"/>
        <rect x="22" y="3" width="22" height="3" transform="rotate(-180 22 3)" fill="white"/>
        </svg>`

    case 'nadlan-colored-logo':
      return `<svg width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.3765 3.36841L12.6817 10.1161V3.36841L0 13.1069V48L12.6617 35.0716L25.3866 47.6388H43.6429V3.36841H19.3798H19.3765ZM31.9884 35.0142H12.685V14.8723H31.9884V35.0142Z" fill="${color}"/>
        <path d="M22.7337 0L16.0388 6.74773V0L3.35718 9.73847V44.6316L16.0189 31.7032L28.7438 44.2704H47V0H22.737H22.7337ZM35.3455 31.6458H16.0422V11.5039H35.3455V31.6458Z" fill="${color2}"/>
        </svg>`

    case 'tag':
      return `<svg width="${width}" height="${height}" viewBox="0 0 85 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.63248 4.35417L7.62821 0L85 0V19H0V8.19247L3.63248 4.35417Z" fill="${color}"/>
        </svg>`

    case 'small-tag':
      return `<svg width="${width}" height="${height}" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5.5L10.5 0H34V24H0V10.5L5 5.5Z" fill="${color}"/>
        </svg>`

    case 'play-logo':
      return `<svg width="${width}" height="${height}" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="26.6058" cy="26.5933" rx="26.6058" ry="26.5933" fill="white" fill-opacity="0.4"/>
        <path d="M36.7413 26.5932L21.538 35.3667L21.538 17.8197L36.7413 26.5932Z" fill="white"/>
        </svg>`
    
      default:
      return '';
  }
}