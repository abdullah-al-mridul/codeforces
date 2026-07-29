// https://excalidraw.com/#json=D-jmulA2fD6EhQmSzlStn,tWTHoqsorC4lA7x6PureTg

#include <bits/stdc++.h>
using namespace std;

void solve()
{
    int n;
    cin >> n;
    vector<int> numbers(n);
    for (int i = 0; i < n; i++)
    {
        cin >> numbers[i];
    }

    int count = 0;
    bool running = true;

    while (running)
    {
        bool found = false;
        for (int i = 0; i < numbers.size(); i++)
        {
            for (int j = i; j < numbers.size(); j++)
            {
                if (numbers[i] > numbers[j])
                {
                    count++;
                    numbers.erase(numbers.begin() + j);
                    found = true;
                }
            }
        }
        if (!found)
            break;
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