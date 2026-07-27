// https://excalidraw.com/#json=Z63eYCpC664eBLu6gi0n8,IzqJcC4VWASCOfwaZuq2LA

#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int n;

    cin >> n;

    vector<int> cards(n);
    vector<string> cards_str(n);

    for (int i = 0; i < n; i++)
    {
        cin >> cards[i];
    }

    for (int i = 1; i < n + 1; i++)
    {
        string suffix = i % 2 == 0 ? "b" : "r";
        cards_str[i - 1] = to_string(cards[i - 1]) + suffix;
    }

    sort(cards_str.begin(), cards_str.end(), [](const string &a, const string &b)
         { return stoi(a) < stoi(b); });

    for (int i = 0; i < n; i++)
    {
        if (i < n - 1)
        {

            if (cards_str[i].back() == cards_str[i + 1].back())
            {
                cout << "NO\n";
                return;
            }
        }
    }
    cout << "YES\n";
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