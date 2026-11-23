import React from 'react'

export const PostCard = ({ item }) => {
  return (
    <div className="card m-3 p-3 shadow">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.body}</p>
      </div>
    </div>
  )
}