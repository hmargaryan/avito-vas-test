export default (colors) => {
  if (colors.length === 1) {
    return colors[0].color
  }

  return `linear-gradient(${colors.map(({ color, end }) => `${color} ${end || 0}%`).join(', ')})`
}