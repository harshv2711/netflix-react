import MySwiper from "./MySwiper";

function CollectionWrapper() {
    return <div className="collection-wrapper absolute top-[75%] left-0 right-0 rounded-md">
        <MySwiper key={1}/>
        <MySwiper key={2}/>
    </div>
}

export default CollectionWrapper;