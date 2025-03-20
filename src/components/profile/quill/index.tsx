import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ArticleEditor = () => {
  const [content, setContent] = useState("");

  // Настройка модулей
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // Форматирование текста
      ["blockquote", "code-block"], // Блоки
      [{ header: 1 }, { header: 2 }], // Заголовки
      [{ list: "ordered" }, { list: "bullet" }], // Списки
      [{ script: "sub" }, { script: "super" }], // Надстрочные и подстрочные символы
      [{ indent: "-1" }, { indent: "+1" }], // Отступы
      [{ direction: "rtl" }], // Направление текста
      [{ size: ["small", false, "large", "huge"] }], // Размер текста
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // Заголовки
      [{ color: [] }, { background: [] }], // Цвет текста и фона
      [{ font: [] }], // Шрифты
      [{ align: [] }], // Выравнивание
      ["clean"], // Очистка форматирования
      ["link", "image"], // Ссылки и изображения
    ],
  };

  // Настройка форматов
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "script",
    "indent",
    "direction",
    "size",
    "color",
    "background",
    "font",
    "align",
    "link",
    "image",
  ];

  const handleSaveArticle = async () => {
    const title = prompt("Введите заголовок статьи:");
    if (!title) return;

    // Отправляем запрос на сервер
    try {
      const response = await fetch("http://localhost:8080/save-article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        alert("Статья успешно сохранена!");
      } else {
        alert("Ошибка при сохранении статьи");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Ошибка при отправке запроса");
    }
  };

  return (
    <div>
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules} // Подключаем модули
        formats={formats} // Подключаем форматы
        placeholder="Напишите свою статью..."
      />
      <button
        onClick={handleSaveArticle}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Сохранить статью
      </button>
    </div>
  );
};

export default ArticleEditor;