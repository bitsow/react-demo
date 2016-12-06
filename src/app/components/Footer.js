import React, {Component, PropTypes} from 'react';

class Footer extends Component {
    render() {
        return (
            <div style={{marginLeft: this.props.marginLeft}} >
                <div style={{padding: '50px 25px 50px 25px', backgroundColor: 'rgb(33, 33, 33)', textAlign: 'center'}}>
                    <p style={{margin: '0px auto', padding: '0px', color: 'rgba(255, 255, 255, 0.541176)', maxWidth: '356px'}}>
                        © 2016 Nexusguard
                        <a style={{color: 'rgba(255, 255, 255, 0.870588)'}}>  Data Analysis</a>
                    </p>

                </div>

            </div>
        );
    }
}

export default Footer;
