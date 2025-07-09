class Main {
    static class DSU {
        int parent[], rank[],size[];

        public DSU(int n) {
            parent = new int[n + 1];
            rank = new int[n + 1];
            size = new int[n + 1];
            for (int i = 0; i <= n; i++) {
                parent[i] = i; // ✅ fix here
                rank[i] = 0;
                size[i]=1;
            }
        }

        public int findParent(int node) {
            if (node == parent[node]) return node;
            return parent[node] = findParent(parent[node]); // ✅ path compression
        }

        public void unionbyRank(int u, int v) {
            int pu = findParent(u);
            int pv = findParent(v);
            if (pu == pv) return;

            // unionbyRank by rank
            if (rank[pu] < rank[pv]) {
                parent[pu] = pv;
            } else if (rank[pv] < rank[pu]) {
                parent[pv] = pu;
            } else {
                parent[pu] = pv;
                rank[pv]++;
            }
        }
        public void unionbySize(int u, int v) {
            int pu = findParent(u);
            int pv = findParent(v);
            if (pu == pv) return;

            // unionbySize
            if (size[pu] < size[pv]) {
                parent[pu] = pv;
                size[pv]+=size[pu];

            } 
            else{
                parent[pv] = pu;
                  size[pu]+=size[pv];

            } 
        }
    }

    public static void main(String[] args) {
        DSU ds = new DSU(7);
        ds.unionbyRank(1, 2);
        ds.unionbyRank(2, 3);
        ds.unionbyRank(3, 4);
        ds.unionbyRank(4, 5);
        ds.unionbyRank(5, 6);
        ds.unionbyRank(6, 7);

        DSU ds2 = new DSU(7);
        ds2.unionbySize(1, 2);
        ds2.unionbySize(2, 3);
        ds2.unionbySize(3, 4);
        ds2.unionbySize(4, 5);
        ds2.unionbySize(5, 6);
        ds2.unionbySize(6, 7);

        if (ds2.findParent(3) == ds2.findParent(4)) {
            System.out.println("Same"); // ✅ This will now print correctly
        } else {
            System.out.println("Different");
        }
    }
}
