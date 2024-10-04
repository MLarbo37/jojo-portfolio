const ImageSection = ({ contactpage, img, height, width, deco, lineBorder, overlay }) => {
    return (
        <div className={deco ? deco : "flex justify-center"}>
            <div
                className={`relative ${contactpage ? '' : 'rounded-xl backdro '}`}
                style={{ width: width, height: height }}
            >
                <img
                    src={img}
                    className={`imgD rounded-xl  ${lineBorder}`}
                    style={{ width: '100%', height: '100%', zIndex: -10 }}
                    alt="Image Section"
                />
                {overlay && <div className="absolute inset-0">{overlay}</div>}
            </div>
        </div>
    );
}

export default ImageSection;
