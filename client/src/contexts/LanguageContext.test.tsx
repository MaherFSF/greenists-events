import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import React from 'react';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Test component that uses the language context
function TestComponent() {
  const { language, setLanguage, t, dir } = useLanguage();
  return (
    <div>
      <span data-testid="language">{language}</span>
      <span data-testid="direction">{dir}</span>
      <span data-testid="translation">{t('nav.home')}</span>
      <button onClick={() => setLanguage('en')} data-testid="switch-en">EN</button>
      <button onClick={() => setLanguage('ar')} data-testid="switch-ar">AR</button>
    </div>
  );
}

describe('LanguageContext', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  it('should default to Arabic language', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    expect(screen.getByTestId('language').textContent).toBe('ar');
    expect(screen.getByTestId('direction').textContent).toBe('rtl');
  });

  it('should translate text correctly in Arabic', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    expect(screen.getByTestId('translation').textContent).toBe('الرئيسية');
  });

  it('should switch to English when button clicked', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    fireEvent.click(screen.getByTestId('switch-en'));
    
    expect(screen.getByTestId('language').textContent).toBe('en');
    expect(screen.getByTestId('direction').textContent).toBe('ltr');
    expect(screen.getByTestId('translation').textContent).toBe('Home');
  });

  it('should save language preference to localStorage', () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    fireEvent.click(screen.getByTestId('switch-en'));
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('greenists-language', 'en');
  });

  it('should load saved language from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('en');
    
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    );
    
    // After useEffect runs, it should be English
    expect(localStorageMock.getItem).toHaveBeenCalledWith('greenists-language');
  });
});
