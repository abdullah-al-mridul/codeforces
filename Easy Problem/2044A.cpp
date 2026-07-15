#include <iostream>
#include <fstream>

using namespace std;

void solve()
{
    long long n;
    cin >> n;

    cout << (n - 1) << "\n";
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    ifstream infile("input.txt");
    if (infile.good())
    {
        freopen("input.txt", "r", stdin);
    }

    int t;
    if (cin >> t)
    {
        while (t--)
        {
            solve();
        }
    }
    return 0;
}