import * as React from "react";
import { HomeScreen, WishScreen, WishText } from "./style";

export default class index extends React.Component<any, any> {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    const homeView = (
      <HomeScreen>
        <img src="../../../static/images/diwali/diwaliRocket.gif" alt="img" />
      </HomeScreen>
    );

    const wishView = (
      <WishScreen>
        <WishText>
          <h2>Happy Diwali</h2>
          {/* <br /> */}
          <h3>from</h3>
          <span>{this.props.query.from}</span>
          <br />
          <a
            href="whatsapp://send?text=The text to share!"
            data-action="share/whatsapp/share"
          >
            Share via Whatsapp
          </a>
        </WishText>
        <img src="../../../static/images/diwali/diwaliRocket.gif" alt="img" />
      </WishScreen>
    );

    return (
      <React.Fragment>
        {Object.keys(this.props.query).length ? wishView : homeView}
      </React.Fragment>
    );
  }
}
