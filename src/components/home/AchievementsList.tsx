import {AchievementProps} from "./AchievementsSection";
import badger_hacks_article_image from "resources/images/achievements/BadgerHacksArticle.png";

interface AchievementList {
    [key: string]: AchievementProps;
}

let achievementsList: AchievementList = {};

export const k_badger_hacks_achievement = "badger-hacks-achievement";
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
                    <li>Link to the article: <a rel="noreferrer" target="_blank"
                                                href="https://www.cs.wisc.edu/2021/03/02/badgerhacks/">https://www.cs.wisc.edu/2021/03/02/badgerhacks/</a>
                    </li>
                </ul>
                <li>Developed a website to advertise the event</li>
                <ul>
                    <li>Link to the website: <a rel="noreferrer" target="_blank"
                                                href="https://badgerhacks.github.io/">https://badgerhacks.github.io/</a>
                    </li>
                </ul>
            </ul>
        </>,
    image: badger_hacks_article_image
}

export const k_azure_hack_for_access_achievement = "azure-hack-for-access-achievement";
achievementsList[k_azure_hack_for_access_achievement] = {
    time: "University of Wisconsin-Madison",
    title: "5th Place at Azure Hack for Accessibility Hackathon",
    content:
        <>
            <ul>
                <li>Modified by mobile application, AugNav, to aid people in navigating complex environments</li>
                <li>Cash prize of $500 and $50 of Microsoft Swag</li>
                <li>Link to Devpost submission: <a rel="noreferrer" target="_blank"
                                                   href="https://devpost.com/software/augnav-1ysxzh">https://devpost.com/software/augnav-1ysxzh</a>
                </li>
            </ul>
        </>,
}

export const k_pico_ctf_achievement = "pico-ctf-achievement";
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

export const k_teen_hacks_htx_achievement = "teen-hacks-htx-achievement";
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

export const k_omega_hacks_achievement = "omega-hacks-achievement";
achievementsList[k_omega_hacks_achievement] = {
    time: "Grade 12",
    title: "1st Place at Omega Hacks Hackathon",
    content:
        <>
            <ul>
                <li>Developed "SmartRoom" web application</li>
                <li>Cash prize of $60</li>
            </ul>
        </>,
}

export const k_nhs_achievement = "nhs-achievement";
achievementsList[k_nhs_achievement] = {
    time: "Grade 11",
    title: "Vice President of National Honor Society Club",
    content:
        <>
            <ul>
                <li>VP of National Honor Society club at Monta Vista High School</li>
                <li>Organized volunteering events for club members to partake in</li>
                <li>Designed website to allow club members to register for volunteering events</li>
            </ul>
        </>,
}

export const k_mvhs_bite_achievement = "mvhs-bite-achievement";
achievementsList[k_mvhs_bite_achievement] = {
    time: "Grade 11",
    title: "Vice President of Bite (Food Science) Club",
    content:
        <>
            <ul>
                <li>VP of Bite Club at Monta Vista High School</li>
                <li>Organized educational food science presentations and events</li>
            </ul>
        </>,
}

export const k_mvhs_esports_achievement = "mvhs-esports-achievement";
achievementsList[k_mvhs_esports_achievement] = {
    time: "Grade 11",
    title: "Director of Reporting of ESports Club",
    content:
        <>
            <ul>
                <li>Director of Reporting of ESports Club at Monta Vista High School</li>
                <li>Organized gaming tournaments to help students relax after school</li>
            </ul>
        </>,
}

export const k_stanford_proco_achievement = "stanford-proco-achievement";
achievementsList[k_stanford_proco_achievement] = {
    time: "Grade 11",
    title: "6th Place at Stanford ProCo Programming Competition",
    content:
        <>
            <ul>
                <li>Director of Reporting of ESports Club at Monta Vista High School</li>
                <li>Organized gaming tournaments to help students relax after school</li>
            </ul>
        </>,
}

export const k_harker_programming_invitational_achievement = "harker-programming-invit-achievement";
achievementsList[k_harker_programming_invitational_achievement] = {
    time: "Grade 11",
    title: "1st Place at Harker Programming Invitational Competition",
    content:
        <>
            <ul>
                <li>Cash prize of $250</li>
            </ul>
        </>,
}

export const k_cupertino_hacks_achievement = "cupertino-hacks-achievement";
achievementsList[k_cupertino_hacks_achievement] = {
    time: "Grade 11",
    title: "1st Place at Cupertino Hacks Hackathon",
    content:
        <>
            <ul>
                <li>Developed "The Right Price" web and iPhone application</li>
                <li>Presented on Live TV</li>
                <li>Received a certificate from the Mayor of Cupertino</li>
                <li>Official recognition in "Engineering and Computer Programming" by the City Council of Cupertino</li>
            </ul>
        </>,
}

export const k_congressional_app_challenge_achievement = "cong-app-challenge-achievement";
achievementsList[k_congressional_app_challenge_achievement] = {
    time: "Grade 11",
    title: "4th Place at United States Congressional App Challenge",
    content:
        <>
            <ul>
                <li>Received signed certificate from Congressman Ro Khanna</li>
            </ul>
        </>,
}

export const k_scioly_grade_11_achievement = "grade-11-scioly-achievement";
achievementsList[k_scioly_grade_11_achievement] = {
    time: "Grade 11",
    title: "Junior Year Science Olympiad",
    content:
        <>
            <ul>
                <li>School team received 3rd Place Trophy at Santa Clara, CA Regional</li>
                <li>4th Place for Mousetrap Vehicle at Tracy, CA Invitational</li>
                <li>10th Place for Code Busters at Santa Clara, CA Regional</li>
            </ul>
        </>,
}

export const k_ap_scholar_achievement = "ap-scholar-achievement";
achievementsList[k_ap_scholar_achievement] = {
    time: "Grade 11",
    title: "Advanced Placement (AP) Scholar with Distinction Award",
    content:
        <>
            <ul>
                <li>Received award for demonstrating outstanding college-level achievement through my performance on
                    multiple AP Exams
                </li>
            </ul>
        </>,
}

export const k_pen_state_mc_achievement = "pen-state-mc-achievement";
achievementsList[k_pen_state_mc_achievement] = {
    time: "Grade 11",
    title: "Community Service at Peninsula State Math Counts",
    content:
        <>
            <ul>
                <li>Volunteered for 6 hours to help proctor the Peninsula State Math Counts event</li>
            </ul>
        </>,
}

export default achievementsList;