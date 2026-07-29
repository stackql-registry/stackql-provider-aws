--- 
title: listings
hide_title: false
hide_table_of_contents: false
keywords:
  - listings
  - datazone
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>listings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="listings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.listings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_listing"
    values={[
        { label: 'get_listing', value: 'get_listing' },
        { label: 'search_listings', value: 'search_listings' }
    ]}
>
<TabItem value="get_listing">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the listing. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the listing.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the listing was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the listing.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the listing.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="item" /></td>
    <td><code>object</code></td>
    <td>The details of a listing.</td>
</tr>
<tr>
    <td><CopyableCode code="listing_revision" /></td>
    <td><code>string</code></td>
    <td>The revision of a listing.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the listing. (CREATING, ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the listing was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who updated the listing.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_listings">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="asset_listing" /></td>
    <td><code>object</code></td>
    <td>The asset listing included in the results of the SearchListings action.</td>
</tr>
<tr>
    <td><CopyableCode code="data_product_listing" /></td>
    <td><code>object</code></td>
    <td>The data product listing.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_listing"><CopyableCode code="get_listing" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-listingRevision"><code>listingRevision</code></a></td>
    <td>Gets a listing (a record of an asset at a given time). If you specify a listing version, only details that are specific to that version are returned.</td>
</tr>
<tr>
    <td><a href="#search_listings"><CopyableCode code="search_listings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches listings in Amazon DataZone. SearchListings is a powerful capability that enables users to discover and explore published assets and data products across their organization. It provides both basic and advanced search functionality, allowing users to find resources based on names, descriptions, metadata, and other attributes. SearchListings also supports filtering using various criteria such as creation date, owner, or status. This API is essential for making the wealth of data resources in an organization discoverable and usable, helping users find the right data for their needs quickly and efficiently. SearchListings returns results in a paginated format. When the result set is large, the response will include a nextToken, which can be used to retrieve the next page of results. The SearchListings API gives users flexibility in specifying what kind of search is run. To run a standard free-text search, the searchText parameter must be supplied. By default, all searchable fields are indexed for semantic search and will return semantic matches for SearchListings queries. To prevent semantic search indexing for a custom form attribute, see the CreateFormType API documentation. To run a lexical search query, enclose the query with double quotes (""). This will disable semantic search even for fields that have semantic search enabled and will only return results that contain the keywords wrapped by double quotes (order of tokens in the query is not enforced). Free-text search is supported for all attributes annotated with @amazon.datazone#searchable. To run a filtered search, provide filter clause using the filters parameter. To filter on glossary terms, use the special attribute __DataZoneGlossaryTerms. To filter on an indexed numeric attribute (i.e., a numeric attribute annotated with @amazon.datazone#sortable), provide a filter using the intValue parameter. The filters parameter can also be used to run more advanced free-text searches that target specific attributes (attributes must be annotated with @amazon.datazone#searchable for free-text search). Create/update timestamp filtering is supported using the special creationTime/lastUpdatedTime attributes. Filter types can be mixed and matched to power complex queries. To find out whether an attribute has been annotated and indexed for a given search type, use the GetFormType API to retrieve the form containing the attribute.</td>
</tr>
<tr>
    <td><a href="#create_listing_change_set"><CopyableCode code="create_listing_change_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-entityIdentifier"><code>entityIdentifier</code></a>, <a href="#parameter-entityType"><code>entityType</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Publishes a listing (a record of an asset at a given time) or removes a listing from the catalog.</td>
</tr>
<tr>
    <td><a href="#delete_listing"><CopyableCode code="delete_listing" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a listing (a record of an asset at a given time).</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the listing to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-listingRevision">
    <td><CopyableCode code="listingRevision" /></td>
    <td><code>string</code></td>
    <td>The revision of the listing.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_listing"
    values={[
        { label: 'get_listing', value: 'get_listing' },
        { label: 'search_listings', value: 'search_listings' }
    ]}
>
<TabItem value="get_listing">

Gets a listing (a record of an asset at a given time). If you specify a listing version, only details that are specific to that version are returned.

```sql
SELECT
id,
name,
created_at,
created_by,
description,
domain_id,
item,
listing_revision,
status,
updated_at,
updated_by
FROM aws.datazone.listings
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND listingRevision = '{{ listingRevision }}'
;
```
</TabItem>
<TabItem value="search_listings">

Searches listings in Amazon DataZone. SearchListings is a powerful capability that enables users to discover and explore published assets and data products across their organization. It provides both basic and advanced search functionality, allowing users to find resources based on names, descriptions, metadata, and other attributes. SearchListings also supports filtering using various criteria such as creation date, owner, or status. This API is essential for making the wealth of data resources in an organization discoverable and usable, helping users find the right data for their needs quickly and efficiently. SearchListings returns results in a paginated format. When the result set is large, the response will include a nextToken, which can be used to retrieve the next page of results. The SearchListings API gives users flexibility in specifying what kind of search is run. To run a standard free-text search, the searchText parameter must be supplied. By default, all searchable fields are indexed for semantic search and will return semantic matches for SearchListings queries. To prevent semantic search indexing for a custom form attribute, see the CreateFormType API documentation. To run a lexical search query, enclose the query with double quotes (""). This will disable semantic search even for fields that have semantic search enabled and will only return results that contain the keywords wrapped by double quotes (order of tokens in the query is not enforced). Free-text search is supported for all attributes annotated with @amazon.datazone#searchable. To run a filtered search, provide filter clause using the filters parameter. To filter on glossary terms, use the special attribute __DataZoneGlossaryTerms. To filter on an indexed numeric attribute (i.e., a numeric attribute annotated with @amazon.datazone#sortable), provide a filter using the intValue parameter. The filters parameter can also be used to run more advanced free-text searches that target specific attributes (attributes must be annotated with @amazon.datazone#searchable for free-text search). Create/update timestamp filtering is supported using the special creationTime/lastUpdatedTime attributes. Filter types can be mixed and matched to power complex queries. To find out whether an attribute has been annotated and indexed for a given search type, use the GetFormType API to retrieve the form containing the attribute.

```sql
SELECT
asset_listing,
data_product_listing
FROM aws.datazone.listings
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_listing_change_set"
    values={[
        { label: 'create_listing_change_set', value: 'create_listing_change_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_listing_change_set">

Publishes a listing (a record of an asset at a given time) or removes a listing from the catalog.

```sql
INSERT INTO aws.datazone.listings (
entityIdentifier,
entityType,
entityRevision,
action,
clientToken,
domain_identifier,
region
)
SELECT 
'{{ entityIdentifier }}' /* required */,
'{{ entityType }}' /* required */,
'{{ entityRevision }}',
'{{ action }}' /* required */,
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
listing_id,
listing_revision,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: listings
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the listings resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the listings resource.
    - name: entityIdentifier
      value: "{{ entityIdentifier }}"
    - name: entityType
      value: "{{ entityType }}"
      valid_values: ['ASSET', 'DATA_PRODUCT']
    - name: entityRevision
      value: "{{ entityRevision }}"
    - name: action
      value: "{{ action }}"
      valid_values: ['PUBLISH', 'UNPUBLISH']
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_listing"
    values={[
        { label: 'delete_listing', value: 'delete_listing' }
    ]}
>
<TabItem value="delete_listing">

Deletes a listing (a record of an asset at a given time).

```sql
DELETE FROM aws.datazone.listings
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
