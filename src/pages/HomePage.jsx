import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import "../App.css";
import { Card, Button, Space, Skeleton, Spin } from "antd";
const { Meta } = Card;
const clientID = `?client_id=${process.env.REACT_APP_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function HomePage() {
    const location = useLocation()
    const { allPhoto } = location.state || {}
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState(allPhoto || []);
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState("");


    useEffect(() => {
        fetchImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const fetchImages = async () => {
        setLoading(true);
        let url;
        const urlPage = `&page=${page}`;
        const urlQuery = `&query=${query}`;
        if (query) {
            url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
        } else {
            url = `${mainUrl}${clientID}${urlPage}`;
        }
        try {
            const response = await fetch(url, {
                credentials: 'same-origin'
            });
            const data = await response.json();
            setPhotos((oldPhotos) => {
                if (query && page === 1) {
                    return data.results;
                } else if (query) {
                    return [...oldPhotos, ...data.results];
                } else {
                    return [...oldPhotos, ...data];
                }
            });
            // setData((oldPhotos) => {
            //     if (query && page === 1) {
            //         return data.results;
            //     } else if (query) {
            //         return [...oldPhotos, ...data.results];
            //     } else {
            //         return [...oldPhotos, ...data];
            //     }
            // });
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        const event = window.addEventListener("scroll", () => {
            if (
                (!loading && window.innerHeight + window.scrollY) >=
                document.body.scrollHeight - 2
            ) {
                setPage((oldPage) => {
                    return oldPage + 1;
                });
            }
        });
        return () => window.removeEventListener("scroll", event);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(1);
    };
    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    }
    function decriptionHandler(event) {
        event.preventDefault();
        const validateUrl = validURL(event['target'].innerText)
        console.log("validateUrl", validateUrl)
        if (validateUrl) {
            window.open(event['target'].innerText, '_blank')
        }
    }
    return (
        <div className="container">
            <Space className="row inputBox" style={{ marginBottom: 16, marginTop: 10 }}>
                <input
                    type="text"
                    placeholder="Search Images"
                    value={query}
                    style={{ width: 270 }}
                    onChange={(e) => setQuery(e.target.value)}
                    className="form-control"
                />
                <Button type="primary" onClick={handleSubmit}>
                    Search
                </Button>
            </Space>
            <div className="row">
                {photos.map((image, index) => (
                    <div key={index} className="col-md-4">
                        <Link to={`/DetailsPage/${image.id}`} state={{ data: image, allPhoto: photos }} > <Card
                            className="antd-card"
                            hoverable
                            cover={
                                <img
                                    src={image.urls.regular}
                                    alt="pic"
                                    style={{ height: "150px", objectFit: "cover" }}
                                />
                            }
                        >
                            <Meta onClick={decriptionHandler} title={image.user.first_name ? image.user.first_name : "No name present"} description={image.user.social.portfolio_url ? image.user.social.portfolio_url : "No url present"} />
                        </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    );
}
export default HomePage;
