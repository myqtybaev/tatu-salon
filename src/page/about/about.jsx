import { Typography, Row, Col } from "antd";
import studio from "../../assets/about.jpg";
import team from "../../assets/about-team.jpg";
import "./about.css";
const { Title, Paragraph } = Typography;
export const About = () => {
  return (
    <div className="about">
      <Row justify="space-between">
        <Col md={8}>
          <img src={studio} width="100%" />
        </Col>
        <Col md={12} className="about-text">
          <Title level={1}>VATATTOO</Title>
          <Paragraph>
            1. Моя жизнь - татуировки. Я - гей тату мастер, и это что-то
            большее, чем работа. Татуировки – это искусство, способ
            самовыражения и пути к самопознанию. В моей работе нет никаких
            границ, я создаю произведения искусства, которые основаны на
            культуре, экспериментах и смелости. Мои клиенты – люди, которые
            доверяют мне свои истории, желания и тайны, чтобы я мог воплотить их
            в живую картину на их теле. Я горжусь тем, что через свою работу я
            могу помочь людям принять себя и быть собой. 2. Я тату мастер и
            лесбиянка. Для меня татуировки - это способ самовыражения,
            уникальный язык, которым можно говорить обо всем, что угодно. Каждая
            татуировка, которую я создаю, имеет свой уникальный смысл, связанный
            с человеком, который ее носит. В моей работе я стараюсь создавать не
            только красивые картинки, но и помочь людям понять себя глубже,
            принять свою индивидуальность и любить себя такими, какие они есть.
            Татуировки могут быть выразительным символом гордости за свою
            сексуальную ориентацию или подтверждением своей жизненной философии.
            Я горжусь тем, что могу помочь своим клиентам найти себя через
            искусство татуировки. 3. Я тату мастер и алкоголик. Работать в этой
            индустрии затруднительно, но я решил, что это то, чем я хочу
            заниматься. Несмотря на свои проблемы с алкоголем, я стараюсь
            работать без него, сконцентрироваться на создании настоящих
            произведений искусства на теле своих клиентов. Каждая татуировка -
            это мое творчество, мое наследие, которое я оставляю этому миру. В
            работе с клиентами я стараюсь быть профессиональным, терпеливым и
            понимающим, говорить с ними на равных и помогать им воплотить свои
            идеи в жизнь.
          </Paragraph>
        </Col>
      </Row>
      <Row className="about-team">
        <Col span={24}>
          <Title level={2}>Наша команда</Title>
          <img src={team} width="100%" />
        </Col>
      </Row>
    </div>
  );
};
