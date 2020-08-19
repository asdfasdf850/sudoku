/**
 * An array shuffling using the Fisher-Yates shuffle alogrithm
 * @param arr An array that you want shuffled
 */

export function shuffleArray(arr: any[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}
