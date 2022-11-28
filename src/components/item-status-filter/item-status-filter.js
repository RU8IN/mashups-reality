import React from "react";

export default function ItemStatusFilter() {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-info">All</button>
            <button type="button" className="btn btn-outline-second">Active</button>
            <button type="button" className="btn btn-outline-second">Done</button>
        </div>
    )
}