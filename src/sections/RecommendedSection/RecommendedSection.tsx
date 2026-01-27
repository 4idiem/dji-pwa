import { useFetch } from "../../shared/hooks/useFetch";
import type { RecommendedResponse } from "../../shared/types/recommended";

export function RecommendedSection() {
  const { data, loading, error } = useFetch<RecommendedResponse>("/mock/recommended.json");

  // 1) loading — данные ещё не пришли
  if (loading) {
    return (
      <section>
        <h2>Рекомендуем</h2>
        <p>Загрузка...</p>
      </section>
    );
  }

  // 2) error — файл не найден / сеть / битый JSON
  if (error) {
    return (
      <section>
        <h2>Рекомендуем</h2>
        <p>Ошибка загрузки: {error}</p>
      </section>
    );
  }

  // 3) empty — запрос успешный, но массив пустой
  const items = data ?? [];
  if (items.length === 0) {
    return (
      <section>
        <h2>Рекомендуем</h2>
        <p>Нет данных</p>
      </section>
    );
  }

  // 4) success — данные есть
  return (
    <section>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <h2 style={{ margin: 0 }}>Рекомендуем</h2>

        {/* Стрелки — пока просто кнопки-заглушки (позже сделаем прокрутку/слайдер) */}
        <div style={{ display: "flex", gap: 8 }}>
          <button type="button" aria-label="Назад">←</button>
          <button type="button" aria-label="Вперёд">→</button>
        </div>
      </div>

      {/* Лента карточек (пока без логики “листания”) */}
      <div
        style={{
          display: "flex",
          gap: 12,
          overflowX: "auto",
          paddingTop: 12,
          paddingBottom: 4,
        }}
      >
        {items.map((item, idx) => {
          const title = item.name ?? "Без названия";
          const price = item.price ?? "—";
          const link = item.link ?? "#";
          const image = item.image;

          // key: идеально иметь id, но его нет -> используем link, иначе запасной вариант
          const key = link !== "#" ? link : `${title}-${idx}`;

          return (
            <article
              key={key}
              style={{
                minWidth: 220,
                border: "1px solid #ddd",
                borderRadius: 10,
                padding: 12,
                background: "#fff",
              }}
            >
              <div
                style={{
                  height: 140,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 8,
                  background: "#f6f6f6",
                  overflow: "hidden",
                }}
              >
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                ) : (
                  <span style={{ fontSize: 12, opacity: 0.7 }}>Нет изображения</span>
                )}
              </div>

              <div style={{ fontWeight: 600, marginTop: 10 }}>{title}</div>
              <div style={{ marginTop: 6 }}>{price}</div>

              {link !== "#" ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "inline-block", marginTop: 10 }}
                >
                  Открыть
                </a>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
