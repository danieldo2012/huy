import { toPng } from 'html-to-image';

export interface ExportCardOptions {
  fileName?: string;
  pixelRatio?: number;
}

export async function exportCardAsPng(
  element: HTMLElement,
  options: ExportCardOptions = {}
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!element) {
      return { success: false, error: 'Không tìm thấy khung thiệp cần xuất' };
    }

    // Wait for fonts to be ready
    if ('fonts' in document) {
      await (document as unknown as { fonts: { ready: Promise<void> } }).fonts.ready;
    }

    // Small delay to ensure any dynamic rendering is stable
    await new Promise((resolve) => setTimeout(resolve, 150));

    const pixelRatio = options.pixelRatio || 2;
    const dataUrl = await toPng(element, {
      pixelRatio,
      quality: 0.95,
      cacheBust: true,
      filter: (domNode: HTMLElement) => {
        // Exclude elements marked with data-no-export
        if (domNode.getAttribute && domNode.getAttribute('data-no-export') === 'true') {
          return false;
        }
        return true;
      }
    });

    const link = document.createElement('a');
    const safeName = (options.fileName || 'thiep-gui-mot-chut-thuong')
      .toLowerCase()
      .replace(/[^a-z0-9_-]/g, '-');
    link.download = `${safeName}.png`;
    link.href = dataUrl;
    link.click();

    return { success: true };
  } catch (err) {
    console.error('Failed to export card image:', err);
    return { 
      success: false, 
      error: 'Không thể xuất thiệp dưới dạng hình ảnh. Vui lòng thử lại trên trình duyệt Chrome/Safari.' 
    };
  }
}
