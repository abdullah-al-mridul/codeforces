#include <bits/stdc++.h>
using namespace std;

#define ll long long
#define endl '\n'

int getMaxFrequency(const vector<vector<int>> &matrix)
{
    if (matrix.empty() || matrix[0].empty())
        return 0;

    unordered_map<int, int> frequencyMap;
    int maxCount = 0;

    for (const auto &row : matrix)
    {
        for (int element : row)
        {
            frequencyMap[element]++;
            maxCount = max(maxCount, frequencyMap[element]);
        }
    }

    return maxCount;
}

void solve()
{
    int n;
    cin >> n;

    vector<vector<int>> matrix(n, vector<int>(n));

    for (int i = 0; i < n; ++i)
    {
        for (int j = 0; j < n; ++j)
        {
            cin >> matrix[i][j];
        }
    }

    int maxDistinctNum = (n * n) - n;

    int maxDistinctCandie = getMaxFrequency(matrix);

    if (maxDistinctCandie <= maxDistinctNum)
    {
        cout << "YES" << "\n";
        return;
    }

    cout << "NO" << "\n";
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

#ifndef ONLINE_JUDGE
    if (freopen("input.txt", "r", stdin) == NULL)
    {
        cerr << "Error: input.txt not found!" << endl;
    }
#endif

    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }

    return 0;
}