import React, { Component } from 'react';

class profile_card extends Component {
    render() {
        return (
            <div style={styles.card}>
                <div style={styles.cardImage}>{this.props.imageLink}IMAGE</div>
                <div style={styles.description}>
                    <div>
                        {this.props.title}
                    </div>
                    {this.props.text}
                </div>
            </div>
        );
    }
}

const styles = ({
    card: {
        height: '400px',
        width: '300px',
        border: '1px black solid',
        boxShadow: 'black 1px 1px 1px',
    },
    cardImage: {
        height: '150px',
        width: '200px',
        border: '1px black solid',
        margin: '10px auto'
    },
    description: {
        height: '200px',
        width: '240px',
        border: '1px black solid',
        margin: '5px auto'
    }
})


export default profile_card;