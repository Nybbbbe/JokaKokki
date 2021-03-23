import React from 'react';

function SubTitle({src, size=2}) {
    switch (size) {
        case 2: {
            return <h2 className="mt-4">{src}</h2>;
        }
        case 3: {
            return <h3 className="mt-4">{src}</h3>;
        }
        case 4: {
            return <h4 className="mt-4">{src}</h4>;
        }
        case 5: {
            return <h5 className="mt-4">{src}</h5>;
        }
        default: {
            return <h2 className="mt-4">{src}</h2>;
        }
    }
}

export default SubTitle;