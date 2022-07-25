import React, { useState, useEffect } from "react";
import { Button } from 'antd';

import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import "../App.css";

function DetailPage() {
    let navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation()
    const { data, photos, page, scrollPosition } = location.state
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        return () => {
            window.history.replaceState({}, document.title)
        }
    }, [])
    return (
        <div className="container">
            <div className="row detailsPage-main">
                <div className="goBack">
                    <Link to={'/infiniteScrolling'} state={{ oldPhotos: photos, oldPage: page, oldScrollPosition: scrollPosition }} >
                        <Button type="primary">go back</Button>
                    </Link>
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
