var reverseLeftWords = function (s, n) {
  const reverse = (s, left, right) => {
    let arr = s.split('')
    console.log('arrBegin:', arr.join(''), ' left:', left, ' right:', right)

    while (left < right) {
      let temp = arr[left]
      arr[left++] = arr[right]
      arr[right--] = temp
    }
    console.log('arrEnd:', arr.join(''))
    return arr.join('')
  }
  s = reverse(s, 0, n - 1)
  s = reverse(s, n, s.length - 1)
  s = reverse(s, 0, s.length - 1)
  return s
}

console.log(reverseLeftWords('cdefgab', 2))
