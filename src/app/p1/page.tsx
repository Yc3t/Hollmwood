import prompts from './prompts.json'
const Page = async () => {

  return (
   <main>
    <h1>Characters</h1>
    <div>
      {prompts.Expand_Plot.prompt.map((p, i) => (
        <div key={i}>{p.content}</div>
      ))}
    </div>

   </main> 

  );
};

export default Page;