--- 
title: stored_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - stored_queries
  - config
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

Creates, updates, deletes, gets or lists a <code>stored_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stored_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.stored_queries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_stored_query"
    values={[
        { label: 'get_stored_query', value: 'get_stored_query' },
        { label: 'list_stored_queries', value: 'list_stored_queries' }
    ]}
>
<TabItem value="get_stored_query">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A unique description for the query. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Expression" /></td>
    <td><code>string</code></td>
    <td>The expression of the query. For example, SELECT resourceId, resourceType, supplementaryConfiguration.BucketVersioningConfiguration.status WHERE resourceType = 'AWS::S3::Bucket' AND supplementaryConfiguration.BucketVersioningConfiguration.status = 'Off'. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="QueryArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the query. For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id. (pattern: &lt;code&gt;^arn:aws&#91;a-z\-&#93;*:config:&#91;a-z\-\d&#93;+:\d+:stored-query/&#91;a-zA-Z0-9-_&#93;+/query-&#91;a-zA-Z\d-_/&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="QueryId" /></td>
    <td><code>string</code></td>
    <td>The ID of the query. (pattern: &lt;code&gt;^\S+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="QueryName" /></td>
    <td><code>string</code></td>
    <td>The name of the query. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-_&#93;+$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_stored_queries">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If the previous paginated request didn't return all of the remaining results, the response object's NextToken parameter value is set to a token. To retrieve the next set of results, call this operation again and assign that token to the request object's NextToken parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null.</td>
</tr>
<tr>
    <td><CopyableCode code="StoredQueryMetadata" /></td>
    <td><code>array</code></td>
    <td>A list of StoredQueryMetadata objects.</td>
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
    <td><a href="#get_stored_query"><CopyableCode code="get_stored_query" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of a specific stored query.</td>
</tr>
<tr>
    <td><a href="#list_stored_queries"><CopyableCode code="list_stored_queries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the stored queries for a single Amazon Web Services account and a single Amazon Web Services Region. The default is 100.</td>
</tr>
<tr>
    <td><a href="#put_stored_query"><CopyableCode code="put_stored_query" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StoredQuery"><code>StoredQuery</code></a></td>
    <td></td>
    <td>Saves a new query or updates an existing saved query. The QueryName must be unique for a single Amazon Web Services account and a single Amazon Web Services Region. You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region. Tags are added at creation and cannot be updated PutStoredQuery is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different tags values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different.</td>
</tr>
<tr>
    <td><a href="#delete_stored_query"><CopyableCode code="delete_stored_query" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the stored query for a single Amazon Web Services account and a single Amazon Web Services Region.</td>
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
    defaultValue="get_stored_query"
    values={[
        { label: 'get_stored_query', value: 'get_stored_query' },
        { label: 'list_stored_queries', value: 'list_stored_queries' }
    ]}
>
<TabItem value="get_stored_query">

Returns the details of a specific stored query.

```sql
SELECT
Description,
Expression,
QueryArn,
QueryId,
QueryName
FROM aws.config.stored_queries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_stored_queries">

Lists the stored queries for a single Amazon Web Services account and a single Amazon Web Services Region. The default is 100.

```sql
SELECT
NextToken,
StoredQueryMetadata
FROM aws.config.stored_queries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_stored_query"
    values={[
        { label: 'put_stored_query', value: 'put_stored_query' }
    ]}
>
<TabItem value="put_stored_query">

Saves a new query or updates an existing saved query. The QueryName must be unique for a single Amazon Web Services account and a single Amazon Web Services Region. You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region. Tags are added at creation and cannot be updated PutStoredQuery is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different tags values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, tags will not be updated, even if they are different.

```sql
REPLACE aws.config.stored_queries
SET 
StoredQuery = '{{ StoredQuery }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
AND StoredQuery = '{{ StoredQuery }}' --required
RETURNING
QueryArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_stored_query"
    values={[
        { label: 'delete_stored_query', value: 'delete_stored_query' }
    ]}
>
<TabItem value="delete_stored_query">

Deletes the stored query for a single Amazon Web Services account and a single Amazon Web Services Region.

```sql
DELETE FROM aws.config.stored_queries
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
