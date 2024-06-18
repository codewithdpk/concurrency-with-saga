import { Dimmer, Loader, Segment } from "semantic-ui-react";

export default function AppLoader() {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </Segment>
  );
}
