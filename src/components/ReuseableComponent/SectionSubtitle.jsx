

const SectionSubtitle = ({firstWord, secondWord, textFormat}) => {
    return ( 
        <div className="text-center ">
      <h3 className="text-2xl font-bold">
        <span className="text-primary dark:text-gray-100">{firstWord} </span>
        <span>{secondWord}</span>
      </h3>
    </div>
     );
}
 
export default SectionSubtitle;