import Post from './modles/post';

export default function createFakeDate(){
    // 0, 1, ...39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트 #${i}`,
        // https://www.lipsum.com/에서 복사한 200자 이상의 텍스트
        body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada vestibulum tempus. Donec dictum risus purus, quis placerat lorem blandit at. Duis maximus elit non urna blandit, at sagittis erat maximus. Donec ultrices ligula eu purus sagittis, ut tincidunt lorem semper. Nulla lectus massa, rutrum semper viverra vitae, efficitur ut sapien. Nullam id risus nec arcu luctus tincidunt. Suspendisse lectus est, finibus non venenatis sed, viverra at quam. Duis a nulla suscipit, auctor mauris eget, vehicula tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris at enim aliquet, commodo mauris ut, fermentum purus. Integer vehicula leo a libero porttitor fringilla. Quisque dignissim lacus sit amet mauris mattis, sit amet feugiat erat scelerisque. Nunc et orci hendrerit, porttitor nunc eu, scelerisque ex. Praesent dapibus porta scelerisque.',
        tags: ['가짜', '데이터'],
    }));
    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    });

}