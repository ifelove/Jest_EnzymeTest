import Comment from "../Fetch/Comment";

import { render,screen,fireEvent, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer"

import axios from "axios";

jest.mock("axios")
const dummy=[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },]

describe("comment component testing",()=>{

it("it should get all comments",async()=>{


axios.get.mockResolvedValue({data:dummy})
render(<Comment/>)
const comments=await waitFor(()=>{ screen.getAllByTestId("comment")})
console.log(comments)
//expect(comments).toHaveLength(2)
})

})