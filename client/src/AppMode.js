/* AppMode: The enumerated type for AppMode. If we were using TypeScript, we could
use the predefined enum type; see
https://www.typescriptlang.org/docs/handbook/enums.html. Declaring an enumerated
type as a JavaScript object has important limitations (see
https://stackoverflow.com/questions/287903/what-is-the-preferred-syntax-for-defining-enums-in-javascript),
but it will do for our purposes*/

const AppMode = {
  PROFESSIONAL: "ProfessionalMode",
  MUSIC: "MusicMode",
  BLOG: "BlogMode"
};

Object.freeze(AppMode); //This ensures that the object is immutable.

export default AppMode;