
import React from 'react'
import { Flex, Select, Space } from 'antd';
import DeactivatedAccounts from '../components/assets/svg/deactivated_accounts.svg'
import ArroUp from '../components/assets/svg/up.svg'
import User from '../components/assets/img/user.png'
import VideoIcon from '../components/assets/svg/live_stream.svg'
import RatingIcon from '../components/assets/svg/rating.svg'
import StarIcon from '../components/assets/svg/star.svg'

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function Dashboard() {
  return (
    <div className='dashboard'>

      <div className='title-area'>
        <h3 className='title'>Overview</h3>
        <Select
          defaultValue="This month"
          style={{
            width: 132,
          }}
          onChange={handleChange}
          options={[
            {
              value: 'This month',
              label: 'This month',
            }
          ]}
        />
      </div>
      {/* Overview card */}
      <div className='overview-cards max_live_card '>
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
      {/* 2nd row */}
      <div className='dtm-main'>
        {/* left */}
        <div className='dm-card-area'>
          {/* Datasets */}
          <div className='datasets-card max_live_card'>
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
            <div className='datasets-card-left max_live_card'>
              {/* row 1 */}
              <div className='row-1'>
                <div className='dot-btn'>
                  Avg Time
                </div>
                <div className='img-area'>
                  <img
                    src={VideoIcon} />
                  12.3 <span>hr</span>

                </div>

              </div>
              {/* row 2 */}
              <div className='row-1'>
                <div className='dot-btn purple'>
                  Avg Time
                </div>
                <div className='img-area'>
                  <img
                    src={VideoIcon} />
                  12.3 <span>hr</span>

                </div>

              </div>
            </div>
          </div>

          {/* MY MODEL CARD */}
          <div className='my-model-card max_live_card'>
            <div className='header-area'>
              <div className='title'>
                <h4>My models</h4>
                <p>More than 1 transaction this month</p>
              </div>
              <h6 className='see-all-btn'>See All</h6>
            </div>
            <div className='chart-area'>
              <div className='chart-box'>
                Chart here
              </div>
              <div className='content-area'>
                <div className='content-box'>
                  <h6>Active models</h6>
                  <h4>12</h4>
                </div>
                <div className='content-box'>
                  <h6>Active models</h6>
                  <h4>12</h4>
                </div>
              </div>

            </div>
          </div>



        </div>
        {/* right */}
        {/* TOP MODEL CARD */}
        <div className='top-model-card max_live_card'>
          <div className='header-area'>
            <h4 className='title'>Top models</h4>
            <h6 className='see-all-btn'>See All</h6>
          </div>
          <div className='card-item-area'>
            <div className='card-item'>
              <div className='count-number'>1</div>
              <img className='user-img'
                src={User}
              />
              <div className='profile-area'>
                <div className='user-name'>Name</div>
                <div className='user-details'>
                  <div className='live'>
                    <img className='live-img'
                      src={VideoIcon}
                    />
                    120
                    <span>Live</span>
                  </div>
                  <div className='followers'>
                    1234
                    <span>followers</span>
                  </div>
                  <div className='rating'>
                    <img className='rating-img'
                      src={RatingIcon}
                    />
                    4.5
                    <span>Avg Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>




    </div>
  )
}

export default Dashboard