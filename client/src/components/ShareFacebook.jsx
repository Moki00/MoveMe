import React from "react";
import styled from "styled-components";

const Button = styled.button.attrs({
    className: "btn btn-lg btn-warning text-danger shareBtn w-75",
    type: "button",
})``;

<div id="fb-root"></div>
<script>(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<!-- Your share button code -->
<div class="fb-share-button" 
data-href="https://www.your-domain.com/your-page.html" 
data-layout="button_count">
</div>

export default ShareFacebook;