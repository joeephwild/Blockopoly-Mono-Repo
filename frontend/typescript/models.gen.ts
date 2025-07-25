import type { SchemaType as ISchemaType } from "@dojoengine/sdk";

import { CairoCustomEnum, BigNumberish } from 'starknet';

// Type definition for `dojo_starter::model::game_model::Game` struct
export interface Game {
	id: BigNumberish;
	created_by: BigNumberish;
	is_initialised: boolean;
	status: GameStatusEnum;
	mode: GameTypeEnum;
	ready_to_start: boolean;
	winner: string;
	next_player: string;
	number_of_players: BigNumberish;
	rolls_count: BigNumberish;
	rolls_times: BigNumberish;
	dice_face: BigNumberish;
	player_chance: string;
	has_thrown_dice: boolean;
	game_condition: Array<BigNumberish>;
	hat: BigNumberish;
	car: BigNumberish;
	dog: BigNumberish;
	thimble: BigNumberish;
	iron: BigNumberish;
	battleship: BigNumberish;
	boot: BigNumberish;
	wheelbarrow: BigNumberish;
	player_hat: BigNumberish;
	player_car: BigNumberish;
	player_dog: BigNumberish;
	player_thimble: BigNumberish;
	player_iron: BigNumberish;
	player_battleship: BigNumberish;
	player_boot: BigNumberish;
	player_wheelbarrow: BigNumberish;
	players_joined: BigNumberish;
	game_players: Array<string>;
	chance: Array<string>;
	community: Array<string>;
}

// Type definition for `dojo_starter::model::game_model::GameBalance` struct
export interface GameBalance {
	playe_address: string;
	game_id: BigNumberish;
	balance: BigNumberish;
}

// Type definition for `dojo_starter::model::game_model::GameBalanceValue` struct
export interface GameBalanceValue {
	balance: BigNumberish;
}

// Type definition for `dojo_starter::model::game_model::GameCounter` struct
export interface GameCounter {
	id: BigNumberish;
	current_val: BigNumberish;
}

// Type definition for `dojo_starter::model::game_model::GameCounterValue` struct
export interface GameCounterValue {
	current_val: BigNumberish;
}

// Type definition for `dojo_starter::model::game_model::GameValue` struct
export interface GameValue {
	created_by: BigNumberish;
	is_initialised: boolean;
	status: GameStatusEnum;
	mode: GameTypeEnum;
	ready_to_start: boolean;
	winner: string;
	next_player: string;
	number_of_players: BigNumberish;
	rolls_count: BigNumberish;
	rolls_times: BigNumberish;
	dice_face: BigNumberish;
	player_chance: string;
	has_thrown_dice: boolean;
	game_condition: Array<BigNumberish>;
	hat: BigNumberish;
	car: BigNumberish;
	dog: BigNumberish;
	thimble: BigNumberish;
	iron: BigNumberish;
	battleship: BigNumberish;
	boot: BigNumberish;
	wheelbarrow: BigNumberish;
	player_hat: BigNumberish;
	player_car: BigNumberish;
	player_dog: BigNumberish;
	player_thimble: BigNumberish;
	player_iron: BigNumberish;
	player_battleship: BigNumberish;
	player_boot: BigNumberish;
	player_wheelbarrow: BigNumberish;
	players_joined: BigNumberish;
	game_players: Array<string>;
	chance: Array<string>;
	community: Array<string>;
}

// Type definition for `dojo_starter::model::game_player_model::GamePlayer` struct
export interface GamePlayer {
	address: string;
	game_id: BigNumberish;
	player_symbol: PlayerSymbolEnum;
	is_next: boolean;
	dice_rolled: BigNumberish;
	position: BigNumberish;
	jailed: boolean;
	balance: BigNumberish;
	properties_owned: Array<BigNumberish>;
	chance_jail_card: boolean;
	comm_free_card: boolean;
	total_houses_owned: BigNumberish;
	total_hotels_owned: BigNumberish;
	no_of_utilities: BigNumberish;
	no_of_railways: BigNumberish;
	no_section1: BigNumberish;
	no_section2: BigNumberish;
	no_section3: BigNumberish;
	no_section4: BigNumberish;
	no_section5: BigNumberish;
	no_section6: BigNumberish;
	no_section7: BigNumberish;
	no_section8: BigNumberish;
	is_bankrupt: boolean;
	is_active: boolean;
	jail_turns: BigNumberish;
	strikes: BigNumberish;
}

