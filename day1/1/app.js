const Article = React.createClass({
    render: function () {
        return React.createElement('div', null, 
            React.createElement('h1', null, this.props.title),
            React.createElement('div', null, `by ${this.props.author}`),
            React.createElement('div', null, this.props.text)
        );
    }
});

const article = {
    title: 'Article title',
    author: 'John Snow',
    text: 'Some text.'
};

ReactDOM.render(
    React.createElement(Article, article),
    document.getElementById('app'));
