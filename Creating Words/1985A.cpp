#include <bits/stdc++.h>
using namespace std;

void solve()
{
    string s_1, s_2;
    cin >> s_1 >> s_2;

    string new_s_1 = s_1;
    string new_s_2 = s_2;
    new_s_1[0] = s_2[0];
    new_s_2[0] = s_1[0];

    cout << new_s_1 << " " << new_s_2 << endl;
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