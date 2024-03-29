// import styled from "styled-components";
import './index.scss';

export default function Card({ title, star, seasons, poster }) {
    // const Wrapper = styled.div`
    //     padding: 10px;
    //     border-radius: 15px;
    // `;
    return (
        <div className='card-wrapper'>
            <div className="card-cover">
                <img src={poster} alt={title} />
            </div>
            <div className="card-content">
                <div className="card-inner">
                    <div className="star">
                        <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m12 18.275l-4.15 2.5q-.275.175-.575.15q-.3-.025-.525-.2q-.225-.175-.35-.437q-.125-.263-.05-.588l1.1-4.725L3.775 11.8q-.25-.225-.312-.513Q3.4 11 3.5 10.725q.1-.275.3-.45q.2-.175.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45q.262-.15.537-.15t.538.15q.262.15.387.45l1.875 4.45l4.85.425q.35.05.55.225q.2.175.3.45q.1.275.038.562q-.063.288-.313.513l-3.675 3.175l1.1 4.725q.075.325-.05.588q-.125.262-.35.437q-.225.175-.525.2q-.3.025-.575-.15Z"/></svg>
                        { star }
                    </div>
                    <span>{ seasons } Seasons</span>
                </div>
                <h2>{ title }</h2>
            </div>
        </div>
    );
}