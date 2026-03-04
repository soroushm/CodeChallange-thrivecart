import { useQuery } from '@tanstack/react-query'
import { api } from '../../config'

export const useGetCampaigns = () =>
  useQuery({
    queryKey: ['campaigns'],
    queryFn: () => fetch(`${api.baseURL}/api/${api.version}/campaigns`).then((res) => res.json()),
  })
