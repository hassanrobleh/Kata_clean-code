const create = ({ singular = "", plural = "" } = {}) =>
  Object.freeze({
    toString(number = 1) {
      if (number === 1) {
        return singular;
      }
      return plural;
    },
  });

export const Animal = {
  lapin: create({ singular: "lapin", plural: "lapins" }),
  crapaud: create({ singular: "crapaud", plural: "crapauds" }),
  oiseau: create({ singular: "oiseau", plural: "oiseaux" }),
};
