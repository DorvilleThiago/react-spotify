export default function transformList(list:string[]) {
    let artists = '';
    for (let i = 0; i < list.length; i++) {
      if (i < 3) {
        artists += list[i];
        if (i !== 2 && i !== list.length - 1) {
          artists += ', ';
        }
      } else {
        break;
      }
    }
    return artists;
  }
  