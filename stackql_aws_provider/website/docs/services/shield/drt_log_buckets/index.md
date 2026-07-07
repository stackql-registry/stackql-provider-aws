--- 
title: drt_log_buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - drt_log_buckets
  - shield
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

Creates, updates, deletes, gets or lists a <code>drt_log_buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="drt_log_buckets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.shield.drt_log_buckets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#associate_drt_log_bucket"><CopyableCode code="associate_drt_log_bucket" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LogBucket"><code>LogBucket</code></a></td>
    <td></td>
    <td>Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription. To use the services of the SRT and make an AssociateDRTLogBucket request, you must be subscribed to the Business Support plan or the Enterprise Support plan.</td>
</tr>
<tr>
    <td><a href="#disassociate_drt_log_bucket"><CopyableCode code="disassociate_drt_log_bucket" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LogBucket"><code>LogBucket</code></a></td>
    <td></td>
    <td>Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="associate_drt_log_bucket"
    values={[
        { label: 'associate_drt_log_bucket', value: 'associate_drt_log_bucket' }
    ]}
>
<TabItem value="associate_drt_log_bucket">

Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription. To use the services of the SRT and make an AssociateDRTLogBucket request, you must be subscribed to the Business Support plan or the Enterprise Support plan.

```sql
UPDATE aws.shield.drt_log_buckets
SET 
LogBucket = '{{ LogBucket }}'
WHERE 
region = '{{ region }}' --required
AND LogBucket = '{{ LogBucket }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_drt_log_bucket"
    values={[
        { label: 'disassociate_drt_log_bucket', value: 'disassociate_drt_log_bucket' }
    ]}
>
<TabItem value="disassociate_drt_log_bucket">

Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.

```sql
EXEC aws.shield.drt_log_buckets.disassociate_drt_log_bucket 
@region='{{ region }}' --required 
@@json=
'{
"LogBucket": "{{ LogBucket }}"
}'
;
```
</TabItem>
</Tabs>
