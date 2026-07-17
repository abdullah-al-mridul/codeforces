#include <iostream>
#include <vector>
#include <string>
#include <fstream>

using namespace std;

void solve()
{
    int n;
    cin >> n;
    vector<string> grid(n);
    for (int i = 0; i < n; i++)
    {
        cin >> grid[i];
    }

    char valToFind = '#';

    for (int i = (n - 1); i >= 0; i--)
    {
        for (int j = 0; j < grid[i].size(); j++)
        {
            if (grid[i][j] == valToFind)
            {
                cout << (j + 1) << " ";
                break;
            };
        }
    }

    cout << "\n";
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    if (ifstream("input.txt"))
    {
        (void)freopen("input.txt", "r", stdin);
    }

    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return 0;
}