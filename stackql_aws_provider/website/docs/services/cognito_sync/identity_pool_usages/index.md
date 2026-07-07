--- 
title: identity_pool_usages
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_pool_usages
  - cognito_sync
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

Creates, updates, deletes, gets or lists an <code>identity_pool_usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_pool_usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_sync.identity_pool_usages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_identity_pool_usage"
    values={[
        { label: 'describe_identity_pool_usage', value: 'describe_identity_pool_usage' },
        { label: 'list_identity_pool_usage', value: 'list_identity_pool_usage' }
    ]}
>
<TabItem value="describe_identity_pool_usage">

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
    <td><CopyableCode code="DataStorage" /></td>
    <td><code>integer (int64)</code></td>
    <td>Data storage information for the identity pool.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityPoolId" /></td>
    <td><code>string</code></td>
    <td>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region. (pattern: &lt;code&gt;&#91;\w-&#93;+:&#91;0-9a-f-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date on which the identity pool was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="SyncSessionsCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of sync sessions for the identity pool.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_identity_pool_usage">

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
    <td><CopyableCode code="Count" /></td>
    <td><code>integer</code></td>
    <td>Total number of identities for the identity pool.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityPoolUsages" /></td>
    <td><code>array</code></td>
    <td>Usage information for the identity pools.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for obtaining the next page of results.</td>
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
    <td><a href="#describe_identity_pool_usage"><CopyableCode code="describe_identity_pool_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identity_pool_id"><code>identity_pool_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets usage details (for example, data storage) about a particular identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</td>
</tr>
<tr>
    <td><a href="#list_identity_pool_usage"><CopyableCode code="list_identity_pool_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Gets a list of identity pools registered with Cognito. ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</td>
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
<tr id="parameter-identity_pool_id">
    <td><CopyableCode code="identity_pool_id" /></td>
    <td><code>string</code></td>
    <td>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token for obtaining the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_identity_pool_usage"
    values={[
        { label: 'describe_identity_pool_usage', value: 'describe_identity_pool_usage' },
        { label: 'list_identity_pool_usage', value: 'list_identity_pool_usage' }
    ]}
>
<TabItem value="describe_identity_pool_usage">

Gets usage details (for example, data storage) about a particular identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.

```sql
SELECT
DataStorage,
IdentityPoolId,
LastModifiedDate,
SyncSessionsCount
FROM aws.cognito_sync.identity_pool_usages
WHERE identity_pool_id = '{{ identity_pool_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_identity_pool_usage">

Gets a list of identity pools registered with Cognito. ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.

```sql
SELECT
Count,
IdentityPoolUsages,
MaxResults,
NextToken
FROM aws.cognito_sync.identity_pool_usages
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
