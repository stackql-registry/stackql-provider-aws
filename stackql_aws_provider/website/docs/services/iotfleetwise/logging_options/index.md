--- 
title: logging_options
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_options
  - iotfleetwise
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

Creates, updates, deletes, gets or lists a <code>logging_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="logging_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.logging_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_logging_options"
    values={[
        { label: 'get_logging_options', value: 'get_logging_options' }
    ]}
>
<TabItem value="get_logging_options">

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
    <td><CopyableCode code="log_group_name" /></td>
    <td><code>string</code></td>
    <td>The Amazon CloudWatch Logs group the operation sends data to. (pattern: &lt;code&gt;&#91;\.\-_\/#A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="log_type" /></td>
    <td><code>string</code></td>
    <td>The type of log to send data to Amazon CloudWatch Logs. (OFF, ERROR)</td>
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
    <td><a href="#get_logging_options"><CopyableCode code="get_logging_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the logging options.</td>
</tr>
<tr>
    <td><a href="#put_logging_options"><CopyableCode code="put_logging_options" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-cloudWatchLogDelivery"><code>cloudWatchLogDelivery</code></a></td>
    <td></td>
    <td>Creates or updates the logging option.</td>
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
    defaultValue="get_logging_options"
    values={[
        { label: 'get_logging_options', value: 'get_logging_options' }
    ]}
>
<TabItem value="get_logging_options">

Retrieves the logging options.

```sql
SELECT
log_group_name,
log_type
FROM aws.iotfleetwise.logging_options
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_logging_options"
    values={[
        { label: 'put_logging_options', value: 'put_logging_options' }
    ]}
>
<TabItem value="put_logging_options">

Creates or updates the logging option.

```sql
REPLACE aws.iotfleetwise.logging_options
SET 
cloudWatchLogDelivery = '{{ cloudWatchLogDelivery }}'
WHERE 
region = '{{ region }}' --required
AND cloudWatchLogDelivery = '{{ cloudWatchLogDelivery }}' --required;
```
</TabItem>
</Tabs>
