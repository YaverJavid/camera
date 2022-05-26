
class Entity {
  constructor(name, type = 'player') {
    this.name = name
      this.type = type

  }
  newObject(name, ...pvals) {
    this[name] = {}
    if (pvals) {
      for (var i = 0; i < pvals.length; i += 2) {
        this[name][pvals[i]] = pvals[i + 1]
      }
    }
  }
  static ck = 0;

}


function colorMatch(c1, c2, threshold = 60) {
  if (matchWithenTheshold(c1.r, c2.r, threshold) &&
    matchWithenTheshold(c1.g, c2.g, threshold) &&
    matchWithenTheshold(c1.b, c2.b, threshold)) return true
  else return false
}

function matchWithenTheshold(a, b, th) {
  return Math.abs(a - b) < th
}

class Position {
  constructor(x, y, z) {
    this.x = x || undefined
    this.y = y || undefined
    this.z = z || undefined
  }
}

function averageOfCoords(locs = [{ x: 0, y: 0 }]) {
  let avg = {}
  let x = 0
  let y = 0
  for (i = 0; i < locs.length; i++) {
    x += locs[i].x
    y += locs[i].y
  }
  x /= locs.length
  y /= locs.length
  avg.x = x || xOffset
  avg.y = y || yOffset
  return avg
}
