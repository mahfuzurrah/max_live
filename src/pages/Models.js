import React from 'react'
import { Select, Input } from 'antd';
import ArroUp from '../components/assets/svg/up.svg'
import User from '../components/assets/img/user.png'
import VideoIcon from '../components/assets/svg/live_stream.svg'
import RatingIcon from '../components/assets/svg/rating.svg'
import StarIcon from '../components/assets/svg/star.svg'
import DeactivatedAccounts from '../components/assets/svg/deactivated_accounts.svg'

function Models() {
  return (
    <div className='models-page'>
      {/* Header */}
      <div className='title-area'>
        <button className='btn'>Create Model</button>
        <Select
          defaultValue="This month"
          style={{
            width: 132,
          }}
          className='select'
          options={[{ value: 'This month', label: 'This month' }]}
        />

      </div>
      {/* card */}
      <div className='model-cards'>
        {/* main card 1*/}
        <div className='model-card max_live_card'>
          {/* card item 2 */}
          <div className='overview_card'>
            <div className='title'>
              <img
                src={DeactivatedAccounts}
                width="32" height="32"
              />
              <div className='active-content'>
                <p className='active-text'>Active models</p>
                <h4>13</h4>
                <div className='card-btn'>
                  <img
                    src={ArroUp}
                    width="16"
                    height="16"
                  />
                  <span>32.3%</span>gain this month
                </div>
              </div>
            </div>
          </div>
          {/* card item 2 */}
          <div className='overview_card'>
            <div className='title'>
              <img
                src={DeactivatedAccounts}
                width="32" height="32"
              />
              <div className='active-content'>
                <p className='active-text'>Active models</p>
                <h4>13</h4>
                <div className='card-btn'>
                  <img
                    src={ArroUp}
                    width="16"
                    height="16"
                  />
                  <span>32.3%</span>gain this month
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* main card 2 */}
        <div className='model-card max_live_card'>
          {/* card item 2 */}
          <div className='overview_card'>
            <div className='title'>
              <img
                src={DeactivatedAccounts}
                width="32" height="32"
              />
              <div className='active-content'>
                <p className='active-text'>Active models</p>
                <h4>13</h4>
                <div className='card-btn'>
                  <img
                    src={ArroUp}
                    width="16"
                    height="16"
                  />
                  <span>32.3%</span>gain this month
                </div>
              </div>
            </div>
          </div>
          {/* card item 2 */}
          <div className='overview_card'>
            <div className='title'>
              <img
                src={DeactivatedAccounts}
                width="32" height="32"
              />
              <div className='active-content'>
                <p className='active-text'>Active models</p>
                <h4>13</h4>
                <div className='card-btn'>
                  <img
                    src={ArroUp}
                    width="16"
                    height="16"
                  />
                  <span>32.3%</span>gain this month
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Models