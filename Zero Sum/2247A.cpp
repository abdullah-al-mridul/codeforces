#include <iostream>
#include <fstream>
#include <algorithm>
#include <cmath>
#include <iomanip>
#include <vector>

using namespace std;

int sum(const vector<int> &vec)
{
    int total = 0;

    for (int num : vec)
    {
        total += num;
    }

    return total;
}

void solve()
{
    int n;
    cin >> n;

    vector<int> vec(n);

    for (int i = 0; i < n; i++)
    {
        cin >> vec[i];
    }

    int total = sum(vec);

    if (total == 0)
    {
        cout << "YES" << "\n";
        return;
    }

    bool done = false;

    if (total > 0)
    {
        for (int i = 0; i < vec.size(); i++)
        {
            if (i < (n - 1))
            {
                if (vec[i] == 1 && vec[i + 1] == 1)
                {
                    vec[i] = -1;
                    vec[i + 1] = -1;
                    if (sum(vec) == 0)
                    {
                        cout << "YES" << "\n";
                        done = true;
                        break;
                    }
                }
            }
        }
    }

    if (total < 0)
    {
        for (int i = 0; i < vec.size(); i++)
        {
            if (i < (n - 1))
            {
                if (vec[i] == -1 && vec[i + 1] == -1)
                {
                    vec[i] = 1;
                    vec[i + 1] = 1;
                    if (sum(vec) == 0)
                    {
                        cout << "YES" << "\n";
                        done = true;
                        break;
                    }
                }
            }
        }
    }

    if (!done)
        cout << "NO" << "\n";
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

#ifndef ONLINE_JUDGE
    ifstream in("input.txt");
    if (in.good())
    {
        (void)freopen("input.txt", "r", stdin);
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