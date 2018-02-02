import React, {Component} from 'react';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';

import Cart from './cart'

const cardStyle = {
    width: "250px",
    height: "100%",
    padding: (5, 5, 5, 5),
    margin: (5, 5, 5, 5),
    order: 4
}

const viewPort = {
    display: "flex",
    height: "100%",
    "justifyContent": "space-around",
    "flexDireaction": "row",
    "flexWrap": "wrap"
}

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    __generateCards = () => {
        const list = this
            .props
            .items
            .map(item => {
                return (
                    <Card key={item.productName} style={cardStyle}>
                        <CardMedia
                            overlay={< CardTitle title = {
                            item.productName
                        } />}>
                            <img src={item.productImage} alt=""/>
                        </CardMedia>
                        <CardTitle title={item.brandName} subtitle={item.packingDetails}/>
                        <CardText>
                            {item.price}
                        </CardText>
                        <CardActions>
                            <FlatButton label="Action1"/>
                            <FlatButton label="Action2"/>
                        </CardActions>
                    </Card>
                )
            })

        this.setState({cards: list})
    }
    componentDidMount = () => {
        this.__generateCards();
    }
    render() {
        return (
            <div style={viewPort}>
                <Cart/> {this.state.cards.length
                    ? this.state.cards
                    : "Loading Items...."}
            </div>
        );
    }
}