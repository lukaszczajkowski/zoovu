import z from '../resources/letters/zoovu-z.svg';
import o from '../resources/letters/zoovu-o.svg';
import v from '../resources/letters/zoovu-v.svg';
import u from '../resources/letters/zoovu-u.svg';


let imgs = { 
    z,
    o,
    v,
    u
};

let getImage = (key) => imgs[key];

export default getImage;

