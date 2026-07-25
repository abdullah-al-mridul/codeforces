// https://excalidraw.com/#json=ZCcncxGZMAGDcWa0q0Wkc,tCjAnnT3VllSPY5E_yX3vg

#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int m;

    cin >> m;

    vector<int> r(m);

    for (int i = 0; i < m; i++)
    {
        cin >> r[i];
    }

    int max_element = 0;
    int max_idx = 0;

    for (int i = 0; i < m; i++)
    {
        if (r[i] > max_element)
        {
            max_element = r[i];
            max_idx = i;
        }
    }

    int temp = r[0];

    r[0] = max_element;
    r[max_idx] = temp;

    for (int i = 0; i < m; i++)
    {
        cout << r[i] << " ";
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