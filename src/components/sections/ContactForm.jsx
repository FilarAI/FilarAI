"use client";

import { useState } from 'react';
import { FormInput } from '../ui/FormInput';

export const ContactForm = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.target);

        const data = {
            "imie": formData.get('name'),
            "nazwa_firmy": formData.get('company'),
            "email": formData.get('email'),
            "phone": formData.get('phone'),
            "role": formData.get('role'),
            "topic": formData.get('topic'),
            "budget": formData.get('budget'),
            "url": formData.get('websiteUrl'),
            "company_expertise": formData.get('companyDesc'),
            "your_goal": formData.get('goalsDesc'),
            "zgoda_dane": formData.get('consent') ? "Wyrażono zgodę" : "Brak zgody"
        };

        try {
            const response = await fetch('https://n8n.srv1108089.hstgr.cloud/webhook/dbff17fb-bbd1-429d-b979-8b9b76040587', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                console.error("Webhook responded with an error:", response.status);
                setStatus('error');
            }
        } catch (err) {
            console.error("Network error while submitting to webhook:", err);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-[fadeInUp_0.6s_ease-out_forwards]">
                <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-medium">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="heading-serif text-3xl font-bold mb-4">Wiadomość wysłana!</h3>
                <p className="font-body text-gray-text text-lg max-w-lg mx-auto mb-10">
                    Dziękujemy za kontakt. Twoje zapytanie zostało przesłane. Wrócimy do Ciebie najszybciej jak to możliwe!
                </p>
                <button onClick={() => setStatus('idle')} className="btn-secondary">
                    Wyślij kolejną wiadomość
                </button>
            </div>
        );
    }

    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput id="name" label="Imię i Nazwisko" placeholder="Kacper" required />
                <FormInput id="company" label="Nazwa firmy" placeholder="FilarAI" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput id="email" type="email" label="Adres e-mail" placeholder="kacper@filarai.pl" required />
                <FormInput id="phone" type="tel" label="Numer telefonu" placeholder="+48 534 458 418" required />
            </div>

            <div className="flex flex-col gap-2 w-full">
                <label className="font-body text-sm font-medium text-text-primary dark:text-white">Twoja rola w firmie <span className="text-accent-500">*</span></label>
                <select name="role" required defaultValue="" className="w-full bg-white dark:bg-dark-bg border-2 border-gray-border dark:border-white/10 rounded px-4 py-3 font-body text-text-primary dark:text-white focus:outline-none focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10 transition-all duration-300">
                    <option value="" disabled>Wybierz opcję</option>
                    <option value="Osoba decyzyjna">Osoba decyzyjna</option>
                    <option value="Osoba nie decyzyjna">Osoba nie decyzyjna</option>
                </select>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <label className="font-body text-sm font-medium text-text-primary dark:text-white">Temat zapytania <span className="text-accent-500">*</span></label>
                <select name="topic" required defaultValue="" className="w-full bg-white dark:bg-dark-bg border-2 border-gray-border dark:border-white/10 rounded px-4 py-3 font-body text-text-primary dark:text-white focus:outline-none focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10 transition-all duration-300">
                    <option value="" disabled>Wybierz opcję</option>
                    <option value="Automatyzacje">Automatyzacje</option>
                    <option value="Narzędzia AI">Narzędzia AI</option>
                    <option value="Strona internetowa">Strona internetowa</option>
                    <option value="Audyt AI">Audyt AI</option>
                    <option value="Nie wiem jeszcze">Nie wiem jeszcze</option>
                    <option value="Inne">Inne</option>
                </select>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <label className="font-body text-sm font-medium text-text-primary dark:text-white">Orientacyjny budżet</label>
                <select name="budget" defaultValue="" className="w-full bg-white dark:bg-dark-bg border-2 border-gray-border dark:border-white/10 rounded px-4 py-3 font-body text-text-primary dark:text-white focus:outline-none focus:border-accent-500 focus:ring-4 focus:ring-accent-500/10 transition-all duration-300">
                    <option value="" disabled>Wybierz opcję</option>
                    <option value="Do 1 000 zł">Do 1 000 zł</option>
                    <option value="1 000 – 3 000 zł">1 000 – 3 000 zł</option>
                    <option value="3 000 – 7 000 zł">3 000 – 7 000 zł</option>
                    <option value="Powyżej 7 000 zł">Powyżej 7 000 zł</option>
                    <option value="Nie wiem jeszcze">Nie wiem jeszcze</option>
                </select>
            </div>

            <FormInput id="websiteUrl" label="Link do strony lub social media (mile widziany)" placeholder="filarai.agency" required={false} />

            <FormInput id="companyDesc" type="textarea" label="Opisz w 2-3 zdaniach czym zajmuje się Twoja firma" placeholder="Prowadzę biuro rachunkowe, chciałbym zautomatyzować faktury..." required />
            <FormInput id="goalsDesc" type="textarea" label="Co chcesz usprawnić/naprawić w swojej firmie? (2-3 zdania)" placeholder="Np. proces kwalifikacji leadów..." required={false} />

            <div className="flex items-start gap-3 mt-4">
                <input type="checkbox" name="consent" id="consent" required className="mt-1 w-5 h-5 accent-accent-500 bg-white dark:bg-dark-bg border-gray-border dark:border-white/10 rounded cursor-pointer" />
                <label htmlFor="consent" className="font-body text-sm text-text-secondary dark:text-gray-secondary cursor-pointer leading-relaxed">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu zwrotnego oraz przedstawienia oferty. <span className="text-accent-500">*</span>
                </label>
            </div>

            {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm font-medium text-center">
                    Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.
                </div>
            )}

            <button type="submit" disabled={status === 'loading'} className="btn-primary w-full mt-6 justify-center py-4 bg-accent-500 hover:bg-accent-600 shadow-medium disabled:opacity-70 disabled:cursor-not-allowed">
                {status === 'loading' ? 'Wysyłanie...' : 'Wyślij zapytanie'}
            </button>
        </form>
    );
};
