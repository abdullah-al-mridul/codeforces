//

#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int a, b, c;
    cin >> a >> b >> c;

    int min_val = min({a, b, c});
    int max_val = max({a, b, c});
    int mid_val = a + b + c - min_val - max_val;

    int count = 0;

    while (true)
    {
        if (min_val == max_val || mid_val == max_val || min_val == mid_val)
        {
            break;
        }
        count++;

        min_val++;
        max_val--;
    }

    cout << count << "\n";
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