// Type definition for `dojo_starter::model::game_player_model::GamePlayerValue` struct
export interface GamePlayerValue {
	player_symbol: PlayerSymbolEnum;
	is_next: boolean;
	dice_rolled: BigNumberish;
	position: BigNumberish;
	jailed: boolean;
	balance: BigNumberish;
	properties_owned: Array<BigNumberish>;
	chance_jail_card: boolean;
	comm_free_card: boolean;
	total_houses_owned: BigNumberish;
	total_hotels_owned: BigNumberish;
	no_of_utilities: BigNumberish;
	no_of_railways: BigNumberish;
	no_section1: BigNumberish;
	no_section2: BigNumberish;
	no_section3: BigNumberish;
	no_section4: BigNumberish;
	no_section5: BigNumberish;
	no_section6: BigNumberish;
	no_section7: BigNumberish;
	no_section8: BigNumberish;
	is_bankrupt: boolean;
	is_active: boolean;
	jail_turns: BigNumberish;
	strikes: BigNumberish;
}

// Type definition for `dojo_starter::model::player_model::AddressToUsername` struct
export interface AddressToUsername {
	address: string;
	username: BigNumberish;
}

// Type definition for `dojo_starter::model::player_model::AddressToUsernameValue` struct
export interface AddressToUsernameValue {
	username: BigNumberish;
}

// Type definition for `dojo_starter::model::player_model::IsRegistered` struct
export interface IsRegistered {
	address: string;
	is_registered: boolean;
}

// Type definition for `dojo_starter::model::player_model::IsRegisteredValue` struct
export interface IsRegisteredValue {
	is_registered: boolean;
}

// Type definition for `dojo_starter::model::player_model::Player` struct
export interface Player {
	address: string;
	username: BigNumberish;
	is_registered: boolean;
	balance: BigNumberish;
	total_games_played: BigNumberish;
	total_games_completed: BigNumberish;
	total_games_won: BigNumberish;
	created_at: BigNumberish;
	updated_at: BigNumberish;
}

// Type definition for `dojo_starter::model::player_model::PlayerValue` struct
export interface PlayerValue {
	username: BigNumberish;
	is_registered: boolean;
	balance: BigNumberish;
	total_games_played: BigNumberish;
	total_games_completed: BigNumberish;
	total_games_won: BigNumberish;
	created_at: BigNumberish;
	updated_at: BigNumberish;
}

// Type definition for `dojo_starter::model::player_model::UsernameToAddress` struct
export interface UsernameToAddress {
	username: BigNumberish;
	address: string;
}

// Type definition for `dojo_starter::model::player_model::UsernameToAddressValue` struct
export interface UsernameToAddressValue {
	address: string;
}

// Type definition for `dojo_starter::model::property_model::IdToProperty` struct
export interface IdToProperty {
	id: BigNumberish;
	name: BigNumberish;
}

// Type definition for `dojo_starter::model::property_model::IdToPropertyValue` struct
export interface IdToPropertyValue {
	name: BigNumberish;
}

// Type definition for `dojo_starter::model::property_model::Property` struct
export interface Property {
	id: BigNumberish;
	game_id: BigNumberish;
	name: BigNumberish;
	owner: string;
	property_type: PropertyTypeEnum;
	cost_of_property: BigNumberish;
	property_level: BigNumberish;
	rent_site_only: BigNumberish;
	rent_one_house: BigNumberish;
	rent_two_houses: BigNumberish;
	rent_three_houses: BigNumberish;
	rent_four_houses: BigNumberish;
	cost_of_house: BigNumberish;
	rent_hotel: BigNumberish;
	is_mortgaged: boolean;
	group_id: BigNumberish;
	for_sale: boolean;
	development: BigNumberish;
}

