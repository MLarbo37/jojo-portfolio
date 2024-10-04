import Fade from 'react-reveal/Fade';

const ColumnIconText = ({
    contactpage,
    isDarkTheme,
    icon,
    title,
    subtitle,
    para,
    iconClass,
    titleClass,
    subtitleClass,
    iconSize,
    textSide
  }) => {
    return (
      <div
        className={` ${contactpage ? '' : isDarkTheme ? '' : ''}`}
      >
        <Fade top cascade duration={1500}>
        <div className="flex ">
          {icon && (
            <div className={`flex-none  hidden lg:flex  ${iconClass}`} style={{ flexBasis: `${iconSize * 8.333}%` }}>
              <div className={iconClass}>{icon}</div>
            </div>
          )}
          <div className="flex-grow" style={{ flexBasis: `${textSide * 8.333}%` }}>
            {title && <div className={titleClass}>{title}</div>}
            {subtitle && <div className={subtitleClass}>{subtitle}</div>}
            {para && <p className="mt-2">{para}</p>}
          </div>
        </div>
        </Fade>
      </div>
    );
  };
  
  export default ColumnIconText;
  