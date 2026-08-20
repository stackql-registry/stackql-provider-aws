--- 
title: syslog_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - syslog_configurations
  - logs
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

Creates, updates, deletes, gets or lists a <code>syslog_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="syslog_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.syslog_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_syslog_configurations"
    values={[
        { label: 'list_syslog_configurations', value: 'list_syslog_configurations' }
    ]}
>
<TabItem value="list_syslog_configurations">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. The token expires after 24 hours.</td>
</tr>
<tr>
    <td><CopyableCode code="syslog_configurations" /></td>
    <td><code>array</code></td>
    <td>The list of syslog configurations.</td>
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
    <td><a href="#list_syslog_configurations"><CopyableCode code="list_syslog_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of syslog configurations. You can optionally filter the results by log group or VPC endpoint.</td>
</tr>
<tr>
    <td><a href="#put_syslog_configuration"><CopyableCode code="put_syslog_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-logGroupIdentifier"><code>logGroupIdentifier</code></a></td>
    <td></td>
    <td>Creates or updates a syslog configuration for a log group. This enables ingestion of syslog data through the specified VPC endpoint into the log group.</td>
</tr>
<tr>
    <td><a href="#delete_syslog_configuration"><CopyableCode code="delete_syslog_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a syslog configuration for a log group. After deletion, syslog data is no longer ingested through the specified VPC endpoint.</td>
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
    defaultValue="list_syslog_configurations"
    values={[
        { label: 'list_syslog_configurations', value: 'list_syslog_configurations' }
    ]}
>
<TabItem value="list_syslog_configurations">

Returns a list of syslog configurations. You can optionally filter the results by log group or VPC endpoint.

```sql
SELECT
next_token,
syslog_configurations
FROM aws.logs.syslog_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_syslog_configuration"
    values={[
        { label: 'put_syslog_configuration', value: 'put_syslog_configuration' }
    ]}
>
<TabItem value="put_syslog_configuration">

Creates or updates a syslog configuration for a log group. This enables ingestion of syslog data through the specified VPC endpoint into the log group.

```sql
REPLACE aws.logs.syslog_configurations
SET 
logGroupIdentifier = '{{ logGroupIdentifier }}',
vpcEndpointId = '{{ vpcEndpointId }}'
WHERE 
region = '{{ region }}' --required
AND logGroupIdentifier = '{{ logGroupIdentifier }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_syslog_configuration"
    values={[
        { label: 'delete_syslog_configuration', value: 'delete_syslog_configuration' }
    ]}
>
<TabItem value="delete_syslog_configuration">

Deletes a syslog configuration for a log group. After deletion, syslog data is no longer ingested through the specified VPC endpoint.

```sql
DELETE FROM aws.logs.syslog_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
