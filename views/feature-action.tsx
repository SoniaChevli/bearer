/*
  The purpose of this component is to deal with scenario navigation between each views.

*/

import { RootComponent } from "@bearer/core";
import "@bearer/ui";

@RootComponent({
  name: "action",
  group: "feature"
})
export class FeatureAction {
  render() {
    return (
      <bearer-navigator
        btnProps={{ content: "nyTimesAPI", kind: "primary" }}
        direction="right"
      >
        <bearer-navigator-screen
          navigationTitle="Top Stories"
          name="topStories"
        >
          <div style={{ textAlign: "center" }}>Top Stories</div>
          <top-stories />
        </bearer-navigator-screen>
      </bearer-navigator>
    );
  }
}
