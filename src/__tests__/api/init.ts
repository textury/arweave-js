import Ardk from '../../ardk';

// @ponicode
describe('Init API (merge defaults)', () => {
  test('without params', () => {
    let inst: Ardk = new Ardk({ logging: true });
    expect(inst.api.config.host).toBe('arweave.net');
    expect(inst.api.config.port).toBe(443);
    expect(inst.api.config.protocol).toBe('https');
  });

  test('with https url', () => {
    let inst: Ardk = new Ardk({ url: 'https://arweave.net' });
    expect(inst.api.config.host).toBe('arweave.net');
    expect(inst.api.config.port).toBe(443);
    expect(inst.api.config.protocol).toBe('https');
  });

  test('with http url', () => {
    let inst: Ardk = new Ardk({ url: 'http://arweave.net' });
    expect(inst.api.config.host).toBe('arweave.net');
    expect(inst.api.config.port).toBe(80);
    expect(inst.api.config.protocol).toBe('http');
  });

  test('with localhost', () => {
    let inst: Ardk = new Ardk({ url: 'http://localhost:1984' });
    expect(inst.api.config.host).toBe('localhost');
    expect(inst.api.config.port).toBe(1984);
    expect(inst.api.config.protocol).toBe('http');
  });

  test('with invalid url', () => {
    let inst: Ardk = new Ardk({ url: 'localhost' });
    expect(inst.api.config.host).toBe('arweave.net');
    expect(inst.api.config.port).toBe(443);
    expect(inst.api.config.protocol).toBe('https');
    expect(inst.api.config.url).toBe('https://arweave.net');
  });

  test('host and protocol without port', () => {
    let inst: Ardk = new Ardk({ host: 'arweave.net', protocol: 'https' });
    expect(inst.api.config.host).toBe('arweave.net');
    expect(inst.api.config.port).toBe(443);
    expect(inst.api.config.protocol).toBe('https');
    expect(inst.api.config.url).toBe('https://arweave.net');
  });

  test('host and port without protocol', () => {
    let inst: Ardk = new Ardk({ host: 'arweave.net', port: 1984 });
    expect(inst.api.config.host).toBe('arweave.net');
    expect(inst.api.config.port).toBe(1984);
    expect(inst.api.config.protocol).toBe('http');
    expect(inst.api.config.url).toBe('http://arweave.net:1984');
  });

  test('host and port 443 without protocol', () => {
    let inst: Ardk = new Ardk({ host: 'arweave.net', port: 443 });
    expect(inst.api.config.host).toBe('arweave.net');
    expect(inst.api.config.port).toBe(443);
    expect(inst.api.config.protocol).toBe('https');
    expect(inst.api.config.url).toBe('https://arweave.net');
  });

  test('with host, protocol and port', () => {
    let inst: Ardk = new Ardk({ host: 'arweave.net', protocol: 'https', port: 443 });
    expect(inst.api.config.host).toBe('arweave.net');
    expect(inst.api.config.port).toBe(443);
    expect(inst.api.config.protocol).toBe('https');
    expect(inst.api.config.url).toBe('https://arweave.net');
  });

  test('url with protocol https and port 443', () => {
    let inst: Ardk = new Ardk({ url: 'https://arweave.net:443' });
    expect(inst.api.config.host).toBe('arweave.net');
    expect(inst.api.config.port).toBe(443);
    expect(inst.api.config.protocol).toBe('https');
    expect(inst.api.config.url).toBe('https://arweave.net');
  });
});
