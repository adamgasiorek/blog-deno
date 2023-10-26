export const js = `
    let activeId = '';
    
    document.querySelectorAll('.image-label').forEach((input) => {
        input.onclick = (item) => {
            const element = item.target.id ? item.target : item.target.parentElement;
            activeId = element.id.split('list-item-')[1];
            document.getElementById('modalWrapper').classList.remove('notvisible');
            
            const isVideo = element.querySelector('.image-img').tagName === 'DIV';
            const dataImage = element.querySelector('.image-img').getAttribute('data-img');
            
            document.getElementById('videoImg').classList.add('hidden');
            document.getElementById('modalImg').classList.add('hidden');
            
            if(isVideo) {
                document.getElementById('videoImg').classList.remove('hidden');
                document.getElementById('modalImg').src = '';
                document.getElementById('videoImg').src = dataImage;
            } else {
                document.getElementById('modalImg').classList.remove('hidden');
                document.getElementById('videoImg').src = '';
                document.getElementById('modalImg').src = dataImage;
            }
        }
    })
    
    document.getElementById('modalBackground').onclick = (item) => {
            document.getElementById('modalWrapper').classList.add('notvisible');
                document.getElementById('modalImg').src = '';
                document.getElementById('videoImg').src = '';
    };
    
    document.getElementById("arrow-left").onclick = () => {
        document.getElementById('modalBackground').click();
        if(document.getElementById("list-item-"+(parseInt(activeId)-1))) {
            document.getElementById("list-item-"+(parseInt(activeId)-1)).click()
        }
    }

    document.getElementById("arrow-right").onclick = () => {
        document.getElementById('modalBackground').click();
        if(document.getElementById("list-item-"+(parseInt(activeId)+1))) {
            document.getElementById("list-item-"+(parseInt(activeId)+1)).click()
        }
    }
    
    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                document.getElementById("arrow-left").click();
                break;
            case 39:
                document.getElementById("arrow-right").click();
                break;
            case 27:
                document.getElementById("modalBackground").click();
                break;
        }
    };
    
`

export default function ({images}) {
    return (
        <div className="images">
            <div className="modal notvisible" id="modalWrapper" >
                <div id="modalBackground" className="modalBackground"></div>
                <img className="image-modal" src="" id="modalImg" />
                <video autoPlay controls className="image-modal" id="videoImg">
                    <source src="" type="video/mp4" />
                </video>

                <div className="arrows-container">
                    <div className="arrows-wrapper">
                        <button id="arrow-left">&#8249;</button>
                        <button id="arrow-right">&#8250;</button>
                    </div>
                </div>

            </div>


            <div className="images-container">
                {images.map((image, i) => (
                    <div className={`${(image.isTall ? "tall" : "short")} image-label` } id={`list-item-${i}`}  key={i}>
                        <div className="image">
                            {image.isVideo ?
                                <div className="image-img" data-img={image.path}>
                                    <div className="play">&#9654;</div>
                                    <img className="image-img2" src={image.thumbnail}/>
                                </div>
                                :
                                <img className="image-img" data-img={image.path}
                                     src={image.thumbnail}/>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
