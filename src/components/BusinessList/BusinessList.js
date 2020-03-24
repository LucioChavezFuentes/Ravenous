import React from 'react';
import './BusinessList.css'
import Business from '../business/Business';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

class BusinessList extends React.Component {
    render() {
        return (
            <>
            <div className="sweet-loading">
                <ClipLoader
                    css={override}
                    size={150}
                    color={"#cca353"}
                    loading={this.props.loading}
                />
            </div>
            <div className="BusinessList"  >
                {this.props.businesses.map(business => {
                    return <Business business={business} key={business.id} />
                }) }
            </div>
            </>
        )
    }
};

export default BusinessList;