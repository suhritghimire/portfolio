'use client';

import Section from './Section';
import { FileText, Download } from 'lucide-react';

// Using a placeholder PDF URL for now, or assume standard path.
// If the user has a Drive link, we can iframe it.
// User said: "display the drive pdf there itself".
// Since I don't have the link yet, I will make a placeholder that CAN take a link or use a local file.
// The user's LaTeX didn't have a direct drive link to the PDF, just to the drive folder maybe? 
// Wait, the user prompt said: "Research section ... link to my drive ...".
// For Resume: "My resume section that will show the pdf of my resume from drive link".
// I'll create a flexible component.

export default function Resume() {
    const resumeUrl = "/Resume.pdf"; // Standard local path if they drop it in public
    // Drive view link format: https://drive.google.com/file/d/YOUR_FILE_ID/preview

    return (
        <Section id="resume" title="Resume">
            <div className="flex flex-col items-center">
                <div className="w-full max-w-4xl h-[600px] md:h-[800px] bg-gray-100 rounded-xl overflow-hidden shadow-lg border border-gray-200 relative group">

                    {/* Fallback / PDF Viewer */}
                    <iframe
                        src={resumeUrl}
                        className="w-full h-full"
                        title="Resume"
                    >
                        <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-500">
                            <FileText size={48} className="mb-4 text-gray-300" />
                            <p className="mb-4">Unable to display PDF directly.</p>
                            <a href={resumeUrl} className="text-blue-600 underline">Download Resume</a>
                        </div>
                    </iframe>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a
                            href={resumeUrl}
                            download
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
                        >
                            <Download size={18} /> Download
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
}
