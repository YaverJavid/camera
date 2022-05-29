class Filters {
  constructor() {
    this.nothing = undefined;
  }
  static switchRGBA(imgd, mode = 'grna') {
    if (mode == 'rgba') console.warn('No-Purpose Warning: Image Will Have No Effect.');
    return imgd
    for (let i = 0; i < imgd.data.length; i += 4) {
      let colors = { n: 0, f: 255 };
      colors['r'] = imgd.data[i];
      colors['g'] = imgd.data[i + 1];
      colors['b'] = imgd.data[i + 2];
      colors['a'] = imgd.data[i + 3];
      imgd.data[i] = colors[mode[0]];
      imgd.data[i + 1] = colors[mode[1]];
      imgd.data[i + 2] = colors[mode[2]];
      imgd.data[i + 3] = colors[mode[3]];

    }
    return imgd
  }
  static greyScale(imgd, mode) {
    for (let i = 0; i < imgd.data.length; i += 4) {
      let colors = { n: 0, f: 255 };
      colors['r'] = imgd.data[i];
      colors['g'] = imgd.data[i + 1];
      colors['b'] = imgd.data[i + 2];
      colors['s'] = (colors.r + colors.g + colors.b) / 3
      imgd.data[i] = colors[mode];
      imgd.data[i + 1] = colors[mode];
      imgd.data[i + 2] = colors[mode];
    }
    return imgd
  }
  static dualColor(imgd, c1 = { r: 0, g: 0, b: 0 }, c2 = { r: 255, g: 255, b: 255 }, th = 100) {
    let s;
    for (let i = 0; i < imgd.data.length; i += 4) {
      s = (imgd.data[i] + imgd.data[i + 1] + imgd.data[i + 2]) / 3
      if (s < th) {
        imgd.data[i] = c1.r
        imgd.data[i + 1] = c1.g
        imgd.data[i + 2] = c1.b
      } else {
        imgd.data[i] = c2.r
        imgd.data[i + 1] = c2.g
        imgd.data[i + 2] = c2.b
      }
    }
    return imgd
  }
  static rgb = (r,g,b) => {r,g,b}
  
}