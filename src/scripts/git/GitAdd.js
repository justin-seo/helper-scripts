import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class GitAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "",
            output: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({input: event.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {input} = this.state;
        const wordList = input.split(" ");
        let gitAdd = "git add";
        for (let line of wordList) {
            if (line !== "modified:") {
                gitAdd += " " + line
            }
        }
        this.setState({input: "", output: gitAdd});
    }

    render() {
        const {input, output} = this.state;

        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className="paper">
                            <TextField
                                id="outlined-textarea"
                                label="Git Add"
                                placeholder=""
                                multiline
                                value={input}
                                onChange={this.handleInputChange.bind(this)}
                                variant="outlined"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className="paper">
                            <button onClick={this.handleSubmit}>Submit</button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className="paper">
                            {output}
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default GitAdd;