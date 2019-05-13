import React from 'react';
import emoji from 'node-emoji';
import './index.scss';

export default class About extends React.Component {
  state = {}

  render() {
    return (
      <div className="about-container main-container">
        <div id="impress" data-autoplay="5">
          <div id="step1" className="step slide" data-x="-1000" data-y="-1500">
            <h1>#1</h1>
            <h2>大家好,我是练习时长两年半的个人练习生, 喜欢唱 跳 rap 篮球。</h2>
            {emoji.get(':chicken:')}
            <p>Hello everyone, I am a personal trainee who has been practicing for two and a half years. I like singing and dancing 说唱 basketball.</p>
          </div>
          <div id="step2" className="step slide" data-x="0" data-y="-1500">
            <h1>#2</h1>
            <h2>不好意思，搞错了...</h2>
            {emoji.get(':cold_sweat:')}
            <p>Sorry, just kidding...</p>
          </div>
          <div id="step3" className="step slide" data-x="1000" data-y="-1500">
            <h1>#3</h1>
            <h2>
              事实上,我是练习时长三年的Web程序员。致力于前后端开发和学习。
            </h2>
            {emoji.get(':muscle:')}
            <p>In fact, I am a Web programmer who has been practicing for three years. Dedicated to front-end and back-end development and learning.</p>
            <div className="skill">
              <h3>前端：</h3>
              <p>front-end:</p>
              <ul>
                <li>React</li>
                <li>Vue.js</li>
              </ul>
              <h3>后端：</h3>
              <p>back-end:</p>
              <ul>
                <li>Node.js</li>
                <li>Egg.js</li>
                <li>Nest.js</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    impress().init();
  }
}