// Type definition for `dojo_starter::model::property_model::PropertyToId` struct
export interface PropertyToId {
	name: BigNumberish;
	id: BigNumberish;
}

// Type definition for `dojo_starter::model::property_model::PropertyToIdValue` struct
export interface PropertyToIdValue {
	id: BigNumberish;
}

// Type definition for `dojo_starter::model::property_model::PropertyValue` struct
export interface PropertyValue {
	name: BigNumberish;
	owner: string;
	property_type: PropertyTypeEnum;
	cost_of_property: BigNumberish;
	property_level: BigNumberish;
	rent_site_only: BigNumberish;
	rent_one_house: BigNumberish;
	rent_two_houses: BigNumberish;
	rent_three_houses: BigNumberish;
	rent_four_houses: BigNumberish;
	cost_of_house: BigNumberish;
	rent_hotel: BigNumberish;
	is_mortgaged: boolean;
	group_id: BigNumberish;
	for_sale: boolean;
	development: BigNumberish;
}

// Type definition for `dojo_starter::model::property_model::TradeCounter` struct
export interface TradeCounter {
	id: BigNumberish;
	current_val: BigNumberish;
}

// Type definition for `dojo_starter::model::property_model::TradeCounterValue` struct
export interface TradeCounterValue {
	current_val: BigNumberish;
}

// Type definition for `dojo_starter::model::property_model::TradeOfferDetails` struct
export interface TradeOfferDetails {
	id: BigNumberish;
	from: string;
	to: string;
	game_id: BigNumberish;
	offered_property_ids: Array<BigNumberish>;
	requested_property_ids: Array<BigNumberish>;
	cash_offer: BigNumberish;
	cash_request: BigNumberish;
	trade_type: TradeOfferEnum;
	status: TradeStatusEnum;
	is_countered: boolean;
	approve_counter: boolean;
}

// Type definition for `dojo_starter::model::property_model::TradeOfferDetailsValue` struct
export interface TradeOfferDetailsValue {
	from: string;
	to: string;
	game_id: BigNumberish;
	offered_property_ids: Array<BigNumberish>;
	requested_property_ids: Array<BigNumberish>;
	cash_offer: BigNumberish;
	cash_request: BigNumberish;
	trade_type: TradeOfferEnum;
	status: TradeStatusEnum;
	is_countered: boolean;
	approve_counter: boolean;
}

// Type definition for `dojo_starter::systems::actions::actions::GameCreated` struct
export interface GameCreated {
	game_id: BigNumberish;
	timestamp: BigNumberish;
}

// Type definition for `dojo_starter::systems::actions::actions::GameCreatedValue` struct
export interface GameCreatedValue {
	timestamp: BigNumberish;
}

// Type definition for `dojo_starter::systems::actions::actions::GameStarted` struct
export interface GameStarted {
	game_id: BigNumberish;
	timestamp: BigNumberish;
}

// Type definition for `dojo_starter::systems::actions::actions::GameStartedValue` struct
export interface GameStartedValue {
	timestamp: BigNumberish;
}

// Type definition for `dojo_starter::systems::actions::actions::PlayerCreated` struct
export interface PlayerCreated {
	username: BigNumberish;
	player: string;
	timestamp: BigNumberish;
}

// Type definition for `dojo_starter::systems::actions::actions::PlayerCreatedValue` struct
export interface PlayerCreatedValue {
	timestamp: BigNumberish;
}

// Type definition for `dojo_starter::systems::actions::actions::PlayerJoined` struct
export interface PlayerJoined {
	game_id: BigNumberish;
	username: BigNumberish;
	timestamp: BigNumberish;
}

// Type definition for `dojo_starter::systems::actions::actions::PlayerJoinedValue` struct
export interface PlayerJoinedValue {
	timestamp: BigNumberish;
}

