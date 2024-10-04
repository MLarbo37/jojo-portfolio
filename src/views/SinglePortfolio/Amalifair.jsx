import React from 'react';
import ImageSection from "../../components/ReuseableComponent/ImageSection";
import SectionTitle from "../../components/ReuseableComponent/SectionTitle";
import TextSection from "../../components/ReuseableComponent/TextSection";

const Amalifair = () => {
    const overviewDescription = (
        <>
            <p>Amalifair is a web-based platform that allows companies and individuals to host and attend live events and network. This platform has auditoriums for live event sessions, exhibition halls, and a chat section for networking.</p>
            <p>On this project, I was part of a two-member UI/UX design team, and my main roles included research and high-fidelity designs. The project also spanned about 6 months with multiple iterations.</p>
        </>
    );

    const problemDescription = (
        <>
            <p>Covid-19 forced many people and businesses to cancel in-person meetings, causing many events to come to a halt. Exhibitions, meetups, conferences, etc., had to be put on hold because of this deadly virus whose spread was mainly through close contact between individuals. This resulted in canceled events, job losses, and slowed productivity.</p>
        </>
    );

    const goalDescription = (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <div className="font-bold">Attendees:</div>
                <p>To engage with businesses and attend sessions and exhibitions.</p>
            </div>
            <div>
                <div className="font-bold">Businesses:</div>
                <p>To improve attendee engagements with their services and products.</p>
            </div>
            <div>
                <div className="font-bold">Product:</div>
                <p>To give all stakeholders an experience that is similar to physical events.</p>
            </div>
        </div>
    );

    const researchDescription = (
        <>
            <p>For Amalifair to stand the test of time and meet user and client needs, we engaged the product owner on his requirements for the platform. We also interviewed some people who had used other event platforms such as Hopin and Hubilo and used their experience and recommendations to guide our design process.</p>
            <p>One of the biggest issues our users raised was navigation on the platforms they had used in the past. With this in mind, one of our subgoals was to make navigation as easy as possible for our users who are people with varying technical knowledge. Another challenge we discovered was how to find the networking area on those platforms.</p>
            <p>Many of these platforms had users clicking through several pages in order to get to the networking area. We sought to mitigate that problem while increasing engagement on our platform.</p>
        </>
    );

    const howItWorksDescription = (
        <div className="grid gap-6">
            <div>
                <div className="font-bold">Landing Page:</div>
                <p>This is the first point of contact for event attendees and other stakeholders such as exhibitors and speakers who want to use the platform. The landing page is customizable to suit particular events.</p>
                <ImageSection img="https://via.placeholder.com/1024x576.png?text=Landing+Page+Design" width="100%" />
            </div>

            <div>
                <div className="font-bold">Sign Up and Log In:</div>
                <p>First-time event attendees have to sign up for specific events to gain access to the platform. Already registered users can just log in to access the full platform.</p>
                <ImageSection img="https://via.placeholder.com/1024x576.png?text=Sign+Up+Design" width="100%" />
                <ImageSection img="https://via.placeholder.com/1024x576.png?text=Login+Design" width="100%" />
            </div>

            <div>
                <div className="font-bold">Lobby:</div>
                <p>This is the main area once the user is logged in. In the lobby, the user has access to relevant information about the event as well as access to the chat feature to interact with other attendees.</p>
                <ImageSection img="https://via.placeholder.com/1024x576.png?text=Lobby+Design" width="100%" />
            </div>

            <div>
                <div className="font-bold">Sessions:</div>
                <p>This area hosts all conference events that may be happening live or have been pre-recorded. The sessions list gives the user information about the session such as topic, speakers, and time.</p>
                <ImageSection img="https://via.placeholder.com/1024x576.png?text=Session+List+Design" width="100%" />
                <ImageSection img="https://via.placeholder.com/1024x576.png?text=Session+Design" width="100%" />
            </div>

            <div>
                <div className="font-bold">Exhibition Halls:</div>
                <p>For events with exhibitions, this feature is very useful. Exhibitors are grouped in halls based on criteria of the organizer’s choice. The user can access information about the exhibitors and have one-on-one video calls and chats with the attendants in the booths.</p>
                <ImageSection img="https://via.placeholder.com/1024x576.png?text=Exhibition+Hall+Design" width="100%" />
                <ImageSection img="https://via.placeholder.com/1024x576.png?text=Pavilion+Design" width="100%" />
                <ImageSection img="https://via.placeholder.com/1024x576.png?text=Exhibition+Booth+Design" width="100%" />
            </div>

            <div>
                <div className="font-bold">Chat:</div>
                <p>Throughout the platform, users can search for other participants of the event and connect with them. The networking session is not limited to a particular place but can take place anywhere, anytime.</p>
                <ImageSection img="https://via.placeholder.com/1024x576.png?text=Chat+Design" width="100%" />
            </div>
        </div>
    );

    const resultDescription = (
        <>
            <p>The feedback we received from event organizers and attendees was extremely positive. Many business owners (exhibitors) hinted that the platform had given them a larger market base than any physical event could have.</p>
            <p className="italic"><span className="font-bold">“Our event was smooth and seamless because of your platform”</span> was the comment from one event organizer.</p>
        </>
    );

    return (
        <div className="container mx-auto mb-5">
            <div className="text-center mb-10">
                <SectionTitle firstWord="Amali" secondWord="Fair" title="Portfolio" />
            </div>
            <div className="grid gap-8 animate__animated animate__fadeInUp animate__delay-1s">
                <ImageSection img="https://via.placeholder.com/1024x576.png?text=Project+Overview" width="100%" />
                
                <div className="space-y-12">
                    <TextSection title="Overview" description={overviewDescription} />
                    <ImageSection img="https://via.placeholder.com/1024x576.png?text=Research+Design" width="100%" />
                    <TextSection title="The Problem" description={problemDescription} />
                    <TextSection title="The Goal" description={goalDescription} />
                    <ImageSection img="https://via.placeholder.com/1024x576.png?text=Goal+Design" width="100%" />
                    <TextSection title="Research" description={researchDescription} />
                    <ImageSection img="https://via.placeholder.com/1024x576.png?text=Process+Design" width="100%" />
                    <TextSection title="How it works" description={howItWorksDescription} />
                    <TextSection title="Results" description={resultDescription} />
                </div>
            </div>
        </div>
    );
};

export default Amalifair;
