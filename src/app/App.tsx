import React from 'react';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';
import { ThemeSwitcher } from '../features/ThemeSwitcher/ui/ThemeSwitcher';
import MainLayout from "../shared/layouts/MainLayout";
import PostList from "../widgets/PostList/PostList";

function App() {
  const items = ['Дмитрий Савин', 'Мария Корделюк'];

  return (
    <MainLayout>
    <PostList />
  
    <ThemeProvider>
      <>
        <h1>Переключение темы</h1>
        <ThemeSwitcher />

        <h2>Наставники проекта:</h2>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <p>{item}</p>
          </React.Fragment>
        ))}
      </>
    </ThemeProvider>
    </MainLayout>
  );
}

export default App;
