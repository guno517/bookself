export const mapColorToHex = (color?: string) => {
  switch (color) {
    case 'white':
    case 'gray':
      return '#6B7280';
    case 'brown': return '#92400E'
    default: return '#6B7280'
  }
}

export const mapTypeToHex = (type: string) => {
  switch (type) {
    case 'bug': return '#92BC2C';
    default: return '#6B7280'
  }
}