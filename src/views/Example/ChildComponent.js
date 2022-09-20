import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {
    // JSX => return block
    state = {
        showJobs: false
    }

    handShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('>>>>> handleOnClickDelete :', job)
        this.props.deleteAJob(job)
    }
    render() {

        // console.log('>>>>>>> check props :', this.props)
        // let name = this.props.name;
        // let age = this.props.age;

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        // let check = showJobs === true ? 'showJobs =true' : 'showJobs=false';
        // console.log('>>>>> check conditional', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className="btn-show"
                            onClick={() => this.handShowHide()}>Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="Job -lists">
                            {
                                arrJobs.map((item, index) => {

                                    return (
                                        <div key={item.id}>
                                            {item.title}-{item.salary}
                                            <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>


                                    )
                                })

                            }

                        </div>
                        <div>
                            <button onClick={() => this.handShowHide()}>Hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {

//     let { arrJobs } = props;

//     return (
//         <>


//             <div className="Job -lists">
//                 {
//                     arrJobs.map((item, index) => {

//                         return (
//                             <div key={item.id}>
//                                 {item.title}-{item.salary} <></> x
//                             </div>


//                         )


//                     })

//                 }

//             </div>

//         </>
//     )
// }





export default ChildComponent;