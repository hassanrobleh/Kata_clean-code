import { Animal } from "./animal";
import { Color } from "./color";

// const color = (number) => {
//   if (number === 1) {
//     return "blanc";
//   }
//   return "blancs";
// };

// const animal = (number) => {
//   if (number === 1) {
//     return "lapin";
//   }
//   return "lapins";
// };

const size = (number) => {
  if (number === 1) {
    return "petit";
  }
  return "petits";
};

const addRabbit = ({ number, color, animal }) =>
  create({ number: number + 1, color: color, animal: animal  });

const create = ({ number = 1, color = Color.create(), animal = Animal.create() } = {}) =>
  Object.freeze({
    count: number,
    addRabbit() {
      return addRabbit({ number, color, animal });
    },
    toString() {
      return `${size(number)} ${animal.toString(number)} ${color.toString(number)}`;
    },
  })
;

export const RabbitGroup = {
  create,
};
