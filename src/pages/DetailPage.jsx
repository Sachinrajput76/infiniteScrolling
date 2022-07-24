import React, { useState, useEffect } from "react";
import { Button } from 'antd';

import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import "../App.css";

function DetailPage() {
    let navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation()
    const { data, allPhoto } = location.state
    const [loading, setLoading] = useState(false);
    return (
        <div className="container">
            <div className="row detailsPage-main">
                <div className="goBack">
                    <Button type="primary" onClick={() => navigate('/')}>go back</Button>
                </div>
                <div className="details-image">
                    <img
                        src={data.urls.regular}
                        alt="pic"
                        className="detailsPage-image"
                    />
                </div>
            </div>
        </div>
    );
}
export default DetailPage;
