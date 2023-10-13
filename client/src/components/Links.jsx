import React, { useState } from 'react'
import LeetcodeLogo from "../assets/leetcode.svg";
import CodingNinjaLogo from "../assets/codingninja.png";
import YoutubeLogo from "../assets/youtube.png";
import WebsiteLogo from "../assets/website.png";


const Links = ({ question }) => {
    function extractVideoId(url) {
        const videoIdRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(videoIdRegex);
        return match ? match[1] : null;
    }

    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const handleIconClick = () => {
      setIsVideoOpen(true);
    };
  
    const videoId = extractVideoId(question?.yt_link);
    
    return (
        <div style={{ gridColumn: "3", display: 'flex', gap: '20px' }}>

            {
                question?.p2_link &&
                <a href={question?.p2_link} target='_blank' style={{ display: 'inline-block', backgroundColor: '#312107', borderRadius: '10px', padding: '8px' }}>
                    <img src={LeetcodeLogo} width={30} height={30} alt="" />
                </a>
            }


            {
                question?.p1_link &&
                <a href={question?.p1_link} target='_blank' style={{ display: 'inline-block', backgroundColor: '#402A05', borderRadius: '10px', padding: '8px' }}>
                    <img src={CodingNinjaLogo} width={30} height={30} alt="" />
                </a>
            }
            {question?.yt_link && !isVideoOpen && (
        <a onClick={handleIconClick} style={{ cursor: 'pointer', backgroundColor: '#441613', borderRadius: '10px', padding: '8px', display: 'inline-block' }}>
          <img src={YoutubeLogo} width={30} height={30} alt="" />
        </a>
      )}

      {isVideoOpen && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '80%' }}>
            <iframe
              title="Embedded YouTube Video"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullScreen
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
            />
            <button onClick={() => setIsVideoOpen(false)} style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'transparent', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>X</button>
          </div>
        </div>
      )}
            {   
                question?.post_link &&
                <a href={question?.post_link} target='_blank' style={{ display: 'inline-block', backgroundColor: '#082B40', borderRadius: '10px', padding: '8px' }}>
                <img src={WebsiteLogo} width={30} height={30} alt="" />
            </a>
            }

        </div>
    )
}

export default Links
