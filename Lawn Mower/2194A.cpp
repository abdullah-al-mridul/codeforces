// https://excalidraw.com/#json=26oZGvoC45mGtz6IUuCzg,5VyLjIOxp0iFBNBnJbys-A

#include <bits/stdc++.h>
#include <chrono>
using namespace std;

void solve()
{
    long long n;
    long long w;

    cin >> n >> w;

    long long ans = 0;

    if (w == 1)
    {
        cout << 0 << "\n";
        return;
    }

    if (w > n)
    {
        cout << n << "\n";
        return;
    }

    long long d = ceil(n / w);

    cout << (n - d) << "\n";
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