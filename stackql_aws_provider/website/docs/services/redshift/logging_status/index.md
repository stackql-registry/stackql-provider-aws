--- 
title: logging_status
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_status
  - redshift
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

Creates, updates, deletes, gets or lists a <code>logging_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="logging_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.logging_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_logging_status"
    values={[
        { label: 'describe_logging_status', value: 'describe_logging_status' }
    ]}
>
<TabItem value="describe_logging_status">

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
    <td><CopyableCode code="bucket_name" /></td>
    <td><code>string</code></td>
    <td>The name of the S3 bucket where the log files are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="last_failure_message" /></td>
    <td><code>string</code></td>
    <td>The message indicating that logs failed to be delivered.</td>
</tr>
<tr>
    <td><CopyableCode code="last_failure_time" /></td>
    <td><code>string</code></td>
    <td>The last time when logs failed to be delivered.</td>
</tr>
<tr>
    <td><CopyableCode code="last_successful_delivery_time" /></td>
    <td><code>string</code></td>
    <td>The last time that logs were delivered.</td>
</tr>
<tr>
    <td><CopyableCode code="log_destination_type" /></td>
    <td><code>string</code></td>
    <td>The log destination type. An enum with possible values of s3, cloudwatch, and s3table.</td>
</tr>
<tr>
    <td><CopyableCode code="log_exports" /></td>
    <td><code>string</code></td>
    <td>The collection of exported log types. When LogDestinationType is s3 or cloudwatch, possible values are connectionlog, useractivitylog, and userlog. When LogDestinationType is s3table, the values are the names of the system tables being published.</td>
</tr>
<tr>
    <td><CopyableCode code="logging_enabled" /></td>
    <td><code>boolean</code></td>
    <td>true if logging is on, false if logging is off.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_key_prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix applied to the log file names.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_tables" /></td>
    <td><code>string</code></td>
    <td>The status of system table publishing to S3 Tables. This field is populated only when system table publishing is active.</td>
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
    <td><a href="#describe_logging_status"><CopyableCode code="describe_logging_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.</td>
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
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the cluster from which to get the logging status. Example: examplecluster</td>
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
    defaultValue="describe_logging_status"
    values={[
        { label: 'describe_logging_status', value: 'describe_logging_status' }
    ]}
>
<TabItem value="describe_logging_status">

Describes whether information, such as queries and connection attempts, is being logged for the specified Amazon Redshift cluster.

```sql
SELECT
bucket_name,
last_failure_message,
last_failure_time,
last_successful_delivery_time,
log_destination_type,
log_exports,
logging_enabled,
s3_key_prefix,
s3_tables
FROM aws.redshift.logging_status
WHERE ClusterIdentifier = '{{ ClusterIdentifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
