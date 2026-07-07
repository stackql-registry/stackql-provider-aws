--- 
title: featured_results_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - featured_results_sets
  - kendra
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

Creates, updates, deletes, gets or lists a <code>featured_results_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="featured_results_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.featured_results_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_featured_results_set"
    values={[
        { label: 'describe_featured_results_set', value: 'describe_featured_results_set' },
        { label: 'list_featured_results_sets', value: 'list_featured_results_sets' }
    ]}
>
<TabItem value="describe_featured_results_set">

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
    <td><CopyableCode code="CreationTimestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp when the set of the featured results was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description for the set of featured results. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FeaturedDocumentsMissing" /></td>
    <td><code>array</code></td>
    <td>The list of document IDs that don't exist but you have specified as featured documents. Amazon Kendra cannot feature these documents if they don't exist in the index. You can check the status of a document and its ID or check for documents with status errors using the BatchGetDocumentStatus API.</td>
</tr>
<tr>
    <td><CopyableCode code="FeaturedDocumentsWithMetadata" /></td>
    <td><code>array</code></td>
    <td>The list of document IDs for the documents you want to feature with their metadata information. For more information on the list of featured documents, see FeaturedResultsSet.</td>
</tr>
<tr>
    <td><CopyableCode code="FeaturedResultsSetId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the set of featured results. (pattern: &lt;code&gt;^&#91;a-zA-Z-0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FeaturedResultsSetName" /></td>
    <td><code>string</code></td>
    <td>The name for the set of featured results. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91; a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the set of featured results was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="QueryTexts" /></td>
    <td><code>array</code></td>
    <td>The list of queries for featuring results. For more information on the list of queries, see FeaturedResultsSet.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the set of featured results. When the value is ACTIVE, featured results are ready for use. You can still configure your settings before setting the status to ACTIVE. You can set the status to ACTIVE or INACTIVE using the UpdateFeaturedResultsSet API. The queries you specify for featured results must be unique per featured results set for each index, whether the status is ACTIVE or INACTIVE. (ACTIVE, INACTIVE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_featured_results_sets">

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
    <td><CopyableCode code="FeaturedResultsSetSummaryItems" /></td>
    <td><code>array</code></td>
    <td>An array of summary information for one or more featured results sets.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If the response is truncated, Amazon Kendra returns a pagination token in the response.</td>
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
    <td><a href="#describe_featured_results_set"><CopyableCode code="describe_featured_results_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a set of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.</td>
</tr>
<tr>
    <td><a href="#list_featured_results_sets"><CopyableCode code="list_featured_results_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all your sets of featured results for a given index. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.</td>
</tr>
<tr>
    <td><a href="#create_featured_results_set"><CopyableCode code="create_featured_results_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-FeaturedResultsSetName"><code>FeaturedResultsSetName</code></a></td>
    <td></td>
    <td>Creates a set of featured results to display at the top of the search results page. Featured results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match, then one or more specific documents are featured in the search results. You can create up to 50 sets of featured results per index. You can request to increase this limit by contacting Support.</td>
</tr>
<tr>
    <td><a href="#update_featured_results_set"><CopyableCode code="update_featured_results_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-FeaturedResultsSetId"><code>FeaturedResultsSetId</code></a></td>
    <td></td>
    <td>Updates a set of featured results. Features results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match of a query, then one or more specific documents are featured in the search results.</td>
</tr>
<tr>
    <td><a href="#batch_delete_featured_results_set"><CopyableCode code="batch_delete_featured_results_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a>, <a href="#parameter-FeaturedResultsSetIds"><code>FeaturedResultsSetIds</code></a></td>
    <td></td>
    <td>Removes one or more sets of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_featured_results_set"
    values={[
        { label: 'describe_featured_results_set', value: 'describe_featured_results_set' },
        { label: 'list_featured_results_sets', value: 'list_featured_results_sets' }
    ]}
>
<TabItem value="describe_featured_results_set">

Gets information about a set of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

```sql
SELECT
CreationTimestamp,
Description,
FeaturedDocumentsMissing,
FeaturedDocumentsWithMetadata,
FeaturedResultsSetId,
FeaturedResultsSetName,
LastUpdatedTimestamp,
QueryTexts,
Status
FROM aws.kendra.featured_results_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_featured_results_sets">

Lists all your sets of featured results for a given index. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

```sql
SELECT
FeaturedResultsSetSummaryItems,
NextToken
FROM aws.kendra.featured_results_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_featured_results_set"
    values={[
        { label: 'create_featured_results_set', value: 'create_featured_results_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_featured_results_set">

Creates a set of featured results to display at the top of the search results page. Featured results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match, then one or more specific documents are featured in the search results. You can create up to 50 sets of featured results per index. You can request to increase this limit by contacting Support.

```sql
INSERT INTO aws.kendra.featured_results_sets (
IndexId,
FeaturedResultsSetName,
Description,
ClientToken,
Status,
QueryTexts,
FeaturedDocuments,
Tags,
region
)
SELECT 
'{{ IndexId }}' /* required */,
'{{ FeaturedResultsSetName }}' /* required */,
'{{ Description }}',
'{{ ClientToken }}',
'{{ Status }}',
'{{ QueryTexts }}',
'{{ FeaturedDocuments }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
FeaturedResultsSet
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: featured_results_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the featured_results_sets resource.
    - name: IndexId
      value: "{{ IndexId }}"
      description: |
        The identifier of the index that you want to use for featuring results.
    - name: FeaturedResultsSetName
      value: "{{ FeaturedResultsSetName }}"
      description: |
        A name for the set of featured results.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the set of featured results.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A token that you provide to identify the request to create a set of featured results. Multiple calls to the CreateFeaturedResultsSet API with the same client token will create only one featured results set.
    - name: Status
      value: "{{ Status }}"
      description: |
        The current status of the set of featured results. When the value is ACTIVE, featured results are ready for use. You can still configure your settings before setting the status to ACTIVE. You can set the status to ACTIVE or INACTIVE using the UpdateFeaturedResultsSet API. The queries you specify for featured results must be unique per featured results set for each index, whether the status is ACTIVE or INACTIVE.
      valid_values: ['ACTIVE', 'INACTIVE']
    - name: QueryTexts
      value:
        - "{{ QueryTexts }}"
      description: |
        A list of queries for featuring results. For more information on the list of queries, see FeaturedResultsSet.
    - name: FeaturedDocuments
      description: |
        A list of document IDs for the documents you want to feature at the top of the search results page. For more information on the list of documents, see FeaturedResultsSet.
      value:
        - Id: "{{ Id }}"
    - name: Tags
      description: |
        A list of key-value pairs that identify or categorize the featured results set. You can also use tags to help control access to the featured results set. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols:_ . : / = + - @.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_featured_results_set"
    values={[
        { label: 'update_featured_results_set', value: 'update_featured_results_set' }
    ]}
>
<TabItem value="update_featured_results_set">

Updates a set of featured results. Features results are placed above all other results for certain queries. You map specific queries to specific documents for featuring in the results. If a query contains an exact match of a query, then one or more specific documents are featured in the search results.

```sql
UPDATE aws.kendra.featured_results_sets
SET 
IndexId = '{{ IndexId }}',
FeaturedResultsSetId = '{{ FeaturedResultsSetId }}',
FeaturedResultsSetName = '{{ FeaturedResultsSetName }}',
Description = '{{ Description }}',
Status = '{{ Status }}',
QueryTexts = '{{ QueryTexts }}',
FeaturedDocuments = '{{ FeaturedDocuments }}'
WHERE 
region = '{{ region }}' --required
AND IndexId = '{{ IndexId }}' --required
AND FeaturedResultsSetId = '{{ FeaturedResultsSetId }}' --required
RETURNING
FeaturedResultsSet;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_featured_results_set"
    values={[
        { label: 'batch_delete_featured_results_set', value: 'batch_delete_featured_results_set' }
    ]}
>
<TabItem value="batch_delete_featured_results_set">

Removes one or more sets of featured results. Features results are placed above all other results for certain queries. If there's an exact match of a query, then one or more specific documents are featured in the search results.

```sql
EXEC aws.kendra.featured_results_sets.batch_delete_featured_results_set 
@region='{{ region }}' --required 
@@json=
'{
"IndexId": "{{ IndexId }}", 
"FeaturedResultsSetIds": "{{ FeaturedResultsSetIds }}"
}'
;
```
</TabItem>
</Tabs>
