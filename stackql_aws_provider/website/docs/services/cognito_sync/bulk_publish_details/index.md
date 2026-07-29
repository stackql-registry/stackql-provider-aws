--- 
title: bulk_publish_details
hide_title: false
hide_table_of_contents: false
keywords:
  - bulk_publish_details
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

Creates, updates, deletes, gets or lists a <code>bulk_publish_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bulk_publish_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_sync.bulk_publish_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bulk_publish_details"
    values={[
        { label: 'get_bulk_publish_details', value: 'get_bulk_publish_details' }
    ]}
>
<TabItem value="get_bulk_publish_details">

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
    <td><CopyableCode code="bulk_publish_complete_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>If BulkPublishStatus is SUCCEEDED, the time the last bulk publish operation completed.</td>
</tr>
<tr>
    <td><CopyableCode code="bulk_publish_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date/time at which the last bulk publish was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="bulk_publish_status" /></td>
    <td><code>string</code></td>
    <td>Status of the last bulk publish operation, valid values are: NOT_STARTED - No bulk publish has been requested for this identity pool IN_PROGRESS - Data is being published to the configured stream SUCCEEDED - All data for the identity pool has been published to the configured stream FAILED - Some portion of the data has failed to publish, check FailureMessage for the cause. (NOT_STARTED, IN_PROGRESS, FAILED, SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>If BulkPublishStatus is FAILED this field will contain the error message that caused the bulk publish to fail.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_pool_id" /></td>
    <td><code>string</code></td>
    <td>A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region. (pattern: &lt;code&gt;&#91;\w-&#93;+:&#91;0-9a-f-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_bulk_publish_details"><CopyableCode code="get_bulk_publish_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identity_pool_id"><code>identity_pool_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the status of the last BulkPublish operation for an identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bulk_publish_details"
    values={[
        { label: 'get_bulk_publish_details', value: 'get_bulk_publish_details' }
    ]}
>
<TabItem value="get_bulk_publish_details">

Get the status of the last BulkPublish operation for an identity pool. This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.

```sql
SELECT
bulk_publish_complete_time,
bulk_publish_start_time,
bulk_publish_status,
failure_message,
identity_pool_id
FROM aws.cognito_sync.bulk_publish_details
WHERE identity_pool_id = '{{ identity_pool_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
