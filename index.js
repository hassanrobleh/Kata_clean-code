import { RabbitsMeeting } from "./rabbitsMeeting";

export const AnimalsSong = () => {
  

  return {
    verse(number) {
      const rabbitsMeeting = RabbitsMeeting.of(number);
      // const metRabbits = RabbitsMeeting.create({ number: 1 });

      return `${rabbitsMeeting}`;
    },

    song() {
      let song = "";
      for (let i = 1; i < 8; i++) {
        song += `${this.verse(i)}${i < 7 ? "\n" : ""}`;
      }

      return song;
    },
  };
};
