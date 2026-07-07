--- 
title: configuration_revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_revisions
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

Creates, updates, deletes, gets or lists a <code>configuration_revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_revisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mq.configuration_revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_configuration_revision"
    values={[
        { label: 'describe_configuration_revision', value: 'describe_configuration_revision' },
        { label: 'list_configuration_revisions', value: 'list_configuration_revisions' }
    ]}
>
<TabItem value="describe_configuration_revision">

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
    <td><CopyableCode code="ConfigurationId" /></td>
    <td><code>string</code></td>
    <td>Required. The unique ID that Amazon MQ generates for the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Created" /></td>
    <td><code>string (date-time)</code></td>
    <td>Required. The date and time of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Data" /></td>
    <td><code>string</code></td>
    <td>Amazon MQ for ActiveMQ: the base64-encoded XML configuration. Amazon MQ for RabbitMQ: base64-encoded Cuttlefish.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configuration_revisions">

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
    <td><CopyableCode code="ConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The unique ID that Amazon MQ generates for the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of configuration revisions that can be returned per page (20 by default). This value must be an integer from 5 to 100.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</td>
</tr>
<tr>
    <td><CopyableCode code="Revisions" /></td>
    <td><code>array</code></td>
    <td>The list of all revisions for the specified configuration.</td>
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
    <td><a href="#describe_configuration_revision"><CopyableCode code="describe_configuration_revision" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configuration-id"><code>configuration-id</code></a>, <a href="#parameter-configuration-revision"><code>configuration-revision</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the specified configuration revision for the specified configuration.</td>
</tr>
<tr>
    <td><a href="#list_configuration_revisions"><CopyableCode code="list_configuration_revisions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configuration-id"><code>configuration-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all revisions for the specified configuration.</td>
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
<tr id="parameter-configuration-id">
    <td><CopyableCode code="configuration-id" /></td>
    <td><code>string</code></td>
    <td>The unique ID that Amazon MQ generates for the configuration.</td>
</tr>
<tr id="parameter-configuration-revision">
    <td><CopyableCode code="configuration-revision" /></td>
    <td><code>string</code></td>
    <td>The revision of the configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_configuration_revision"
    values={[
        { label: 'describe_configuration_revision', value: 'describe_configuration_revision' },
        { label: 'list_configuration_revisions', value: 'list_configuration_revisions' }
    ]}
>
<TabItem value="describe_configuration_revision">

Returns the specified configuration revision for the specified configuration.

```sql
SELECT
ConfigurationId,
Created,
Data,
Description
FROM aws.mq.configuration_revisions
WHERE `configuration-id` = '{{ configuration-id }}' -- required
AND `configuration-revision` = '{{ configuration-revision }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configuration_revisions">

Returns a list of all revisions for the specified configuration.

```sql
SELECT
ConfigurationId,
MaxResults,
NextToken,
Revisions
FROM aws.mq.configuration_revisions
WHERE `configuration-id` = '{{ configuration-id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
