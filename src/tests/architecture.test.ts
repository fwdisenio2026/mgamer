import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { MGAMER_INFO, TECH_EXPERIENCES } from '../data/mgamerData';

describe('PROMPT 1 MAESTRO - Arquitectura y Assets', () => {
  const rootDir = process.cwd();

  it('debe tener la estructura requerida en src/assets (Regla 5)', () => {
    const assetFolders = [
      'src/assets/images/general',
      'src/assets/images/backgrounds',
      'src/assets/images/og',
      'src/assets/logos',
      'src/assets/icons',
      'src/assets/videos',
      'src/assets/fonts',
      'src/assets/documents',
    ];

    for (const folder of assetFolders) {
      const fullPath = path.join(rootDir, folder);
      expect(fs.existsSync(fullPath), `Carpeta ${folder} debe existir`).toBe(true);
      expect(fs.statSync(fullPath).isDirectory(), `${folder} debe ser un directorio`).toBe(true);
    }
  });

  it('debe contener los archivos técnicos en public/ (Regla 7)', () => {
    const technicalFiles = [
      'public/favicon.png',
      'public/apple-touch-icon.png',
      'public/robots.txt',
      'public/sitemap.xml',
      'public/manifest.webmanifest',
    ];

    for (const file of technicalFiles) {
      const fullPath = path.join(rootDir, file);
      expect(fs.existsSync(fullPath), `Archivo técnico ${file} debe existir`).toBe(true);
      expect(fs.statSync(fullPath).size, `Archivo ${file} no debe estar vacío`).toBeGreaterThan(0);
    }
  });

  it('debe verificar la validez técnica del favicon y relación 1:1 (Reglas 8, 9, 10)', () => {
    const faviconPath = path.join(rootDir, 'public/favicon.png');
    const buffer = fs.readFileSync(faviconPath);

    // PNG signature check
    const isPng = buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47;
    expect(isPng, 'El favicon debe ser un archivo PNG válido').toBe(true);

    // IHDR dimensions
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    expect(width).toBeGreaterThan(0);
    expect(height).toBeGreaterThan(0);
    expect(width === height, `El favicon debe tener relación 1:1 (${width}x${height})`).toBe(true);
  });

  it('debe contener las referencias correctas en index.html (Reglas 8 y 12)', () => {
    const indexPath = path.join(rootDir, 'index.html');
    const html = fs.readFileSync(indexPath, 'utf-8');

    expect(html).toContain('<link rel="icon" type="image/png" href="/favicon.png" />');
    expect(html).toContain('<link rel="apple-touch-icon" href="/apple-touch-icon.png" />');
    expect(html).toContain('<meta name="viewport"');
    expect(html).toContain('<meta property="og:title"');
    expect(html).toContain('<meta name="twitter:card"');
  });

  it('debe tener metadatos sincronizados y no vacíos (Reglas SEO)', () => {
    const metadataPath = path.join(rootDir, 'metadata.json');
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));

    expect(metadata.name).toBeDefined();
    expect(metadata.name.trim().length).toBeGreaterThan(0);
    expect(metadata.description).toBeDefined();
    expect(metadata.description.trim().length).toBeGreaterThan(0);
  });
});

describe('PROMPT 2 - Verificación de Requisitos MGAMER', () => {
  const rootDir = process.cwd();

  it('debe respetar los datos institucionales exactos del brief sin inventar información', () => {
    expect(MGAMER_INFO.name).toBe('MGAMER');
    expect(MGAMER_INFO.location).toContain('DIAG 74 2730');
    expect(MGAMER_INFO.location).toContain('La Plata');
    expect(MGAMER_INFO.phoneDisplay).toBe('221 2000838');
    expect(MGAMER_INFO.tagline).toBe('VIDEOJUEGOS + TECNOLOGÍA = CUMPLES INOLVIDABLES');
    expect(MGAMER_INFO.duration).toBe('3 HORAS DE DIVERSIÓN TOTAL');
    expect(MGAMER_INFO.capacity).toBe('Hasta 20 adultos + 20 chicos');
    expect(MGAMER_INFO.capacityAdults).toBe(20);
    expect(MGAMER_INFO.capacityKids).toBe(20);
    expect(MGAMER_INFO.instagramUrl).toBe('https://www.instagram.com/mgamerlaplata');
  });

  it('debe incluir las 5 experiencias tecnológicas del brief', () => {
    const experienceNames = TECH_EXPERIENCES.map((e) => e.name.toLowerCase());
    expect(experienceNames.some((n) => n.includes('realidad virtual'))).toBe(true);
    expect(experienceNames.some((n) => n.includes('nintendo switch'))).toBe(true);
    expect(experienceNames.some((n) => n.includes('playstation'))).toBe(true);
    expect(experienceNames.some((n) => n.includes('piso led'))).toBe(true);
    expect(experienceNames.some((n) => n.includes('retro'))).toBe(true);
  });

  it('debe tener configurado el SEO específico de MGAMER La Plata en index.html', () => {
    const indexPath = path.join(rootDir, 'index.html');
    const html = fs.readFileSync(indexPath, 'utf-8');

    expect(html).toContain('MGAMER | Videojuegos y cumpleaños en La Plata');
    expect(html).toContain('3 horas de diversión con realidad virtual, PlayStation, Nintendo Switch, piso LED y juegos retro');
    expect(html).toContain('DIAG 74 2730');
    expect(html).toContain('https://www.instagram.com/mgamerlaplata');
  });
});
