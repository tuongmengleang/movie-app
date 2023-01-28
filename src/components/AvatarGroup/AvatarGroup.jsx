import './index.scss';

export default function AvatarGroup({ size, images }) {
    const style = {
        display: 'grid',
        gridTemplateColumns: `repeat(${images.length}, ${size - 20}px)`,
    }
    return (
        <div className="avatar-list" style={style}>
            { images.map((img, index) => {
                return (
                    <div key={index} className="avatar" style={{ width: size, height: size }}>
                        <img src={img} alt="" />
                    </div> 
                );
            }) }
        </div>
    );
}