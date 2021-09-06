const create = ({ singular = "", plurial = "" } = {}) =>
  Object.freeze({
    toString(number = 1) {
      if (number === 1) {
        return singular;
      }
      return plurial;
    },
});

export const Color = {
    create,
    white: create({singular: 'blanc', plurial: 'blancs'}),
    grey: create({singular: 'gris', plurial: 'gris'}),
    green: create({singular: 'vert', plurial: 'verts'}),
    marron: create({singular: 'marron', plurial: 'marrons'})
}
