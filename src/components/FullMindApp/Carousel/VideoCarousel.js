import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';


const PREFIX_URL =
  'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';


class VideoCarousel extends React.Component {    
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: 'bottom',
      showVideo: {},
      useWindowKeyDown: true,
    };  

    this.images = [
      {
        thumbnail: `https://i.ytimg.com/vi/XwhrbcDhqg0/maxresdefault.jpg`,
        original: `https://i.ytimg.com/vi/XwhrbcDhqg0/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/XwhrbcDhqg0',
        description: 'Ripley Cyber Seguridad',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://i.ytimg.com/vi/y0v-gTNtsVg/maxresdefault.jpg`,
        original: `https://i.ytimg.com/vi/y0v-gTNtsVg/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/y0v-gTNtsVg',
        description: 'Ejemplo Studio - Larrain Vial',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://i.ytimg.com/vi/fE1bfqoHF10/maxresdefault.jpg`,
        original: `https://i.ytimg.com/vi/fE1bfqoHF10/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/fE1bfqoHF10',
        description: 'Demo 1 0 SantanderX Ideas X (demo)',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://i.ytimg.com/vi/ggSbCBD06jE/maxresdefault.jpg`,
        original: `https://i.ytimg.com/vi/ggSbCBD06jE/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/ggSbCBD06jE',
        description: 'Microlearning BCI',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://i.ytimg.com/vi/afnvax2uYxQ/maxresdefault.jpg`,
        original: `https://i.ytimg.com/vi/afnvax2uYxQ/maxresdefault.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/afnvax2uYxQ',
        description: '¿Qué es Microlearning?',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://www.spherical.cl/wp-content/uploads/2023/03/portafolio.jpg`,
        original: `https://www.spherical.cl/wp-content/uploads/2023/03/portafolio.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/kN21k82Sbu0',
        description: 'Capítulo 1 diversidad e inclusión',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://www.spherical.cl/wp-content/uploads/2023/03/Z-XSXpkfteM_1280x720.jpg`,
        original: `https://www.spherical.cl/wp-content/uploads/2023/03/Z-XSXpkfteM_1280x720.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/Z-XSXpkfteM',
        description: 'Komatsu',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://www.spherical.cl/wp-content/uploads/2023/03/CSC.jpg`,
        original: `https://www.spherical.cl/wp-content/uploads/2023/03/CSC.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/ImdWCACayjM',
        description: 'Cáncer mama - benjamin walbaum - Chile sin Cáncer',
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail: `https://www.spherical.cl/wp-content/uploads/2023/03/Stim.jpg`,
        original: `https://www.spherical.cl/wp-content/uploads/2023/03/Stim.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/-zzyAQSVdug',
        description: 'Stim Ene12',
        renderItem: this._renderVideo.bind(this),
      },
      
    ]
  }

  _onImageClick(event) {
    console.debug(
      'clicked on image',
      event.target,
      'at index',
      this._imageGallery.getCurrentIndex()
    );
  }

  _onImageLoad(event) {
    console.debug('loaded image', event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug('slid to index', index);
  }

  _onPause(index) {
    console.debug('paused on index', index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug('isFullScreen?', !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug('playing from index', index);
  }

  _handleInputChange(state, event) {
    if (event.target.value > 0) {
      this.setState({ [state]: event.target.value });
    }
  }

  _handleCheckboxChange(state, event) {
    this.setState({ [state]: event.target.checked });
  }

  _handleThumbnailPositionChange(event) {
    this.setState({ thumbnailPosition: event.target.value });
  }

  _getStaticImages() {
    let images = [];
    for (let i = 2; i < 4; i++) {
      images.push({
        original: `${PREFIX_URL}${i}.jpg`,
        thumbnail: `${PREFIX_URL}${i}t.jpg`,
      });
    }

    return images;
  }

  _resetVideo() {
    this.setState({ showVideo: {} });

    if (this.state.showPlayButton) {
      this.setState({ showGalleryPlayButton: true });
    }

    if (this.state.showFullscreenButton) {
      this.setState({ showGalleryFullscreenButton: true });
    }
  }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo,
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({ showGalleryPlayButton: false });
      }

      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false });
      }
    }
  }

  _renderVideo(item) {
    return (

        
<div>
    {this.state.showVideo[item.embedUrl] ? (
          <div className="video-wrapper">
            <a
              className="close-video"
              onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
            ></a>
            <iframe
              width="1080"
              height="660"
              src={item.embedUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
            <div className="play-button"></div>
            <img className="image-gallery-image" src={item.original} />
            {item.description && (
              <span
                className="image-gallery-description"
                style={{ right: '0', left: 'initial' }}
              >
                {item.description}
              </span>
            )}
          </a>
        )}
      </div>
    );
  }

  render() {
    return (
      <section className="app">
        <div className="container">
                <div className="section-title">
                    <h2>Conoce nuestro trabajo</h2>
                    <div className="bar"></div>
                    <p>Nuestros clientes nos prefieren para mejorar y crecer sus empresas. <br />Te mostramos algunos ejemplos</p>
                </div>
          </div>
        <ImageGallery
          ref={(i) => (this._imageGallery = i)}
          items={this.images}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad}
          onSlide={this._onSlide.bind(this)}
          onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={
            this.state.showFullscreenButton &&
            this.state.showGalleryFullscreenButton
          }
          showPlayButton={
            this.state.showPlayButton && this.state.showGalleryPlayButton
          }
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
          additionalClass="app-image-gallery"
          useWindowKeyDown={this.state.useWindowKeyDown}
        />

        
      </section>
    );
  }
}

export default VideoCarousel;
