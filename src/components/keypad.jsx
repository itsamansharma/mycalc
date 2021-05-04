import React, { Component } from 'react';

class Calc extends Component {
    state = {
        prev: 0,
        current: 0,
        operation: 0,
        dot: false,
        dotcount: 1
    }

    dotpressed = () => {
        this.setState({ dot: true })
    }

    getmyid = (e) => {

        if (this.state.current !== 0) {
            let num = (this.state.current * 10) + e;
            this.setState({ current: num });
        }
        else {
            this.setState({ current: e });
        }

        // if (this.state.dot !== false) {
        //     console.log(this.state.dotcount)
        //     let divi = (Math.pow(10, this.state.dotcount))
        //     this.setState({ current: this.state.current / divi })

        //     this.setState({ dotcount: this.state.dotcount + 1 })
        // }


        console.log(this.state.current);
    }

    allop = (e) => {
        this.setState({ prev: this.state.current });
        this.setState({ current: 0 });
        this.setState({ operation: e })

    }
    equalsto = () => {

        if (this.state.operation === 11) {
            this.setState({ current: this.state.current + this.state.prev })
        }
        if (this.state.operation === 12) {
            this.setState({ current: this.state.prev - this.state.current })
        }
        if (this.state.operation === 13) {
            this.setState({ current: this.state.current * this.state.prev })
        }
        if (this.state.operation === 14) {
            this.setState({ current: this.state.prev / this.state.current })
        }
        // this.getmyid();
    }
    clearall = () => {
        this.setState({ current: 0 })
    }


    render() {
        return (
            <div>
                {/* inputdiv */}
                <div className="d-flex justify-content-center mt-2 mb-4">
                    <input
                        className="border shadow px-4"
                        type="text"
                        value={String(this.state.current)}
                    />
                </div>

                <div>
                    {/* all operation buttons */}

                    <div className="d-flex justify-content-center mb-4 mt-2">
                        <button name="C" value="C" className="btn btn-lg btn-warning mx-2 px-3 border"
                            onClick={() => this.clearall()}
                        >
                            C
                        </button>
                        <button name="+" value="+" className="btn btn-lg btn-warning mx-2 px-3 border"
                            onClick={(e) => this.allop(11)}
                        >
                            +
                        </button>
                        <button name="-" value="-" className="btn btn-lg btn-warning mx-2 px-3 border"
                            onClick={(e) => this.allop(12)}
                        >
                            -
                        </button>
                        <button name="*" value="*" className="btn btn-lg btn-warning mx-2 px-3 border"
                            onClick={(e) => this.allop(13)}
                        >
                            *
                        </button>
                        <button name="/" value="/" className="btn btn-lg btn-warning mx-2 px-3 border"
                            onClick={(e) => this.allop(14)}

                        >
                            /
                        </button>
                        <button name="=" value="=" className="btn btn-lg btn-success mx-2 px-4 border"
                            onClick={() => this.equalsto()}
                        >
                            =
                        </button>
                    </div>

                    {/* all number buttons */}

                    <div className="container d-flex justify-content-center mb-3">
                        <button onClick={() => this.getmyid(1)} className="btn btn-lg btn-primary mx-2 px-3 border">1</button>
                        <button onClick={() => this.getmyid(2)} className="btn btn-lg btn-primary mx-2 px-3 border">2</button>
                        <button onClick={() => this.getmyid(3)} className="btn btn-lg btn-primary mx-2 px-3 border">3</button>
                    </div>

                    <div className="container d-flex justify-content-center mb-3">
                        <button onClick={() => this.getmyid(4)} className="btn btn-lg btn-primary mx-2 px-3 border">4</button>
                        <button onClick={() => this.getmyid(5)} className="btn btn-lg btn-primary mx-2 px-3 border">5</button>
                        <button onClick={() => this.getmyid(6)} className="btn btn-lg btn-primary mx-2 px-3 border">6</button>
                    </div>
                    <div className="container d-flex justify-content-center mb-3">
                        <button onClick={() => this.getmyid(7)} className="btn btn-lg btn-primary mx-2 px-3 border">7</button>
                        <button onClick={() => this.getmyid(8)} className="btn btn-lg btn-primary mx-2 px-3 border">8</button>
                        <button onClick={() => this.getmyid(9)} className="btn btn-lg btn-primary mx-2 px-3 border">9</button>
                    </div>
                    <div className="container d-flex justify-content-center">
                        <button onClick={() => this.getmyid(0)} className="btn btn-lg btn-primary mx-2 px-3 border">0</button>
                        <button onClick={() => this.dotpressed()} className="btn btn-lg btn-primary mx-2 px-3 border">.</button>

                    </div>
                </div>

            </div >
        );
    }

}

export default Calc