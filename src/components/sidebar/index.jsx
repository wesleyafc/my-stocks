import { SideBarContainer } from './styles'

export function Sidebar() {
    return (
        <SideBarContainer>
            <div className="sideBarItem">
                <span className="sideBarTitle" >balaço geral</span>
                <img className="chartimg" src="https://www.pngkey.com/png/full/100-1009289_big-image-pie-chart-icon-png.png" alt="" />
            </div>

            <div className="sideBarItem">
                <span className="sideBarTitle" >porcetagen por ação</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">15% WEFF11</li>
                    <li className="sideBarListItem">25% WEFF11</li>
                    <li className="sideBarListItem">65% WEFF11</li>
                    <li className="sideBarListItem">35% WEFF11</li>
                    <li className="sideBarListItem">41% WEFF11</li>
                    <li className="sideBarListItem">43% WEFF11</li>
                </ul>
            </div>

            <div className="sideBarItem">
                <span className="sideBarTitle">Total</span>
                <p className="total">R$3249.93</p>
            </div>
        </SideBarContainer>

    )
}
