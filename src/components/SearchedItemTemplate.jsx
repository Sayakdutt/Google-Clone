const SearchedItemTemplate = ({data}) => {

    function createMarkup(html){
        return {__html: html}
    }
    return (
        <div className="flex flex-col py-3 max-w-[700px] ml-6">
            <div className="group cursor-pointer" onClick={()=> window.open(data.link)}>
                <div className="text-sm truncate text-[#202124]">
                    {data.formattedUrl}
                </div>
                <div className="group-hover:underline text-xl text-[#1a0dab] pt-2">
                    {data.title}
                </div>
                <div className="text-sm text-[#4d5153] leading-6 pt-1" dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}></div>
            </div>
        </div>
    );
};

export default SearchedItemTemplate;
