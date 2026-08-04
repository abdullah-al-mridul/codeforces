#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int n;
    cin >> n;
    string s;
    cin >> s;

    int initial_len = 1;
    for (int i = 0; i < n - 1; i++)
    {
        if (s[i] != s[i + 1])
        {
            initial_len++;
        }
    }

    int max_delta = 0;
    for (int i = 1; i <= n - 2; i++)
    {
        int old_cost = (s[i - 1] != s[i] ? 1 : 0) + (s[i] != s[i + 1] ? 1 : 0);
        int new_cost = (s[i - 1] != s[i + 1] ? 1 : 0);
        int delta = old_cost - new_cost;

        max_delta = max(max_delta, delta);
    }

    cout << initial_len - max_delta << "\n";
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