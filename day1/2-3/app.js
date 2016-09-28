const Article = React.createClass({

    render: function () {
        const popularity = this.props.likesAmount + this.props.tweetsAmount;
        let fontSize = popularity / 10;
        fontSize = fontSize < 14 ? 14 : fontSize > 20 ? 20 : fontSize;

        return (
            <div className="comment">
                <h1>{this.props.title}</h1>
                <div>by <b>{this.props.author}</b></div>
                <br />
                <div style={{fontSize}}>{this.props.text}</div>
                <br />
                <div>
                    <img src={this.props.isLiked ? 'img/liked.png' : 'img/like.png'} width="15px" />
                    <span>{this.props.likesAmount}</span>
                    <img src="img/comment.png" width="15px"/>
                    <span>{this.props.tweetsAmount}</span>
                </div>
            </div>
        );
    }
});

const article = {
    title       : 'Article title',
    author      : 'John Snow',
    text        : `Some text ikfkslkdfmsldfmlskdm fmsdlfmskdflsdmfsdmflsmd flsdmflskdmflksdmflskdmf sadsfsdf sdfsdfsdfssdfsdfsdfffffffffff dfsdfffffffffff eeeeeeeeeeeeeeeeee wwwwwwwweeeeeeeeeeeeeee eeeeeeeeeeeeeeee eeeeeeeeeeeeeeee eeeeeeeeeeeee.`,
    likesAmount : 300,
    tweetsAmount: 2,
    isLiked     : true,
    isRetweeted : false
};

ReactDOM.render(<Article title={article.title}
                         author={article.author}
                         text={article.text}
                         likesAmount={article.likesAmount}
                         tweetsAmount={article.tweetsAmount}
                         isLiked={article.isLiked}
                         isRetweeted={article.isRetweeted}
/>, document.getElementById('app'));