// Type definition for `dojo_starter::model::game_model::GameStatus` enum
export const gameStatus = [
	'Pending',
	'Ongoing',
	'Ended',
] as const;
export type GameStatus = { [key in typeof gameStatus[number]]: string };
export type GameStatusEnum = CairoCustomEnum;

// Type definition for `dojo_starter::model::game_model::GameType` enum
export const gameType = [
	'PublicGame',
	'PrivateGame',
] as const;
export type GameType = { [key in typeof gameType[number]]: string };
export type GameTypeEnum = CairoCustomEnum;

// Type definition for `dojo_starter::model::game_player_model::PlayerSymbol` enum
export const playerSymbol = [
	'Hat',
	'Car',
	'Dog',
	'Thimble',
	'Iron',
	'Battleship',
	'Boot',
	'Wheelbarrow',
] as const;
export type PlayerSymbol = { [key in typeof playerSymbol[number]]: string };
export type PlayerSymbolEnum = CairoCustomEnum;

// Type definition for `dojo_starter::model::property_model::PropertyType` enum
export const propertyType = [
	'Go',
	'Chance',
	'CommunityChest',
	'Jail',
	'Utility',
	'RailRoad',
	'Tax',
	'FreeParking',
	'Property',
	'VisitingJail',
] as const;
export type PropertyType = { [key in typeof propertyType[number]]: string };
export type PropertyTypeEnum = CairoCustomEnum;

// Type definition for `dojo_starter::model::property_model::TradeOffer` enum
export const tradeOffer = [
	'PropertyForProperty',
	'PropertyForCash',
	'CashForProperty',
	'CashPlusPropertyForProperty',
	'PropertyForCashPlusProperty',
	'CashForChanceJailCard',
	'CashForCommunityJailCard',
	'CommunityJailCardForCash',
	'ChanceJailCardForCash',
] as const;
export type TradeOffer = { [key in typeof tradeOffer[number]]: string };
export type TradeOfferEnum = CairoCustomEnum;

// Type definition for `dojo_starter::model::property_model::TradeStatus` enum
export const tradeStatus = [
	'Accepted',
	'Rejected',
	'Pending',
	'Countered',
] as const;
export type TradeStatus = { [key in typeof tradeStatus[number]]: string };
export type TradeStatusEnum = CairoCustomEnum;

