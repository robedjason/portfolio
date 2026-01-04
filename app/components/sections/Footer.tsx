import { Email, Favorite, GitHub, LinkedIn } from "@mui/icons-material";
import IconButton from "../button/IconButton";


export default function () {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-invbackground text-invtext py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">Jonas de Boer</h3>
                        <p className="text-invsubtext">Lead Software Engineer</p>
                    </div>

                    <div className="flex gap-4">
                        <IconButton href="https://github.com/robedjason" icon={<GitHub fontSize="large" />} />
                        <IconButton href="https://www.linkedin.com/in/jonas-de-boer-29a290166/" icon={<LinkedIn fontSize="large" />} />
                        <IconButton href="mailto:jonasdeboer02@gmail.com" icon={<Email fontSize="large" />} />
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-sm">
                    <p className="flex items-center justify-center gap-2">
                        Made with <Favorite className="text-red-500" /> by Jonas de Boer
                    </p>
                    <p className="mt-2">{currentYear} All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}