const List=({list})=>{
return (
<>
{(!list || list.length===0 )? <h1>No students are here</h1>
                           :  <h1>Here are the students</h1>}
{list && list.length>0 && <ol className="list-decimal ml-10 text-xl">
{list.map(studentname=>
<li key={studentname}>{studentname}</li>
)}

</ol>}

</>
);
};
export default List;