//

#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int n, x;
    cin >> n >> x;

    vector<int> a(n + 1);
    a[0] = 0;
    for (int i = 1; i < n + 1; i++)
    {
        cin >> a[i];
    }

    int first_one_idx = 0, last_one_idx = 0;

    for (int i = 1; i < n + 1; i++)
    {
        if (a[i] == 1 && first_one_idx == 0)
        {
            first_one_idx = i;
        }
        if (a[i] == 1)
        {
            last_one_idx = i;
        }
    }

    if (abs(first_one_idx - last_one_idx) + 1 > x)
    {
        cout << "NO" << "\n";
        return;
    }

    cout << "YES" << "\n";
}

int main()
{
    // auto start = chrono::high_resolution_clock::now();

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

    // auto stop = chrono::high_resolution_clock::now();

    // auto duration = chrono::duration_cast<chrono::milliseconds>(stop - start);

    // cout << "\nExecution Time: " << duration.count() << " ms" << endl;

    return 0;
}