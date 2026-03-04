import React from "react";

export default function Newtask() {
  return (
    <div className="max-w-[1100px] mx-auto w-full">
      <div className="flex items-center gap-1 my-5 ">
        <img
          src="/69036dac6c6467000c309eaf (1).png"
          alt=""
          className="w-[30px]"
        />
        <h1 className="text-2xl font-semibold">New Task</h1>
      </div>
      <form className="flex flex-col gap-6 w-full">
        <div className="flex flex-col">
          <label htmlFor="" className="pl-6 font-medium text-gray-500">
            Task Title
          </label>
          <input
            type="text"
            placeholder="E.g Project Defense, Assignment ..."
            className=" py-4 px-2 outline-none w-full border border-gray-200"
          />
        </div>
        <div>
          <label htmlFor="" className="pl-6 font-medium text-gray-500">
            Description
          </label>
          <textarea
            name=""
            id=""
            placeholder="Briefly describe your task..."
            className="border border-gray-200 outline-none resize-none w-full pl-2 pt-2"
            rows={5}
          ></textarea>
        </div>
        <div className="flex justify-between py-4 border border-gray-200 mb-8">
        <label htmlFor="" className="text-gray-500 pl-2">Tags</label>
          <select name="" id="" className="border border-gray-500 outline-none">
           <option value="">Select options</option>
            <option value="Urgent">Urgent</option>
            <option value="Important">Important</option>
          </select>
        </div>
      </form>
      <button className="bg-purple-500 text-white w-full rounded py-3">Done</button>
      <button className="underline text-purple-500 my-4 text-center w-full">Back To Top</button>
    </div>
  );
}
