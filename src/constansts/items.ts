import { doc, getDoc, setDoc } from "firebase/firestore";
import { CardProps } from "../components/Main/CardItem";
import { CardListProps } from "../components/Main/CardList";
import { firestore } from "../firebase";

export const quizzes = [
  {
    title: "Roblox Studio là gì?",
    ans: [
      {
        answer: "A",
        title: "Một trò chơi trực tuyến",
      },
      {
        answer: "B",
        title: "Một trình soạn thảo game",
      },
      {
        answer: "C",
        title: "Một mạng xã hội",
      },
      {
        answer: "D",
        title: "Một công ty sản xuất",
      },
    ],
    order: 1,
    rightAns: "B",
    userAns: "",
    id: `quiz${0}`,
  },
  {
    title: "Roblox Studio cho phép người dùng làm gì?",
    ans: [
      {
        answer: "A",
        title: "Chơi trò chơi",
      },
      {
        answer: "B",
        title: "Soạn thảo trò chơi",
      },
      {
        answer: "C",
        title: "Xem video trực tuyến",
      },
      {
        answer: "D",
        title: "Mua đồ ảo",
      },
    ],
    order: 2,
    rightAns: "B",
    userAns: "",
    id: `quiz${1}`,
  },
  {
    title: "Ngôn ngữ lập trình nào được sử dụng trong Roblox Studio?",
    ans: [
      {
        answer: "A",
        title: "Python",
      },
      {
        answer: "B",
        title: "JavaScript",
      },
      {
        answer: "C",
        title: "LUA",
      },
      {
        answer: "D",
        title: "Java",
      },
    ],
    order: 3,
    rightAns: "C",
    userAns: "",
    id: `quiz${2}`,
  },
  {
    title: "Cửa sổ hiển thị các vật đang có trong bản đồ là gì?",
    ans: [
      {
        answer: "A",
        title: "Explorer",
      },
      {
        answer: "B",
        title: "Properties",
      },
      {
        answer: "C",
        title: "Toolbox",
      },
      {
        answer: "D",
        title: "Terrain",
      },
    ],
    order: 4,
    rightAns: "A",
    userAns: "",
    id: `quiz${3}`,
  },
  {
    title: "Cửa sổ hiển thị thuộc tính của vật thể là gì?",
    ans: [
      {
        answer: "A",
        title: "Explorer",
      },
      {
        answer: "B",
        title: "Properties",
      },
      {
        answer: "C",
        title: "Toolbox",
      },
      {
        answer: "D",
        title: "Terrain",
      },
    ],
    order: 5,
    rightAns: "B",
    userAns: "",
    id: `quiz${4}`,
  },
];

export const quizzes2 = [
  {
    title: "Thuộc tính Position của một vật thể trong Roblox thể hiện điều gì?",
    ans: [
      {
        answer: "A",
        title: "Xác định tên vật thể",
      },
      {
        answer: "B",
        title: "Xác định vị trí của vật thể trong thế giới 3D",
      },
      {
        answer: "C",
        title: "Xác định màu sắc của vật thể",
      },
      {
        answer: "D",
        title: " Xác định kích thước của vật thể",
      },
    ],
    order: 1,
    rightAns: "B",
    userAns: "",
    id: `quiz${0}`,
  },
  {
    title: "Thuộc tính Size của một vật thể trong Roblox thể hiện điều gì?",
    ans: [
      {
        answer: "A",
        title: "Xác định tên vật thể",
      },
      {
        answer: "B",
        title: "Xác định vị trí của vật thể trong thế giới 3D",
      },
      {
        answer: "C",
        title: "Xác định màu sắc của vật thể",
      },
      {
        answer: "D",
        title: " Xác định kích thước của vật thể",
      },
    ],
    order: 2,
    rightAns: "D",
    userAns: "",
    id: `quiz${1}`,
  },
  {
    title: "Thuộc tính Color của một vật thể trong Roblox thể hiện điều gì?",
    ans: [
      {
        answer: "A",
        title: "Xác định tên vật thể",
      },
      {
        answer: "B",
        title: "Xác định vị trí của vật thể trong thế giới 3D",
      },
      {
        answer: "C",
        title: "Xác định màu sắc của vật thể",
      },
      {
        answer: "D",
        title: " Xác định kích thước của vật thể",
      },
    ],
    order: 3,
    rightAns: "C",
    userAns: "",
    id: `quiz${2}`,
  },
  {
    title:
      "Thuộc tính Transparency của một vật thể trong Roblox thể hiện điều gì?",
    ans: [
      {
        answer: "A",
        title: "Xác định độ trong suốt của vật thể",
      },
      {
        answer: "B",
        title: "Xác định vị trí của vật thể trong thế giới 3D",
      },
      {
        answer: "C",
        title: "Xác định màu sắc của vật thể",
      },
      {
        answer: "D",
        title: " Xác định kích thước của vật thể",
      },
    ],
    order: 4,
    rightAns: "A",
    userAns: "",
    id: `quiz${3}`,
  },
  {
    title:
      "Thuộc tính Reflectance của một vật thể trong Roblox thể hiện điều gì?",
    ans: [
      {
        answer: "A",
        title: "Xác định tên vật thể",
      },
      {
        answer: "B",
        title: "Xác định vị trí của vật thể trong thế giới 3D",
      },
      {
        answer: "C",
        title: "Xác định màu sắc của vật thể",
      },
      {
        answer: "D",
        title: " Xác định độ phản chiếu của vật thể",
      },
    ],
    order: 5,
    rightAns: "D",
    userAns: "",
    id: `quiz${4}`,
  },
];

