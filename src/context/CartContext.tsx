import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { GalleryItem } from '../data/gallery';
import { siteConfig } from '../config/siteConfig';

export interface CartItem {
  id: string;
  name: string;
  image: string;
  category: string;
  quantity: number;
  priceLabel?: string;
}

interface PersistedCartState {
  items: CartItem[];
  customizationNote: string;
}

interface CartContextValue {
  items: CartItem[];
  customizationNote: string;
  setCustomizationNote: (note: string) => void;
  totalItems: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getItemQuantity: (id: string) => number;
}

const STORAGE_KEY = 'ayezis_corner_gift_cart_v1';

const NON_PRODUCT_DECOR_IDS = new Set<string>([
  'new-new-baby-welcome-balloon-backdrop',
  'new-new-corporate-display-wall',
  'corp-06',
]);

/**
 * Only Gifts, Customized Gifts, and Hampers are eligible for the shopping cart.
 * Decorations and event/stage setups are explicitly excluded.
 */
export function isCartEligibleGalleryItem(item: GalleryItem): boolean {
  if (item.category === 'Decorations') {
    return false;
  }
  if (NON_PRODUCT_DECOR_IDS.has(item.id)) {
    return false;
  }
  return true;
}

/**
 * Build a clean, readable WhatsApp enquiry message with all selected products,
 * quantities, pricing note, and optional customization requests.
 */
export function buildWhatsAppCartMessage(
  items: CartItem[],
  customizationNote: string
): string {
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);
  const itemLines = items
    .map((item, idx) => {
      const priceText = item.priceLabel || 'Price on Request';
      return `${idx + 1}. ${item.name} (${item.category}) x ${item.quantity} — ${priceText}`;
    })
    .join('\n');

  const trimmedNote = customizationNote.trim();
  const lines = [
    `Hi ${siteConfig.businessName}, I would like to enquire about ordering the following gift items:`,
    '',
    itemLines,
    '',
    `Total Items: ${totalQty}`,
  ];

  if (trimmedNote) {
    lines.push('', 'Customization Requests:', trimmedNote);
  } else {
    lines.push('', 'Customization Requests: None specified yet');
  }

  lines.push('', 'Please share pricing, availability, and customization details. Thank you!');

  return lines.join('\n');
}

function loadInitialCart(): PersistedCartState {
  if (typeof window === 'undefined') {
    return { items: [], customizationNote: '' };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { items: [], customizationNote: '' };
    }
    const parsed = JSON.parse(raw) as Partial<PersistedCartState>;
    const validItems: CartItem[] = Array.isArray(parsed.items)
      ? parsed.items
          .filter(
            (item): item is CartItem =>
              Boolean(item) &&
              typeof item.id === 'string' &&
              typeof item.name === 'string' &&
              typeof item.image === 'string' &&
              typeof item.category === 'string' &&
              typeof item.quantity === 'number' &&
              Number.isFinite(item.quantity) &&
              item.quantity > 0
          )
          .map((item) => ({
            id: item.id,
            name: item.name,
            image: item.image,
            category: item.category,
            quantity: Math.floor(item.quantity),
            priceLabel: typeof item.priceLabel === 'string' ? item.priceLabel : 'Price on Request',
          }))
      : [];

    return {
      items: validItems,
      customizationNote: typeof parsed.customizationNote === 'string' ? parsed.customizationNote : '',
    };
  } catch {
    return { items: [], customizationNote: '' };
  }
}

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => loadInitialCart().items);
  const [customizationNote, setCustomizationNote] = useState<string>(
    () => loadInitialCart().customizationNote
  );
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Persist cart items and customization note to localStorage
  useEffect(() => {
    try {
      const payload: PersistedCartState = { items, customizationNote };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage quota or private-mode restrictions
    }
  }, [items, customizationNote]);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const addItem = useCallback((product: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((entry) => entry.id === product.id);
      if (existingIndex !== -1) {
        return prev.map((entry, idx) =>
          idx === existingIndex ? { ...entry, quantity: entry.quantity + 1 } : entry
        );
      }
      return [
        ...prev,
        {
          ...product,
          quantity: 1,
          priceLabel: product.priceLabel || 'Price on Request',
        },
      ];
    });
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((entry) =>
          entry.id === id ? { ...entry, quantity: entry.quantity + delta } : entry
        )
        .filter((entry) => entry.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((entry) => entry.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    setCustomizationNote('');
  }, []);

  const getItemQuantity = useCallback(
    (id: string) => {
      const found = items.find((entry) => entry.id === id);
      return found ? found.quantity : 0;
    },
    [items]
  );

  const totalItems = useMemo(
    () => items.reduce((sum, entry) => sum + entry.quantity, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      customizationNote,
      setCustomizationNote,
      totalItems,
      isCartOpen,
      openCart,
      closeCart,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      getItemQuantity,
    }),
    [
      items,
      customizationNote,
      totalItems,
      isCartOpen,
      openCart,
      closeCart,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      getItemQuantity,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
}
