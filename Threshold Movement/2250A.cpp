#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int n;
    cin >> n;

    vector<long long> w(n + 1);
    for (int i = 1; i <= n; i++)
        cin >> w[i];

    if (n % 2 != 0)
    {
        cout << "NO\n";
        return;
    }

    long long L = 1;
    long long R = 2000000000LL;

    for (int i = 1; i <= n; i++)
    {
        if (i % 2 == 1)
        {
            R = min(R, w[i] - 1);
        }
        else
        {
            L = max(L, w[i] + 1);
        }
    }

    if (L <= R)
        cout << "YES\n";
    else
        cout << "NO\n";
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

#ifndef ONLINE_JUDGE
    if (freopen("input.txt", "r", stdin) == NULL)
    {
        cerr << "Error: input.txt not found!" << endl;
    }
#endif

    int t;
    cin >> t;

    while (t--)
        solve();
}