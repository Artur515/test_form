import './App.css';
import Form from "./components/form/Form";
import {Route, Switch} from "react-router-dom";
import Greeting from "./components/greeting/Greeting";
import Comment from "./components/comments/Comment";
import Button from "./ui/button/Button";
import {useEffect, useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {getAllComment} from "./api/formApi";
import Loader from "./ui/loader/Loader";
import {getPagesOnArray, getPerPageCount} from "./utils/pages";
import Pagination from "./ui/pagination/Pagination";


let page = 1

const App = () => {
    const [modal, setModal] = useState(false)
    const [comments, setComments] = useState([])
    const [totalPageCount, setTotalPageCount] = useState('')
    const [checkedPage, setCheckedPage] = useState(1)

    //for button show more
    const [totalComments, setTotalComments] = useState('')
    const limit = 10

    //for fast show in open app
    useEffect(() => {
        getAllComment(checkedPage)
            .then(response => {
                setComments(response.data.data)
                const total = response.data.total
                //watch, how many pages
                setTotalPageCount(getPerPageCount(total, limit))
                setTotalComments(total)
            })
    }, [checkedPage])


    //next page show
    const handleShowMore = () => {
        page++
        getAllComment(page)
            .then(response => {
                setComments([...comments, ...response.data.data])
            })
    }


    const pageOnArray = getPagesOnArray(totalPageCount)


    // console.log(pageOnArray)
    // console.log(comments)
    // console.log(totalPageCount)
    // console.log(totalComments)
    // console.log(checkedPage)

    return (
        <div className="app">
            <Switch>
                <Route exact path='/'><Greeting/></Route>
                <Route exact path='/form'>
                    {/*можно и по другому реализовать*/}
                    <Button onClick={() => setModal(!modal)} children={modal ? 'Close form' : 'Open form'}/>
                    {modal && <Form setModal={setModal}/>}
                    <div className='app_comments'>
                        <TransitionGroup>
                            {comments.length < 0 ? <Loader/> : comments.map((comment) => {
                                    return (
                                        <CSSTransition key={comment.id}
                                                       timeout={500}
                                                       classNames="comment">
                                            <Comment text={comment.text}
                                                     name={comment.name}
                                                     created_at={comment.created_at}/>
                                        </CSSTransition>
                                    )
                                }
                            )
                            }
                        </TransitionGroup>
                    </div>
                    {totalComments === comments.length ? '' : <Button
                        className='btn btn-primary mb-4'
                        children={"Show more"}
                        onClick={handleShowMore}
                    />}
                    <div className='app_pagination'>
                        {pageOnArray.map((page) => {
                            return <Pagination
                                checkedPage={checkedPage}
                                setCheckedPage={setCheckedPage}
                                key={page}
                                page={page}
                            />
                        })}
                    </div>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
