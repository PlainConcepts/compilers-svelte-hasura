import React from 'react';
import {
    Image,
    Text,
} from 'spectacle';

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Image src={this.props.logoSrc} className="header-logo"></Image>
                <Text className="header-twitter" textSize="large">
                    <a href="https://twitter.com/plainconcepts">@plainconcepts</a>
                </Text>
            </React.Fragment>
        );
    }
}