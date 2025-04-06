'use client'
import apanel from '@/assets/gifs/apanel.gif'
import BgImageContainer from '@/components/ui/bgImageContainer'
import ItemPanel from '@/components/layout/itemPanel'
import Navigation from '@/components/layout/navigation'
import React from 'react'
import admin from '@/assets/icons/admin.svg'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'

// // GraphQL Queries
// const SEARCH_ORGANIZATIONS = gql`
// 	query SearchOrganization($cond: String) {
// 		searchOrganization(cond: $cond) {
// 			elems {
// 				id
// 				__typename
// 				name
// 			}
// 		}
// 	}
// `

// const SEARCH_VOLONTEERS = gql`
// 	query SearchVolonteer($cond: String) {
// 		searchVolonteer(cond: $cond) {
// 			elems {
// 				id
// 				__typename
// 				nickName
// 				person {
// 					entityId
// 				}
// 			}
// 		}
// 	}
// `

// const SEARCH_PERSONS = gql`
// 	query SearchPerson($cond: String) {
// 		searchPerson(cond: $cond) {
// 			elems {
// 				id
// 				__typename
// 				birthDate
// 				firstName
// 				lastName
// 			}
// 		}
// 	}
// `

// const SEARCH_EVENTS = gql`
// 	query SearchEvent($cond: String) {
// 		searchEvent(cond: $cond) {
// 			elems {
// 				id
// 				__typename
// 				description
// 				endDateTime
// 				startDateTime
// 				statusForX {
// 					code
// 					reason
// 				}
// 				organization {
// 					id
// 				}
// 			}
// 		}
// 	}
// `

// const SEARCH_VOLONTEER_EVENT_REQUESTS = gql`
// 	query SearchVolonteerEventRequest($cond: String) {
// 		searchVolonteerEventRequest(cond: $cond) {
// 			elems {
// 				id
// 				__typename
// 				description
// 				volonteer {
// 					id
// 				}
// 				statusForX {
// 					code
// 					reason
// 				}
// 				event {
// 					entityId
// 				}
// 			}
// 		}
// 	}
// `

// // Update Mutation for Request Approval
// const UPDATE_VOLONTEER_EVENT_REQUEST = gql`
// 	mutation UpdateVolonteerEventRequest($input: _UpdateVolonteerEventRequestInput!) {
// 		packet {
// 			updateVolonteerEventRequest(input: $input) {
// 				id
// 				statusForX {
// 					code
// 					reason
// 				}
// 			}
// 		}
// 	}
// `

