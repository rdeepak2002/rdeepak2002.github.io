import {AchievementProps} from "./AchievementsSection";
import badger_hacks_article_image from "resources/images/achievements/BadgerHacksArticle.png";
import image_1 from "resources/images/achievements/1.jpg";
import image_2 from "resources/images/achievements/2.jpg";
// import image_3 from "resources/images/achievements/3.jpg";
import image_4 from "resources/images/achievements/4.jpg";
import image_5 from "resources/images/achievements/5.jpg";
import image_6 from "resources/images/achievements/6.jpg";
import image_7 from "resources/images/achievements/7.jpg";
import image_8 from "resources/images/achievements/8.jpg";
import image_9 from "resources/images/achievements/9.jpg";
// import image_10 from "resources/images/achievements/10.jpg";
import image_11 from "resources/images/achievements/11.jpg";
import image_12 from "resources/images/achievements/12.jpg";
import image_13 from "resources/images/achievements/13.jpg";
import image_14 from "resources/images/achievements/14.jpg";
// import image_15 from "resources/images/achievements/15.jpg";
// import image_16 from "resources/images/achievements/16.jpg";
// import image_17 from "resources/images/achievements/17.jpg";
import image_18 from "resources/images/achievements/18.jpg";
// import image_19 from "resources/images/achievements/19.jpg";
// import image_20 from "resources/images/achievements/20.jpg";
import image_21 from "resources/images/achievements/21.jpg";
import image_22 from "resources/images/achievements/22.jpg";
// import image_23 from "resources/images/achievements/23.jpg";
// import image_24 from "resources/images/achievements/24.jpg";
// import image_25 from "resources/images/achievements/25.jpg";
import image_26 from "resources/images/achievements/26.jpg";

// import image_27 from "resources/images/achievements/27.jpg";

export interface AchievementList {
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
                <li>Won 6th place at the annual Stanford ProCo competitive programming competition</li>
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
    image: image_5
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
    image: image_4
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
    image: image_18
}

