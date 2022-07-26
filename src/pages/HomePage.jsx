import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import "../App.css";
import { Card, Button, Space, Skeleton, Spin, Tooltip } from "antd";
const { Meta } = Card;
const clientID = `?client_id=${process.env.REACT_APP_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function HomePage() {
    const location = useLocation()
    const { oldPhotos, oldPage, oldScrollPosition } = location.state || {}
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState("");
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        oldPhotos && setPhotos(oldPhotos)
        oldPage && setPage(oldPage)
        oldScrollPosition && setScrollPosition(oldScrollPosition)
    }, [])

    useEffect(() => {
        if (oldPage !== page && (!oldPhotos || !photos || oldPhotos?.length <= photos?.length)) {
            fetchImages();
        }
        else {
            setScrollPosition(oldScrollPosition);
            if (oldScrollPosition === scrollPosition) {
                window.scrollTo(0, oldScrollPosition);
            }
        }
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
            const response = await fetch(url);
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
        if (validateUrl) {
            window.open(event['target'].innerText, '_blank')
        }
    }
    const newPhotos = photos.filter(function (ph) {
        console.log("ph.image?.user?.social?.portfolio_url", ph.user?.social?.portfolio_url)
        return validURL(ph.user?.social?.portfolio_url) === true;
    })
    const PhotosHtml = newPhotos?.map((image, index) => (
        <div key={index} className="col-md-4">
            <Link to={`/infiniteScrolling/DetailsPage/${image.id}`} state={{ data: image, photos, page, scrollPosition }} >
                <Card
                    className="antd-card"
                    hoverable
                    cover={
                        <img
                            src={image.urls.regular}
                            alt="pic"

                        />
                    }
                >
                    <Tooltip placement="bottomLeft"
                        title={image.user.social.portfolio_url
                            ? image.user.social.portfolio_url
                            : "No url present"}
                    >
                        <Meta onClick={decriptionHandler}
                            title={image.user.first_name
                                ? image.user.first_name
                                : "No name present"}
                            description={image.user.social.portfolio_url
                                ? image.user.social.portfolio_url
                                : "No url present"}
                        />
                    </Tooltip>
                </Card>
            </Link>
        </div>
    ))

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
                {PhotosHtml}
            </div>
        </div >
    );
}
export default HomePage;
