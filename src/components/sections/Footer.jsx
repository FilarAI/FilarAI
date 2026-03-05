"use client";

import { Button } from '../ui/Button';
import { FormInput } from '../ui/FormInput';
import { SocialIcons } from '../ui/SocialIcons';

export const Footer = () => (
    <footer id="contact" className="bg-[#0F1B3C] py-16 md:py-24 px-4 md:px-6 lg:px-10 text-[#FFFFFF]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left Column: CTA & Info */}
            <div className="flex flex-col items-start gap-8 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
                <h2 className="font-heading text-[32px] md:text-[48px] font-bold">Ready to automate your workflow?</h2>
                <p className="font-body text-[#F1F5F9] opacity-90 text-[18px]">
                    No credit card. No sales pressure.
                </p>
                <Button variant="primary" href="https://calendar.app.google/oxdocXuk5a2ohKZf9" target="_blank" rel="noopener noreferrer" className="text-[16px] px-8 py-4 mb-4">
                    Schedule Your Free Strategy Call
                </Button>
                <div className="w-full h-px bg-[#FFFFFF]/20 my-4" /> {/* Divider */}

                <div className="flex flex-col sm:flex-row gap-8 w-full">
                    <div className="flex flex-col gap-2 font-body text-[#F1F5F9]">
                        <a href="tel:+48534458418" className="hover:text-[#06B6D4] transition-colors">+48 534 458 418</a>
                        <a href="mailto:kacperfilarkontakt@gmail.com" className="hover:text-[#06B6D4] transition-colors">kacperfilarkontakt@gmail.com</a>
                    </div>
                    <SocialIcons className="text-[#FFFFFF] bg-[#FFFFFF]/10 p-2 rounded" />
                </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-[#FFFFFF] rounded-lg p-6 md:p-8 text-[#0F1B3C] shadow-lg opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
                <h3 className="font-heading text-[24px] font-bold mb-6">Send a Message</h3>
                <p className="font-body text-[#64748B] text-[14px] mb-6">Alternatively, reach us directly at: <strong>kacperfilarkontakt@gmail.com</strong></p>
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <FormInput id="name" label="Name" required />
                    <FormInput id="email" type="email" label="Email" required />
                    <div className="flex flex-col gap-2">
                        <label className="font-body text-[14px] font-medium text-[#0F1B3C]">Business Type</label>
                        <select className="w-full bg-[#FFFFFF] border-2 border-[#E2E8F0] rounded px-4 py-3 font-body focus:outline-none focus:border-[#06B6D4] focus:ring-4 focus:ring-[#06B6D4]/10 transition-all duration-300">
                            <option>Salon / Spa</option>
                            <option>Medical Clinic</option>
                            <option>Wellness Center</option>
                            <option>Other Booking Business</option>
                        </select>
                    </div>
                    <FormInput id="message" type="textarea" label="How can we help?" required />
                    <Button variant="primary" className="mt-2 text-[16px] w-full">
                        Submit Inquiry
                    </Button>
                </form>
            </div>

        </div>

        <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-[#FFFFFF]/20 text-center font-body text-[12px] text-[#F1F5F9]/60">
            <p>© 2026 Filar AI. Wszelkie prawa zastrzeżone.</p>
        </div>
    </footer>
);
