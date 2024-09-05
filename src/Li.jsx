

function Li({ text }) {
    
    function clickLi(item) {
        alert(item)
    }

    return(
        <li onClick={() => clickLi(text)}>{text}</li>
    );
}

export default Li
