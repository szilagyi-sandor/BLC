import React from "react";

import "./DefaultElementsPage.scss";

import MovieMp4 from "Assets/Videos/Movie.mp4";
import MovieOgv from "Assets/Videos/Movie.ogv";
import HorseMp3 from "Assets/Audios/Horse.mp3";
import HorseOgv from "Assets/Audios/Horse.ogv";
import workplace from "Assets/Images/Workplace.jpg";

import Container from "Modules/Layout/BLC/Components/Grid/Container/Container";
import ElementDisplay from "./Parts/ElementDisplay/ElementDisplay";

export default function DefaultElementsPage() {
  const url = window.location;
  var homeUrl = `${url.protocol}//${url.host}`;

  return (
    <section className="defaultElementsPage">
      <header>
        <Container>
          <h2>Default elements</h2>
        </Container>
      </header>

      <div className="content">
        <Container>
          <ElementDisplay element="<main>:">
            <main>Main</main>
          </ElementDisplay>

          <ElementDisplay element="<section>:">
            <section>Section</section>
          </ElementDisplay>

          <ElementDisplay element="<aside>:">
            <aside>Aside</aside>
          </ElementDisplay>

          <ElementDisplay element="<article>:">
            <article>Article</article>
          </ElementDisplay>

          <ElementDisplay element="<header>:">
            <header>Header</header>
          </ElementDisplay>

          <ElementDisplay element="<footer>:">
            <footer>Footer</footer>
          </ElementDisplay>

          <ElementDisplay element="<h1>:">
            <h1>Heading 1</h1>
          </ElementDisplay>

          <ElementDisplay element="<h2>:">
            <h2>Heading 2</h2>
          </ElementDisplay>

          <ElementDisplay element="<h3>:">
            <h3>Heading 3</h3>
          </ElementDisplay>

          <ElementDisplay element="<h4>:">
            <h4>Heading 4</h4>
          </ElementDisplay>

          <ElementDisplay element="<h5>:">
            <h5>Heading 5</h5>
          </ElementDisplay>

          <ElementDisplay element="<h6>:">
            <h6>Heading 6</h6>
          </ElementDisplay>

          <ElementDisplay element="<p>:">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a
              dolor ligula. Nullam porttitor nulla vel turpis eleifend, a
              fermentum leo tincidunt. Sed et risus tristique, dapibus libero
              in, pellentesque ligula.
            </p>
          </ElementDisplay>

          <ElementDisplay element="<a>:">
            <a href="/" onClick={(e) => e.preventDefault()}>
              Hyperlink
            </a>
          </ElementDisplay>

          <ElementDisplay element="<button>:">
            <button>Button</button>
            <button disabled>Button disabled</button>
          </ElementDisplay>

          <ElementDisplay element="<img />:">
            <img src="https://picsum.photos/200/200" alt="" />
          </ElementDisplay>

          <ElementDisplay element="<figure>:">
            <figure>
              <img src="https://picsum.photos/200/200" alt="" />

              <figcaption>Figure Caption</figcaption>
            </figure>
          </ElementDisplay>

          <ElementDisplay element="<map>:">
            <img
              src={workplace}
              alt="Workplace"
              useMap="#workmap"
              width="400"
              height="379"
            />

            <map name="workmap">
              <area
                shape="rect"
                coords="34,44,270,350"
                alt="Computer"
                href="#computer"
              />
              <area
                shape="rect"
                coords="290,172,333,250"
                alt="Phone"
                href="#phone"
              />
              <area
                shape="circle"
                coords="337,300,44"
                alt="Cup of coffee"
                href="#coffee"
              />
            </map>
          </ElementDisplay>

          <ElementDisplay element="<picture>:">
            <picture>
              <source
                media="(min-width:650px)"
                srcSet="https://picsum.photos/600/600"
              />
              <source
                media="(min-width:465px)"
                srcSet="https://picsum.photos/400/400"
              />
              <img src="https://picsum.photos/200/200" alt="" />
            </picture>
          </ElementDisplay>

          <ElementDisplay element="<svg>:">
            <svg width="100" height="100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#3e8bff"
                strokeWidth="4"
                fill="#202a42"
              />
              Your browser does not support inline SVG.
            </svg>
          </ElementDisplay>

          <ElementDisplay element="<video>:">
            <video width="320" height="240" controls>
              <source src={MovieMp4} type="video/mp4" />
              <source src={MovieOgv} type="video/ogg" />
              {/*  <tracks /> can be added here. */}
              Your browser does not support the video element.
            </video>
          </ElementDisplay>

          <ElementDisplay element="<audio>:">
            <audio controls>
              <source src={HorseOgv} type="audio/ogg" />
              <source src={HorseMp3} type="audio/mpeg" />
              {/*  <tracks /> can be added here. */}
              Your browser does not support the audio element.
            </audio>
          </ElementDisplay>

          <ElementDisplay element="<iframe>:">
            <iframe title="Iframe" src={homeUrl} />
          </ElementDisplay>

          <ElementDisplay element="<embed />:">
            <embed type="image/jpeg" src="https://picsum.photos/200/200" />
          </ElementDisplay>

          <ElementDisplay element="<object>:">
            <object
              data="https://picsum.photos/200/200"
              width="200"
              height="200"
              type="image/jpeg"
            >
              Object
            </object>
          </ElementDisplay>

          <ElementDisplay element="<nav>:">
            <nav>Navigation</nav>
          </ElementDisplay>

          <ElementDisplay element="<form>:">
            <form>Form</form>
          </ElementDisplay>

          <ElementDisplay element="<label>:">
            <label>Label</label>
          </ElementDisplay>

          <ElementDisplay element="<hr />:">
            <hr />
          </ElementDisplay>

          <ElementDisplay element="<details>:">
            <details>
              <summary>Summary</summary>
              Details
            </details>
          </ElementDisplay>

          <ElementDisplay
            element="<dialog>:"
            styles={{ elementWrapper: { minHeight: 60 } }}
          >
            <dialog open>Dialog</dialog>
          </ElementDisplay>

          <ElementDisplay element="<table>:">
            <table>
              <caption>Caption</caption>

              <colgroup>
                <col />
                <col />
                <col />
              </colgroup>

              <thead>
                <tr>
                  <th>Th 1</th>
                  <th>Th 2</th>
                  <th>Th 3</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Td 1.1</td>
                  <td>Td 1.2</td>
                  <td>Td 1.3</td>
                </tr>

                <tr>
                  <td>Td 2.1</td>
                  <td>Td 2.2</td>
                  <td>Td 2.3</td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <td>Td 1.1 at foot</td>
                  <td>Td 1.2 at foot</td>
                  <td>Td 1.3 at foot</td>
                </tr>
              </tfoot>
            </table>
          </ElementDisplay>

          <ElementDisplay element="<canvas>:">
            <canvas width="200" height="100">
              Your browser does not support the HTML canvas tag.
            </canvas>
          </ElementDisplay>

          <ElementDisplay element="<template>:">
            <template>Template</template>
          </ElementDisplay>

          <ElementDisplay element="<progress>:">
            <label htmlFor="progress">Progress</label>
            <progress id="progress" value="32" max="100">
              32%
            </progress>
          </ElementDisplay>

          <ElementDisplay element="<meter>:">
            <label htmlFor="meter">Meter</label>
            <meter id="meter" value="0.6">
              60%
            </meter>
          </ElementDisplay>

          <ElementDisplay element="<ul>:">
            <ul>
              <li>Unordered list item 1</li>
              <li>Unordered list item 2</li>
              <li>Unordered list item 3</li>
            </ul>
          </ElementDisplay>

          <ElementDisplay element="<ol>:">
            <ol>
              <li>Ordered List item 1</li>
              <li>Ordered List item 2</li>
              <li>Ordered List item 3</li>
            </ol>
          </ElementDisplay>

          <ElementDisplay element="<dl>:">
            <dl>
              <dt>Definition list item 1: </dt>
              <dd>Definition 1. </dd>

              <dt>Definition list item 2: </dt>
              <dd>Definition 2. </dd>
            </dl>
          </ElementDisplay>

          <ElementDisplay element="<div>:">
            <div>Div</div>
          </ElementDisplay>

          <ElementDisplay element="<span>:">
            <span>Span</span>
          </ElementDisplay>

          <ElementDisplay element="<address>:">
            <address>Address</address>
          </ElementDisplay>

          <ElementDisplay element="<dfn>:">
            <dfn>Definition</dfn>
          </ElementDisplay>

          <ElementDisplay element="<abbr>:">
            <abbr title="Abbreviation">Abbreviation</abbr>
          </ElementDisplay>

          <ElementDisplay element="<sub>:">
            <sub>Subscript</sub>
          </ElementDisplay>

          <ElementDisplay element="<sup>:">
            <sup>Superscript</sup>
          </ElementDisplay>

          <ElementDisplay element="<small>:">
            <small>Small</small>
          </ElementDisplay>

          <ElementDisplay element="<cite>:">
            <cite>Citation</cite>
          </ElementDisplay>

          <ElementDisplay element="<u>:">
            <u>Unarticulated </u>
          </ElementDisplay>

          <ElementDisplay element="<time>:">
            <time dateTime="2021-02-19">Time</time>
          </ElementDisplay>

          <ElementDisplay element="<data>:">
            <data value="21053">Data</data>
          </ElementDisplay>

          <ElementDisplay element="<strong>:">
            <strong>Strong</strong>
          </ElementDisplay>

          <ElementDisplay element="<mark>:">
            <mark>Mark</mark>
          </ElementDisplay>

          <ElementDisplay element="<em>:">
            <em>Emphasized</em>
          </ElementDisplay>

          <ElementDisplay element="<i>:">
            <i>Idiomatic</i>
          </ElementDisplay>

          <ElementDisplay element="<b>:">
            <b>Bold</b>
          </ElementDisplay>

          <ElementDisplay element="<q>:">
            <q>Quote</q>
          </ElementDisplay>

          <ElementDisplay element="<blockquote>:">
            <blockquote cite="https://www.google.com/">
              <p>Blockquote</p>

              <footer>Footer</footer>
            </blockquote>
          </ElementDisplay>

          <ElementDisplay element="<del>:">
            <del>Deleted</del>
          </ElementDisplay>

          <ElementDisplay element="<s>:">
            <s>Strike through</s>
          </ElementDisplay>

          <ElementDisplay element="<ins>:">
            <ins>Inserted</ins>
          </ElementDisplay>

          <ElementDisplay element="<pre>:">
            <pre>Preformatted</pre>
          </ElementDisplay>

          <ElementDisplay element="<code>:">
            <code>Code</code>
          </ElementDisplay>

          <ElementDisplay element="<kdb>:">
            <kbd>Keyboard input</kbd>
          </ElementDisplay>

          <ElementDisplay element="<var>:">
            <var>Variable</var>
          </ElementDisplay>

          <ElementDisplay element="<output>:">
            <output>Output</output>
          </ElementDisplay>

          <ElementDisplay element="<samp>:">
            <samp>Sample</samp>
          </ElementDisplay>

          <ElementDisplay element="<bdi>:">
            <bdi>Bi-Directional Isolation</bdi>
          </ElementDisplay>

          <ElementDisplay element="<bdo>:">
            <bdo dir="rtl">Bi-Directional Override</bdo>
          </ElementDisplay>
        </Container>
      </div>
    </section>
  );
}
