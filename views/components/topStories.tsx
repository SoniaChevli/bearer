import { BearerFetch, Component, Intent } from "@bearer/core";

@Component({
  tag: "top-stories",
  shadow: true
})
export class TopStories {
  @Intent("topStories")
  fetcher: BearerFetch;
  render() {
    console.log("FETCHy", this.fetcher);
    return (
      <div>
        {" "}
        <h1> INSIDE HERE </h1>
        <bearer-scrollable fetcher={this.fetcher} />
      </div>
    );
  }
}
