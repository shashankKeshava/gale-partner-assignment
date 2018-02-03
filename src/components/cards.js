import React, { Component } from 'react';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText,
} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';

import Cart from './cart';

const cardStyle = {
    width: '250px',
    padding: (5, 5, 5, 5),
    margin: (5, 5, 5, 5),
    order: 4,
    display: 'inline-block',
    textAlign: 'center',
};

const cardMediaStyle = {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
};

const viewPort = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
};

const cardContainer = {
    flex: 1,
    margin:(5,5,5,15)
};

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        };
    }

    __generateCards = () => {
        const list = this.props.items.map(item => {
            return (
                <Card key={item.productName} style={cardStyle}>
                    <CardMedia overlay={<CardTitle title={item.productName} titleStyle={cardMediaStyle}/>}>
                        <img src={item.productImage} alt="" />
                    </CardMedia>
                    <CardTitle
                        title={item.brandName}
                        subtitle={item.packingDetails}
                    />
                    <CardText>{item.price}</CardText>
                    <CardActions>
                        <FlatButton label="Action1" />
                        <FlatButton label="Action2" />
                    </CardActions>
                </Card>
            );
        });

        this.setState({ cards: list });
    };
    componentDidMount = () => {
        this.__generateCards();
    };
    render() {
        return (
            <div style={viewPort}>
                <div style={cardContainer}>
                    {this.state.cards.length
                        ? this.state.cards
                        : 'Loading Items....'}
                </div>
                <Cart />
            </div>
        );
    }
}
