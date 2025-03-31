import React, { useState } from 'react';
export default function RandomGift() {
    const gifts = [
        "🍕 Pizza",
        "🍔 Burger",
        "🍝 Pasta",
        "🥗 Salad",
        "🎁 Gift",
        "🎉 Party",
        "🎈 Balloon",
    ];

    const [gift, setGift] = useState("");

    function randomIndex() {
        setGift(gifts[Math.floor(Math.random() * gifts.length)]);
    }

    return (
        <div>
            <h2>{gift?gift:"Chưa có phần thưởng"}</h2>
            <button onClick={randomIndex}>
                Get Random Gift
            </button>
        </div>
    )
}