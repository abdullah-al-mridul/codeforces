// https://excalidraw.com/#json=AuaiXjp0Zp5WqewfK67UF,6yQR_eBo104WR0gVCZTVoQ

#include <bits/stdc++.h>
#include <chrono>
using namespace std;

long long int sum_of_digits(long long x)
{
    string str = to_string(x);

    long long int sum = 0;

    for (char c : str)
    {
        sum += c - '0';
    }

    return sum;
}

void solve()
{
    long long int n;
    cin >> n;

    if (n % 9 == 0)
    {
        int check = 0;
        while (true)
        {
            long long val = n + check;
            long long x = val - sum_of_digits(val);

            check++;

            if (x == n)
            {
                cout << 10 << "\n";
                break;
            }

            if (check > 999)
            {
                cout << 0 << "\n";
                break;
            }
        }
    }
    else
    {
        cout << 0 << "\n";
    }
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

    auto stop = chrono::high_resolution_clock::now();

    // auto duration = chrono::duration_cast<chrono::milliseconds>(stop - start);

    // cout << "\nExecution Time: " << duration.count() << " ms" << endl;

    return 0;
}