import React from "react";
import { Image, Divider, Segment } from "semantic-ui-react";
import Wrapper from "../components/Wrapper";

const src = "./cat.jpg";

const ImageExample = () => (
  <>
    <Wrapper>
      <Image src={src} size="small" />
    </Wrapper>
    <Wrapper>
      <Image src={src} size="small" wrapped />
    </Wrapper>
    <Wrapper>
      <Image
        src={src}
        as="a"
        size="medium"
        href="http://google.com"
        target="_blank"
      />
    </Wrapper>
    <Wrapper>
      <Image src={src} size="medium" disabled />
    </Wrapper>
    <Wrapper>
      <Image src={src} avatar />
      <span>Username</span>
    </Wrapper>
    <Wrapper>
      <Image src={src} size="medium" bordered />
    </Wrapper>
    <Wrapper>
      <Image src={src} fluid />
    </Wrapper>
    <Wrapper>
      <Image src={src} size="medium" rounded />
    </Wrapper>
    <Wrapper>
      <Image src={src} size="medium" circular />
    </Wrapper>
    <Wrapper>
      <Image src={src} size="tiny" verticalAlign="top" />{" "}
      <span>Top Aligned</span>
      <Divider />
      <Image src={src} size="tiny" verticalAlign="middle" />{" "}
      <span>Middle Aligned</span>
      <Divider />
      <Image src={src} size="tiny" verticalAlign="bottom" />{" "}
      <span>Bottom Aligned</span>
    </Wrapper>
    <Wrapper>
      <Segment>
        <Image src={src} size="medium" centered />
        <p>
          Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
          alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
          referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
          electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
          Mei ex natum rebum iisque.
        </p>
        <p>
          Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
          definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his
          te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo
          vide phaedrum, vim vivendum maiestatis in.
        </p>
        <Image src={src} size="small" centered />
        <p>
          Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
          Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute
          at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi
          te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
          convenire mnesarchum eu per, quas minimum postulant per id.
        </p>
      </Segment>
    </Wrapper>
    <Wrapper>
      <Segment>
        <p>
          Te eum doming eirmod, nominati pertinacia{" "}
          <Image src={src} size="mini" spaced /> argumentum ad his. Ex eam alia
          facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
          referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
          electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
          Mei ex natum rebum iisque.
        </p>
      </Segment>
      <p>
        <Image src={src} size="mini" spaced="right" />
        Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
        definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his
        te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo
        vide phaedrum, vim vivendum maiestatis in.
      </p>
      <p>
        Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei
        ut facer dolores adolescens, no illum aperiri quo, usu odio brute at.
        Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam,
        wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire
        mnesarchum eu per, quas minimum postulant per id.
        <Image src={src} size="mini" spaced="left" />
      </p>
    </Wrapper>
    <Wrapper>
      <Segment>
        <Image src={src} size="small" floated="left" />
        <p>
          Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
          alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
          referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
          electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
          Mei ex natum rebum iisque.
        </p>
        <Image src={src} size="small" floated="right" />
        <p>
          Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
          definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his
          te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo
          vide phaedrum, vim vivendum maiestatis in.
        </p>
        <p>
          Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
          Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute
          at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi
          te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
          convenire mnesarchum eu per, quas minimum postulant per id.
        </p>
      </Segment>
    </Wrapper>
  </>
);

export default ImageExample;
