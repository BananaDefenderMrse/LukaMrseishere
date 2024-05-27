import React from 'react';
import Pvp from './Pvp';

export default function Roditelj() {
    const roditelj = {
        a: "Sword",
        b: "Fishing rod",
        c: "Healing",
        d: "Water bucket",
        e: "Lava bucket",
        f: "blocks",
        g: "bow"
    };

    return (
        <div className="app">
            <Pvp pro={roditelj} />
        </div>
    );
}