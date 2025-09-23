import MySwiper from "./MySwiper";

function CollectionWrapper() {
    return <div className="collection-wrapper absolute top-[75%] left-0 right-0 rounded-md">
        <MySwiper/>
        <MySwiper/>
        <MySwiper/>
    </div>
}

export default CollectionWrapper;