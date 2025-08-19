const List=({list})=>{
return (
<>
<ol className="list-decimal ml-10 text-xl">
{list.map(studentname=>
<li>{studentname}</li>
)}

</ol>
<p>Without Using Map ........</p>
<ol className="list-decimal ml-10 text-xl">
    {
  [<li>Aman</li>,
  <li>Abhijeet</li>,
  <li>Kundan</li>,
  <li>Sadhana</li>,
  <li>Chandan</li>]}
</ol>
</>
);
};
export default List;