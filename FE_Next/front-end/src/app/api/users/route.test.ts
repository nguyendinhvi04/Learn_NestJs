import { GET } from './route';

const mockFetch = jest.fn() as jest.MockedFunction<typeof fetch>;
global.fetch = mockFetch;

// Mock NextResponse
const mockJson = jest.fn();
const mockNextResponse = {
  json: mockJson,
  status: 200,
};

jest.mock('next/server', () => ({
  NextResponse: {
    json: (body: any, init?: { status?: number }) => {
      mockJson(body);
      mockNextResponse.status = init?.status || 200;
      return mockNextResponse;
    },
  },
}));

describe('GET /api/users', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return users data when fetch is successful', async () => {
    const mockUsers = [{ id: 1, name: 'User1' }, { id: 2, name: 'User2' }];
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockUsers,
    } as Response);

    const response = await GET();

    expect(mockFetch).toHaveBeenCalledWith('http://localhost:8000/users');
    expect(response).toBe(mockNextResponse);

    expect(mockJson).toHaveBeenCalledWith(mockUsers);
  });

  it('should return error response when fetch fails', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
    } as Response);

    const response = await GET();

    expect(mockFetch).toHaveBeenCalledWith('http://localhost:8000/users');
    expect(response).toBe(mockNextResponse);

    expect(mockJson).toHaveBeenCalledWith({ error: 'Failed to fetch users' });
    expect(response.status).toBe(500);
  });

  it('should return error response when fetch throws', async () => {
    mockFetch.mockRejectedValue(new Error('Network error'));

    const response = await GET();

    expect(mockFetch).toHaveBeenCalledWith('http://localhost:8000/users');
    expect(response).toBe(mockNextResponse);

    expect(mockJson).toHaveBeenCalledWith({ error: 'Failed to fetch users' });
    expect(response.status).toBe(500);
  });
});
