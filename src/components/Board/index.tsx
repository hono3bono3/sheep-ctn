import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export const Board = () => {
  // contextを状態として持つ
  const [context, setContext] = useState(null);
  // 画像読み込み完了トリガー
  const [loaded, setLoaded] = useState(false);
  // コンポーネントの初期化完了後コンポーネント状態にコンテキストを登録
  useEffect(() => {
    const canvas = document.getElementById("board") as HTMLCanvasElement;
    const canvasContext = canvas.getContext("2d");
    // setContext(canvasContext);
  }, []);
  // 状態にコンテキストが登録されたらそれに対して操作できる
  useEffect(() => {
    if (context !== null) {
    }
  }, [context]);
  useEffect(() => {
    if (loaded) {
      // それに続く処理
    }
  }, [loaded]);
  return <canvas width="1280" height="720" id="board"></canvas>;
};