export default function AdminPanel() {
	const { isDarkTheme } = useTheme()
	
	// // State for persons data lookup
	// const [personLookup, setPersonLookup] = useState<Record<string, any>>({})
	// const [eventLookup, setEventLookup] = useState<Record<string, any>>({})
	
	// // GraphQL queries with proper error handling
	// const { data: organizationsData, loading: loadingOrgs, error: orgsError } = useQuery(SEARCH_ORGANIZATIONS, {
	// 	variables: { cond: null }
	// })
	
	// const { data: volonteersData, loading: loadingVolonteers, error: volonteersError } = useQuery(SEARCH_VOLONTEERS, {
	// 	variables: { cond: null }
	// })
	
	// const { data: personsData, loading: loadingPersons, error: personsError } = useQuery(SEARCH_PERSONS, {
	// 	variables: { cond: null }
	// })
	
	// const { data: eventsData, loading: loadingEvents, error: eventsError } = useQuery(SEARCH_EVENTS, {
	// 	variables: { cond: null }
	// })
	
	// const { data: requestsData, loading: loadingRequests, error: requestsError } = useQuery(SEARCH_VOLONTEER_EVENT_REQUESTS, {
	// 	variables: { cond: null }
	// })
	
	// // Mutation for approval/rejection
	// const [updateVolonteerEventRequest, { loading: updatingRequest }] = useMutation(UPDATE_VOLONTEER_EVENT_REQUEST)
	
	// // Build lookup tables for related data
	// useEffect(() => {
	// 	if (personsData?.searchPerson?.elems) {
	// 		const lookup: Record<string, any> = {}
	// 		personsData.searchPerson.elems.forEach((person: any) => {
	// 			lookup[person.id] = person
	// 		})
	// 		setPersonLookup(lookup)
	// 	}
	// }, [personsData])
	
	// useEffect(() => {
	// 	if (eventsData?.searchEvent?.elems) {
	// 		const lookup: Record<string, any> = {}
	// 		eventsData.searchEvent.elems.forEach((event: any) => {
	// 			lookup[event.id] = event
	// 		})
	// 		setEventLookup(lookup)
	// 	}
	// }, [eventsData])
	
	// // Check for loading state
	// const isLoading = loadingOrgs || loadingVolonteers || loadingPersons || loadingEvents || loadingRequests
	
	// // Check for errors
	// const hasError = orgsError || volonteersError || personsError || eventsError || requestsError
	
	// // Filter events by status
	// const filterEventsByStatus = (statusCode: string) => {
	// 	if (!eventsData?.searchEvent?.elems) return []
		
	// 	return eventsData.searchEvent.elems
	// 		.filter((event: any) => event.statusForX?.code === statusCode)
	// 		.map((event: any) => ({
	// 			title: event.description || 'Unnamed Event',
	// 			description: event.startDateTime && event.endDateTime
	// 				? `${new Date(event.startDateTime).toLocaleDateString()} - ${new Date(event.endDateTime).toLocaleDateString()}`
	// 				: 'No dates specified',
	// 			name: 'Event',
	// 			nickname: event.id,
	// 		}))
	// }
	
	// // Handler functions for approval/rejection
	// const handleApproveRequest = async (requestId: string) => {
	// 	try {
	// 		await updateVolonteerEventRequest({
	// 			variables: {
	// 				input: {
	// 					id: requestId,
	// 					statusForX: {
	// 						code: 'APPROVED',
	// 						reason: 'Approved by admin'
	// 					}
	// 				}
	// 			},
	// 			refetchQueries: [{
	// 				query: SEARCH_VOLONTEER_EVENT_REQUESTS,
	// 				variables: { cond: null }
	// 			}]
	// 		})
	// 	} catch (error) {
	// 		console.error('Error approving request:', error)
	// 	}
	// }
	
	// const handleRejectRequest = async (requestId: string) => {
	// 	try {
	// 		await updateVolonteerEventRequest({
	// 			variables: {
	// 				input: {
	// 					id: requestId,
	// 					statusForX: {
	// 						code: 'REJECTED',
	// 						reason: 'Rejected by admin'
	// 					}
	// 				}
	// 			},
	// 			refetchQueries: [{
	// 				query: SEARCH_VOLONTEER_EVENT_REQUESTS,
	// 				variables: { cond: null }
	// 			}]
	// 		})
	// 	} catch (error) {
	// 		console.error('Error rejecting request:', error)
	// 	}
	// }
	
	// // Prepare volonteer list
	// const getVolonteerItems = () => {
	// 	if (!volonteersData?.searchVolonteer?.elems) return []
		
	// 	return volonteersData.searchVolonteer.elems.map((volonteer: any) => {
	// 		const person = personLookup[volonteer.person?.entityId]
	// 		return {
	// 			title: `Volunteer ${volonteer.id}`,
	// 			description: volonteer.description || 'Volunteer',
	// 			name: person ? `${person.firstName} ${person.lastName}` : 'Unknown',
	// 			nickname: volonteer.nickName || '',
	// 		}
	// 	})
	// }
	
	// // Prepare organization list
	// const getOrganizationItems = () => {
	// 	if (!organizationsData?.searchOrganization?.elems) return []
		
	// 	return organizationsData.searchOrganization.elems.map((org: any) => ({
	// 		title: org.name || 'Unnamed Organization',
	// 		description: 'Organization',
	// 		name: org.name,
	// 		nickname: org.id,
	// 	}))
	// }

	// // Prepare pending requests
	// const getPendingRequests = () => {
	// 	if (!requestsData?.searchVolonteerEventRequest?.elems) return []
		
	// 	return requestsData.searchVolonteerEventRequest.elems
	// 		.filter((request: any) => request.statusForX?.code === 'PENDING')
	// 		.map((request: any) => {
	// 			const volonteer = volonteersData?.searchVolonteer?.elems?.find(
	// 				(v: any) => v.id === request.volonteer?.id
	// 			)
	// 			const event = eventLookup[request.event?.entityId]
				
	// 			return {
	// 				title: event?.description || 'Unknown Event',
	// 				description: request.description || 'Request for participation',
	// 				name: volonteer?.nickName || 'Unknown',
	// 				nickname: request.id,
	// 			}
	// 		})
	// }
	
	// // Prepare current requests for approval component
	// const getCurrentRequests = () => {
	// 	if (!requestsData?.searchVolonteerEventRequest?.elems) return []
		
	// 	return requestsData.searchVolonteerEventRequest.elems
	// 		.filter((request: any) => request.statusForX?.code === 'PENDING')
	// 		.map((request: any) => {
	// 			const volonteer = volonteersData?.searchVolonteer?.elems?.find(
	// 				(v: any) => v.id === request.volonteer?.id
	// 			)
	// 			const event = eventLookup[request.event?.entityId]
				
	// 			return {
	// 				id: request.id,
	// 				title: event?.description || 'Unknown Event',
	// 				description: request.description || 'Request for participation',
	// 				author: volonteer?.nickName || 'Unknown',
	// 			}
	// 		})
	// }

	// // If there was an error fetching data
	// if (hasError) {
	// 	return (
	// 		<div className="flex flex-col items-center justify-center h-screen p-6 text-white bg-red-800">
	// 			<h1 className="text-2xl font-bold mb-4">Error Loading Data</h1>
	// 			<p className="mb-4">There was a problem loading the data:</p>
	// 			<pre className="bg-red-900 p-4 rounded max-w-full overflow-auto">
	// 				{(orgsError || volonteersError || personsError || eventsError || requestsError)?.message}
	// 			</pre>
	// 			<p className="mt-4">Please check your network connection or refresh the page.</p>
	// 		</div>
	// 	)
	// }

	// // If still loading data
	// if (isLoading) {
	// 	return (
	// 		<div className="flex items-center justify-center h-screen">
	// 			<Spin size="large" />
	// 		</div>
	// 	)
	// }

	const data = [
		{
			title: 'Software Engineer',
			description: 'Builds and maintains software applications',
			name: 'Alex Johnson',
			nickname: 'AJ',
		},
		{
			title: 'Product Manager',
			description: 'Oversees product development lifecycle',
			name: 'Samantha Lee',
			nickname: 'Sam',
		},
		{
			title: 'Data Scientist',
			description: 'Analyzes and interprets complex data',
			name: 'Marcus Chen',
			nickname: 'Marc',
		},
		{
			title: 'UX Designer',
			description: 'Creates user-centered design solutions',
			name: 'Zoe Garcia',
			nickname: 'Z',
		},
		{
			title: 'Marketing Specialist',
			description: 'Develops marketing strategies and campaigns',
			name: 'Ethan Williams',
			nickname: 'E-Dub',
		},
		{
			title: 'Financial Analyst',
			description: 'Evaluates financial data and investment opportunities',
			name: 'Priya Patel',
			nickname: 'Pri',
		},
		{
			title: 'HR Manager',
			description: 'Handles employee relations and recruitment',
			name: 'Thomas Rodriguez',
			nickname: 'Tom',
		},
		{
			title: 'Operations Director',
			description: 'Oversees day-to-day business operations',
			name: 'Olivia Kim',
			nickname: 'Liv',
		},
		{
			title: 'Content Writer',
			description: 'Creates engaging content for various platforms',
			name: 'James Wilson',
			nickname: 'Jamie',
		},
		{
			title: 'Sales Representative',
			description: 'Builds client relationships and drives revenue',
			name: 'Natasha Singh',
			nickname: 'Tash',
		},
	]

	return (
		<BgImageContainer
			image={apanel}
			className='rounded-none bg-transparent p-5 h-screen'
			imageClassName='rounded-none bg-[none]'
		>
			<div className='max-h-screen w-full h-full grid justify-stretch items-stretch overflow-hidden'>
				<div
					className={`${
						isDarkTheme ? 'bg-[#43434375] border-[#3E4147]' : 'bg-[#6B6B6B75] border-[#D8DBDF]'
					} rounded-3xl border-2 pb-12 pt-6 grid gap-4 grid-rows-[fit-content_fit-content_auto] justify-center`}
				>
					<Navigation />
					<div className='flex justify-center items-center gap-2'>
						<p className='text-3xl'>Панель администратора</p>
						<Image
							src={admin}
							alt='admin.svg'
							width={30}
							height={30}
						/>
					</div>
					<div className='grid grid-cols-3 pt-0 gap-4'>
						<ItemPanel
							title='Организаторы'
							organizers={data.slice(0, 4)}
						/>
						<ItemPanel
							title='На согласовании'
							organizers={data.slice(5, 7)}
						/>
						<ItemPanel
							title='Волонтёры'
							organizers={data.slice(7, 9)}
						/>
						<ItemPanel
							title='Запланировано'
							organizers={data.slice(0, 4)}
						/>
						<ItemPanel
							title='Активно'
							organizers={data.slice(7, 9)}
						/>
						<ItemPanel
							title='Выполнено'
							organizers={data.slice(5, 7)}
						/>
					</div>
				</div>
			</div>
		</BgImageContainer>
	)
}
