// @flow

import * as actions from '../actions';

describe('gif actions', () => {
  describe('.getTrending', () => {
    let dispatch;
    beforeAll(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              data: ['data'],
            }),
        })
      );
      dispatch = jest.fn(n => n);
    });

    it('should return a function', () => {
      expect(actions.getTrending()).toMatchSnapshot();
      expect(actions.getTrending()).toBeInstanceOf(Function);
    });

    it('should attempt a fetch and dispatch insertTrending', async () => {
      await actions.getTrending()(dispatch);
      expect(window.fetch).toBeCalled();
      expect(dispatch).toBeCalledWith({
        trendingGifs: ['data'],
        type: 'INSERT_TRENDING',
      });
    });
  });

  it('.insertTrending', () => {
    const trendingGifs = [
      {
        type: 'gif',
        id: '3o6nUSu6ZB82udVAUo',
        slug: 'maroon5-maroon-5-she-will-be-loved-3o6nUSu6ZB82udVAUo',
        url:
          'https://giphy.com/gifs/maroon5-maroon-5-she-will-be-loved-3o6nUSu6ZB82udVAUo',
        bitly_gif_url: 'http://gph.is/2x2b2gw',
        bitly_url: 'http://gph.is/2x2b2gw',
        embed_url: 'https://giphy.com/embed/3o6nUSu6ZB82udVAUo',
        username: 'maroon5',
        source: 'https://www.youtube.com/watch?v=nIjVuRTm-dc',
        rating: 'g',
        content_url: '',
        source_tld: 'www.youtube.com',
        source_post_url: 'https://www.youtube.com/watch?v=nIjVuRTm-dc',
        is_indexable: 0,
        import_datetime: '2017-08-29 20:26:12',
        trending_datetime: '2017-09-07 21:38:56',
        user: {
          avatar_url:
            'https://media.giphy.com/avatars/maroon5/PEbr2UyzWosE.jpg',
          banner_url:
            'https://media.giphy.com/headers/maroon5/SWw8125Em2NK.jpg',
          profile_url: 'https://giphy.com/maroon5/',
          username: 'maroon5',
          display_name: 'Maroon 5',
          twitter: '@maroon5',
        },
        images: {
          fixed_height_still: {
            url: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/200_s.gif',
            width: '266',
            height: '200',
            size: '31976',
          },
          original_still: {
            url:
              'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy_s.gif',
            width: '480',
            height: '360',
            size: '78410',
          },
          fixed_width: {
            url: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/200w.gif',
            width: '200',
            height: '150',
            size: '228931',
            mp4: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/200w.mp4',
            mp4_size: '15257',
            webp: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/200w.webp',
            webp_size: '32722',
          },
          fixed_height_small_still: {
            url: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/100_s.gif',
            width: '133',
            height: '100',
            size: '10992',
          },
          fixed_height_downsampled: {
            url: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/200_d.gif',
            width: '266',
            height: '200',
            size: '198402',
            webp:
              'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/200_d.webp',
            webp_size: '22660',
          },
          preview: {
            width: '480',
            height: '360',
            mp4:
              'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy-preview.mp4',
            mp4_size: '46849',
          },
          fixed_height_small: {
            url: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/100.gif',
            width: '133',
            height: '100',
            size: '114974',
            mp4: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/100.mp4',
            mp4_size: '9400',
            webp: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/100.webp',
            webp_size: '19516',
          },
          downsized_still: {
            url:
              'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy-downsized_s.gif',
            width: '480',
            height: '360',
            size: '78410',
          },
          downsized: {
            url:
              'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy-downsized.gif',
            width: '480',
            height: '360',
            size: '1023275',
          },
          downsized_large: {
            url: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy.gif',
            width: '480',
            height: '360',
            size: '1023275',
          },
          fixed_width_small_still: {
            url: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/100w_s.gif',
            width: '100',
            height: '75',
            size: '7229',
          },
          preview_webp: {
            url:
              'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy-preview.webp',
            width: '405',
            height: '304',
            size: '49308',
          },
          fixed_width_still: {
            url: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/200w_s.gif',
            width: '200',
            height: '150',
            size: '20351',
          },
          fixed_width_small: {
            url: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/100w.gif',
            width: '100',
            height: '75',
            size: '70024',
            mp4: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/100w.mp4',
            mp4_size: '6551',
            webp: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/100w.webp',
            webp_size: '13268',
          },
          downsized_small: {
            width: '480',
            height: '360',
            mp4:
              'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy-downsized-small.mp4',
            mp4_size: '46849',
          },
          fixed_width_downsampled: {
            url: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/200w_d.gif',
            width: '200',
            height: '150',
            size: '121698',
            webp:
              'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/200w_d.webp',
            webp_size: '16218',
          },
          downsized_medium: {
            url: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy.gif',
            width: '480',
            height: '360',
            size: '1023275',
          },
          original: {
            url: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy.gif',
            width: '480',
            height: '360',
            size: '1023275',
            frames: '12',
            mp4: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy.mp4',
            mp4_size: '46849',
            webp:
              'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy.webp',
            webp_size: '98906',
            hash: '59709ff71f9e529c1fb6eaf7980c000a',
          },
          fixed_height: {
            url: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/200.gif',
            width: '266',
            height: '200',
            size: '380867',
            mp4: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/200.mp4',
            mp4_size: '22414',
            webp: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/200.webp',
            webp_size: '45828',
          },
          looping: {
            mp4:
              'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy-loop.mp4',
            mp4_size: '861039',
          },
          original_mp4: {
            width: '480',
            height: '360',
            mp4: 'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy.mp4',
            mp4_size: '46849',
          },
          preview_gif: {
            url:
              'https://media3.giphy.com/media/3o6nUSu6ZB82udVAUo/giphy-preview.gif',
            width: '120',
            height: '90',
            size: '48649',
          },
          '480w_still': {
            url: 'https://media4.giphy.com/media/3o6nUSu6ZB82udVAUo/480w_s.jpg',
            width: '480',
            height: '360',
          },
        },
      },
    ];

    expect(actions.insertTrending(trendingGifs)).toMatchSnapshot();
  });
});
