import React from "react";
import ReactDOM from "react-dom";


var QuoteText = React.createClass({
    
    Data: [

    {
        quote: 'Imagine smiling after a slap in the face. Then think of doing it twenty four hours a day', name: 'Markus Zusak'
    },

    {
        quote: 'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it;and this you have the power to revoke at any moment.', name: 'Marcus Aurelius'
    },

    {
        quote:  'Never let the future disturb you.You will meet it, if you have to, with the same weapons of reason which today arm you against the present.' , name: 'Marcus Aurelius'
    },

    {
        quote:  'Warriors should suffer their pain silently', name: 'Erin Hunter'
    },

    {
        quote:  'Complaining does not work as a strategy.We all have finite time and energy.Any time we spend whining is unlikely to help us achieve our goals.And it won’ t make us happier.', name: 'Randy Pausch'
    },

    {
        quote:  'It is the power of the mind to be unconquerable.', name: 'Seneca'
    },

    {
        quote:  'People hide their truest nature.I understood that;I even applauded it.What sort of world would it be if people bled all over the sidewalks, if they wept under trees, smacked whomever they despised, kissed strangers, revealed themselves?', name: 'Alice Hoffman'
    },

    {
        quote:  'How do you defeat terrorism? Don’t be terrorized.', name : 'Salman Rushdie'
    },

    {
        quote:  'A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking.', name: 'Nassim Nicholas Taleb'
    },

    {
        quote:  'Until we have begun to go without them, we fail to realize how unnecessary many things are. We’ve been using them not because we needed them but because we had them.', name: 'Seneca'
    },

    {
        quote:  'Misfortune nobly born is good fortune.', name: 'Marcus Aurelius'
    },



    {
        quote:  'From the philosopher Catulus, never to be dismissive of a friend’s accusation, even if it seems unreasonable, but to make every effort to restore the relationship to its normal condition.', name: 'Marcus Aurelius'
    },

    {
        quote:  'It is not the man who has too little that is poor, but the one who hankers after more.', name: 'Seneca'
    },

    {
        quote:  'Nothing, to my way of thinking, is a better proof of a well ordered mind than a man’s ability to stop just where he is and pass some time in his own company.', name: 'Seneca'
    },

    {
        quote:  'For death remembered should be like a mirror, Who tells us life’ s but breath, to trust it error.', name:  'William Shakespeare'
    },

    {
        quote:  'What really frightens and dismays us is not external events themselves, but the way in which we think about them. It is not things that disturb us, but our interpretation of their significance.', name: 'Epictetus'
    },

    {
        quote:  'Love sometimes injures.Friendship always benefits, After friendship is formed you must trust, but before that you must judge.', name: 'Seneca'
    },

    {
        quote:  'When force of circumstance upsets your equanimity, lose no time in recovering your self - control, and do not remain out of tune longer than you can help.Habitual recurrence to the harmony will increase your mastery of it.', name: 'Marcus Aurelius'
    },

    {
        quote:  'Philosophy does not promise to secure anything external for man, otherwise it would be admitting something that lies beyond its proper subject - matter.For as the material of the carpenter is wood, and that of statuary bronze, so the subject - matter of the art of living is each person’ s own life.', name: 'Epictetus'
    },

    {
        quote:  'It is more necessary for the soul to be cured than the body; for it is better to die than to live badly.', name: 'Epictetus'
    }

],
    
    
    getInitialState: function() {
        return {
           quoteContent: this.Data[Math.floor(Math.random() * this.Data.length)],    
        };
    },

    
    changeQuote: function () {
        var component = this;
        component.setState({
            quoteContent: component.Data[Math.floor(Math.random() * component.Data.length)]
        });
    },
    
    render: function() {
        return (
        <div>
            <h1>{this.state.quoteContent.quote}</h1>
            <h4>{this.state.quoteContent.name}</h4>
            <button className="btn" onClick={this.changeQuote}>Quote Me Up</button>
        </div>       
        );
    }
});
   
    
var QuoteCard = React.createClass({
  render: function() {
      return (
        <div className="quote-card">
            <QuoteText />
        </div>
      );
  }
});



 
ReactDOM.render(
  <div>
    <QuoteCard />
  </div>,
  document.getElementById("container")
);  
