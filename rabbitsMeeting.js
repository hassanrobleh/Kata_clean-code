import { Animal } from "./animal";
import { Color } from "./color";
import { RabbitGroup } from "./rabbitGroup";

const action = ({ number, metGroup }) => {
  if (number === 1) {
    return `Rencontre 1 autre ${metGroup}`;
  }
  return `Rencontrent 1 autre ${metGroup}`;
};

const conclusion = (group) => {
  const newRabbit = group.addRabbit();
  if (newRabbit.count === 8) {
    return `8 doigts avec mes mains, pour compter les ${newRabbit}.`;
  }
  return `${newRabbit.count} ${newRabbit} sont devenus copains.`;
};

const move = (animal) => {
  if(animal === Animal.oiseau) {
    return `volant au dessus du chemin`
  }
  return `sautant sur le chemin`
}

const create = ({
  number = 1,
  color = Color.white,
  animal = Animal.lapin,
  // move = `sautant sur le chemin`
} = {}) => {
  const group = RabbitGroup.create({ number, color, animal });
  const metGroup = RabbitGroup.create({ number: 1, color, animal });

  const theAction = action({ number, metGroup });
  const theConclusion = conclusion(group);

  return Object.freeze({
    group,
    action: action({ number, metGroup }),
    conclusion: conclusion(group),
    toString() {
      return `${number} ${group} ${move} 
${theAction}
${theConclusion}
`;
    },
  });
};

// Design Factory
const of = (number) => {
  switch (number) {
    case 2:
      return create({ number, color: Color.grey });
    case 3:
      return create({ number, color: Color.green, animal: Animal.crapaud });
    case 5:
      return create({ number, color: Color.marron });
    case 6:
      return create({ number, color: Color.white, animal: Animal.oiseau, move: `volant au dessus du chemin` });

    default:
      return create({ number, color: Color.white });
  }
};

export const RabbitsMeeting = {
  of,
};