export const quizzes3 = [
  {
    title: "Solid Modeling là gì?",
    ans: [
      {
        answer: "A",
        title: "Một phương pháp tạo hình 3D bằng việc kết hợp các đối tượng 2D",
      },
      {
        answer: "B",
        title: "Một phương pháp tạo hình 3D bằng việc sử dụng chỉ vẽ 3D",
      },
      {
        answer: "C",
        title: "Một phương pháp tạo hình 3D bằng việc kết hợp các đối tượng 3D",
      },
      {
        answer: "D",
        title: "Một phương pháp tạo hình 3D bằng việc thảo luận với người khác",
      },
    ],
    order: 1,
    rightAns: "C",
    userAns: "",
    id: `quiz${0}`,
  },
  {
    title: "Chức năng Union có tác dụng gì?",
    ans: [
      {
        answer: "A",
        title: "Gộp nhiều đối tượng lại với nhau",
      },
      {
        answer: "B",
        title: "Tạo ra màu sắc",
      },
      {
        answer: "C",
        title: "Xoay đối tượng quanh trục",
      },
      {
        answer: "D",
        title: "Chia tách đối tượng",
      },
    ],
    order: 2,
    rightAns: "A",
    userAns: "",
    id: `quiz${1}`,
  },
  {
    title: "Chức năng Subtract có tác dụng gì?",
    ans: [
      {
        answer: "A",
        title: "Gộp nhiều đối tượng lại với nhau",
      },
      {
        answer: "B",
        title: "Tạo ra màu sắc",
      },
      {
        answer: "C",
        title: "Phép cắt bớt một đối tượng khỏi một đối tượng khác",
      },
      {
        answer: "D",
        title: "Chia tách đối tượng",
      },
    ],
    order: 3,
    rightAns: "C",
    userAns: "",
    id: `quiz${2}`,
  },
  {
    title: "Chức năng Separate có tác dụng gì?",
    ans: [
      {
        answer: "A",
        title: "Gộp nhiều đối tượng lại với nhau",
      },
      {
        answer: "B",
        title: "Tạo ra màu sắc",
      },
      {
        answer: "C",
        title: "Phép cắt bớt một đối tượng khỏi một đối tượng khác",
      },
      {
        answer: "D",
        title: "Chia tách các đối tượng",
      },
    ],
    order: 4,
    rightAns: "D",
    userAns: "",
    id: `quiz${3}`,
  },
  {
    title: "Solid Modeling sử dụng loại đối tượng nào để tạo mô hình 3D?",
    ans: [
      {
        answer: "A",
        title: "Đối tượng 2D",
      },
      {
        answer: "B",
        title: "Hình ảnh 2D",
      },
      {
        answer: "C",
        title: "Đối tượng 3D",
      },
      {
        answer: "D",
        title: "Màu sắc",
      },
    ],
    order: 5,
    rightAns: "C",
    userAns: "",
    id: `quiz${4}`,
  },
];

