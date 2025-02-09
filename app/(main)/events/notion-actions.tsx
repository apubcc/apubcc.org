import { Client } from '@notionhq/client'



const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

const databaseId = process.env.NOTION_EVENTS_DATABASE_ID

export async function getNotionEvents() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId!,
      sorts: [
        {
          property: 'Status',
          direction: 'ascending',
        }
      ],
    })

    return response.results.map((page: any) => {
      return {
        id: page.id,
        name: page.properties.Name?.title[0]?.plain_text || '',
        // Date is rich_text type instead of date type
        date: page.properties.Date?.rich_text[0]?.plain_text || '',
        // Link is rich_text type instead of url type
        link: page.properties.Link?.rich_text[0]?.plain_text || '',
        // Adding status and poster in case you need them
        status: page.properties.Status?.status?.name || '',
        image: page.properties.Image?.files[0]?.file?.url || 
                page.properties.Image?.files[0]?.external?.url || '',
      }
    })
  } catch (error) {
    console.error('Error fetching Notion events:', error)
    return []
  }
}