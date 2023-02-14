export default function Services() {
  return (
    <div className="p-6 text-black py-10 text-sm font-extralight">
      <div className="m-auto mb-4 p-4 w-[70%] rounded-md border border-gray-300 bg-white">
        <h1 className="text-2xl text-center font-medium text-[#5379F6]">Propose</h1>
        <ul className="px-4 m-auto pt-8 font-extralight w-full space-y-1 list-decimal list-inside">
          <li>
            Join the <a href="https://discord.com/channels/999377270701564065/1075083533325979688" className="text-[#5379F6] font-medium" target="_blank" rel="noreferrer">Permaweb Discord server</a>
          </li>
          <li>
            Head to the #vouch-proposals channel
          </li>
          <li>
            Propose your service by specifying the following:
            <ul className="pl-10">
              <li>Service Name</li>
              <li>How it identifies users as human</li>
              <li>Security rating (1-10)</li>
            </ul>
          </li>
        </ul>
        <p className="pt-8">The community will give feedback on the service and decide if the service should be registered.</p>

      </div>
      <div className="m-auto p-6 mb-4 w-[70%] rounded-md border border-gray-300 bg-white">
        <h1 className="text-2xl text-center font-medium text-[#5379F6]">Build</h1>
        <p>Create your service</p>
      </div>

      <div className="m-auto p-6 w-[70%] rounded-md border border-gray-300 bg-white">
        <h1 className="text-2xl text-center font-medium text-[#5379F6]">Register</h1>
        <p className="pt-6">Fill out <a href="#" className="text-[#5379F6] font-medium">this form</a> and the service will go to vote</p>
      </div>
    </div>
  );
};