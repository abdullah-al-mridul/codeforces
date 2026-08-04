// https://excalidraw.com/#json=4sX0u9szxfffZ28hTlmZM,IGXyF-xLzLyZSsu2nTEB9Q

#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int n;
    cin >> n;

    string str = to_string(n);

    cout << stoi(string(1, str[0])) + stoi(string(1, str[1])) << "\n";
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