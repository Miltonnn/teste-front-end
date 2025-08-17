import './Newsletter.scss';
import { useState } from 'react';

const Newsletter = () => {
    const [aceitoTermos, setAceitoTermos] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!aceitoTermos) {
            alert("Você precisa aceitar os termos e condições.");
            return;
        }
        alert("Formulário enviado!");
    };

    return (
        <div className="newsletter">
            <div className="newsletter__content">
                <div>
                    <h2>Inscreva-se na nossa newsletter</h2>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>
                <div>
                    <form className="newsletter__form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Digite seu nome" required autoComplete="name" />
                        <input type="email" placeholder="Digite seu e-mail" required autoComplete="email" />
                        <button className="btn--primary" type="submit">Inscrever-se</button>
                    </form>
                    <label className="newsletter__checkbox">
                        <input
                            type="checkbox"
                            checked={aceitoTermos}
                            onChange={(e) => setAceitoTermos(e.target.checked)}
                            required
                        />
                        <a href="/termos">Aceito os termos e condições</a>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
