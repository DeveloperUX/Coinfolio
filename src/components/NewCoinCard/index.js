import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

class NewCoinCard extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <form onSubmit={this.addCoin}>
            <input id="address" />
            <dropdown></dropdown>
          </form>
        </CardContent>
        <CardActions>
          <Button>Add</Button>
        </CardActions>
      </Card>
    )
  }
}

export default NewCoinCard;