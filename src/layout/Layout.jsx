import { Fragment, useEffect, useState } from "react";
import CopyRight from "../components/CopyRight";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import {
  aTagClick,
  dataImage,
  fatchData,
  scrollTop,
  scroll_,
  stickyNav,
  wowJsAnimation,
} from "../utilits";
import Cursor from "../layout/Cursor";
import Header from "../layout/Header";
import MobileMenu from "../layout/MobileMenu";
import PreLoader from "../layout/PreLoader";
import Progressbar from "../layout/Progressbar";


const Layout = ({ children, dark }) => {
  const [siteInfo, setSiteInfo] = useState({});

  useEffect(() => {
    const fetchDataAndInitialize = async () => {
      setSiteInfo(await fatchData("/static/siteSetting.json"));
      dataImage();
    };

    fetchDataAndInitialize();

    const cleanup = () => {
      window.removeEventListener("scroll", scroll_);
      window.removeEventListener("scroll", stickyNav);
      window.removeEventListener("scroll", scrollTop);
    };

    wowJsAnimation();
    aTagClick();
    window.addEventListener("scroll", scroll_);
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollTop);

    return cleanup;
  }, []);
  return (
    <Fragment>
      <PreLoader />
      <ImageView />
      <VideoPopup />
      <div className="dizme_tm_all_wrap" data-magic-cursor="show">
        <MobileMenu
          logo={
            siteInfo && siteInfo.logo && siteInfo.logo[dark ? "dark" : "light"]
          }
        />
        <Header
          logo={
            siteInfo && siteInfo.logo && siteInfo.logo[dark ? "dark" : "light"]
          }
        />
        {children}
        <CopyRight brandName={siteInfo && siteInfo.brandName} />
        <Cursor />
        <Progressbar />
      </div>
    </Fragment>
  );
};
export default Layout;
