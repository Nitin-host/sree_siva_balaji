import React, { Component } from "react";
import "../styles/YourStyles.css"; // Optional for additional styling

class WeDoTyping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: "",
      arrayIndex: 0,
      charIndex: 0,
    };

    this.weDo = [
      "Commercial Interior",
      "Residential Interior",
      "Office Spaces",
      "Retail Spaces",
      "Hospitality Projects",
    ];

    this.typingSpeed = 100; // speed of typing
    this.pauseTime = 1500; // time to pause before deleting
  }

  componentDidMount() {
    this.startTyping();
  }

  componentWillUnmount() {
    clearTimeout(this.typingTimeout);
  }

  startTyping = () => {
    const currentItem = this.weDo[this.state.arrayIndex];
    const { charIndex } = this.state;

    if (charIndex < currentItem.length) {
      this.setState({
        currentText: this.state.currentText + currentItem.charAt(charIndex),
        charIndex: charIndex + 1,
      });

      this.typingTimeout = setTimeout(this.startTyping, this.typingSpeed);
    } else {
      // Pause before deleting and going to next
      setTimeout(this.startDeleting, this.pauseTime);
    }
  };

  startDeleting = () => {
    const { currentText } = this.state;

    if (currentText.length > 0) {
      this.setState(
        {
          currentText: currentText.slice(0, -1),
        },
        () => {
          this.typingTimeout = setTimeout(
            this.startDeleting,
            this.typingSpeed / 2
          );
        }
      );
    } else {
      // Move to next word
      this.setState(
        (prevState) => ({
          arrayIndex: (prevState.arrayIndex + 1) % this.weDo.length,
          charIndex: 0,
        }),
        this.startTyping
      );
    }
  };

  render() {
    return (
      <span className="bt_bb_headline_content">
        <span>
          We Do <span className="typing-text">{this.state.currentText}</span>
        </span>
      </span>
    );
  }
}

export default WeDoTyping;