export interface SchemaType extends ISchemaType {
	dojo_starter: {
		Game: Game,
		GameBalance: GameBalance,
		GameBalanceValue: GameBalanceValue,
		GameCounter: GameCounter,
		GameCounterValue: GameCounterValue,
		GameValue: GameValue,
		GamePlayer: GamePlayer,
		GamePlayerValue: GamePlayerValue,
		AddressToUsername: AddressToUsername,
		AddressToUsernameValue: AddressToUsernameValue,
		IsRegistered: IsRegistered,
		IsRegisteredValue: IsRegisteredValue,
		Player: Player,
		PlayerValue: PlayerValue,
		UsernameToAddress: UsernameToAddress,
		UsernameToAddressValue: UsernameToAddressValue,
		IdToProperty: IdToProperty,
		IdToPropertyValue: IdToPropertyValue,
		Property: Property,
		PropertyToId: PropertyToId,
		PropertyToIdValue: PropertyToIdValue,
		PropertyValue: PropertyValue,
		TradeCounter: TradeCounter,
		TradeCounterValue: TradeCounterValue,
		TradeOfferDetails: TradeOfferDetails,
		TradeOfferDetailsValue: TradeOfferDetailsValue,
		GameCreated: GameCreated,
		GameCreatedValue: GameCreatedValue,
		GameStarted: GameStarted,
		GameStartedValue: GameStartedValue,
		PlayerCreated: PlayerCreated,
		PlayerCreatedValue: PlayerCreatedValue,
		PlayerJoined: PlayerJoined,
		PlayerJoinedValue: PlayerJoinedValue,
	},
}
export const schema: SchemaType = {
	dojo_starter: {
		Game: {
		id: 0,
			created_by: 0,
			is_initialised: false,
		status: new CairoCustomEnum({ 
					Pending: "",
				Ongoing: undefined,
				Ended: undefined, }),
		mode: new CairoCustomEnum({ 
					PublicGame: "",
				PrivateGame: undefined, }),
			ready_to_start: false,
			winner: "",
			next_player: "",
			number_of_players: 0,
		rolls_count: 0,
		rolls_times: 0,
			dice_face: 0,
			player_chance: "",
			has_thrown_dice: false,
			game_condition: [0],
			hat: 0,
			car: 0,
			dog: 0,
			thimble: 0,
			iron: 0,
			battleship: 0,
			boot: 0,
			wheelbarrow: 0,
			player_hat: 0,
			player_car: 0,
			player_dog: 0,
			player_thimble: 0,
			player_iron: 0,
			player_battleship: 0,
			player_boot: 0,
			player_wheelbarrow: 0,
			players_joined: 0,
			game_players: [""],
			chance: [""],
			community: [""],
		},
		GameBalance: {
			playe_address: "",
		game_id: 0,
		balance: 0,
		},
		GameBalanceValue: {
		balance: 0,
		},
		GameCounter: {
			id: 0,
		current_val: 0,
		},
		GameCounterValue: {
		current_val: 0,
		},
		GameValue: {
			created_by: 0,
			is_initialised: false,
		status: new CairoCustomEnum({ 
					Pending: "",
				Ongoing: undefined,
				Ended: undefined, }),
		mode: new CairoCustomEnum({ 
					PublicGame: "",
				PrivateGame: undefined, }),
			ready_to_start: false,
			winner: "",
			next_player: "",
			number_of_players: 0,
		rolls_count: 0,
		rolls_times: 0,
			dice_face: 0,
			player_chance: "",
			has_thrown_dice: false,
			game_condition: [0],
			hat: 0,
			car: 0,
			dog: 0,
			thimble: 0,
			iron: 0,
			battleship: 0,
			boot: 0,
			wheelbarrow: 0,
			player_hat: 0,
			player_car: 0,
			player_dog: 0,
			player_thimble: 0,
			player_iron: 0,
			player_battleship: 0,
			player_boot: 0,
			player_wheelbarrow: 0,
			players_joined: 0,
			game_players: [""],
			chance: [""],
			community: [""],
		},
		GamePlayer: {
			address: "",
		game_id: 0,
		player_symbol: new CairoCustomEnum({ 
					Hat: "",
				Car: undefined,
				Dog: undefined,
				Thimble: undefined,
				Iron: undefined,
				Battleship: undefined,
				Boot: undefined,
				Wheelbarrow: undefined, }),
			is_next: false,
			dice_rolled: 0,
			position: 0,
			jailed: false,
		balance: 0,
			properties_owned: [0],
			chance_jail_card: false,
			comm_free_card: false,
			total_houses_owned: 0,
			total_hotels_owned: 0,
			no_of_utilities: 0,
			no_of_railways: 0,
			no_section1: 0,
			no_section2: 0,
			no_section3: 0,
			no_section4: 0,
			no_section5: 0,
			no_section6: 0,
			no_section7: 0,
			no_section8: 0,
			is_bankrupt: false,
			is_active: false,
			jail_turns: 0,
			strikes: 0,
		},
		GamePlayerValue: {
		player_symbol: new CairoCustomEnum({ 
					Hat: "",
				Car: undefined,
				Dog: undefined,
				Thimble: undefined,
				Iron: undefined,
				Battleship: undefined,
				Boot: undefined,
				Wheelbarrow: undefined, }),
			is_next: false,
			dice_rolled: 0,
			position: 0,
			jailed: false,
		balance: 0,
			properties_owned: [0],
			chance_jail_card: false,
			comm_free_card: false,
			total_houses_owned: 0,
			total_hotels_owned: 0,
			no_of_utilities: 0,
			no_of_railways: 0,
			no_section1: 0,
			no_section2: 0,
			no_section3: 0,
			no_section4: 0,
			no_section5: 0,
			no_section6: 0,
			no_section7: 0,
			no_section8: 0,
			is_bankrupt: false,
			is_active: false,
			jail_turns: 0,
			strikes: 0,
		},
		AddressToUsername: {
			address: "",
			username: 0,
		},
		AddressToUsernameValue: {
			username: 0,
		},
		IsRegistered: {
			address: "",
			is_registered: false,
		},
		IsRegisteredValue: {
			is_registered: false,
		},
		Player: {
			address: "",
			username: 0,
			is_registered: false,
		balance: 0,
		total_games_played: 0,
		total_games_completed: 0,
		total_games_won: 0,
			created_at: 0,
			updated_at: 0,
		},
		PlayerValue: {
			username: 0,
			is_registered: false,
		balance: 0,
		total_games_played: 0,
		total_games_completed: 0,
		total_games_won: 0,
			created_at: 0,
			updated_at: 0,
		},
		UsernameToAddress: {
			username: 0,
			address: "",
		},
		UsernameToAddressValue: {
			address: "",
		},
		IdToProperty: {
			id: 0,
			name: 0,
		},
		IdToPropertyValue: {
			name: 0,
		},
		Property: {
			id: 0,
		game_id: 0,
			name: 0,
			owner: "",
		property_type: new CairoCustomEnum({ 
					Go: "",
				Chance: undefined,
				CommunityChest: undefined,
				Jail: undefined,
				Utility: undefined,
				RailRoad: undefined,
				Tax: undefined,
				FreeParking: undefined,
				Property: undefined,
				VisitingJail: undefined, }),
		cost_of_property: 0,
			property_level: 0,
		rent_site_only: 0,
		rent_one_house: 0,
		rent_two_houses: 0,
		rent_three_houses: 0,
		rent_four_houses: 0,
		cost_of_house: 0,
		rent_hotel: 0,
			is_mortgaged: false,
			group_id: 0,
			for_sale: false,
			development: 0,
		},
		PropertyToId: {
			name: 0,
			id: 0,
		},
		PropertyToIdValue: {
			id: 0,
		},
		PropertyValue: {
			name: 0,
			owner: "",
		property_type: new CairoCustomEnum({ 
					Go: "",
				Chance: undefined,
				CommunityChest: undefined,
				Jail: undefined,
				Utility: undefined,
				RailRoad: undefined,
				Tax: undefined,
				FreeParking: undefined,
				Property: undefined,
				VisitingJail: undefined, }),
		cost_of_property: 0,
			property_level: 0,
		rent_site_only: 0,
		rent_one_house: 0,
		rent_two_houses: 0,
		rent_three_houses: 0,
		rent_four_houses: 0,
		cost_of_house: 0,
		rent_hotel: 0,
			is_mortgaged: false,
			group_id: 0,
			for_sale: false,
			development: 0,
		},
		TradeCounter: {
			id: 0,
		current_val: 0,
		},
		TradeCounterValue: {
		current_val: 0,
		},
		TradeOfferDetails: {
		id: 0,
			from: "",
			to: "",
		game_id: 0,
			offered_property_ids: [0],
			requested_property_ids: [0],
		cash_offer: 0,
		cash_request: 0,
		trade_type: new CairoCustomEnum({ 
					PropertyForProperty: "",
				PropertyForCash: undefined,
				CashForProperty: undefined,
				CashPlusPropertyForProperty: undefined,
				PropertyForCashPlusProperty: undefined,
				CashForChanceJailCard: undefined,
				CashForCommunityJailCard: undefined,
				CommunityJailCardForCash: undefined,
				ChanceJailCardForCash: undefined, }),
		status: new CairoCustomEnum({ 
					Accepted: "",
				Rejected: undefined,
				Pending: undefined,
				Countered: undefined, }),
			is_countered: false,
			approve_counter: false,
		},
		TradeOfferDetailsValue: {
			from: "",
			to: "",
		game_id: 0,
			offered_property_ids: [0],
			requested_property_ids: [0],
		cash_offer: 0,
		cash_request: 0,
		trade_type: new CairoCustomEnum({ 
					PropertyForProperty: "",
				PropertyForCash: undefined,
				CashForProperty: undefined,
				CashPlusPropertyForProperty: undefined,
				PropertyForCashPlusProperty: undefined,
				CashForChanceJailCard: undefined,
				CashForCommunityJailCard: undefined,
				CommunityJailCardForCash: undefined,
				ChanceJailCardForCash: undefined, }),
		status: new CairoCustomEnum({ 
					Accepted: "",
				Rejected: undefined,
				Pending: undefined,
				Countered: undefined, }),
			is_countered: false,
			approve_counter: false,
		},
		GameCreated: {
		game_id: 0,
			timestamp: 0,
		},
		GameCreatedValue: {
			timestamp: 0,
		},
		GameStarted: {
		game_id: 0,
			timestamp: 0,
		},
		GameStartedValue: {
			timestamp: 0,
		},
		PlayerCreated: {
			username: 0,
			player: "",
			timestamp: 0,
		},
		PlayerCreatedValue: {
			timestamp: 0,
		},
		PlayerJoined: {
		game_id: 0,
			username: 0,
			timestamp: 0,
		},
		PlayerJoinedValue: {
			timestamp: 0,
		},
	},
};
export enum ModelsMapping {
	Game = 'dojo_starter-Game',
	GameBalance = 'dojo_starter-GameBalance',
	GameBalanceValue = 'dojo_starter-GameBalanceValue',
	GameCounter = 'dojo_starter-GameCounter',
	GameCounterValue = 'dojo_starter-GameCounterValue',
	GameStatus = 'dojo_starter-GameStatus',
	GameType = 'dojo_starter-GameType',
	GameValue = 'dojo_starter-GameValue',
	GamePlayer = 'dojo_starter-GamePlayer',
	GamePlayerValue = 'dojo_starter-GamePlayerValue',
	PlayerSymbol = 'dojo_starter-PlayerSymbol',
	AddressToUsername = 'dojo_starter-AddressToUsername',
	AddressToUsernameValue = 'dojo_starter-AddressToUsernameValue',
	IsRegistered = 'dojo_starter-IsRegistered',
	IsRegisteredValue = 'dojo_starter-IsRegisteredValue',
	Player = 'dojo_starter-Player',
	PlayerValue = 'dojo_starter-PlayerValue',
	UsernameToAddress = 'dojo_starter-UsernameToAddress',
	UsernameToAddressValue = 'dojo_starter-UsernameToAddressValue',
	IdToProperty = 'dojo_starter-IdToProperty',
	IdToPropertyValue = 'dojo_starter-IdToPropertyValue',
	Property = 'dojo_starter-Property',
	PropertyToId = 'dojo_starter-PropertyToId',
	PropertyToIdValue = 'dojo_starter-PropertyToIdValue',
	PropertyType = 'dojo_starter-PropertyType',
	PropertyValue = 'dojo_starter-PropertyValue',
	TradeCounter = 'dojo_starter-TradeCounter',
	TradeCounterValue = 'dojo_starter-TradeCounterValue',
	TradeOffer = 'dojo_starter-TradeOffer',
	TradeOfferDetails = 'dojo_starter-TradeOfferDetails',
	TradeOfferDetailsValue = 'dojo_starter-TradeOfferDetailsValue',
	TradeStatus = 'dojo_starter-TradeStatus',
	GameCreated = 'dojo_starter-GameCreated',
	GameCreatedValue = 'dojo_starter-GameCreatedValue',
	GameStarted = 'dojo_starter-GameStarted',
	GameStartedValue = 'dojo_starter-GameStartedValue',
	PlayerCreated = 'dojo_starter-PlayerCreated',
	PlayerCreatedValue = 'dojo_starter-PlayerCreatedValue',
	PlayerJoined = 'dojo_starter-PlayerJoined',
	PlayerJoinedValue = 'dojo_starter-PlayerJoinedValue',
}