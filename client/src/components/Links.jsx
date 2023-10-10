import React from 'react'
import LeetcodeLogo from "../assets/leetcode.svg";
import CodingNinjaLogo from "../assets/codingninja.png";
import YoutubeLogo from "../assets/youtube.png";
import WebsiteLogo from "../assets/website.png";


const Links = ({ question }) => {
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
            {   
                question?.yt_link &&
                <a href={question?.yt_link} target='_blank' style={{ display: 'inline-block', backgroundColor: '#441613', borderRadius: '10px', padding: '8px' }}>
                <img src={YoutubeLogo} width={30} height={30} alt="" />
            </a>
            }
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
