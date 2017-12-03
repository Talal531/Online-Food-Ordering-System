import React from 'react';
import {Carousel, Button, Icon} from 'react-materialize';

const MateriaizeSlider = (props) => {
	console.log(Carousel);
	console.log(props);
    return (
        <Carousel
	        fixedItem={<div>
			<Button waves='red'><Icon left>add</Icon>Detect My Location</Button>
			</div>
			}
	        options={{ fullWidth: true }}
	        images={[
                'https://lorempixel.com/800/400/food/1',
		        'https://lorempixel.com/800/400/food/2',
		        'https://lorempixel.com/800/400/food/3',
		        'https://lorempixel.com/800/400/food/4',
		        'https://lorempixel.com/800/400/food/5'
            ]}
/>
    );
}
export default MateriaizeSlider;