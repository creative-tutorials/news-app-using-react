import "./App.css";
import { useState } from "react";
function App() {
  const [show, setshow] = useState(false); //show is the state and setshow is the function to change the state
  const [hide, sethide] = useState(false); 
  const requestPost = () => {
    let API_KEY = '1b6ab7da59644e59a0a28ebf0a34a53a';
    const newInput = document.getElementById("input");
    const newsHeader = document.getElementById("news_header");
    const newsContent = document.getElementById("news_content");
    const newsImage = document.getElementById("news_image");
    const link1 = document.getElementById("link1");

    const newsHeader2 = document.getElementById("news_header2");
    const newsContent2 = document.getElementById("news_content2");
    const newsImage2 = document.getElementById("news_image2");
    const link2 = document.getElementById("link2");

    const newsHeader3 = document.getElementById("news_header3");
    const newsContent3 = document.getElementById("news_content3");
    const newsImage3 = document.getElementById("news_image3");
    const link3 = document.getElementById("link3");

    const newsHeader4 = document.getElementById("news_header4");
    const newsContent4 = document.getElementById("news_content4");
    const newsImage4 = document.getElementById("news_image4");
    const link4 = document.getElementById("link4");

    const newsHeader5 = document.getElementById("news_header5");
    const newsContent5 = document.getElementById("news_content5");
    const newsImage5 = document.getElementById("news_image5");
    const link5 = document.getElementById("link5");

    const newsHeader6 = document.getElementById("news_header6");
    const newsContent6 = document.getElementById("news_content6");
    const newsImage6 = document.getElementById("news_image6");
    const link6 = document.getElementById("link6");

    const newsHeader7 = document.getElementById("news_header7");
    const newsContent7 = document.getElementById("news_content7");
    const newsImage7 = document.getElementById("news_image7");
    const link7 = document.getElementById("link7");

    const newsHeader8 = document.getElementById("news_header8");
    const newsContent8 = document.getElementById("news_content8");
    const newsImage8 = document.getElementById("news_image8");
    const link8 = document.getElementById("link8");

    const newsHeader9 = document.getElementById("news_header9");
    const newsContent9 = document.getElementById("news_content9");
    const newsImage9 = document.getElementById("news_image9");
    const link9 = document.getElementById("link9");

    const newsHeader10 = document.getElementById("news_header10");
    const newsContent10 = document.getElementById("news_content10");
    const newsImage10 = document.getElementById("news_image10");
    const link10 = document.getElementById("link10");

    const allImage = document.querySelectorAll(".news_image");
    const links = document.querySelectorAll(".link");
    const alert_box = document.querySelector(".alert");
    let newInputValue = newInput.value;

    for (let i = 0; i < allImage.length; i++) {
      const element = allImage[i];
      // element.style.display = "block";
      setshow(!show + element.classList.add("show")); // adding class show to the image
    }

    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      // element.style.display = "block";
      setshow(!show + element.classList.add("show")); // adding class show to the image
    }
    sethide(!hide + alert_box.classList.add("hide")); // adding class show to the image
    fetch(
      `https://newsapi.org/v2/everything?q=${newInputValue}&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        console.log(
          data,
          (newsHeader.innerHTML = data.articles[0].title),
          (newsContent.innerHTML = data.articles[0].content),
          (newsImage.src = data.articles[0].urlToImage),
          (link1.href = data.articles[0].url),
          (newsHeader2.innerHTML = data.articles[1].title),
          (newsContent2.innerHTML = data.articles[1].content),
          (newsImage2.src = data.articles[1].urlToImage),
          (link2.href = data.articles[1].url),
          (newsHeader3.innerHTML = data.articles[2].title),
          (newsContent3.innerHTML = data.articles[2].content),
          (newsImage3.src = data.articles[2].urlToImage),
          (link3.href = data.articles[2].url),
          (newsHeader4.innerHTML = data.articles[3].title),
          (newsContent4.innerHTML = data.articles[3].content),
          (newsImage4.src = data.articles[3].urlToImage),
          (link4.href = data.articles[3].url),
          (newsHeader5.innerHTML = data.articles[4].title),
          (newsContent5.innerHTML = data.articles[4].content),
          (newsImage5.src = data.articles[4].urlToImage),
          (link5.href = data.articles[4].url),
          (newsHeader6.innerHTML = data.articles[5].title),
          (newsContent6.innerHTML = data.articles[5].content),
          (newsImage6.src = data.articles[5].urlToImage),
          (link6.href = data.articles[5].url),
          (newsHeader7.innerHTML = data.articles[6].title),
          (newsContent7.innerHTML = data.articles[6].content),
          (newsImage7.src = data.articles[6].urlToImage),
          (link7.href = data.articles[6].url),
          (newsHeader8.innerHTML = data.articles[7].title),
          (newsContent8.innerHTML = data.articles[7].content),
          (newsImage8.src = data.articles[7].urlToImage),
          (link8.href = data.articles[7].url),
          (newsHeader9.innerHTML = data.articles[8].title),
          (newsContent9.innerHTML = data.articles[8].content),
          (newsImage9.src = data.articles[8].urlToImage),
          (link9.href = data.articles[8].url),
          (newsHeader10.innerHTML = data.articles[9].title),
          (newsContent10.innerHTML = data.articles[9].content),
          (newsImage10.src = data.articles[9].urlToImage),
          (link10.href = data.articles[9].url)
        )
      )
      .catch((error) => console.log(error), (newInput.value = ""));
  };
  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <div className="header">PushNews</div>
          <p>Get Latest News from search query using PushNews</p>
          <div className="einput">
            <input
              type="text"
              id="input"
              placeholder="What are you looking for?"
              autoComplete="off"
            />
          </div>
          <div className="box">
            <div className="alert">No news found try searching a topic to get result</div>
            <div className="box_space">
            <div className="box_content">
              <div className="news_image">
                <img src="" alt="news_image" id="news_image" />
              </div>
              {/*  */}
              <div className="box_wrap">
                <div className="header news_header" id="news_header"></div>
                <div className="content_news" id="news_content"></div>
                <a href="/" className="link" id="link1">
                  Read More
                </a>
              </div>
            </div>
            {/* 01 */}
            <div className="box_content">
              <div className="news_image">
                <img src="" alt="news_image" id="news_image2" />
              </div>
              {/*  */}
              <div className="box_wrap">
                <div className="header news_header" id="news_header2"></div>
                <div className="content_news" id="news_content2"></div>
                <a href="/" className="link" id="link2">
                  Read More
                </a>
              </div>
              {/*  */}
            </div>
            {/* 02 */}
            <div className="box_content">
              <div className="news_image">
                <img src="" alt="news_image" id="news_image3" />
              </div>
              {/*  */}
              <div className="box_wrap">
                <div className="header news_header" id="news_header3"></div>
                <div className="content_news" id="news_content3"></div>
                <a href="/" className="link" id="link3">
                  Read More
                </a>
              </div>
              {/*  */}
            </div>
            {/* 03 */}
            <div className="box_content">
              <div className="news_image">
                <img src="" alt="news_image" id="news_image4" />
              </div>
              {/*  */}
              <div className="box_wrap">
                <div className="header news_header" id="news_header4"></div>
                <div className="content_news" id="news_content4"></div>
                <a href="/" className="link" id="link4">
                  Read More
                </a>
              </div>
              {/*  */}
            </div>
            {/* 04 */}
            <div className="box_content">
              <div className="news_image">
                <img src="" alt="news_image" id="news_image5" />
              </div>
              {/*  */}
              <div className="box_wrap">
                <div className="header news_header" id="news_header5"></div>
                <div className="content_news" id="news_content5"></div>
                <a href="/" className="link" id="link5">
                  Read More
                </a>
              </div>
              {/*  */}
            </div>
            {/* 05 */}
            <div className="box_content">
              <div className="news_image">
                <img src="" alt="news_image" id="news_image6" />
              </div>
              {/*  */}
              <div className="box_wrap">
                <div className="header news_header" id="news_header6"></div>
                <div className="content_news" id="news_content6"></div>
                <a href="/" className="link" id="link6">
                  Read More
                </a>
              </div>
              {/*  */}
            </div>
            {/* 06 */}
            <div className="box_content">
              <div className="news_image">
                <img src="" alt="news_image" id="news_image7" />
              </div>
              {/*  */}
              <div className="box_wrap">
                <div className="header news_header" id="news_header7"></div>
                <div className="content_news" id="news_content7"></div>
                <a href="/" className="link" id="link7">
                  Read More
                </a>
              </div>
              {/*  */}
            </div>
            {/* 07 */}
            <div className="box_content">
              <div className="news_image">
                <img src="" alt="news_image" id="news_image8" />
              </div>
              {/*  */}
              <div className="box_wrap">
                <div className="header news_header" id="news_header8"></div>
                <div className="content_news" id="news_content8"></div>
                <a href="/" className="link" id="link8">
                  Read More
                </a>
              </div>
              {/*  */}
            </div>
            {/* 08 */}
            <div className="box_content">
              <div className="news_image">
                <img src="" alt="news_image" id="news_image9" />
              </div>
              {/*  */}
              <div className="box_wrap">
                <div className="header news_header" id="news_header9"></div>
                <div className="content_news" id="news_content9"></div>
                <a href="/" className="link" id="link9">
                  Read More
                </a>
              </div>
              {/*  */}
            </div>
            {/* 09 */}
            <div className="box_content">
              <div className="news_image">
                <img src="" alt="news_image" id="news_image10" />
              </div>
              {/*  */}
              <div className="box_wrap">
                <div className="header news_header" id="news_header10"></div>
                <div className="content_news" id="news_content10"></div>
                <a href="/" className="link" id="link10">
                  Read More
                </a>
              </div>
              {/*  */}
            </div>
            {/* 10 */}
            </div>
            <div className="button">
              <button onClick={requestPost}>Fetch News</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