export const k_scioly_grade_11_achievement = "grade-11-scioly-achievement";
achievementsList[k_scioly_grade_11_achievement] = {
    time: "Grade 11",
    title: "Junior Year Science Olympiad",
    content:
        <>
            <ul>
                <li>School team received 3rd Place Trophy at Santa Clara, CA Regional</li>
                <li>10th Place for Code Busters at Santa Clara, CA Regional</li>
                <li>4th Place for Mousetrap Vehicle at Tracy, CA Invitational</li>
            </ul>
        </>,
    image: image_12
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

export const k_regnart_fall_fest_achievement = "regnart-fall-fest-achievement";
achievementsList[k_regnart_fall_fest_achievement] = {
    time: "Grade 11",
    title: "Community Service at Regnart Fall Festival",
    content:
        <>
            <ul>
                <li>Volunteered for 3 hours to help organize the Regnart Fall Festival event</li>
            </ul>
        </>,
}

export const k_mountain_view_tree_lighting_achievement = "mountain-view-tree-lighting-achievement";
achievementsList[k_mountain_view_tree_lighting_achievement] = {
    time: "Grade 11",
    title: "Community Service at Mountain View Tree Lighting",
    content:
        <>
            <ul>
                <li>Volunteered for 3 hours to help organize the Mountain View Tree Lighting event</li>
            </ul>
        </>,
}

export const k_friends_of_cupertino_book_sale_achievement = "friends-of-cupertino-book-sale-achievement";
achievementsList[k_friends_of_cupertino_book_sale_achievement] = {
    time: "Grade 11",
    title: "Community Service at Friends of Cupertino Book Sale",
    content:
        <>
            <ul>
                <li>Volunteered for 3 hours to help organize the Friends of Cupertino Book Sale event</li>
            </ul>
        </>,
}

export const k_lincoln_science_fest_achievement = "lincoln-science-fest-achievement";
achievementsList[k_lincoln_science_fest_achievement] = {
    time: "Grade 11",
    title: "Community Service at Lincoln Lawrence Hall of Science Mystery Festival",
    content:
        <>
            <ul>
                <li>Volunteered for 4 hours to help organize the Lincoln Lawrence Hall of Science Mystery Festival
                    event
                </li>
            </ul>
        </>,
}

export const k_indian_village_achievement = "indian-village-achievement";
achievementsList[k_indian_village_achievement] = {
    time: "Grade 11",
    title: "Taught Computer Science to Underprivileged Students in an Indian Village",
    content:
        <>
            <ul>
                <li>Volunteered for 21 hours to teach Computer Science to Underprivileged Students in an Indian
                    Village
                </li>
            </ul>
        </>,
}

export const k_mvhs_robotics_team_achievement = "mvhs-robotics-achievement";
achievementsList[k_mvhs_robotics_team_achievement] = {
    time: "Grade 11",
    title: "Team Member on Monta Vista Robotics Team",
    content:
        <>
            <ul>
                <li>Contributed to the development of a robot for the FIRST Robotics Competition</li>
            </ul>
        </>,
}

export const k_mvhs_csf_team_achievement = "mvhs-csf-achievement";
achievementsList[k_mvhs_csf_team_achievement] = {
    time: "Grade 11",
    title: "Member of the Monta Vista California Scholarship Foundation Club",
    content:
        <>
            <ul>
                <li>Volunteered to better the Santa Clara community</li>
            </ul>
        </>,
}

export const k_cupertino_lib_teen_app_achievement = "cupertino-lib-teen-app-achievement";
achievementsList[k_cupertino_lib_teen_app_achievement] = {
    time: "Grade 10",
    title: "1st Place at the Cupertino Library Teen App Challenge Competition",
    content:
        <>
            <ul>
                <li>Develop "Hapi App"</li>
                <li>Received cash prize of $500</li>
                <li>Featured in Patch News article</li>
                <li>Interviewed by Mr. Matt Lorenzo, Teen Services Librarian</li>
            </ul>
        </>,
}

export const k_scioly_grade_10_achievement = "grade-10-scioly-achievement";
achievementsList[k_scioly_grade_10_achievement] = {
    time: "Grade 10",
    title: "Sophomore Year Science Olympiad",
    content:
        <>
            <ul>
                <li>School team received 3rd Place Trophy at Santa Clara, CA Regional</li>
                <li>10th Place for Anatomy and Physiology at Santa Clara, CA Regional</li>
            </ul>
        </>,
    image: image_11
}

export const k_acsl_achievement = "acsl-achievement";
achievementsList[k_acsl_achievement] = {
    time: "Grade 10",
    title: "6th Place at International American Computer Science League Competition",
    content:
        <>
            <ul>
                <li>Won 6th place internationally at the American Computer Science League (ACSL) competition</li>
            </ul>
        </>,
}

export const k_harker_programming_invitational_10_achievement = "harker-programming-invit-10-achievement";
achievementsList[k_harker_programming_invitational_10_achievement] = {
    time: "Grade 10",
    title: "Participated in the Harker Programming Invitational Competition",
    content:
        <>
            <ul>
                <li>Participated in the competitive programming competition held at Harker Private School</li>
            </ul>
        </>,
}

export const k_dell_tech_achievement = "dell-tech-challenge-achievement";
achievementsList[k_dell_tech_achievement] = {
    time: "Grade 10",
    title: "Participated in the Dell Tech Challenge Competition",
    content:
        <>
            <ul>
                <li>Developed a device for the 2018 Dell Tech Challenge: "Drop and Dash"</li>
            </ul>
        </>,
    image: image_2
}

export const k_los_altos_achievement = "los-altos-achievement";
achievementsList[k_los_altos_achievement] = {
    time: "Grade 10",
    title: "Participated in Los Altos Hacks Hackathon",
    content:
        <>
            <ul>
                <li>Developed a tutor service app during the Los Altos Hacks Hackathon</li>
            </ul>
        </>,
    image: image_14
}

export const k_stanford_math_tourney_achievement = "stanford-math-tourney-achievement";
achievementsList[k_stanford_math_tourney_achievement] = {
    time: "Grade 10",
    title: "Participated in the Stanford Math Tournament Competition",
    content:
        <>
            <ul>
                <li>Participated in the annual Stanford Math Tournament (SMT) competition</li>
            </ul>
        </>,
}

export const k_jv_badminton_achievement = "jv-badminton-achievement";
achievementsList[k_jv_badminton_achievement] = {
    time: "Grade 10",
    title: "Junior Varsity Badminton Player at Monta Vista High School",
    content:
        <>
            <ul>
                <li>Played in the Junior Varsity badminton team at Monta Vista High School</li>
            </ul>
        </>,
}

export const k_red_cross_turkey_dinner_achievement = "red-cross-turkey-dinner-achievement";
achievementsList[k_red_cross_turkey_dinner_achievement] = {
    time: "Grade 10",
    title: "Community Service at Red Cross Turkey Dinner Distribution",
    content:
        <>
            <ul>
                <li>Volunteered for 5 hours at the Red Cross Turkey Dinner Distribution event</li>
                <li>Helped distribute turkey dinners for underprivileged communities</li>
            </ul>
        </>,
}

export const k_stampedeathon_achievement = "stampedeathon-achievement";
achievementsList[k_stampedeathon_achievement] = {
    time: "Grade 10",
    title: "Community Service at Stampede-a-thon Carnival Event",
    content:
        <>
            <ul>
                <li>Volunteered for 3 hours at the Stampede-a-thon Carnival event</li>
                <li>Helped sell merchandise for the event at a booth</li>
            </ul>
        </>,
}

export const k_kennedy_middle_school_math_night_achievement = "kennedy-middle-school-achievement";
achievementsList[k_kennedy_middle_school_math_night_achievement] = {
    time: "Grade 10",
    title: "Community Service at Kennedy Middle School Math Night",
    content:
        <>
            <ul>
                <li>Volunteered for 4 hours at the Kennedy Middle School Math Night event</li>
                <li>Taught math concepts to middle school students</li>
            </ul>
        </>,
}

export const k_cupertino_city_fair_achievement = "cupertino-city-fair-achievement";
achievementsList[k_cupertino_city_fair_achievement] = {
    time: "Grade 10",
    title: "Community Service at Cupertino City Fair",
    content:
        <>
            <ul>
                <li>Volunteered for 5 hours at the Cupertino City Fair event</li>
            </ul>
        </>,
}

export const k_mvhs_robotics_team_grade_10_achievement = "mvhs-robotics-10-achievement";
achievementsList[k_mvhs_robotics_team_grade_10_achievement] = {
    time: "Grade 10",
    title: "Team Member on Monta Vista Robotics Team",
    content:
        <>
            <ul>
                <li>Contributed to the development of a robot for the FIRST Robotics Competition</li>
            </ul>
        </>,
}

export const k_mvhs_nhs_grade_10_achievement = "mvhs-nhs-10-achievement";
achievementsList[k_mvhs_nhs_grade_10_achievement] = {
    time: "Grade 10",
    title: "Member of the Monta Vista National Honor Society Club",
    content:
        <>
            <ul>
                <li>Volunteered to better the Santa Clara community</li>
            </ul>
        </>,
}

export const k_mvhs_csf_team_grade_10_achievement = "mvhs-csf-10-achievement";
achievementsList[k_mvhs_csf_team_grade_10_achievement] = {
    time: "Grade 10",
    title: "Member of the Monta Vista California Scholarship Foundation Club",
    content:
        <>
            <ul>
                <li>Volunteered to better the Santa Clara community</li>
            </ul>
        </>,
}

export const k_grade_10_gpa_achievement = "mvhs-gpa-10-achievement";
achievementsList[k_grade_10_gpa_achievement] = {
    time: "Grade 10",
    title: "4.0 GPA",
    content:
        <>
            <ul>
                <li>Received a 4.0 unweighted GPA for both semesters</li>
            </ul>
        </>,
}

export const k_scioly_grade_9_achievement = "grade-9-scioly-achievement";
achievementsList[k_scioly_grade_9_achievement] = {
    time: "Grade 9",
    title: "Freshman Year Science Olympiad",
    content:
        <>
            <ul>
                <li>School team received 4th Place Trophy at Santa Clara, CA Regional</li>
                <li>4th Place for Robot Arm at Santa Clara, CA Regional</li>
                <li>8th Place for Towers at Santa Clara, CA Regional</li>
                <li>3rd Place for Robot Arm at Tracy, CA Invitational</li>
                <li>6th Place for Ecology at Tracy, CA Invitational</li>
                <li>7th Place for Optics at Tracy, CA Invitational</li>
                <li>7th Place for Game On at Tracy, CA Invitational</li>
            </ul>
        </>,
    image: image_9
}

export const k_berkeley_math_tourney_achievement = "berkeley-math-tourney-achievement";
achievementsList[k_berkeley_math_tourney_achievement] = {
    time: "Grade 10",
    title: "Participated in the Berkeley Math Tournament Competition",
    content:
        <>
            <ul>
                <li>Participated in the annual Berkeley Math Tournament (BMT) competition</li>
            </ul>
        </>,
}

export const k_lincoln_ice_cream_social_achievement = "lincoln-ice-cream-achievement";
achievementsList[k_lincoln_ice_cream_social_achievement] = {
    time: "Grade 9",
    title: "Community Service at Lincoln Elementary Ice Cream Social",
    content:
        <>
            <ul>
                <li>Volunteered for 2.5 hours at the Lincoln Elementary Ice Cream Social event</li>
            </ul>
        </>,
}

export const k_j_cherry_blossom_achievement = "j-cherry-blossom-achievement";
achievementsList[k_j_cherry_blossom_achievement] = {
    time: "Grade 9",
    title: "Community Service at Japanese Cherry Blossom Festival",
    content:
        <>
            <ul>
                <li>Volunteered for 3.5 hours at the Japanese Cherry Blossom Festival event</li>
            </ul>
        </>,
}

export const k_mvhs_robotics_team_grade_9_achievement = "mvhs-robotics-9-achievement";
achievementsList[k_mvhs_robotics_team_grade_9_achievement] = {
    time: "Grade 9",
    title: "Team Member on Monta Vista Robotics Team",
    content:
        <>
            <ul>
                <li>Contributed to the development of a robot for the FIRST Robotics Competition</li>
            </ul>
        </>,
}

export const k_mvhs_nhs_grade_9_achievement = "mvhs-nhs-9-achievement";
achievementsList[k_mvhs_nhs_grade_9_achievement] = {
    time: "Grade 9",
    title: "Member of the Monta Vista National Honor Society Club",
    content:
        <>
            <ul>
                <li>Volunteered to better the Santa Clara community</li>
            </ul>
        </>,
}

export const k_mvhs_csf_team_grade_9_achievement = "mvhs-csf-9-achievement";
achievementsList[k_mvhs_csf_team_grade_9_achievement] = {
    time: "Grade 9",
    title: "Member of the Monta Vista California Scholarship Foundation Club",
    content:
        <>
            <ul>
                <li>Volunteered to better the Santa Clara community</li>
            </ul>
        </>,
}

export const k_grade_9_gpa_achievement = "mvhs-gpa-9-achievement";
achievementsList[k_grade_9_gpa_achievement] = {
    time: "Grade 9",
    title: "4.0 GPA",
    content:
        <>
            <ul>
                <li>Received a 4.0 unweighted GPA for both semesters</li>
            </ul>
        </>,
}

export const k_regional_math_counts_gr8_achievement = "mc-gr8-regional-achievement";
achievementsList[k_regional_math_counts_gr8_achievement] = {
    time: "Grade 8",
    title: "5th Place at Regional Math Counts",
    content:
        <>
            <ul>
                <li>Received a team and individual trophy for winning 5th place at the Regional Math Counts event</li>
            </ul>
        </>,
    image: image_1
}

export const k_state_math_counts_gr8_achievement = "mc-gr8-state-achievement";
achievementsList[k_state_math_counts_gr8_achievement] = {
    time: "Grade 8",
    title: "14th Place at Idaho State Math Counts",
    content:
        <>
            <ul>
                <li>Won 14th place at the Idaho State Math Counts event</li>
            </ul>
        </>,
    image: image_6
}

export const k_theresa_sharpe = "theresa-sharpe-achievement";
achievementsList[k_theresa_sharpe] = {
    time: "Grade 8",
    title: "Teresa Sharpe Award",
    content:
        <>
            <ul>
                <li>Plaque of excellence given to one male and one female student</li>
            </ul>
        </>,
    image: image_26
}

export const k_cert_academic_gr8_achievement = "cert-academic-8-achievement";
achievementsList[k_cert_academic_gr8_achievement] = {
    time: "Grade 8",
    title: "Certificate in Academic and Character Excellence",
    content:
        <>
            <ul>
                <li>Certificate received for outstanding academic performance</li>
            </ul>
        </>,
    image: image_7
}

export const k_geo_bee_achievement = "geo-bee-achievement";
achievementsList[k_geo_bee_achievement] = {
    time: "Grade 8",
    title: "3rd Place at National Geography Bee Competition",
    content:
        <>
            <ul>
                <li>Received 3rd place at my middle school's National Geography Bee</li>
            </ul>
        </>,
}

export const k_cert_of_merit_achievement = "math-gr8-achievement";
achievementsList[k_cert_of_merit_achievement] = {
    time: "Grade 8",
    title: "Certificate of Excellence for Honors Math",
    content:
        <>
            <ul>
                <li>Received a certificate of excellence for being the top student in my honors-level math class</li>
            </ul>
        </>,
}

export const k_cert_of_excel_geo_achievement = "geo-gr8-achievement";
achievementsList[k_cert_of_excel_geo_achievement] = {
    time: "Grade 8",
    title: "Certificate of Excellence for Gifted and Talented World Geography",
    content:
        <>
            <ul>
                <li>Received a certificate of excellence for being the top student in my Gifted and Talented World
                    Geography class
                </li>
            </ul>
        </>,
}

export const k_cert_of_excel_span_achievement = "span-gr8-achievement";
achievementsList[k_cert_of_excel_span_achievement] = {
    time: "Grade 8",
    title: "Certificate of Excellence for Spanish I",
    content:
        <>
            <ul>
                <li>Received a certificate of excellence for being the top student in my Spanish I class</li>
            </ul>
        </>,
}

export const k_gt_best_achievement = "gt-best-achievement";
achievementsList[k_gt_best_achievement] = {
    time: "Grade 8",
    title: "Gifted and Talented King",
    content:
        <>
            <ul>
                <li>Voted by peers as the best student in the Gifted and Talented class</li>
            </ul>
        </>,
    image: image_8
}

export const k_njhs_achievement = "njhs-achievement";
achievementsList[k_njhs_achievement] = {
    time: "Grade 8",
    title: "Treasurer of National Junior Honor Society",
    content:
        <>
            <ul>
                <li>Treasurer of National Junior Honor Society club</li>
            </ul>
        </>,
}

export const k_njhs_volunteering_achievement = "njhs-vol-achievement";
achievementsList[k_njhs_volunteering_achievement] = {
    time: "Grade 8",
    title: "Raised Money for National Junior Honor Society Club",
    content:
        <>
            <ul>
                <li>Helped sell doughnuts to raise money for the National Junior Honor Society club</li>
            </ul>
        </>,
}

export const k_varty_tennis_achievement = "varsity-tennis-achievement";
achievementsList[k_varty_tennis_achievement] = {
    time: "Grade 8",
    title: "3rd Place at Middle School Varsity Tennis Tournament",
    content:
        <>
            <ul>
                <li>Won 3rd place during West Ada School District Varsity Tennis tournament</li>
            </ul>
        </>,
    image: image_13
}

export const k_highest_honor_roll_gr8_achievement = "honor-roll-gr8-achievement";
achievementsList[k_highest_honor_roll_gr8_achievement] = {
    time: "Grade 8",
    title: "Highest Honor Roll",
    content:
        <>
            <ul>
                <li>Received a 4.0 GPA for both semesters</li>
            </ul>
        </>,
}

export const k_computer_explorations_achievement = "computer-explorations-achievement";
achievementsList[k_computer_explorations_achievement] = {
    time: "Grade 7",
    title: "Certificate of Excellence for Computer Explorations",
    content:
        <>
            <ul>
                <li>Received a certificate of excellence for being the top student in my Computer Explorations class
                </li>
            </ul>
        </>,
}

export const k_social_studies_achievement = "social-studies-achievement";
achievementsList[k_social_studies_achievement] = {
    time: "Grade 7",
    title: "Certificate of Excellence for Gifted and Talented Social Studies",
    content:
        <>
            <ul>
                <li>Received a certificate of excellence for being the top student in my Gifted and Talented Social
                    Studies class
                </li>
            </ul>
        </>,
}

export const k_math_gr7_achievement = "math-gr7-achievement";
achievementsList[k_math_gr7_achievement] = {
    time: "Grade 7",
    title: "Certificate of Excellence for Math",
    content:
        <>
            <ul>
                <li>Received a certificate of excellence for being the top student in my Math class</li>
            </ul>
        </>,
}

export const k_highest_honor_roll_gr7_achievement = "honor-roll-gr7-achievement";
achievementsList[k_highest_honor_roll_gr7_achievement] = {
    time: "Grade 7",
    title: "Highest Honor Roll",
    content:
        <>
            <ul>
                <li>Received a 4.0 GPA for both semesters</li>
            </ul>
        </>,
}

export const k_student_of_quarter_cck_achievement = "student-of-quarter-cck-achievement";
achievementsList[k_student_of_quarter_cck_achievement] = {
    time: "Grade 6",
    title: "Student of the Quarter - Character Traits",
    content:
        <>
            <ul>
                <li>Received a "Student of the Quarter - Character Traits" award for Courage, Citizenship, and
                    Kindness
                </li>
                <li>Received a "Student of the Quarter - Character Traits" award for Diligence, Integrity, and Loyalty
                </li>
            </ul>
        </>,
}

export const k_nat_hist_day_achievement = "nat-hist-day-achievement";
achievementsList[k_nat_hist_day_achievement] = {
    time: "Grade 6",
    title: "3rd Place at Regional National History Day",
    content:
        <>
            <ul>
                <li>Received 3rd place at the regional National History Day competition</li>
            </ul>
        </>,
}

export const k_math_gr6_achievement = "math-gr6-achievement";
achievementsList[k_math_gr6_achievement] = {
    time: "Grade 6",
    title: "Certificate of Excellence for Math",
    content:
        <>
            <ul>
                <li>Received a certificate of excellence for being the top student in my Math class</li>
            </ul>
        </>,
}

export const k_world_civ_achievement = "world-civ-achievement";
achievementsList[k_world_civ_achievement] = {
    time: "Grade 6",
    title: "Outstanding Historian Award for Gifted and Talented World Civilizations",
    content:
        <>
            <ul>
                <li>Received a certificate of excellence for being the top student in my Gifted and Talented World
                    Civilizations class
                </li>
            </ul>
        </>,
}

export const k_highest_honor_roll_gr6_achievement = "honor-roll-gr6-achievement";
achievementsList[k_highest_honor_roll_gr6_achievement] = {
    time: "Grade 6",
    title: "Highest Honor Roll",
    content:
        <>
            <ul>
                <li>Received a 4.0 GPA for both semesters</li>
            </ul>
        </>,
}

export const k_pres_award_achievement = "pres-award-achievement";
achievementsList[k_pres_award_achievement] = {
    time: "Grade 5",
    title: "President's Education Award",
    content:
        <>
            <ul>
                <li>Received a letter and certificate from President Obama</li>
            </ul>
        </>,
}

export const k_reflection_gr4_achievement = "reflections-gr4-achievement";
achievementsList[k_reflection_gr4_achievement] = {
    time: "Grade 4",
    title: "School Reflections Award - Award of Excellence - Outstanding Achievement in Literature",
    content:
        <>
            <ul>
                <li>Received award for outstanding writing</li>
            </ul>
        </>,
    image: image_21
}

export const k_reflection_gr2_1_achievement = "reflections-gr2-1-achievement";
achievementsList[k_reflection_gr2_1_achievement] = {
    time: "Grade 2",
    title: "School Reflections Award - Visual Art - 1st place - Visual Arts - School Award of Excellence",
    content:
        <>
            <ul>
                <li>Received 1st place award for drawing</li>
            </ul>
        </>,
    image: image_22
}

export const k_reflection_gr2_2_achievement = "reflections-gr2-2-achievement";
achievementsList[k_reflection_gr2_2_achievement] = {
    time: "Grade 2",
    title: "Regional Reflections Award - Visual Arts - Award of Excellence - Received Trophy",
    content:
        <>
            <ul>
                <li>Received 1st place trophy for drawing</li>
            </ul>
        </>,
}

export const k_reflection_gr1_achievement = "reflections-gr1-achievement";
achievementsList[k_reflection_gr1_achievement] = {
    time: "Grade 1",
    title: "School Reflections Award - Visual Art - 1st place - Visual Arts - School Award of Excellence",
    content:
        <>
            <ul>
                <li>Received 1st place award for drawing</li>
            </ul>
        </>,
}

export const k_reflection_gr1_2_achievement = "reflections-gr1_2-achievement";
achievementsList[k_reflection_gr1_2_achievement] = {
    time: "Grade 1",
    title: "Regionals Reflections Award - Visual Art - 2nd place - Visual Arts - School Award of Excellence",
    content:
        <>
            <ul>
                <li>Received 2nd place award for drawing</li>
            </ul>
        </>,
}

export const k_pbs_achievement = "pbs-achievement";
achievementsList[k_pbs_achievement] = {
    time: "Kindergarten",
    title: "2nd Place at PBS 15th Annual National Contest - Certificate of Achievement Spring 2009 Young Writers & Illustrators Contest",
    content:
        <>
            <ul>
                <li>Received 2nd place award for writing</li>
            </ul>
        </>,
}

export default achievementsList;