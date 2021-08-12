import React from 'react';
import styles from './style.module.css'
import Button from "../../ui/button/Button";
import {useForm} from "react-hook-form";
import {validations} from "../../validation/validation";
import {postNewComments} from "../../api/formApi";

const Form = ({setModal}) => {


    const {register, handleSubmit, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        JSON.stringify(data)
        const {name, text} = data
        // console.log(name)
        // console.log(text)
        postNewComments(name, text)
        setModal(false)
    };


    return (
        <div className={styles.form}>
            <div className="list-group">
                <div className="list-group-item list-group-item flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Form</h5>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="form-label mt-4">Name</label>
                            <input className="form-control"
                                   placeholder="Enter name"
                                   {...register("name", validations.name)}/>
                            {errors?.name?.type === "required" && errors?.name?.type === "required" &&
                            <small className="form-text text-danger ">This field is required</small>}
                            {errors?.name?.type === "maxLength" && (
                                <small className="form-text text-danger">Name cannot exceed 20 characters</small>)}
                            {errors?.name?.type === "pattern" && (
                                <small className="form-text text-danger ">Alphabetical characters only</small>
                            )}
                            <div className="form-group">
                                <label className="form-label mt-4">Comment</label>
                                <textarea className="form-control" rows="3" placeholder="Comment please..."
                                          {...register("text", validations.message)}
                                />
                                {errors?.text?.type === "required" &&
                                <small className="form-text text-danger ">This field is required</small>}
                            </div>
                            <Button children={'Send comment'}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;