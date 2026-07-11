#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int n;
    cin >> n;

    vector<int> p(n);
    for (int i = 0; i < n; i++)
    {
        cin >> p[i];
    }

    if (p.size() < 2)
    {
        cout << 1 << '\n';
        return;
    };

    vector<int> r(n, 2);

    cout << r[0];
    for (int i = 1; i < r.size(); i++)
    {
        cout << " " << r[i];
    }

    cout << "\n";
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }

    return 0;
}