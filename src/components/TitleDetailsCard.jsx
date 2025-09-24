import { useRef } from "react";

function TitleDetailsCard() {
    const TitleDetailsCardElement = useRef();

    return <div ref={TitleDetailsCardElement} className="title-details-card-wrapper pt-6 fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll z-20 bg-black/70 ">
        <figure className="title-details-card bg-[#181818] w-[880px] m-auto rounded-t-md overflow-hidden relative">
            <button onClick={() => {
    if (TitleDetailsCardElement.current) {
      TitleDetailsCardElement.current.style.display = "none";
    }
  }}  className="closeTitleDetailsCardBtn w-fit block absolute top-5 right-5 z-10 bg-[#181818] rounded-full p-1.5 cursor-pointer">
                <svg className="text-white" viewBox="0 0 24 24" width="16" height="16" data-icon="XMedium" data-icon-id=":r1r:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" fill="currentColor"></path>
                </svg>
            </button>
            <div className="title-details-media-wrapper relative ">
                <img className="w-[100%]" src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWtP69gLc_HIjEUcI5_hQX7YlH0M7qtzOHKA9jFD_wANaw7FzFmeL9-ekT9UKbCIjicyUeuj5R1dsCCM-RGECTuPe8jIgDwHDBoW.webp?r=239" alt="" srcset="" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#181818] to-transparent" />
                <div className="title-name-img-wrapper absolute bottom-0 left-0 px-10 max-w-[450px]">
                    <img className="" src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfF9iu4Bb-MIF-e5HD3eCp_UX5OEhGCx1GpGPjRrZCYIHBjOIlaZuTkMvQofbjKzF8SDaDLMLenmGKfpwnVUNYpsnYwBKEEQOKp8anuU-3KI6Nm3__12re4KwanJo73uRKdZami9HoeWfJtjJqX5Lt19_NVF7xjsAU3Ta55z3_5w78B_xbtV.webp?r=d59" alt="" srcset="" />
                </div>
            </div>
            <figcaption className="title-details-card-caption px-12">
                <div className="meta-content-wrapper flex gap-12">
                    <div className="col-left w-[90%]">
                        <ul className="flex items-center  gap-2 py-2">
                            <li className="text-[#bcbcbc] text-base">2024</li>
                            <li className="text-[#bcbcbc] text-base">2 Seasons</li>
                            <li className="text-[#bcbcbc] text-sm border px-2 border-gray-500">HD</li>
                            <li className="text-[#bcbcbc] text-base ">
                                <svg viewBox="0 0 24 24" width="32" height="32" data-icon="AudioDescriptionMedium" data-icon-id=":rj:" aria-hidden="true" class="default-ltr-iqcdef-cache-18tpq4v" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9782 7.52002H22.2621C23.37 8.81831 24.0001 10.4801 24.0001 12.2077C24.0001 13.7414 23.505 15.2301 22.6221 16.4453H22.3348H21.8501H21.5662C22.5598 15.2613 23.1207 13.7691 23.1207 12.2077C23.1207 10.449 22.404 8.75599 21.1611 7.52002H21.445H21.9782ZM6.91381 16.4796H8.87336V7.52661H6.42566L0 16.4796H2.87701L3.63174 15.2956H6.91381V16.4796ZM4.8625 13.4299H6.92592V10.224L4.8625 13.4299ZM12.3019 9.62283C13.621 9.62283 14.6839 10.6926 14.6839 12.0048C14.6839 13.3203 13.621 14.3901 12.3019 14.3901H11.6787V9.62283H12.3019ZM12.5443 16.4743C15.0128 16.4743 17.0208 14.4698 17.0208 12.0048C17.0208 9.52935 15.0335 7.52826 12.565 7.52826H12.5373H9.79883V16.4778H12.5443V16.4743ZM20.0103 7.52002H19.7264H19.1932H18.9093C20.1522 8.75599 20.8689 10.449 20.8689 12.2077C20.8689 13.7691 20.308 15.2613 19.3144 16.4453H19.5983H20.083H20.3634C21.2531 15.2301 21.7482 13.7414 21.7482 12.2077C21.7482 10.4801 21.1181 8.81831 20.0103 7.52002ZM17.4745 7.52002H17.7584C18.8663 8.81831 19.4895 10.4801 19.4895 12.2077C19.4895 13.7414 19.0013 15.2301 18.1116 16.4453H17.8277H17.3464H17.0625C18.0492 15.2613 18.6101 13.7691 18.6101 12.2077C18.6101 10.449 17.9004 8.75599 16.6575 7.52002H16.9344H17.4745Z" fill="currentColor"></path>

                                </svg></li>
                            <li>
                                <svg className="text-[#bcbcbc]" viewBox="0 0 16 16" width="16" height="16" data-icon="SubtitlesSmall" data-icon-id=":rk:" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.75C0 1.33579 0.335786 1 0.75 1H15.25C15.6642 1 16 1.33579 16 1.75V12.25C16 12.6642 15.6642 13 15.25 13H12.75V15C12.75 15.2652 12.61 15.5106 12.3817 15.6456C12.1535 15.7806 11.8709 15.785 11.6386 15.6572L6.80736 13H0.75C0.335786 13 0 12.6642 0 12.25V1.75ZM1.5 2.5V11.5H7H7.19264L7.36144 11.5928L11.25 13.7315V12.25V11.5H12H14.5V2.5H1.5ZM6 6.5L3 6.5V5L6 5V6.5ZM13 7.5H10V9H13V7.5ZM3 9V7.5L9 7.5V9L3 9ZM13 5H7V6.5H13V5Z" fill="currentColor"></path>
                                </svg>
                            </li>
                        </ul>
                        <ul className="flex items-center gap-2">
                            <li className="text-[#bcbcbc] text-sm border px-2 border-gray-500 w-fit">U/A 16+</li>
                            <li className="text-white text-sm">gore, violence</li>
                        </ul>
                        <h1 className="text-xl text-white my-3 font-semibold mb-6">Watch All Season on 2 Now</h1>
                        <p className="text-base text-white">
                            Wednesday Addams never fits in — and she likes it that way. Nevermore Academy is the perfect place for an outcast with budding psychic powers.
                        </p>
                    </div>
                    <div className="col-right text-white text-sm">
                        <div className="cast-wrapper ">
                            <span className="text-[#777]">Cast:</span> Jenna Ortega, Gwendoline Christie, Catherine Zeta-Jones, more
                        </div>
                        <div className="genres-wrapper my-3">
                            <span className="text-[#777]">Genres:</span> Teen Tv Show, TV Mysteries, TV Comedies
                        </div>
                        <div className="this-show-is-wrapper">
                            <span className="text-[#777]">This Show Is:</span> Deadpan, Chilling, Imaginative
                        </div>
                    </div>
                </div>
                <div className="episodes-wrapper text-white">
                    <div className="episodes-header my-6 flex items-center justify-between">
                        <h1 className="text-white font-semibold text-2xl ">Episodes</h1>
                        <select name="episode" id="" className="w-[160px] border rounded py-[9px] px-[18px] text-[18px] border-[#777] bg-[#242424]">
                            <option value="1">Season 1</option>
                        </select>
                    </div>
                </div>
                <div className="espisode-list-wrapper" id="season-1">
                    <p className="text-white flex items-center gap-2 text-sm my-2">
                        Season 1:
                        <span className="text-[#bcbcbc] text-sm border px-2 border-gray-500">U/A 16+</span>
                        <span>language, mature themes, threat, violence</span>
                    </p>
                    <div className="espisode-list pb-6" id="season-1-episodes">
                        <div className="episode group text-white flex items-center px-6 py-6 gap-3 bg-[#242424]">
                            <div className="episode-number text-2xl font-light pr-3">
                                1
                            </div>
                            <div className="episode-thumbnail relative">
                                <img className="rounded" src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQU4hw8fUOGS7RAD39LQdxNOMzS4u65i1McIIGYHF6QCgTIp43CbZTPUj5ZMLCei4DWAF6vlSiAi_Ol5q5HCT1ciA0Fkvdpb6HW8ZLTsPZQyE10ICOi2OanK.jpg?r=952" alt="" />

                                {/* Hover Play Icon */}
                                <span className="icon-wrapper absolute top-0 bottom-0 left-0 right-0 group-hover:flex hidden items-center justify-center">
                                    <span className="border rounded-full block w-fit p-3">
                                        <svg viewBox="0 0 24 24" width="24" height="24" data-icon="PlayMedium" xmlns="http://www.w3.org/2000/svg" fill="none">
                                            <path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </span>
                            </div>
                            <div className="episode-info">
                                <div className="episode-info-head flex items-center justify-between my-2 font-semibold">
                                    <h1 className="text-base">Wednesday's Child Is Full of Woe</h1>
                                    <h1 className="text-base font-normal">60m</h1>
                                </div>
                                <p className="text-sm text-[#d2d2d2]">
                                    When a deliciously wicked prank gets Wednesday expelled, her parents ship her off to Nevermore Academy, the boarding school where they fell in love.
                                </p>
                            </div>
                        </div>

                        <div className="episode group text-white flex items-center px-6 py-6 gap-3 border-b border-[#777] rounded">
                            <div className="episode-number text-2xl font-light pr-3">
                                2
                            </div>
                            <div className="episode-thumbnail relative">
                                <img className="rounded" src="https://occ-0-3209-2186.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQU4hw8fUOGS7RAD39LQdxNOMzS4u65i1McIIGYHF6QCgTIp43CbZTPUj5ZMLCei4DWAF6vlSiAi_Ol5q5HCT1ciA0Fkvdpb6HW8ZLTsPZQyE10ICOi2OanK.jpg?r=952" alt="" />

                                {/* Hover Play Icon */}
                                <span className="icon-wrapper absolute top-0 bottom-0 left-0 right-0 group-hover:flex hidden items-center justify-center">
                                    <span className="border rounded-full block w-fit p-3">
                                        <svg viewBox="0 0 24 24" width="24" height="24" data-icon="PlayMedium" xmlns="http://www.w3.org/2000/svg" fill="none">
                                            <path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </span>
                            </div>
                            <div className="episode-info">
                                <div className="episode-info-head flex items-center justify-between my-2 font-semibold">
                                    <h1 className="text-base">Wednesday's Child Is Full of Woe</h1>
                                    <h1 className="text-base font-normal">60m</h1>
                                </div>
                                <p className="text-sm text-[#d2d2d2]">
                                    When a deliciously wicked prank gets Wednesday expelled, her parents ship her off to Nevermore Academy, the boarding school where they fell in love.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </figcaption>
        </figure>
    </div>
}

export default TitleDetailsCard;