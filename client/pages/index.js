import Nav from "../components/nav";
import Home from "../components/home";
import Attention from "../components/attention";
import Meetings from "../components/bord_meeting";
import Memo from "../components/memo";
import Footer from "../components/footer";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function Index() {
  return(
   <div className="container-fluid p-0 main">
	   	<Nav>
	   		<Home/>
	   		<div className="container-fluid p-5 bg">
	   			<div className="row justify-content-center align-content-center">
	   				<AnchorLink  href='#featured'><ExpandMoreIcon style={{ fontSize: 50 }}/></AnchorLink>
	   			</div>
	   		</div>
	   		<Attention/>
	   		<Meetings/>
	   		<Memo/>
	   		<Footer/>
	   	</Nav>
   		<style jsx>{`
	        .container-fluid{
	          
	          background-color:#212121;
	          color:#fff;
	          height:relative;
	          

	        }
	        .row{
	        	height:100%;
	        }
	        .bg{
	        	height:12vh;
	        }
	    `}</style>

   </div>

   )
}
