// https://excalidraw.com/#json=pjJD4pDVio882RCujQiQq,2ycBkZ9NDY_GWgxI90YjMA

#include <bits/stdc++.h>
using namespace std;

bool out_of_range_X(vector<int> &x_axis, int &pos)
{
    bool less_find = x_axis[0] <= pos;
    bool great_find = x_axis[x_axis.size() - 1] >= pos;

    if (less_find && great_find)
    {
        return false;
    }
    else
    {
        return true;
    }
}

void solve()
{
    int n, pos;
    cin >> n >> pos;

    vector<int> x_axis(n);

    for (int i = 0; i < n; i++)
    {
        cin >> x_axis[i];
    }

    if (n == 1)
    {
        cout << abs(pos - x_axis[0]) << "\n";
        return;
    }

    if (out_of_range_X(x_axis, pos))
    {
        if (x_axis[0] > pos)
        {
            cout << abs(x_axis[x_axis.size() - 1] - pos) << "\n";
        }

        if (x_axis[x_axis.size() - 1] < pos)
        {
            cout << abs(x_axis[0] - pos) << "\n";
        }

        return;
    }

    int max_side = max(abs(x_axis[0] - pos), abs(x_axis[x_axis.size() - 1] - pos));

    int low_side = min(abs(x_axis[0] - pos), abs(x_axis[x_axis.size() - 1] - pos));

    int ans = low_side * 2 + max_side;

    cout << ans << "\n";
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