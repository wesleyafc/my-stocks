import { HeaderContainer } from './styles';

export function Header() {
    return (
        <HeaderContainer>
            <div className="headerTitles">
                <span className="headerTitleSm">compras &vendas de ações</span>
                <span className="headerTitleLg">FII</span>
            </div>
            <img
                className="headerLogo"
                src="https://www.tororadar.com.br/hubfs/LPs_conteudo/images/hero-img-day-trade.jpg"
                alt=""
            />
        </HeaderContainer>
    )
}
