'use client'
import allMembers from '@/data/member.json'
import { useTeams } from '@/app/context/TeamContext'
import Link from 'next/link'

export default function ManageMembers() {
  const { excludedIds, toggleExcludeMember } = useTeams()

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Danh sách thành viên Giáng Sinh</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {allMembers.map((member) => {
          const isExcluded = excludedIds.includes(member.id)
          return (
            <div 
              key={member.id}
              onClick={() => toggleExcludeMember(member.id)}
              className={`relative p-4 border rounded-xl cursor-pointer transition-all ${
                isExcluded ? 'bg-gray-100 opacity-50 border-gray-300' : 'bg-green-50 border-green-500 shadow-sm'
              }`}
            >
              <p className={`text-center font-medium ${isExcluded ? 'line-through' : ''}`}>
                {member.name}
              </p>
              
              {/* Dấu X nhỏ ở góc trên bên phải */}
              <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${isExcluded ? 'bg-gray-400' : 'bg-red-500'}`}>
                {isExcluded ? '+' : 'x'}
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="mt-8 flex justify-center">
        <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
          Quay lại Game
        </Link>
      </div>
    </div>
  )
}