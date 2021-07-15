import "./testimonial.scss";

export default function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Sundar Pichai",
      title: "CEO of GOOGLE",
      img: "https://s.france24.com/media/display/6aaac352-163c-11ea-9c6b-005056bff430/w:1280/p:16x9/ALPHABET-GOOGLE.webp",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Tim Cook",
      title: "CEO of APPLE",
      img: "https://cdn.tgdd.vn/Files/2021/04/06/1341163/tim-cook_800x450.jpg",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Jack Ma",
      title: "CEO of ALIBABA",
      img: "https://image.thanhnien.vn/1024/uploaded/nthanhluan/2021_04_15/123_cdbn.jpg",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={d.icon} alt="" className="left" />
              <img className="user" src={d.img} alt="" />
              <img src="assets/youtube.png" alt="" className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
