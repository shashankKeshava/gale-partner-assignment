import React, {Component} from 'react'

import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

const cartLabel = {
    header: "Your Cart Summary",
    minSummary: {
        qtyCol: "Items in Cart",
        priceCol: "Total Rs"
    },
    summary: {
        itemsCol: "Item",
        qtyCol: "Quantity",
        priceCol: "Total Rs"
    }
}

const cartStyle = {
    position: "relative",
    width: "500px",
    "zIndex":2,
}

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }

    __generateCart = () => {
        const data = (
            <Card>
                <CardTitle title={cartLabel.header}/>
                <Table>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>{cartLabel.minSummary.qtyCol}</TableHeaderColumn>
                            <TableHeaderColumn>{cartLabel.minSummary.priceCol}</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow>
                            <TableRowColumn>John Smith</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                <Divider/>
                <Table>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>{cartLabel.summary.itemsCol}</TableHeaderColumn>
                            <TableHeaderColumn>{cartLabel.summary.qtyCol}</TableHeaderColumn>
                            <TableHeaderColumn>{cartLabel.summary.priceCol}</TableHeaderColumn>
                            <TableHeaderColumn></TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        <TableRow>
                            <TableRowColumn>John Smith</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                            <TableRowColumn>Employed</TableRowColumn>
                            <TableRowColumn><FlatButton label="Remove" secondary={true} /></TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
        this.setState({cart: data})
    }
    componentDidMount = () => {
        this.__generateCart();
    }
    render() {
        return (
            <div style={cartStyle}>
                {this.state.cart}
            </div>
        )
    }
}

export default Cart;