export const quizzes4 = [
  {
    title: "Terrain Editor trong Roblox Studio là gì?",
    ans: [
      {
        answer: "A",
        title: "Công cụ chỉnh sửa ánh sáng",
      },
      {
        answer: "B",
        title: "Công cụ chỉnh sửa vị trí đối tượng",
      },
      {
        answer: "C",
        title: "Công cụ chỉnh sửa đất đai và môi trường",
      },
      {
        answer: "D",
        title: "Công cụ chỉnh sửa màu sắc",
      },
    ],
    order: 1,
    rightAns: "C",
    userAns: "",
    id: `quiz${0}`,
  },
  {
    title:
      "Terrain Editor cho phép người dùng tạo ra những phần cảnh quan nào?",
    ans: [
      {
        answer: "A",
        title: "Biển cả",
      },
      {
        answer: "B",
        title: "Rừng rậm",
      },
      {
        answer: "C",
        title: "Núi non",
      },
      {
        answer: "D",
        title: "Tất cả các phương án trên",
      },
    ],
    order: 2,
    rightAns: "D",
    userAns: "",
    id: `quiz${1}`,
  },
  {
    title:
      "Trong Roblox Studio, bạn có thể sử dụng Terrain Editor để tạo ra đối tượng nào?",
    ans: [
      {
        answer: "A",
        title: "Vật dụng",
      },
      {
        answer: "B",
        title: "Nhân vật",
      },
      {
        answer: "C",
        title: "Cảnh quan môi trường",
      },
      {
        answer: "D",
        title: "Tất cả phương án trên",
      },
    ],
    order: 3,
    rightAns: "C",
    userAns: "",
    id: `quiz${2}`,
  },
  {
    title: "Erosion trong Terrain Editor của Roblox Studio có tác dụng gì?",
    ans: [
      {
        answer: "A",
        title: "Làm mờ màu sắc",
      },
      {
        answer: "B",
        title: "Tạo độ bóng",
      },
      {
        answer: "C",
        title: "Làm cho đất đai trở nên mịn hơn",
      },
      {
        answer: "D",
        title: "Tạo các sự sụt lún",
      },
    ],
    order: 4,
    rightAns: "D",
    userAns: "",
    id: `quiz${3}`,
  },
  {
    title:
      "Terrain Editor cho phép bạn điều chỉnh độ cao của đất đai để làm gì?",
    ans: [
      {
        answer: "A",
        title: "Tạo độ bóng",
      },
      {
        answer: "B",
        title: "Tạo hiệu ứng âm thanh",
      },
      {
        answer: "C",
        title: "Tạo các mô hình 3D",
      },
      {
        answer: "D",
        title: "Tạo đất đai gồ ghềnh hoặc phẳng",
      },
    ],
    order: 5,
    rightAns: "D",
    userAns: "",
    id: `quiz${4}`,
  },
];

export const quizzes5 = [
  {
    title: "Effect trong Roblox Studio là gì?",
    ans: [
      {
        answer: "A",
        title: "Loại thức ăn",
      },
      {
        answer: "B",
        title: "Hiệu ứng hình ảnh hoặc âm thanh được áp dụng vào trò chơi",
      },
      {
        answer: "C",
        title: "Một dạng tiền tệ trong trò chơi",
      },
      {
        answer: "D",
        title: "Loại vật phẩm",
      },
    ],
    order: 1,
    rightAns: "B",
    userAns: "",
    id: `quiz${0}`,
  },
  {
    title: "Effect có thể làm gì trong Roblox Studio?",
    ans: [
      {
        answer: "A",
        title: "Tạo ra nhân vật",
      },
      {
        answer: "B",
        title: "Tạo ra các cảnh quan và đối tượng",
      },
      {
        answer: "C",
        title: "Tạo hiệu ứng hình ảnh và âm thanh đặc biệt",
      },
      {
        answer: "D",
        title: "Điều chỉnh ánh sáng trong trò chơi",
      },
    ],
    order: 2,
    rightAns: "C",
    userAns: "",
    id: `quiz${1}`,
  },
  {
    title: "Có thể sử dụng Effect để thêm vào trò chơi những hiệu ứng như gì?",
    ans: [
      {
        answer: "A",
        title: "Tạo mô hình 3D",
      },
      {
        answer: "B",
        title: "Làm mờ màu sắc",
      },
      {
        answer: "C",
        title: "Tạo sương mù hoặc lửa cháy",
      },
      {
        answer: "D",
        title: "Thay đổi kích thước đối tượng",
      },
    ],
    order: 3,
    rightAns: "C",
    userAns: "",
    id: `quiz${2}`,
  },
  {
    title: "Bloom có tác dụng gì trong Roblox Studio?",
    ans: [
      {
        answer: "A",
        title: "Làm mờ hình ảnh",
      },
      {
        answer: "B",
        title: "Làm sáng hình ảnh để tạo hiệu ứng bóng sáng mạnh",
      },
      {
        answer: "C",
        title: "Tạo mô hình 3D",
      },
      {
        answer: "D",
        title: "Thay đổi kích thước đối tượng",
      },
    ],
    order: 4,
    rightAns: "B",
    userAns: "",
    id: `quiz${3}`,
  },
  {
    title:
      "Effect trong Roblox Studio có thể được sử dụng để làm gì trong Roblox Studio?",
    ans: [
      {
        answer: "A",
        title: "Hiển thị quảng cáo",
      },
      {
        answer: "B",
        title: "Tạo màu sắc đẹp",
      },
      {
        answer: "C",
        title: "Tạo hiệu ứng đặc biệt",
      },
      {
        answer: "D",
        title: "Tạo mô hình 3D",
      },
    ],
    order: 5,
    rightAns: "C",
    userAns: "",
    id: `quiz${4}`,
  },
];

