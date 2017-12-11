import React from 'react';

const container = {
    padding: 0,
    margin: 10,

    display: '-webkit-box',
    display: '-moz-box',
    display: '-ms-flexbox',
    display: '-webkit-flex',
    display: 'flex',

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
}

const cityList = {
    background: 'tomato',
    padding: '5px 10px',
    width: '200px',
    height: '150px',
    marginTop: 10,
    lineHeight: '150px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '3em',
    textAlign: 'center'
}
const City = (props) => {
    // console.log(props.city)
    return (
        <div className="container">
            <div style={container} className="cityList">

                {props
                    .city
                    .map((item) => {
                        return (
                            <div style={cityList} className="cityStyle" key={item.id}>
                                <span
                                    style={{
                                    background: `url(${item.img})`
                                }}></span>
                            </div>
                        )
                    })}

            </div>
        </div>
    );
}
export default City;
