export default function transformList(list:string[]) {
    let artists = '';
    for (const artist of list) {
      artists+=artist
    }
    return artists;
  }
  