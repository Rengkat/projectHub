interface Comment {
  surname: string;
  firstName: string;
  comment: string;
  institution: string;
  _id: string;
}
type Comments = Comment[];

interface Props {
  comments: Comments;
}
// { comments }: Props
const MainComments = ({ comments }: Props) => {
  return (
    <div className="mt-[5rem] lg:mt-[8rem] w-[80%] mx-auto text-slate-600">
      <h1 className="text-center text-2xl my-2">HERE'S PEOPLE'S COMMENTS</h1>
      {comments?.map((comment: Comment) => {
        return (
          <>
            <div key={comment._id} className="shadow-lg p-5 my-[2px]">
              <h1 className=" font-bold text-[18px] text-center capitalize">
                {comment.surname} {comment.firstName}
              </h1>
              <p className="text-xs font-bold text-center capitalize">
                {comment.institution}
              </p>
              <p className="py-1">{comment.comment}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MainComments;
