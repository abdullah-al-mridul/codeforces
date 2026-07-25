// https://excalidraw.com/#json=m2uy50jaBLrGbt_l0tpfT,PE_F4e4bkUOZ5BrCIX-M5A

#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int n;

    cin >> n;

    vector<int> p(n);

    int add_val = 1;
    int sub_val = n;

    bool swap = false;

    for (int i = n - 1; i >= 0; i--)
    {
        if (i == n - 1)
        {
            p[i] = 1;
            p[i - 1] = n;
            i--;
            swap = true;
            continue;
        }

        if (swap)
        {
            p[i] = add_val + 1;
            add_val = p[i];
            swap = false;
            continue;
        }

        if (!swap)
        {
            p[i] = sub_val - 1;
            sub_val = p[i];
            swap = true;
        }
    }

    for (int num : p)
    {
        cout << num << " ";
    }

    cout << "\n";
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