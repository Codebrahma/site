import React from 'react'
import { Fixed, Row, Image } from 'serverless-design-system/src'
import OptionWrapper from './OptionWrapper'
import AutoComplete from './AutoComplete'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'
import searchIcon from 'src/assets/images/white-search-icon.svg'

const searchClient = algoliasearch(
  'V3VM7IN3TH',
  'd2dac557d1fd151223e78f3597d59e78'
);

export default class Search extends React.Component {
  state = { isSearchBarActive: false }

  toggleSearchBar = () => {
    this.setState((prevState) => ({
      isSearchBarActive: !prevState.isSearchBarActive
    }))
  }

  render() {
    const { isSearchBarActive } = this.state;
    return (
      <React.Fragment>
        <OptionWrapper
          justifyContent="center"
          mx="5px"
          onClick={this.toggleSearchBar}
        >
          <Image
            maxHeight="22px"
            src={searchIcon}
            objectFit="contain"
          />
        </OptionWrapper>
        {
          isSearchBarActive && (
            <Fixed
              bg="black"
              left={0}
              right={41}
            >
              <Row>
                <OptionWrapper
                  justifyContent="center"
                  mx="12px"
                >
                  <Image
                    maxHeight="22px"
                    src={searchIcon}
                    objectFit="contain"
                  />
                </OptionWrapper>
                <InstantSearch
                  indexName="dev_BLOG_SEARCH"
                  searchClient={searchClient}
                >
                  <AutoComplete />
                </InstantSearch>
              </Row>
            </Fixed>
          )
        }
      </React.Fragment>
    );
  }
}
