import React, { useState } from 'react';

const Icon = ({ iconComponent, description }) => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div
            className="rounded-xl border-4 border-neutral-300 p-4 text-center text-7xl"
            title={description}
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}
        >
            {iconComponent}
            {showDescription && (
                <div className="mt-2 text-sm">{description}</div>
            )}
        </div>
    );
};

export default Icon;
