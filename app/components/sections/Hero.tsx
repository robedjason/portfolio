import { Email, GitHub, KeyboardArrowDown, LinkedIn } from "@mui/icons-material";
import IconButton from "../button/IconButton";
import Image from "next/image";
import { prefix } from "@/app/config/env";



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
                <h1 className="animate-fade-in-up">Jonas de Boer</h1>
                <h2 className="text-subtext animate-fade-in-up animation-delay-200">Senior Backend Engineer</h2>
                <p className="text-subtext animate-fade-in-up animation-delay-200">Developing high-end scalable systems.</p>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-400">
                <div className="flex justify-center">
                    <IconButton href="https://github.com/robedjason" icon={<GitHub fontSize="large" />} />
                    <IconButton href="https://www.linkedin.com/in/jonas-de-boer-29a290166/" icon={<LinkedIn fontSize="large" />} />
                    <IconButton href="mailto:jonasdeboer02@gmail.com" icon={<Email fontSize="large" />} />
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