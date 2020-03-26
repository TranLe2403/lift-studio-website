import Layout from '../components/MyLayout.js'
import Pic from '../components/Pic'
import Des from '../components/Des'


export default function Games(props) {
  return (
    <Layout>
      <div className="game_page">
        <div className="title_bar">
          <h1 className="title">OUR GAMES</h1>
        </div>
        <div className="content_bar">
          <div className="content_bar1">
            <div className="des">
              <div className="pic">
                <Pic src={props.game[0].image}  alt={props.game[0].title} />
              </div>
              <div className="script" >
                <Des game={props.game[0].title} des={props.game[0].description}/>
              </div>
            </div>
          </div>
          <div className="content_bar2">
            <div className="des">
              <Pic  src={props.game[1].image} alt={props.game[1].title} />
              <Des  game={props.game[1].title} des={props.game[1].description} />
            </div>
          </div>
        </div>
        </div>
      <style jsx>
        {`
        .content_bar{
          height: calc(100% - 100px);
        }
        .game_page{
          flex-grow: 1;
        }
          .title_bar {
            height: 65px;
            background-color: #F9A825;
            text-align: center;

          }
          .title {
            margin-top: 20px;
            font-family: 'Orbitron';
            text-align: center;
            font-size: 26px;
            border-bottom: 3px solid #444141;
            letter-spacing: 5px;
            color: #444141;
            display: inline-block;
            
          }
          .des {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 50px 30px;
            background-color: #E5E5E5;
            flex-direction: column;
            opacity: 0.7;

          }
          .content_bar2{
            padding: 80px 40px;
            background-image: url("https://cutt.ly/swpgW4g");
            background-size: 100% 100%;
          }
          .content_bar1 {
            padding: 80px 40px;
            background-image: url("https://cutt.ly/9wpgPpU");
            background-size: 100% 100%;
          }
          @media screen and (min-width: 768px) {
  /* For desktop: */
      
        .des {
          flex-direction: row;
        }
        .content_bar1, .content_bar2 {
          height: 50%;
          padding: 80px 60px;
        }
        .description{ 
          font-size: 20px;
          letter-spacing: 5px;
          }
          .home::before {
            background-position: 0 0, 33% 0, 66.5% 0, 100% 0;
            background-size: 100%, 25%, 25%, 25%, 25%;
          }
          .title { font-size: 60px;
            margin-top: 0px;
          }
          .title_bar {height: 100px;}
          div.script1{ 
            order: 1;
            width: 60%;
            padding-left: 30px;  
          }
          div.pic1 {
            order: 2;
            padding-left: 60px;
            width: 40%;
          }
          .pic2{
            width: 40%;
          }
          .script2{
            width: 60%;
            padding-right: 30px;
          
          }
      }
           `}
           </style>

    </Layout>
  );
}
Games.getInitialProps = async function() {
	const res = await fetch('http://localhost:8000/games');
	const data = await res.json();
  
	console.log(`Show data fetched. Count: ${data.length}`);
  
	return {
	  game: data
	};
};
