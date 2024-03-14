var ulSpan = document.querySelectorAll("ul span");

const htmlTemplate = `
    <div>
        <h1>Hii..😉</h1>
        <p>Silahkan klik logo ya!</p>
    </div>
`;

function removeTags(html) {
    return html.replace(/<[^>]*>?/gm, '');
}


var elementSpan = [];
for (var i = 0; i < 5; i++) {
    elementSpan.push(ulSpan[i]);
}
elementSpan.forEach(function(span) {
    span.addEventListener("click", function() {
        alert(removeTags(htmlTemplate));
        
    });
});
