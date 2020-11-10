import React from "react";
import { Feed, Icon } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const src = "./cat.jpg";

const FeedExample = () => (
  <>
    <Wrapper>
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img src={src} alt="" />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>Elliot Fu</Feed.User> added you as a friend
              <Feed.Date>1 Hour Ago</Feed.Date>
            </Feed.Summary>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />4 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image={src} />
          <Feed.Content>
            <Feed.Summary>
              <a href>Helen Troy</a> added <a href>2 new illustrations</a>
              <Feed.Date>4 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra images>
              <a href>
                <img src={src} alt="" />
              </a>
              <a href>
                <img src={src} alt="" />
              </a>
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />1 Like
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image={src} />
          <Feed.Content>
            <Feed.Summary
              date="2 Days Ago"
              user="Jenny Hess"
              content="add you as a friend"
            />
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />8 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image={src} />
          <Feed.Content>
            <Feed.Summary>
              <a href>Joe Henderson</a> posted on his page
              <Feed.Date>3 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>
              Ours is a life of constant reruns. We're always circling back to
              where we'd we started, then starting all over again. Even if we
              don't run extra laps that day, we surely will come back for more
              of the same another day soon.
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />5 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image={src} />
          <Feed.Content>
            <Feed.Summary>
              <a href>Justen Kitsune</a> added <a href>2 new photos</a> of you
              <Feed.Date>4 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra images>
              <a href>
                <img src={src} alt="" />
              </a>
              <a href>
                <img src={src} alt="" />
              </a>
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />
                41 Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Wrapper>
  </>
);

export default FeedExample;
