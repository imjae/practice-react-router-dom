import React from "react";

const logoRender = () => {
  return (
    <div>
      <a href="/">당근마켓로고</a>
    </div>
  );
};

const searchRender = () => {
  return (
    <div>
      <span>검색</span>
      <input
        type="text"
        name="header-search-input"
        placeholder="동네 이름, 물품명 등을 검색해보세요!"
      ></input>
      <button id="headr-search-button">
        <img src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg" />
      </button>
    </div>
  );
};

const downloadRender = () => {
    return (
        <>
        <a target="_blank" href="https://itunes.apple.com/kr/app/pangyojangteo/id1018769995?l=ko&ls=1&mt=8">
            <img alt="AppStore" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/apple-store-3a664174124650d63cae365bc55586fc5ff27b822b1b97788fc4af77d73d00c8.svg" />
            <div>App Store</div>
        </a>
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.towneers.www">
            <img alt="GooglePlay" src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/google-play-c9ad0fc573cd01e2b982df5de6709a3d8d7cec8d9b58a5c08db7da0b92a32a75.svg" />
            <div>Google Play</div>
        </a>
        </>
    );
}

const Header = () => {
  return (
    <div>
      {logoRender()}
      {searchRender()}
      {downloadRender()}
    </div>
  );
};

export default Header;
