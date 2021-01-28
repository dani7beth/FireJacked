import { useState } from "react";
import axios from "axios";
import { Button, Col, Form } from "react-bootstrap";

const LevelForm = ({
  levelProp,
  addLevel,
  exerciseID,
  editLevel,
  handleEditClose,
  addModalHide,
  editLevels,
}) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [level, setLevel] = useState(
    levelProp
      ? {
          name: levelProp.name,
          metric: levelProp.metric,
          multiplier: levelProp.multiplier,
          measurement: levelProp.measurement,
          reps: levelProp.reps,
          timeframe: levelProp.timeframe,
          sets: levelProp.sets,
        }
      : {
          name: "",
          metric: "",
          multiplier: null,
          measurement: "",
          reps: null,
          timeframe: null,
          sets: null,
        }
  );

  const editCallLevel = () => {
    axios
      .put(`/api/exercises/${exerciseID}/levels/${levelProp.id}`, level)
      .then((res) => {
        console.log(res.data);
        editLevel(res.data);
        editLevels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addCallLevel = () => {
    axios
      .post(`/api/exercises/${exerciseID}/levels`, level)
      .then((res) => {
        console.log(level);
        addLevel(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setLevel({ ...level, [e.target.name]: e.target.value });
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (levelProp) {
      editCallLevel();
    } else {
      addCallLevel();
    }
    whichClose();
  };

  const whichClose = () => {
    if (levelProp) {
      handleEditClose();
    } else {
      addModalHide();
    }
  };

  // let minute = Math.floor(timeframe/60)
  // let seconds = timeframe%60 < 10 ? "0" + timeframe%60 : timeframe%60
  // let duration = minute + ":" + seconds

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          placeholder="Your level name"
          value={level.name}
          onChange={handleChange}
        />
        <Form.Label>Multiplier</Form.Label>
        <Form.Control
          name="multiplier"
          placeholder="e.g. 2.0, 1.75, etc."
          type="number"
          value={level.multiplier}
          onChange={handleChange}
        />
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Metrics</Form.Label>
            <Form.Control
              as="select"
              name="metric"
              value={level.metric}
              onChange={handleChange}
            >
              <option>Choose a metric...</option>
              <option>Pounds</option>
              <option>Calories</option>
              <option>None</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Measurement</Form.Label>
            <Form.Control
              as="select"
              name="measurement"
              value={level.measurement}
              onChange={handleChange}
            >
              <option>Choose a measurement...</option>
              <option>Bodyweight</option>
              <option>Height</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Label>Reps</Form.Label>
        <Form.Control
          name="reps"
          type="number"
          placeholder="e.g. reps of 10"
          value={level.reps}
          onChange={handleChange}
        />
        <Form.Label>Time Frame</Form.Label>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              name="minutes"
              type="number"
              placeholder="e.g. 1 minute"
              value={Math.floor(level.timeframe / 60)}
              onChange={(e) => {
                setLevel({
                  ...level,
                  timeframe: parseInt(e.target.value) * 60,
                });
                setMinutes(parseInt(e.target.value) * 60);
              }}
            />{" "}
            <p>Minute</p>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              name="seconds"
              type="number"
              placeholder="e.g. 30 Seconds"
              value={level.timeframe % 60}
              onChange={(e) => {
                setLevel({
                  ...level,
                  timeframe: parseInt(minutes) + parseInt(e.target.value),
                });
                setSeconds(parseInt(e.target.value));
              }}
            />{" "}
            <p>Seconds</p>
          </Form.Group>
        </Form.Row>
        {/* <p>Duration: {level.timeframe}</p> */}
        <Form.Label>Sets</Form.Label>
        <Form.Control
          name="sets"
          type="number"
          placeholder="e.g. 3 sets"
          value={level.sets}
          onChange={handleChange}
        />
        <Button variant="primary" type="submit">
          submit
        </Button>
        <Button variant="danger" onClick={whichClose}>
          cancel
        </Button>
      </Form>
    </>
  );
};
export default LevelForm;

// Math.floor(level.timeframe/60)
// level.timeframe%60 < 10 ? "0" + level.timeframe%60 : level.timeframe%60