const lessonsEmpty: CardProps = {
  navigateTo: "LessonVideo",
  title: "",
};

export const lessons: CardProps[] = [
  {
    ...lessonsEmpty,
    title: "Bài 1: Làm quen với Roblox Studio",
    id: `lesson0`,
    paramList: {
      id: `lesson0`,
      videoSource: "https://www.youtube.com/watch?v=OvylD-TMjeQ",
    },
    avata: {
      uri: "https://funix.edu.vn/wp-content/uploads/2023/02/khai-niem-ung-dung-roblox-studio.jpg",
    },
  },
  {
    ...lessonsEmpty,
    title: "Bài 2: Thuộc tính cơ bản của vật thể",
    id: `lesson1`,
    paramList: {
      id: `lesson1`,
      videoSource: "https://www.youtube.com/watch?v=pKBs76uOdcQ",
    },
    avata: {
      uri: "https://i.ytimg.com/vi/l20VZ5_nBrU/maxresdefault.jpg",
    },
  },
  {
    ...lessonsEmpty,
    title: "Bài 3: Làm quen với Solid Modeling",
    id: `lesson2`,
    paramList: {
      id: `lesson2`,
      videoSource: "https://www.youtube.com/watch?v=2prQ2lFTzFE",
    },
    avata: {
      uri: "https://prod.docsiteassets.roblox.com/assets/modeling/solid-modeling/Separate-Parts-To-Union.jpg",
    },
  },
  {
    ...lessonsEmpty,
    title: "Bài 4: Solid Modeling Nâng cao",
    id: `lesson3`,
    paramList: {
      id: `lesson3`,
      videoSource: "https://www.youtube.com/watch?v=e1ebEyJN-Fo",
    },
    avata: {
      uri: "https://prod.docsiteassets.roblox.com/assets/modeling/solid-modeling/Negated-Part-To-Union.jpg",
    },
  },
  {
    ...lessonsEmpty,
    title: "Bài 5: Sử dụng Terrain Editor",
    id: `lesson4`,
    paramList: {
      id: `lesson4`,
      videoSource: "https://www.youtube.com/watch?v=JVIC1bVeddA",
    },
    avata: {
      uri: "https://i.ytimg.com/vi/hMxSMJSXJTo/maxresdefault.jpg",
    },
  },
  {
    ...lessonsEmpty,
    title: "Bài 6: Ứng dụng Effect trong thiết kế",
    id: `lesson5`,
    paramList: {
      id: `lesson5`,
      videoSource: "https://www.youtube.com/watch?v=ftIjeYFdfPk",
    },
    avata: {
      uri: "https://i.ytimg.com/vi/DQrlh_PpaAA/maxresdefault.jpg",
    },
  },
  {
    ...lessonsEmpty,
    title: "Bài 7: Giới thiệu về các Plugin hỗ trợ",
    id: `lesson6`,
    paramList: {
      id: `lesson6`,
      videoSource: "https://www.youtube.com/watch?v=M6Q7Pq9ZcNQ",
    },
    avata: {
      uri: "https://i.ytimg.com/vi/Rou1Wt9NOww/maxresdefault.jpg",
    },
  },
];

const quizEmty: CardProps = {
  navigateTo: "Quiz",
  title: "Lorem ipsum",
  avata: {
    uri: "https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-gau-truc-1.jpg",
  },
};

export const quizz = [
  {
    ...quizEmty,
    title: "Câu hỏi về Roblox Studio",
    id: `quiz0`,
    paramList: {
      id: `quiz0`,
      order: 1,
      quizzes,
    },
    isComplete: false,
    quizzes,
  },
  {
    ...quizEmty,
    title: "Câu hỏi về thuộc tính của vật thể",
    id: `quiz1`,
    paramList: {
      id: `quiz1`,
      order: 2,
      quizzes: quizzes2,
    },
    quizzes: quizzes2,
    isComplete: false,
  },
  {
    ...quizEmty,
    title: "Câu hỏi về Solid Model",
    id: `quiz2`,
    paramList: {
      id: `quiz2`,
      order: 2,
      quizzes: quizzes3,
    },
    quizzes: quizzes3,
    isComplete: false,
  },
  {
    ...quizEmty,
    title: "Câu hỏi về Terrain Editor",
    id: `quiz3`,
    paramList: {
      id: `quiz3`,
      order: 2,
      quizzes: quizzes4,
    },
    quizzes: quizzes4,
    isComplete: false,
  },
  {
    ...quizEmty,
    title: "Câu hỏi về Effect trong Roblox Studio",
    id: `quiz4`,
    paramList: {
      id: `quiz4`,
      order: 2,
      quizzes: quizzes5,
    },
    quizzes: quizzes5,
    isComplete: false,
  },
];

