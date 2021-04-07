import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns, Button } from "react-bootstrap";
import './App.css';

function CardDisplay() {
  return (
    <div className="row">
      <div className="col-sm-12">
          <CardColumns>
      <Card className="border-secondary">
        <Card.Img className="size " variant="top" src="/images/8sem.png" />
        <Card.Body>
          <Card.Title className="title">8-SEM PAPERS </Card.Title>
          <Card.Text className="content">
            All Subjects Papers
          </Card.Text>
          <a href="https://drive.google.com/drive/folders/1YiTXbxTCrpn29DByScSf0IUSP4Jc5eI6?usp=sharing" class="button btn btn-primary">Click For Papers</a>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer>
      </Card>

      <Card className="border-success">
        <Card.Img className="size" variant="top" src="/images/5sem.png" />
        <Card.Body>
          <Card.Title className="title">5-SEM Papers</Card.Title>
          <Card.Text className="content">
            All Subjects Papers
          </Card.Text>
          <a href="https://drive.google.com/drive/folders/18jXj8QVXQAIhp4SRF3G1cYqSdt-IEIaM?usp=sharing" class="button btn btn-primary">Click For Papers</a>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="border-danger">
        <Card.Img variant="top" className="size" src="/images/7sem.png" />
        <Card.Body>
          <Card.Title className="title">7-SEM Papers</Card.Title>
          <Card.Text className="content">
            All Subjects Papers
          </Card.Text>
          <a href="https://drive.google.com/drive/folders/10O95vhBJFoZYEG-0wkh0sm-skeN9f__y?usp=sharing" class="button btn btn-primary">Click For Papers</a>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 11 mins ago</small>
        </Card.Footer>
      </Card>



      <Card className="border-warning">
        <Card.Img className="size" variant="top" src="/images/4sem.png" />
        <Card.Body>
          <Card.Title className="title">4-SEM Papers</Card.Title>
          <Card.Text className="content">
            All Subjects Papers
          </Card.Text>
          <a href="https://drive.google.com/drive/folders/1KTjf9MlqCjf1PH8g1tVp5WAy21x3NJG9?usp=sharing" class="button btn btn-primary">Click For Papers</a>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer>
      </Card>

      <Card className="border-info">
        <Card.Img className="size " variant="top" src="/images/6sem.png" />
        <Card.Body>
          <Card.Title className="title">6-SEM Papers</Card.Title>
          <Card.Text className="content">
            All Subjects Papers
          </Card.Text>
          <a href="https://drive.google.com/drive/folders/18XTWHl7pmcvhd3ZiG_QiE6NVHPljlW8N?usp=sharing" class="button btn btn-primary">Click For Papers</a>
        </Card.Body>


        <Card.Footer>
          <small className="text-muted">Last updated 10 mins ago</small>
        </Card.Footer>
      </Card>

      {/* <Card className="border-dark ">
        <Card.Img className="size" variant="top" src="https://solveout.in/wp-content/uploads/2016/08/Logomakr_5i6JMT.png" />
        <Card.Body>
          <Card.Title className="title">3-SEM Papers</Card.Title>
          <Card.Text className="content">
            All Subjects Papers
          </Card.Text>
          <a href="https://drive.google.com/drive/folders/1uRmjj25cuNhzgcM5pObsE9uZIAiVo_R4?usp=sharing" class="button btn btn-primary">Click For Papers</a>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 11 mins ago</small>
        </Card.Footer>
      </Card> */}
    </CardColumns>


    </div>

    </div>
  );
}
function App() {
  return (
  
    <div className="background">
        <head>
      <script data-ad-client="ca-pub-2648188020159496" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </head>
      <h1>Study Material</h1>
      <CardDisplay />
    </div>
  );
}

export default App;