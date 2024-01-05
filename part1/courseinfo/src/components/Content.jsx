import { Part } from "./Part";

export function Content(props) {
  return (
    <ul>
      <li>
        <Part
          parts={props.parts[0].name}
          exercises={props.parts[0].exercises}
        />
      </li>
      <li>
        <Part
          parts={props.parts[1].name}
          exercises={props.parts[1].exercises}
        />
      </li>
      <li>
        <Part
          parts={props.parts[2].name}
          exercises={props.parts[2].exercises}
        />
      </li>
    </ul>
  );
}
