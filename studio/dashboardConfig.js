export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ecedf259927363defc2c0b',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-prs6jdog',
                  apiId: 'd6c840ec-4604-43a6-8acb-d0e399524549'
                },
                {
                  buildHookId: '60ecedf3db098261a8dc0014',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-rr6aazew',
                  apiId: '6ebc6924-b8c6-483b-9815-6464193ca08e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jdeboi/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-rr6aazew.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
