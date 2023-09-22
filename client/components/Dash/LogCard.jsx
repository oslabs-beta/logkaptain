import {React, useState} from "react";
import '../../stylesheets/dashboard.css'
import LogTable from './LogTable'

// RENDER THE LOG CARD // 
const LogCard = () => {

// ARRAY FOR ALL LOG DATA //
//let logs = [];
const [logs, setLogs] = useState([]);

// GET ALL LOGS CURRENTLY IN THE DB //
const gatherLogs = async () => { // NEED TO ADD USE EFFECT TO AVOID CONSTANT CALLS
  setLogs([])
  const logTableComponents = []; // TRANSFER THIS TO STATE
  try {
    const response = await fetch('http://localhost:3000/api/logs', {
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    for (const log of Object.keys(data)) {
      console.log('ici', data[log])
      logTableComponents.push(...data[log].map(logObject=>{
        return < LogTable key={logObject.date} date={logObject.date} name={log} log={logObject.message} /> 
      }));
      //logTableComponents.push( < LogTable key={log} name={log} log={data[log]} /> )
    }

    //console.log('LOGS:', logs)
    setLogs(logTableComponents);

  } catch (error) {
    console.log(error);
  }
}

// CHECK FOR NEW LOGS EVERY 2 SECOND (FOR NOW) //
// document.addEventListener('DOMContentLoaded', () => {
//     const retrievelogsBTN = document.querySelector('#retrievelogs')
//     retrievelogsBTN.addEventListener('click', () => {
//         gatherLogs();
//         setInterval(gatherLogs, 2000);
//     })
// })

  return (
    <div className="logcard">
      <div className="cardheader">
        <h2 className="listheader">Log Data</h2>
        <button className="connectpod" onClick={gatherLogs}>Retrieve Logs</button>
        <button className="connectpod" id='retrievelogs'>Connect Pod</button>        
      </div>
      {/* <LogTable /> */}
      {/* {logs} ARRAY OF LOG INFO TO BE DISPLAYED */}

      <div className="gridHeader grid-container">
        <div className="cell">
          Date (UTC)
        </div>
        <div className="cell">
          Pod Name
        </div >
        <div className="cell">
          Message
        </div>
      </div>

      <div className="gridLogs grid-container">
        {logs}
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, alias sed commodi corrupti consectetur reprehenderit libero qui autem et a officiis dolor! Iure velit odit cumque maxime reiciendis, obcaecati non!</div>
        <div>Quam libero iure quaerat ipsam placeat laboriosam, inventore doloremque tempora ab nam, ea delectus consequuntur explicabo enim aut, alias sequi. Ad omnis magni atque nemo cupiditate aliquid eum rerum amet!</div>
        <div>Consequuntur placeat dolorem doloremque sit animi facere dolor eius officiis incidunt. Cupiditate illo, tenetur et ullam quasi consequuntur voluptate modi dicta odio ducimus labore impedit asperiores ex quaerat doloremque iure?</div>
        <div>Ullam, autem quasi vitae at facere enim! Ut aliquam debitis expedita veritatis numquam dicta. Labore est suscipit, tempora laboriosam consequuntur dicta fuga sed quis nemo libero assumenda nam. Eius, sapiente!</div>
        <div>Eos cumque tempore accusamus! Amet voluptas neque quis incidunt omnis cum delectus, eius nostrum dolore debitis reiciendis consequuntur vero eos hic asperiores ad. Tempora nulla doloremque suscipit, aperiam in porro?</div>
        <div>Tempora ullam aliquam exercitationem quos assumenda commodi maiores, beatae amet animi nesciunt fuga. Mollitia maiores placeat alias. Quibusdam facilis reprehenderit illum laborum temporibus quam obcaecati veniam autem cumque. Consequatur, corrupti?</div>
        <div>Officia expedita molestiae explicabo, accusantium provident dolorum voluptas veniam impedit, illo hic at optio esse. Error temporibus eligendi maiores voluptatibus eius quasi. Optio eveniet autem voluptatum consequuntur quibusdam voluptates quis.</div>
        <div>Illo quo eligendi sapiente quis placeat aliquam ut consequatur, aspernatur excepturi. Quae temporibus debitis reprehenderit fuga consequuntur libero autem aliquid architecto voluptate ea. Corporis aliquid fugit consequuntur delectus illum voluptatibus.</div>
        <div>Animi optio amet sapiente provident inventore. Accusamus nam impedit, porro sequi cumque eligendi labore adipisci asperiores, soluta nobis, esse fugit ab ipsum. Similique commodi eum accusamus, qui nisi veniam obcaecati?</div>
        <div>Molestiae expedita sapiente veritatis mollitia cupiditate, cumque provident quia sed in tempora omnis repellat obcaecati officia nesciunt voluptatum rem sunt quibusdam minima? Delectus atque cum, a dolores aliquam eligendi odit?</div>
        <div>Vitae, deserunt expedita explicabo tenetur temporibus quis ex! Veritatis quos consequuntur reprehenderit velit facilis, quaerat atque accusantium natus aliquid sint consequatur at nesciunt quisquam dolorum enim similique doloremque quia laudantium?</div>
        <div>Voluptates numquam sint corporis tenetur cum commodi magni expedita neque nemo. Dolorem cumque, ratione repellendus laborum doloremque modi velit quia dicta et aliquid porro eos explicabo quos accusamus deleniti nihil?</div>
        <div>Ratione consequuntur doloribus a illo voluptatum voluptatibus possimus reprehenderit explicabo sint tempore corrupti neque, voluptatem qui unde autem deleniti atque iste ad necessitatibus, voluptate sapiente ab hic. Minima, ratione itaque.</div>
        <div>Odio incidunt repudiandae tempora magnam pariatur consequatur ipsa maxime harum accusamus eaque saepe aliquid a eveniet consectetur, similique quaerat libero id vero nobis at odit mollitia earum. Illo, eos expedita.</div>
        <div>Laboriosam a in eum culpa veritatis quam consequatur laborum impedit debitis dolor. Ab labore doloremque iure similique aliquam accusantium et vero nam, rem distinctio quibusdam, cumque unde, cupiditate tempore deserunt.</div>
        <div>Rerum sit ipsa, doloremque quia doloribus eligendi dolores soluta, maiores impedit aliquam nam dolorum unde explicabo adipisci, iste asperiores? Numquam harum neque impedit suscipit! Eveniet doloribus similique alias earum voluptates?</div>
        <div>Quasi quidem corporis a eveniet dignissimos sed non, libero repellat maiores facilis ipsa. Consectetur commodi minus eius, placeat odio quos facere, impedit libero dignissimos odit non repudiandae illum alias! Quia.</div>
        <div>Ratione ea minima nesciunt error, deleniti incidunt iusto nam velit odit sint cum fugiat. Velit, expedita, nihil cum ullam odit dolore nisi sit reiciendis praesentium temporibus labore? Quibusdam, adipisci obcaecati!</div>
        <div>Iusto reprehenderit atque sapiente architecto? Magni sapiente corporis et delectus rerum sunt quae veniam accusamus alias tempora, sequi quam, quia numquam vel pariatur ex dolor quidem! Optio velit numquam itaque.</div>
        <div>Ratione beatae eum modi aliquid ex architecto, temporibus corporis numquam ea aut eos dolorum maiores nobis, dolore animi distinctio eaque nulla blanditiis. Ipsa amet ullam ratione numquam molestiae ex nostrum.</div>
        <div>Libero enim nostrum minima esse sequi vero ipsa. Beatae itaque repellendus, laboriosam at nostrum facilis expedita ad natus, ullam magni temporibus accusamus illum quo? Atque adipisci aliquam laudantium quaerat consequuntur.</div>
        <div>Impedit aut provident sint laborum assumenda eaque, voluptatum, beatae eum tempora, corrupti similique veritatis molestiae veniam et! Eaque pariatur nemo ex, odit, doloribus dolorum nisi, corporis odio praesentium reprehenderit omnis?</div>
        <div>Voluptas, a reprehenderit culpa, blanditiis excepturi velit est sequi exercitationem laborum aliquam libero distinctio officia itaque asperiores. Harum, ullam accusantium, repellat, sunt voluptas non cumque delectus unde voluptatum debitis provident.</div>
        <div>Facilis in perspiciatis assumenda placeat, fugit magnam ut facere accusamus explicabo fugiat illo eligendi minima perferendis delectus doloribus quis commodi, ipsam quasi ab iure distinctio quidem dicta at. Nam, enim?</div>
        <div>Numquam eum doloribus, excepturi est, possimus distinctio perspiciatis expedita totam iste sed laudantium ipsa velit ex deserunt impedit quibusdam! Officia ex animi nam repudiandae totam ut ea magni sunt rerum?</div>
        
      </div>

      <a as="button" href="http://localhost:3000/api/download" id='downloadlogs'>Download Logs</a>
      

      {/* <div className="outerlogcontainer">
          <div className="innerlogcontainerHeader">
          <h2>Date</h2>
          <h2>Pod Name</h2>
          <h2>Message</h2>
          </div>
        </div> */}
      {/* <div className="innerlogcontainerWrapper">
        {logs}
      </div>     */}      
      
    </div>
  );
};

export default LogCard;