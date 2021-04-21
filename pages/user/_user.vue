<template>
  <v-container class="pt-10">
    <v-row class="my-10">
      <img
        class="mx-6"
        width="80"
        src="https://brainbox.pasteur.fr/img/brainbox-logo-small_noFont.svg"
      />
      <h1 class="my-auto">{{ slug }}</h1>
    </v-row>

    <v-row>
      <v-col sm="12" lg="2">
        <v-row>
          <v-col>
            <img
              class="mx-2"
              width="200"
              src="https://avatars.githubusercontent.com/u/16289605?v=4"
            />
          </v-col>

          <v-col class="mx-8">
            <div class="text-center">
              <p>nassimskysoft</p>
              <p>Friday 5 Mar 2021, 08:55</p>
              <p>MRI Files</p>
              <p>Atlas Files</p>
              <p>1 Projects</p>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col sm="12" lg="10">
        <div class="mx-10">
          <v-tabs class="mb-10">
            <v-tab @click="selectTab('PROJECT')">Projects</v-tab>
            <v-tab @click="selectTab('MRI')">MRI Files</v-tab>
            <v-tab @click="selectTab('ATLAS')">Atlas files</v-tab>
          </v-tabs>
          <div v-if="tab == 'PROJECT'">
            procject
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Name
                    </th>
                    <th class="text-left">
                      files
                    </th>
                    <th class="text-left">
                      Collaborators
                    </th>
                    <th class="text-left">
                      Owner
                    </th>
                    <th class="text-left">
                      Last modified
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in projects" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.files }}</td>
                    <td>{{ item.collaborators }}</td>
                    <td>{{ item.owner }}</td>
                    <td>{{ item.lastModified }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
          <div v-if="tab == 'MRI'">
            MRI
          </div>
          <div v-if="tab == 'ATLAS'">
            ATLAS
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: "PROJECT",
    projects: [
      {
        name: "test",
        files: 1,
        collaborators: 3,
        owner: "nassimskysoft",
        lastModified: "5 mars 2021, 10:36"
      }
    ]
  }),
  async asyncData({ params }) {
    const slug = params.user; // En appelant /abc, le slug sera "abc".
    console.log("slug = ", slug);
    return {
      slug
    };
  },
  methods: {
    selectTab(tab) {
      this.tab = tab;
      console.log(tab);
    }
  }
};
</script>

<style></style>
