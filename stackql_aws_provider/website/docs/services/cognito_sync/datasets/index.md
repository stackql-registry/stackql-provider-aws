--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
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

Creates, updates, deletes, gets or lists a <code>datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datasets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_sync.datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dataset"
    values={[
        { label: 'describe_dataset', value: 'describe_dataset' },
        { label: 'list_datasets', value: 'list_datasets' }
    ]}
>
<TabItem value="describe_dataset">

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
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date on which the dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataStorage" /></td>
    <td><code>integer (int64)</code></td>
    <td>Total size in bytes of the records in this dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetName" /></td>
    <td><code>string</code></td>
    <td>A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (dash), and '.' (dot). (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.:-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityId" /></td>
    <td><code>string</code></td>
    <td>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region. (pattern: &lt;code&gt;&#91;\w-&#93;+:&#91;0-9a-f-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The device that made the last change to this dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date when the dataset was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="NumRecords" /></td>
    <td><code>integer (int64)</code></td>
    <td>Number of records in this dataset.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_datasets">

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
    <td>Number of datasets returned.</td>
</tr>
<tr>
    <td><CopyableCode code="Datasets" /></td>
    <td><code>array</code></td>
    <td>A set of datasets.</td>
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
    <td><a href="#describe_dataset"><CopyableCode code="describe_dataset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identity_pool_id"><code>identity_pool_id</code></a>, <a href="#parameter-identity_id"><code>identity_id</code></a>, <a href="#parameter-dataset_name"><code>dataset_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</td>
</tr>
<tr>
    <td><a href="#list_datasets"><CopyableCode code="list_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identity_pool_id"><code>identity_pool_id</code></a>, <a href="#parameter-identity_id"><code>identity_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data. ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</td>
</tr>
<tr>
    <td><a href="#delete_dataset"><CopyableCode code="delete_dataset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identity_pool_id"><code>identity_pool_id</code></a>, <a href="#parameter-identity_id"><code>identity_id</code></a>, <a href="#parameter-dataset_name"><code>dataset_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</td>
</tr>
<tr>
    <td><a href="#subscribe_to_dataset"><CopyableCode code="subscribe_to_dataset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-identity_pool_id"><code>identity_pool_id</code></a>, <a href="#parameter-identity_id"><code>identity_id</code></a>, <a href="#parameter-dataset_name"><code>dataset_name</code></a>, <a href="#parameter-device_id"><code>device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Subscribes to receive notifications when a dataset is modified by another device. This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</td>
</tr>
<tr>
    <td><a href="#unsubscribe_from_dataset"><CopyableCode code="unsubscribe_from_dataset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-identity_pool_id"><code>identity_pool_id</code></a>, <a href="#parameter-identity_id"><code>identity_id</code></a>, <a href="#parameter-dataset_name"><code>dataset_name</code></a>, <a href="#parameter-device_id"><code>device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Unsubscribes from receiving notifications when a dataset is modified by another device. This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</td>
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
<tr id="parameter-dataset_name">
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset from which to unsubcribe.</td>
</tr>
<tr id="parameter-device_id">
    <td><CopyableCode code="device_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID generated for this device by Cognito.</td>
</tr>
<tr id="parameter-identity_id">
    <td><CopyableCode code="identity_id" /></td>
    <td><code>string</code></td>
    <td>Unique ID for this identity.</td>
</tr>
<tr id="parameter-identity_pool_id">
    <td><CopyableCode code="identity_pool_id" /></td>
    <td><code>string</code></td>
    <td>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which this identity belongs.</td>
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
    defaultValue="describe_dataset"
    values={[
        { label: 'describe_dataset', value: 'describe_dataset' },
        { label: 'list_datasets', value: 'list_datasets' }
    ]}
>
<TabItem value="describe_dataset">

Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.

```sql
SELECT
CreationDate,
DataStorage,
DatasetName,
IdentityId,
LastModifiedBy,
LastModifiedDate,
NumRecords
FROM aws.cognito_sync.datasets
WHERE identity_pool_id = '{{ identity_pool_id }}' -- required
AND identity_id = '{{ identity_id }}' -- required
AND dataset_name = '{{ dataset_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_datasets">

Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data. ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.

```sql
SELECT
Count,
Datasets,
NextToken
FROM aws.cognito_sync.datasets
WHERE identity_pool_id = '{{ identity_pool_id }}' -- required
AND identity_id = '{{ identity_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dataset"
    values={[
        { label: 'delete_dataset', value: 'delete_dataset' }
    ]}
>
<TabItem value="delete_dataset">

Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException. This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.

```sql
DELETE FROM aws.cognito_sync.datasets
WHERE identity_pool_id = '{{ identity_pool_id }}' --required
AND identity_id = '{{ identity_id }}' --required
AND dataset_name = '{{ dataset_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="subscribe_to_dataset"
    values={[
        { label: 'subscribe_to_dataset', value: 'subscribe_to_dataset' },
        { label: 'unsubscribe_from_dataset', value: 'unsubscribe_from_dataset' }
    ]}
>
<TabItem value="subscribe_to_dataset">

Subscribes to receive notifications when a dataset is modified by another device. This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.

```sql
EXEC aws.cognito_sync.datasets.subscribe_to_dataset 
@identity_pool_id='{{ identity_pool_id }}' --required, 
@identity_id='{{ identity_id }}' --required, 
@dataset_name='{{ dataset_name }}' --required, 
@device_id='{{ device_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="unsubscribe_from_dataset">

Unsubscribes from receiving notifications when a dataset is modified by another device. This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.

```sql
EXEC aws.cognito_sync.datasets.unsubscribe_from_dataset 
@identity_pool_id='{{ identity_pool_id }}' --required, 
@identity_id='{{ identity_id }}' --required, 
@dataset_name='{{ dataset_name }}' --required, 
@device_id='{{ device_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
