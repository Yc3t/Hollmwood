import MessageInput from "../../../components/message-input"
import MessageItem from "../../../components/message-item"
import {Send} from 'lucide-react'
type Props = {}

const ChatContainer = (props: Props) => {
  return (
    <>
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <header className="p-4">
        <h1 className="text-xl font-semibold">Hollmwood</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center">
       
       
      </main>

      <footer className="p-4">
        <div className="max-w-3xl mx-auto relative">
          <input
            className="bg-gray-800 w-full text-white rounded-lg py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Message Hollmwood"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Send className="w-6 h-6 text-gray-400" />

          </button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          Hollmwood. All rights reserved
        </p>
      </footer>
    </div>
    </>
  )
}
export default ChatContainer