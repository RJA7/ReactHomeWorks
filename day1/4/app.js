const Component = React.Component;

const Member = class extends Component {
    render() {
        const member = this.props.member;
        
        return (
            <div className="member-item">
                <div className="member-photo-block">
                    <img src={member.avatar} width="120px" />
                </div>
                <div className="member-info">
                    <div className="member-name">
                        {member.name}
                    </div>
                    <div className="member-city-block">
                        <img src="img/city.png" />
                        <div className="member-city">
                            {member.city}
                        </div>
                    </div>
                    <div className="member-socials">
                        <a href={member.facebook}><img src="img/facebook.png" /></a>
                        <a href={member.tweeter}><img src="img/tweeter.png" /></a>
                        <a href={'mailto:' + member.facebook}><img src="img/email.png" /></a>
                    </div>
                </div>
            </div>
        );
    }
};

const Members = class extends Component {
    render() {
        return (
            <div>
                {this.props.members.map(member => (
                    <Member member={member}/>
                ))}
            </div>
        );
    }
};

const App = class extends Component {
    render() {
        return (
            <div className="app">
                <h1>Meet React Course Members</h1>
                <Members members={this.props.members}/>
            </div>
        );
    }
};

const members = [
    {
        name    : 'Roma',
        city    : 'Lviv',
        avatar  : 'https://avatars2.githubusercontent.com/u/16480809?v=3&s=466',
        facebook: 'facebook',
        tweeter : 'tweeter',
        email   : 'a@i.ua'
    }
];

ReactDOM.render(<App members={members}/>, document.getElementById('app'));
