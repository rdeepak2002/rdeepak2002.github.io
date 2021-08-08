import { AchievementProps } from "./AchievementsSection";
import badger_hacks_article_image from "resources/images/achievements/BadgerHacksArticle.png";

interface AchievementList {
  [key: string]: AchievementProps;
}

let achievementsList: AchievementList = {};

export const k_badger_hacks_achievement="badger-hacks-achievement";
achievementsList[k_badger_hacks_achievement] = {
  time: "University of Wisconsin-Madison",
  title: "Co-Founder of BadgerHacks",
  content:
    <>
      <ul>
        <li>Co-founded a Hackathon held at the University of Wisconsin-Madison, called "BadgerHacks"</li>
        <li>Interviewed by the Dean of Computer Science at the University of Wisconsin-Madison</li>
        <li>Featured in an article due to the success of our event</li>
        <ul>
          <li>Link to the article: <a rel="noreferrer" target="_blank" href="https://www.cs.wisc.edu/2021/03/02/badgerhacks/">https://www.cs.wisc.edu/2021/03/02/badgerhacks/</a></li>
        </ul>
        <li>Developed a website to advertise the event</li>
        <ul>
          <li>Link to the website: <a rel="noreferrer" target="_blank" href="https://badgerhacks.github.io/">https://badgerhacks.github.io/</a></li>
        </ul>
      </ul>
    </>,
  image: badger_hacks_article_image
}

export const k_azure_hack_for_access_achievement="azure-hack-for-access-achievement";
achievementsList[k_azure_hack_for_access_achievement] = {
  time: "University of Wisconsin-Madison",
  title: "5th Place at Azure Hack for Accessibility Hackathon",
  content:
    <>
      <ul>
        <li>Modified by mobile application, AugNav, to aid people in navigating complex environments</li>
        <li>Cash prize of $500 and $50 of Microsoft Swag</li>
        <li>Link to Devpost submission: <a rel="noreferrer" target="_blank" href="https://devpost.com/software/augnav-1ysxzh">https://devpost.com/software/augnav-1ysxzh</a></li>
      </ul>
    </>,
}

export const k_pico_ctf_achievement="pico-ctf-achievement";
achievementsList[k_pico_ctf_achievement] = {
  time: "Grade 12",
  title: "Pico Capture the Flag Cyber Security Competition",
  content:
      <>
        <ul>
          <li>Top 2.8% out of 7000 Participants</li>
        </ul>
      </>,
}

export const k_teen_hacks_htx_achievement="teen-hacks-htx-achievement";
achievementsList[k_teen_hacks_htx_achievement] = {
    time: "Grade 12",
    title: "2nd Place at Teen Hacks HTX Hackathon",
    content:
        <>
            <ul>
                <li>Cash prize of $40</li>
            </ul>
        </>,
}

export default achievementsList;