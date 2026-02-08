import { Email, GitHub, KeyboardArrowDown, LinkedIn } from "@mui/icons-material";
import IconButton from "../button/IconButton";
import Image from "next/image";
import { prefix } from "@/app/config/env";
import TextButton from "../button/TextButton";



export default function () {
    const scrollToContent = () => {
        const aboutSection = document.getElementById('about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
    };
    return (<section className="min-h-screen flex flex-col items-center justify-center relative">
        <div>
            <div className="mx-auto rounded-4xl overflow-hidden size-64 text-center animate-fade-in-up border-2">
                <Image height={1000} width={1000} style={{ width: 'auto', height: '100%' }} alt="profile" src={`${prefix}/static/images/profile.jpg`} />
            </div>
            <div className="text-center">
                <h1 className="animate-fade-in-up text-3xl font-bold py-2">Jonas de Boer</h1>
                <h2 className="animate-fade-in-up animation-delay-200 text-xl pb-2">Lead Software Engineer</h2>
                <p className="text-subtext animate-fade-in-up animation-delay-200 pb-2">Building reliable, scalable backend systems ready for production.</p>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-400">
                <div className="flex justify-center">
                    <IconButton href="https://github.com/robedjason" icon={<GitHub fontSize="large" />} />
                    <IconButton href="https://www.linkedin.com/in/jonas-de-boer-29a290166/" icon={<LinkedIn fontSize="large" />} />
                    <IconButton href="mailto:jonasdeboer02@gmail.com" icon={<Email fontSize="large" />} />
                </div>
                <div className="w-fit mx-auto">
                    <TextButton 
                        className="px-4 py-2 my-4 mx-auto"
                        text="Download CV"
                        href={`${prefix}/static/files/cv-en.pdf`}
                        download="cv-jonas-de-boer"/>
                </div>
            </div>
        </div>
        <IconButton
            className="absolute mx-auto bottom-8 animate-bounce cursor-pointer bg-transparent border-none"
            icon={<KeyboardArrowDown />}
            onClick={scrollToContent} />
    </section>
    )
}