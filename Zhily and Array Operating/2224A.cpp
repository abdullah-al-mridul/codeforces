// https://excalidraw.com/#json=ypMUsjvzuM5iQ8qDQMNHj,bnZhz4SJEIUXrZqd82o1dQ

#include <bits/stdc++.h>
using namespace std;

void solve()
{
    long long n;

    cin >> n;

    vector<long long int> numbers(n);

    for (int i = 0; i < n; i++)
    {
        cin >> numbers[i];
    }

    int last_great_idx = 0;

    for (int i = numbers.size() - 1; i >= 0; i--)
    {
        if (numbers[i] > 0)
        {
            last_great_idx = i;
            break;
        }
    };

    for (int i = last_great_idx; i >= 0; i--)
    {
        if (i > 0)
        {
            if (numbers[i] + numbers[i - 1] > numbers[i - 1])
            {
                numbers[i - 1] = numbers[i] + numbers[i - 1];
            }
        }
    };

    long long int k = 0;

    for (int i = 0; i < n; i++)
    {
        if (numbers[i] > 0)
            k++;
    }

    cout << k << "\n";
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