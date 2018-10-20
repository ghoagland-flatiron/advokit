import React from 'react';
import FadeIn from 'react-fade-in';


const story = "I felt a little *sad*, but in the end, I know my *journey* that *God* has planned for me didn't have me having a baby at 18. I *pray* that my story will help others who are in the process of this or maybe already got an abortion done. The overwhelming feeling of the day of is something I will never forget for the rest of my life, August 8th, 2018. This will make me and whoever I love and *appreciate our future children* that much more. For those who don't believe you will be forgiven by God, God sent his one and only Son to die on a cross for our sins. 'It’ll clear the bitterness away It can even set a prisoner free. There is no end to what its power can do. So, let it go and be amazed by what you see through eyes of grace. The prisoner that it really frees is you, *forgiveness*.' Don't be a prisoner in your own thoughts, know that God is with you and knows your *individual story*. You are forgiven... I have been forgiven."

// •    Sad
// •    Journey
// •    God
// •    Pray
// •    Appreciate our future children
// •    Forgiveness
// •    Individual story

export default class StoryInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      enter: true
    }
  }

  toggleWords() {
    this.setState({ showWords: !this.state.showWords })
  }

  significantWords() {
    return(
      <FadeIn>
        <div id='significant-words-container' onClick={this.toggleWords.bind(this)}>
          <h1>Significant Words</h1>
          <ul id='significant-words'>
            { this.props.words.map( word => <li>{word}</li>)}
          </ul>
        </div>
      </FadeIn>
    )
  }

  storyDisplay() {
    const words = this.state.showWords ? this.significantWords() : ""
    return(
      <div>
        {words}
        <p className='story'>
          {story}
        </p>
        <button className='button' onClick={this.props.switchView('chart')}>View Data</button>
      </div>
    )
  }

  toggleEnter() {
    setTimeout(() => (this.setState({
          enter: !this.state.enter,
          showWords: true
        })), 500);
  }

  storyInput() {
    return (
      <div id='story-input'>
        <h1>Enter Story</h1>
        <div className="story-form">
          <textarea className="input" placeholder="hello" />
          <button onClick={this.toggleEnter.bind(this)} className="button">Submit</button>
        </div>
      </div>
    )
  }
  render() {
    return (this.state.enter ? this.storyInput() : this.storyDisplay())
  }
}
