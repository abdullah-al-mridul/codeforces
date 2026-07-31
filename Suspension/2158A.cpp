// https://excalidraw.com/#json=bX2dLLV_RV9numxolSIew,zPdNooYidQCofme2gQNPew

#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int n, y, r;
    cin >> n >> y >> r;

    int ans = (ceil(y / 2) + r);

    cout << ((ans > n) ? n : ans) << "\n";
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