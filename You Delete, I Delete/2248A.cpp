// https://excalidraw.com/#json=henslhS6gIlEgBjrLu2LJ,KhHC00SpqIngb_1pFTcDMw

#include <bits/stdc++.h>
using namespace std;

void solve()
{
    string s;
    cin >> s;

    bool oneDone = false;
    bool zeroDone = false;

    for (int i = 0; i < s.length(); i++)
    {
        if (s[i] == '0' && !zeroDone)
        {
            zeroDone = true;
            s.erase(i, 1);
        }
        if (s[i] == '1' && !oneDone)
        {
            oneDone = true;
            s.erase(i, 1);
            i--;
        }
    }

    cout << s << "\n";
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