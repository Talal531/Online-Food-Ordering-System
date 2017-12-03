import React, {Component} from 'react';

import {Footer} from 'react-materialize';

const Footerr = () =>{
    return(
        <div>
            <Footer style={{backgroundColor:'#282C35'}}
                moreLinks={
		            <a className="grey-text text-lighten-4 right" href="#!">Facebook</a>
	                }
            >
            <h5 className="white-text">foodMasty</h5>
            <p className="white-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat fugiat minus dolor fuga, laboriosam a reiciendis aut consequuntur non assumenda!</p>
            </Footer>
        </div>
    )
}
export default Footerr;