const gamesEmty: CardProps = {
  navigateTo: "Puzzle",
  title: "Lorem ipsum",
  id: "0",
};

export const games = [
  {
    ...gamesEmty,
    id: `game${0}`,
    title: "Game 1",
    paramList: {
      id: 0,
    },
    avata: {
      uri: "https://1000logos.net/wp-content/uploads/2022/09/Roblox-New-Logo.jpg",
    },
  },
  {
    ...gamesEmty,
    id: `game${1}`,
    title: "Game 2",
    paramList: {
      id: 1,
    },
    avata: {
      uri: "https://static.wikia.nocookie.net/roblox/images/b/ba/Calico_Square_Cat.png/revision/latest?cb=20210216024917",
    },
  },
  {
    ...gamesEmty,
    id: `game${2}`,
    title: "Game 3",
    paramList: {
      id: 2,
    },
    avata: {
      uri: "https://i5.walmartimages.com/seo/Roblox-Celebrity-Collection-Series-6-Mystery-Pack-Includes-White-Cube-1-Random-Figure-Virtual-Item-Code-Styles-May-Vary_c239b7b9-b780-4d31-aae2-303ff7daec1e.8292e0f117d7a4018013602cc5401f45.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    },
  },
  {
    ...gamesEmty,
    id: `game${3}`,
    title: "Game 4",
    paramList: {
      id: 3,
    },
    avata: {
      uri: "https://m.media-amazon.com/images/I/71UeMFWOwIL._AC_SX679_.jpg",
    },
  },
  {
    ...gamesEmty,
    id: `game${4}`,
    title: "Game 5",
    paramList: {
      id: 4,
    },
    avata: {
      uri: "https://135766530.cdn6.editmysite.com/uploads/1/3/5/7/135766530/s951516730816435338_p827_i1_w1024.jpeg?width=800&optimize=medium",
    },
  },
  {
    ...gamesEmty,
    id: `game${5}`,
    title: "Game 6",
    paramList: {
      id: 5,
    },
    avata: {
      uri: "https://c.shld.net/rpx/i/s/pi/mp/3793/prod_18328843224?src=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F41n591YB3mL.jpg&d=38bcad8717b2ff9b259f0cfb1ffe2508dfaa4559&hei=1000&wid=1000",
    },
  },
  {
    ...gamesEmty,
    id: `game${6}`,
    title: "Game 7",
    paramList: {
      id: 6,
    },
    avata: {
      uri: "https://i.ebayimg.com/images/g/9C0AAOSwL0pgSU1X/s-l500.jpg",
    },
  },
  {
    ...gamesEmty,
    id: `game${7}`,
    title: "Game 8",
    paramList: {
      id: 7,
    },
    avata: {
      uri: "https://m.media-amazon.com/images/I/81JrIl9m-uL._AC_SX679_.jpg",
    },
  },
  {
    ...gamesEmty,
    id: `game${8}`,
    title: "Game 9",
    paramList: {
      id: 8,
    },
    avata: {
      uri: "https://i.etsystatic.com/25519128/r/il/eac75c/4258592409/il_794xN.4258592409_ein0.jpg",
    },
  },
  {
    ...gamesEmty,
    id: `game${9}`,
    title: "Game 10",
    paramList: {
      id: 9,
    },
    avata: {
      uri: "https://i.etsystatic.com/31066411/r/il/2fe1e8/5362388809/il_794xN.5362388809_i2p5.jpg",
    },
  },
];

export const createQuiz = () => {
  quizz.map(async (quiz) => {
    const docRef = doc(firestore, "quiz", quiz.id);
    await setDoc(docRef, quiz);
  });
};

export const createQuizScreenOnFirestore = async () => {
  const docRef = doc(firestore, "cards", "quiz");
  await setDoc(docRef, { data: quizz });
};

export const createLessons = () => {
  lessons.forEach(async (lesson) => {
    const docRef = doc(firestore, "lesson", lesson.id as string);
    if (lesson.id) await setDoc(docRef, lesson.paramList);
  });
};