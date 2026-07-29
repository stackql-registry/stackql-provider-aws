--- 
title: broker_instance_options
hide_title: false
hide_table_of_contents: false
keywords:
  - broker_instance_options
  - mq
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

Creates, updates, deletes, gets or lists a <code>broker_instance_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="broker_instance_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mq.broker_instance_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_broker_instance_options"
    values={[
        { label: 'describe_broker_instance_options', value: 'describe_broker_instance_options' }
    ]}
>
<TabItem value="describe_broker_instance_options">

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
    <td><CopyableCode code="broker_instance_options" /></td>
    <td><code>array</code></td>
    <td>List of available broker instance options.</td>
</tr>
<tr>
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>Required. The maximum number of instance options that can be returned per page (20 by default). This value must be an integer from 5 to 100.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</td>
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
    <td><a href="#describe_broker_instance_options"><CopyableCode code="describe_broker_instance_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-engineType"><code>engineType</code></a>, <a href="#parameter-hostInstanceType"><code>hostInstanceType</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-storageType"><code>storageType</code></a></td>
    <td>Describe available broker instance options.</td>
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
<tr id="parameter-engineType">
    <td><CopyableCode code="engineType" /></td>
    <td><code>string</code></td>
    <td>Filter response by engine type.</td>
</tr>
<tr id="parameter-hostInstanceType">
    <td><CopyableCode code="hostInstanceType" /></td>
    <td><code>string</code></td>
    <td>Filter response by host instance type.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</td>
</tr>
<tr id="parameter-storageType">
    <td><CopyableCode code="storageType" /></td>
    <td><code>string</code></td>
    <td>Filter response by storage type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_broker_instance_options"
    values={[
        { label: 'describe_broker_instance_options', value: 'describe_broker_instance_options' }
    ]}
>
<TabItem value="describe_broker_instance_options">

Describe available broker instance options.

```sql
SELECT
broker_instance_options,
max_results,
next_token
FROM aws.mq.broker_instance_options
WHERE region = '{{ region }}' -- required
AND engineType = '{{ engineType }}'
AND hostInstanceType = '{{ hostInstanceType }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND storageType = '{{ storageType }}'
;
```
</TabItem>
</Tabs>
