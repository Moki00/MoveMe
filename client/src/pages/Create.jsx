import React, { useState } from "react";
import {
    FinalImgArea,
    FontEdit,
    ImgPreviewArea,
    RandomB,
    ShareModal,
    SearchBar,
    Editbtn,
    LeftArrowButton,
    RightArrowButton,
} from "../components";
import background from "../images/blossom.jpg"; // need to get this from state passed from app.js
import { UNSPLASH_ACCESS_KEY, UNSPLASH_SECRET_KEY } from "../app/keys";
import styled from "styled-components";

const Create = () => {
    const [text, setText] = useState("");
    const [font, setFont] = useState("Ariel");
    const [fontSize, setFontSize] = useState(54);
    const [fontWeight, setFontWeight] = useState("400");
    const [textColor, setTextColor] = useState("white");
    const [canvasWidth, setCanvasWidth] = useState(0);
    const [canvasHeight, setCanvasHeight] = useState(150);
    const [margin, setMargin] = useState(30);
    const [bgColor, setBgColor] = useState("#444444");
    const [bgOpacity, setBgOpacity] = useState(0.5);

    // final image state settings
    const [finalImgUrl, setFinalImgUrl] = useState("");
    const [finalText, setFinalText] = useState("");
    const [finalFont, setFinalFont] = useState("Ariel");
    const [finalFontSize, setFinalFontSize] = useState(0);
    const [finalFontWeight, setFinalFontWeight] = useState(0);
    const [finalTextColor, setFinalTextColor] = useState("#ffffff");
    const [finalCanvasWidth, setFinalCanvasWidth] = useState(0);
    const [finalCanvasHeight, setFinalCanvasHeight] = useState(0);
    const [finalMargin, setFinalMargin] = useState(0);
    const [finalBgColor, setFinalBgColor] = useState("#ffffff");
    const [finalBgOpacity, setFinalBgOpacity] = useState(0.2);
    const [finalUrl, setFinalUrl] = useState("robbmdev.com");

    //Quote Api
    const [random, setRandom] = useState(true); //set to true for production!!
    const [searchTerm, setSearchTerm] = useState(""); //(deceptive hunters series) set to emptry string for production!!

    // Unsplash API
    // populate this in image fetch function
    const [photographer, setPhotographer] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const generateFinalCanvas = () => {
        setFinalImgUrl(imgUrl);
        setFinalText(text);
        setFinalFont(font);
        setFinalFontSize(fontSize);
        setFinalFontWeight(fontWeight);
        setFinalTextColor(textColor);
        setFinalMargin(margin);
        setFinalBgColor(bgColor);
        setFinalBgOpacity(bgOpacity);
        // save to db then
        // setFinalUrl("url/for/view/page");
    };

    const saveToLocalStorage = (key, value) => {
        let savedQuotes = [];
        // get array from localStorage if exists
        if (localStorage.getItem(key) !== null) {
            savedQuotes = JSON.parse(localStorage.getItem(key));
        }

        // append the new quote and save it to local storage
        savedQuotes.push(value);
        localStorage.setItem(key, JSON.stringify(savedQuotes));
    };

    //function for quote Api
    const getQuote = async () => {
        if (random) {
            const response = await fetch(
                "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en",
                {
                    mode: "cors",

                    headers: {
                        "Access-Control-Allow-Origin": "http://localhost:8000",
                    },
                }
            );
            try {
                const responsejson = await response.json();
                console.log(responsejson);
                const quote = responsejson.quoteText.trim();
                const author = responsejson.quoteAuthor.trim();
                const attributedQuote = quote + " - " + author;

                saveToLocalStorage("random" + "-quotes", attributedQuote);
                setText(attributedQuote);
            } catch (e) {
                // show error?
                console.log(e);
            }
        } else {
            //search quote
            let quote = "";
            let author = "";
            let offset = 100;
            let counter = 0;
            const formattedSearchTerm = searchTerm.trim().replace(/\s/g, "-");
            console.log(formattedSearchTerm);
            while (quote === "") {
                let responsejson;
                offset = Math.floor(Math.random() * offset);
                let url = `https://api.paperquotes.com/apiv1/quotes?tags=${formattedSearchTerm}&limit=1&offset=${offset}`;

                try {
                    const response = await fetch(url, {
                        headers: {
                            Authorization:
                                "Token f95acdb382c7b0aa5a7723e2e68f1ada66d39875",
                        },
                    });
                    console.log(response);
                    responsejson = await response.json();
                } catch (e) {
                    console.log(e);
                    // show error message?
                    continue;
                }

                if (
                    responsejson.results.length > 0 &&
                    responsejson.results != undefined
                ) {
                    quote = responsejson.results[0].quote;
                    author = responsejson.results[0].author;
                }
                offset = Math.ceil(offset / 2) - 1;
                counter++;
                if (counter == 4) {
                    break; //show warning to user
                }
            }
            console.log(quote); //get list of all tags from paperquotes for autocomplete input box
            if (quote != "") {
                // need to check if "Unknown" is in the quote and no author attributed here

                quote = quote.replace(author, "");
                const attributedQuote = quote.trim() + " - " + author.trim();

                saveToLocalStorage(
                    formattedSearchTerm + "-quotes",
                    attributedQuote
                );
                setText(attributedQuote);
            }
        }
    };

    const getImage = async () => {
        if (random) {
            try {
                const response = await fetch(
                    "https://api.unsplash.com/photos/random",
                    {
                        // mode: "cors",
                        headers: {
                            // "Access-Control-Allow-Origin": "http://localhost:8000",
                            Authorization: "Client-ID " + UNSPLASH_ACCESS_KEY,
                        },
                    }
                );
                const responsejson = await response.json();
                console.log(responsejson);
                const photo = {
                    photographer: responsejson.user.name,
                    url: responsejson.urls.regular,
                };
                saveToLocalStorage("random" + "-images", photo);
                setPhotographer(responsejson.user.name);
                setImgUrl(responsejson.urls.regular);
            } catch (e) {
                console.log(e);
                // show error message
            }
        } else {
            let offset;
            try {
                const checkTotalImages = await fetch(
                    `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=0`,
                    {
                        headers: {
                            Authorization: "Client-ID " + UNSPLASH_ACCESS_KEY,
                        },
                    }
                );
                const checkTotalImagesJson = await checkTotalImages.json();
                // Sometimes images can't be found with large offsets, so limit to 600
                let maxOffset =
                    checkTotalImagesJson.total > 600
                        ? 600
                        : checkTotalImagesJson.total;

                offset = Math.floor(Math.random() * maxOffset);
            } catch (e) {
                console.log(e);
                // show error
            }

            try {
                const response = await fetch(
                    `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=1&content_filter=high&page=${offset}`,
                    {
                        headers: {
                            Authorization: "Client-ID " + UNSPLASH_ACCESS_KEY,
                        },
                    }
                );
                const responsejson = await response.json();
                console.log(responsejson);

                if (responsejson.results.length === 0) {
                    // show error here
                    return;
                }
                const photo = {
                    photographer: responsejson.results[0].user.name,
                    url: responsejson.results[0].urls.regular,
                };
                saveToLocalStorage(
                    searchTerm.trim().replace(/\s/g, "-") + "-images",
                    photo
                );
                setPhotographer(responsejson.results[0].user.name);
                setImgUrl(responsejson.results[0].urls.regular);
            } catch (e) {
                console.log(e);
                // show error;
            }
        }
    };

    const buildPreview = () => {
        getImage();
        getQuote();
    };

    const SearchbarContainer = styled.div.attrs({
        className: "d-flex justify-content-between mt-3 mb-3",
    })``;

    const PageWrapper = styled.div.attrs({
        className: "container",
    })``;

    const LeftSide = styled.div.attrs({
        className: "col-12 col-lg-7 ",
    })``;

    const RightSide = styled.div.attrs({
        className:
            "col-12 col-lg-5 d-flex flex-column justify-content-center align-items-center",
    })``;

    const Row = styled.div.attrs({
        className: "row",
    })``;

    const ImageWrapper = styled.div.attrs({
        className: "mt-3",
    })``;

    const Controls = styled.div.attrs({
        className:
            "d-flex flex-column justify-content-center align-items-center createPageControls ",
    })``;

    const ImgQuotebtn = styled.div.attrs({
        className: "w-100 ",
    })`
        text-align: -webkit-center;
    `;

    return (
        <PageWrapper>
            <SearchbarContainer>
                <RandomB
                    height="100px" //should I remove
                    width="100px" //not working
                    style={{ backgroundColor: "blue", marginTop: "30px" }} //not working
                    // getQuote={getQuote}
                    getQuote={buildPreview}
                />
                <SearchBar />
            </SearchbarContainer>
            <Row>
                <LeftSide>
                    <ImageWrapper>
                        <ImgPreviewArea
                            text={text}
                            font={font}
                            fontSize={fontSize}
                            fontWeight={fontWeight}
                            textColor={textColor}
                            width={window.outerWidth}
                            canvasHeight={canvasHeight}
                            margin={margin}
                            bgColor={bgColor}
                            bgOpacity={bgOpacity}
                            // background import is just for testing. remove later
                            background={background}
                            setCanvasHeight={setCanvasHeight}
                            imgUrl={imgUrl}
                        />
                        <FinalImgArea
                            finalImgUrl={finalImgUrl}
                            finalText={finalText}
                            finalFont={finalFont}
                            finalFontSize={finalFontSize}
                            finalFontWeight={finalFontWeight}
                            finalTextColor={finalTextColor}
                            width={window.outerWidth}
                            finalMargin={finalMargin}
                            finalBgColor={finalBgColor}
                            finalBgOpacity={finalBgOpacity}
                            generateFinalCanvas={generateFinalCanvas}
                            photographer={photographer}
                        />
                    </ImageWrapper>
                    {/* open modal button */}
                </LeftSide>
                <RightSide>
                    <Controls>
                        <div
                            className="d-none d-lg-block "
                            id="fontEditWrapper"
                        >
                            <FontEdit />
                        </div>
                        <ImgQuotebtn className="m-1">
                            <div className="d-flex justify-content-between  m-1">
                                <LeftArrowButton />
                                <div className="h4 m-3 ">Image</div>
                                <RightArrowButton />
                            </div>

                            <div className="d-flex justify-content-between m-1">
                                <LeftArrowButton />
                                <div className="h4  m-3 ">Quote</div>
                                <RightArrowButton />
                            </div>
                        </ImgQuotebtn>
                        <button
                            type="button"
                            className="btn yellow-background red-text mt-3 "
                            data-toggle="modal"
                            data-target="#shareModal"
                            style={{ left: "50%", width: "60%" }}
                        >
                            SHARE
                        </button>
                        <ShareModal
                            searchTerm={searchTerm}
                            random={random}
                            finalUrl={finalUrl}
                        />
                    </Controls>
                    <Editbtn />
                </RightSide>
            </Row>
        </PageWrapper>
    );
};

export default Create;
