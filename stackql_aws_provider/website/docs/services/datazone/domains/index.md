--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search"
    values={[
        { label: 'search', value: 'search' },
        { label: 'get_domain', value: 'get_domain' },
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="search">

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
    <td><CopyableCode code="items_" /></td>
    <td><code>array</code></td>
    <td>The results of the Search action.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of results is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of results, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to Search to list the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="totalMatchCount" /></td>
    <td><code>integer</code></td>
    <td>Total number of search results.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_domain">

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
    <td>The identifier of the specified Amazon DataZone domain. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon DataZone domain.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the specified Amazon DataZone domain.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the Amazon DataZone domain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the Amazon DataZone domain.</td>
</tr>
<tr>
    <td><CopyableCode code="domainExecutionRole" /></td>
    <td><code>string</code></td>
    <td>The domain execution role with which the Amazon DataZone domain is created. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::\d&#123;12&#125;:role(/&#91;a-zA-Z0-9+=,.@_-&#93;+)*/&#91;a-zA-Z0-9+=,.@_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the domain. (V1, V2)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Web Services Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the Amazon DataZone domain was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="portalUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of the data portal for this Amazon DataZone domain.</td>
</tr>
<tr>
    <td><CopyableCode code="rootDomainUnitId" /></td>
    <td><code>string</code></td>
    <td>The ID of the root domain in Amazon Datazone. (pattern: &lt;code&gt;&#91;a-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serviceRole" /></td>
    <td><code>string</code></td>
    <td>The service role of the domain. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::\d&#123;12&#125;:role(/&#91;a-zA-Z0-9+=,.@_-&#93;+)*/&#91;a-zA-Z0-9+=,.@_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="singleSignOn" /></td>
    <td><code>object</code></td>
    <td>The single sign-on details in Amazon DataZone.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the specified Amazon DataZone domain. (CREATING, AVAILABLE, CREATION_FAILED, DELETING, DELETED, DELETION_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags specified for the Amazon DataZone domain.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_domains">

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
    <td>The ID of the Amazon DataZone domain. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A name of an Amazon DataZone domain.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon DataZone domain.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when a Amazon DataZone domain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of an Amazon DataZone domain.</td>
</tr>
<tr>
    <td><CopyableCode code="domainVersion" /></td>
    <td><code>string</code></td>
    <td>The domain version. (V1, V2)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp of when a Amazon DataZone domain was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="managedAccountId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Web Services account that manages the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="portalUrl" /></td>
    <td><code>string</code></td>
    <td>The data portal URL for the Amazon DataZone domain.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Amazon DataZone domain. (CREATING, AVAILABLE, CREATION_FAILED, DELETING, DELETED, DELETION_FAILED)</td>
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
    <td><a href="#search"><CopyableCode code="search" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for assets in Amazon DataZone. Search in Amazon DataZone is a powerful capability that enables users to discover and explore data assets, glossary terms, and data products across their organization. It provides both basic and advanced search functionality, allowing users to find resources based on names, descriptions, metadata, and other attributes. Search can be scoped to specific types of resources (like assets, glossary terms, or data products) and can be filtered using various criteria such as creation date, owner, or status. The search functionality is essential for making the wealth of data resources in an organization discoverable and usable, helping users find the right data for their needs quickly and efficiently. Many search commands in Amazon DataZone are paginated, including search and search-types. When the result set is large, Amazon DataZone returns a nextToken in the response. This token can be used to retrieve the next page of results. Prerequisites: The --domain-identifier must refer to an existing Amazon DataZone domain. --search-scope must be one of: ASSET, GLOSSARY_TERM, DATA_PRODUCT, or GLOSSARY. The user must have search permissions in the specified domain. If using --filters, ensure that the JSON is well-formed and that each filter includes valid attribute and value keys. For paginated results, be prepared to use --next-token to fetch additional pages. To run a standard free-text search, the searchText parameter must be supplied. By default, all searchable fields are indexed for semantic search and will return semantic matches for SearchListings queries. To prevent semantic search indexing for a custom form attribute, see the CreateFormType API documentation. To run a lexical search query, enclose the query with double quotes (""). This will disable semantic search even for fields that have semantic search enabled and will only return results that contain the keywords wrapped by double quotes (order of tokens in the query is not enforced). Free-text search is supported for all attributes annotated with @amazon.datazone#searchable. To run a filtered search, provide filter clause using the filters parameter. To filter on glossary terms, use the special attribute __DataZoneGlossaryTerms. To filter on an indexed numeric attribute (i.e., a numeric attribute annotated with @amazon.datazone#sortable), provide a filter using the intValue parameter. The filters parameter can also be used to run more advanced free-text searches that target specific attributes (attributes must be annotated with @amazon.datazone#searchable for free-text search). Create/update timestamp filtering is supported using the special creationTime/lastUpdatedTime attributes. Filter types can be mixed and matched to power complex queries. To find out whether an attribute has been annotated and indexed for a given search type, use the GetFormType API to retrieve the form containing the attribute.</td>
</tr>
<tr>
    <td><a href="#get_domain"><CopyableCode code="get_domain" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Amazon DataZone domain.</td>
</tr>
<tr>
    <td><a href="#list_domains"><CopyableCode code="list_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists Amazon DataZone domains.</td>
</tr>
<tr>
    <td><a href="#create_domain"><CopyableCode code="create_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates an Amazon DataZone domain.</td>
</tr>
<tr>
    <td><a href="#associate_governed_terms"><CopyableCode code="associate_governed_terms" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-governedGlossaryTerms"><code>governedGlossaryTerms</code></a></td>
    <td></td>
    <td>Associates governed terms with an asset.</td>
</tr>
<tr>
    <td><a href="#update_root_domain_unit_owner"><CopyableCode code="update_root_domain_unit_owner" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-currentOwner"><code>currentOwner</code></a>, <a href="#parameter-newOwner"><code>newOwner</code></a></td>
    <td></td>
    <td>Updates the owner of the root domain unit.</td>
</tr>
<tr>
    <td><a href="#update_domain"><CopyableCode code="update_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Updates a Amazon DataZone domain.</td>
</tr>
<tr>
    <td><a href="#delete_domain"><CopyableCode code="delete_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a>, <a href="#parameter-skipDeletionCheck"><code>skipDeletionCheck</code></a></td>
    <td>Deletes a Amazon DataZone domain.</td>
</tr>
<tr>
    <td><a href="#accept_predictions"><CopyableCode code="accept_predictions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-revision"><code>revision</code></a></td>
    <td>Accepts automatically generated business-friendly metadata for your Amazon DataZone assets.</td>
</tr>
<tr>
    <td><a href="#batch_put_attributes_metadata"><CopyableCode code="batch_put_attributes_metadata" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-attributes"><code>attributes</code></a></td>
    <td></td>
    <td>Writes the attribute metadata.</td>
</tr>
<tr>
    <td><a href="#cancel_metadata_generation_run"><CopyableCode code="cancel_metadata_generation_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels the metadata generation run. Prerequisites: The run must exist and be in a cancelable status (e.g., SUBMITTED, IN_PROGRESS). Runs in SUCCEEDED status cannot be cancelled. User must have access to the run and cancel permissions.</td>
</tr>
<tr>
    <td><a href="#cancel_subscription"><CopyableCode code="cancel_subscription" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels the subscription to the specified asset.</td>
</tr>
<tr>
    <td><a href="#disassociate_governed_terms"><CopyableCode code="disassociate_governed_terms" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-governedGlossaryTerms"><code>governedGlossaryTerms</code></a></td>
    <td></td>
    <td>Disassociates restricted terms from an asset.</td>
</tr>
<tr>
    <td><a href="#post_lineage_event"><CopyableCode code="post_lineage_event" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-event"><code>event</code></a></td>
    <td><a href="#parameter-Client-Token"><code>Client-Token</code></a></td>
    <td>Posts a data lineage event.</td>
</tr>
<tr>
    <td><a href="#start_metadata_generation_run"><CopyableCode code="start_metadata_generation_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-target"><code>target</code></a>, <a href="#parameter-owningProjectIdentifier"><code>owningProjectIdentifier</code></a></td>
    <td></td>
    <td>Starts the metadata generation run. Prerequisites: Asset must be created and belong to the specified domain and project. Asset type must be supported for metadata generation (e.g., Amazon Web Services Glue table). Asset must have a structured schema with valid rows and columns. Valid values for --type: BUSINESS_DESCRIPTIONS, BUSINESS_NAMES, BUSINESS_GLOSSARY_ASSOCIATIONS. The user must have permission to run metadata generation in the domain/project.</td>
</tr>
<tr>
    <td><a href="#query_graph"><CopyableCode code="query_graph" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-match"><code>match</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Queries entities in the graph store.</td>
</tr>
<tr>
    <td><a href="#reject_predictions"><CopyableCode code="reject_predictions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-revision"><code>revision</code></a></td>
    <td>Rejects automatically generated business-friendly metadata for your Amazon DataZone assets.</td>
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
    <td>The identifier of the Amazon DataZone domain.</td>
</tr>
<tr id="parameter-entity_identifier">
    <td><CopyableCode code="entity_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of an asset from which you want to disassociate restricted terms.</td>
</tr>
<tr id="parameter-entity_type">
    <td><CopyableCode code="entity_type" /></td>
    <td><code>string</code></td>
    <td>The type of the asset from which you want to disassociate restricted terms.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the prediction.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Client-Token">
    <td><CopyableCode code="Client-Token" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that is provided to ensure the idempotency of the request.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of entities to return in a single call to QueryGraph. When the number of entities to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to QueryGraph to list the next set of entities.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of entities is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of entities, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to QueryGraph to list the next set of entities.</td>
</tr>
<tr id="parameter-revision">
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision that is to be made to the asset.</td>
</tr>
<tr id="parameter-skipDeletionCheck">
    <td><CopyableCode code="skipDeletionCheck" /></td>
    <td><code>boolean</code></td>
    <td>Specifies the optional flag to delete all child entities within the domain.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data source.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search"
    values={[
        { label: 'search', value: 'search' },
        { label: 'get_domain', value: 'get_domain' },
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="search">

Searches for assets in Amazon DataZone. Search in Amazon DataZone is a powerful capability that enables users to discover and explore data assets, glossary terms, and data products across their organization. It provides both basic and advanced search functionality, allowing users to find resources based on names, descriptions, metadata, and other attributes. Search can be scoped to specific types of resources (like assets, glossary terms, or data products) and can be filtered using various criteria such as creation date, owner, or status. The search functionality is essential for making the wealth of data resources in an organization discoverable and usable, helping users find the right data for their needs quickly and efficiently. Many search commands in Amazon DataZone are paginated, including search and search-types. When the result set is large, Amazon DataZone returns a nextToken in the response. This token can be used to retrieve the next page of results. Prerequisites: The --domain-identifier must refer to an existing Amazon DataZone domain. --search-scope must be one of: ASSET, GLOSSARY_TERM, DATA_PRODUCT, or GLOSSARY. The user must have search permissions in the specified domain. If using --filters, ensure that the JSON is well-formed and that each filter includes valid attribute and value keys. For paginated results, be prepared to use --next-token to fetch additional pages. To run a standard free-text search, the searchText parameter must be supplied. By default, all searchable fields are indexed for semantic search and will return semantic matches for SearchListings queries. To prevent semantic search indexing for a custom form attribute, see the CreateFormType API documentation. To run a lexical search query, enclose the query with double quotes (""). This will disable semantic search even for fields that have semantic search enabled and will only return results that contain the keywords wrapped by double quotes (order of tokens in the query is not enforced). Free-text search is supported for all attributes annotated with @amazon.datazone#searchable. To run a filtered search, provide filter clause using the filters parameter. To filter on glossary terms, use the special attribute __DataZoneGlossaryTerms. To filter on an indexed numeric attribute (i.e., a numeric attribute annotated with @amazon.datazone#sortable), provide a filter using the intValue parameter. The filters parameter can also be used to run more advanced free-text searches that target specific attributes (attributes must be annotated with @amazon.datazone#searchable for free-text search). Create/update timestamp filtering is supported using the special creationTime/lastUpdatedTime attributes. Filter types can be mixed and matched to power complex queries. To find out whether an attribute has been annotated and indexed for a given search type, use the GetFormType API to retrieve the form containing the attribute.

```sql
SELECT
items_,
nextToken,
totalMatchCount
FROM aws.datazone.domains
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_domain">

Gets an Amazon DataZone domain.

```sql
SELECT
id,
name,
arn,
createdAt,
description,
domainExecutionRole,
domainVersion,
kmsKeyIdentifier,
lastUpdatedAt,
portalUrl,
rootDomainUnitId,
serviceRole,
singleSignOn,
status,
tags
FROM aws.datazone.domains
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_domains">

Lists Amazon DataZone domains.

```sql
SELECT
id,
name,
arn,
createdAt,
description,
domainVersion,
lastUpdatedAt,
managedAccountId,
portalUrl,
status
FROM aws.datazone.domains
WHERE region = '{{ region }}' -- required
AND status = '{{ status }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain"
    values={[
        { label: 'create_domain', value: 'create_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain">

Creates an Amazon DataZone domain.

```sql
INSERT INTO aws.datazone.domains (
name,
description,
singleSignOn,
domainExecutionRole,
kmsKeyIdentifier,
tags,
domainVersion,
serviceRole,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ singleSignOn }}',
'{{ domainExecutionRole }}',
'{{ kmsKeyIdentifier }}',
'{{ tags }}',
'{{ domainVersion }}',
'{{ serviceRole }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
id,
name,
arn,
description,
domainExecutionRole,
domainVersion,
kmsKeyIdentifier,
portalUrl,
rootDomainUnitId,
serviceRole,
singleSignOn,
status,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domains resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: singleSignOn
      description: |
        The single sign-on details in Amazon DataZone.
      value:
        type_: "{{ type_ }}"
        userAssignment: "{{ userAssignment }}"
        idcInstanceArn: "{{ idcInstanceArn }}"
    - name: domainExecutionRole
      value: "{{ domainExecutionRole }}"
    - name: kmsKeyIdentifier
      value: "{{ kmsKeyIdentifier }}"
    - name: tags
      value: "{{ tags }}"
    - name: domainVersion
      value: "{{ domainVersion }}"
      valid_values: ['V1', 'V2']
    - name: serviceRole
      value: "{{ serviceRole }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_governed_terms"
    values={[
        { label: 'associate_governed_terms', value: 'associate_governed_terms' },
        { label: 'update_root_domain_unit_owner', value: 'update_root_domain_unit_owner' },
        { label: 'update_domain', value: 'update_domain' }
    ]}
>
<TabItem value="associate_governed_terms">

Associates governed terms with an asset.

```sql
UPDATE aws.datazone.domains
SET 
governedGlossaryTerms = '{{ governedGlossaryTerms }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND entity_identifier = '{{ entity_identifier }}' --required
AND entity_type = '{{ entity_type }}' --required
AND region = '{{ region }}' --required
AND governedGlossaryTerms = '{{ governedGlossaryTerms }}' --required;
```
</TabItem>
<TabItem value="update_root_domain_unit_owner">

Updates the owner of the root domain unit.

```sql
UPDATE aws.datazone.domains
SET 
currentOwner = '{{ currentOwner }}',
newOwner = '{{ newOwner }}',
clientToken = '{{ clientToken }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND region = '{{ region }}' --required
AND currentOwner = '{{ currentOwner }}' --required
AND newOwner = '{{ newOwner }}' --required;
```
</TabItem>
<TabItem value="update_domain">

Updates a Amazon DataZone domain.

```sql
UPDATE aws.datazone.domains
SET 
description = '{{ description }}',
singleSignOn = '{{ singleSignOn }}',
domainExecutionRole = '{{ domainExecutionRole }}',
serviceRole = '{{ serviceRole }}',
name = '{{ name }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken}}'
RETURNING
id,
name,
description,
domainExecutionRole,
lastUpdatedAt,
rootDomainUnitId,
serviceRole,
singleSignOn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain"
    values={[
        { label: 'delete_domain', value: 'delete_domain' }
    ]}
>
<TabItem value="delete_domain">

Deletes a Amazon DataZone domain.

```sql
DELETE FROM aws.datazone.domains
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
AND skipDeletionCheck = '{{ skipDeletionCheck }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_predictions"
    values={[
        { label: 'accept_predictions', value: 'accept_predictions' },
        { label: 'batch_put_attributes_metadata', value: 'batch_put_attributes_metadata' },
        { label: 'cancel_metadata_generation_run', value: 'cancel_metadata_generation_run' },
        { label: 'cancel_subscription', value: 'cancel_subscription' },
        { label: 'disassociate_governed_terms', value: 'disassociate_governed_terms' },
        { label: 'post_lineage_event', value: 'post_lineage_event' },
        { label: 'start_metadata_generation_run', value: 'start_metadata_generation_run' },
        { label: 'query_graph', value: 'query_graph' },
        { label: 'reject_predictions', value: 'reject_predictions' }
    ]}
>
<TabItem value="accept_predictions">

Accepts automatically generated business-friendly metadata for your Amazon DataZone assets.

```sql
EXEC aws.datazone.domains.accept_predictions 
@domain_identifier='{{ domain_identifier }}' --required, 
@identifier='{{ identifier }}' --required, 
@region='{{ region }}' --required, 
@revision='{{ revision }}' 
@@json=
'{
"acceptRule": "{{ acceptRule }}", 
"acceptChoices": "{{ acceptChoices }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="batch_put_attributes_metadata">

Writes the attribute metadata.

```sql
EXEC aws.datazone.domains.batch_put_attributes_metadata 
@domain_identifier='{{ domain_identifier }}' --required, 
@entity_type='{{ entity_type }}' --required, 
@entity_identifier='{{ entity_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}", 
"attributes": "{{ attributes }}"
}'
;
```
</TabItem>
<TabItem value="cancel_metadata_generation_run">

Cancels the metadata generation run. Prerequisites: The run must exist and be in a cancelable status (e.g., SUBMITTED, IN_PROGRESS). Runs in SUCCEEDED status cannot be cancelled. User must have access to the run and cancel permissions.

```sql
EXEC aws.datazone.domains.cancel_metadata_generation_run 
@domain_identifier='{{ domain_identifier }}' --required, 
@identifier='{{ identifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="cancel_subscription">

Cancels the subscription to the specified asset.

```sql
EXEC aws.datazone.domains.cancel_subscription 
@domain_identifier='{{ domain_identifier }}' --required, 
@identifier='{{ identifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="disassociate_governed_terms">

Disassociates restricted terms from an asset.

```sql
EXEC aws.datazone.domains.disassociate_governed_terms 
@domain_identifier='{{ domain_identifier }}' --required, 
@entity_identifier='{{ entity_identifier }}' --required, 
@entity_type='{{ entity_type }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"governedGlossaryTerms": "{{ governedGlossaryTerms }}"
}'
;
```
</TabItem>
<TabItem value="post_lineage_event">

Posts a data lineage event.

```sql
EXEC aws.datazone.domains.post_lineage_event 
@domain_identifier='{{ domain_identifier }}' --required, 
@region='{{ region }}' --required, 
@Client-Token='{{ Client-Token }}' 
@@json=
'{
"event": "{{ event }}"
}'
;
```
</TabItem>
<TabItem value="start_metadata_generation_run">

Starts the metadata generation run. Prerequisites: Asset must be created and belong to the specified domain and project. Asset type must be supported for metadata generation (e.g., Amazon Web Services Glue table). Asset must have a structured schema with valid rows and columns. Valid values for --type: BUSINESS_DESCRIPTIONS, BUSINESS_NAMES, BUSINESS_GLOSSARY_ASSOCIATIONS. The user must have permission to run metadata generation in the domain/project.

```sql
EXEC aws.datazone.domains.start_metadata_generation_run 
@domain_identifier='{{ domain_identifier }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"type": "{{ type }}", 
"types": "{{ types }}", 
"target": "{{ target }}", 
"clientToken": "{{ clientToken }}", 
"owningProjectIdentifier": "{{ owningProjectIdentifier }}"
}'
;
```
</TabItem>
<TabItem value="query_graph">

Queries entities in the graph store.

```sql
EXEC aws.datazone.domains.query_graph 
@domain_identifier='{{ domain_identifier }}' --required, 
@region='{{ region }}' --required, 
@maxResults='{{ maxResults }}', 
@nextToken='{{ nextToken }}' 
@@json=
'{
"match": "{{ match }}", 
"additionalAttributes": "{{ additionalAttributes }}"
}'
;
```
</TabItem>
<TabItem value="reject_predictions">

Rejects automatically generated business-friendly metadata for your Amazon DataZone assets.

```sql
EXEC aws.datazone.domains.reject_predictions 
@domain_identifier='{{ domain_identifier }}' --required, 
@identifier='{{ identifier }}' --required, 
@region='{{ region }}' --required, 
@revision='{{ revision }}' 
@@json=
'{
"rejectRule": "{{ rejectRule }}", 
"rejectChoices": "{{ rejectChoices }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
