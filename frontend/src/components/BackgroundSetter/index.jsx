import React from 'react'
import background from '../../assets/backroundThemes/backroundThemes'

const index = () => {
    return (
        <div>
            <div>
                <div>
                    <h3>Chủ đề</h3>
                </div>
                <div>
                    {background.map(bg => (
                        <span key={bg.id}>
                            <img src={bg.path} alt="backgroun" />
                        </span>
                    ))}
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default index