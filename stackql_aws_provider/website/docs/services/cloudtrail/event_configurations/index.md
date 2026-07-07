--- 
title: event_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - event_configurations
  - cloudtrail
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

Creates, updates, deletes, gets or lists an <code>event_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.event_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_event_configuration"
    values={[
        { label: 'get_event_configuration', value: 'get_event_configuration' }
    ]}
>
<TabItem value="get_event_configuration">

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
    <td><CopyableCode code="AggregationConfigurations" /></td>
    <td><code>array</code></td>
    <td>The list of aggregation configurations that are configured for the trail.</td>
</tr>
<tr>
    <td><CopyableCode code="ContextKeySelectors" /></td>
    <td><code>array</code></td>
    <td>The list of context key selectors that are configured for the event data store.</td>
</tr>
<tr>
    <td><CopyableCode code="EventDataStoreArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) or ID suffix of the ARN of the event data store for which the event configuration settings are returned. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._/\-:&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MaxEventSize" /></td>
    <td><code>string</code></td>
    <td>The maximum allowed size for events stored in the specified event data store. (Standard, Large)</td>
</tr>
<tr>
    <td><CopyableCode code="TrailARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trail for which the event configuration settings are returned.</td>
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
    <td><a href="#get_event_configuration"><CopyableCode code="get_event_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current event configuration settings for the specified event data store or trail. The response includes maximum event size configuration, the context key selectors configured for the event data store, and any aggregation settings configured for the trail.</td>
</tr>
<tr>
    <td><a href="#put_event_configuration"><CopyableCode code="put_event_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the event configuration settings for the specified event data store or trail. This operation supports updating the maximum event size, adding or modifying context key selectors for event data store, and configuring aggregation settings for the trail.</td>
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
    defaultValue="get_event_configuration"
    values={[
        { label: 'get_event_configuration', value: 'get_event_configuration' }
    ]}
>
<TabItem value="get_event_configuration">

Retrieves the current event configuration settings for the specified event data store or trail. The response includes maximum event size configuration, the context key selectors configured for the event data store, and any aggregation settings configured for the trail.

```sql
SELECT
AggregationConfigurations,
ContextKeySelectors,
EventDataStoreArn,
MaxEventSize,
TrailARN
FROM aws.cloudtrail.event_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_event_configuration"
    values={[
        { label: 'put_event_configuration', value: 'put_event_configuration' }
    ]}
>
<TabItem value="put_event_configuration">

Updates the event configuration settings for the specified event data store or trail. This operation supports updating the maximum event size, adding or modifying context key selectors for event data store, and configuring aggregation settings for the trail.

```sql
REPLACE aws.cloudtrail.event_configurations
SET 
TrailName = '{{ TrailName }}',
EventDataStore = '{{ EventDataStore }}',
MaxEventSize = '{{ MaxEventSize }}',
ContextKeySelectors = '{{ ContextKeySelectors }}',
AggregationConfigurations = '{{ AggregationConfigurations }}'
WHERE 
region = '{{ region }}' --required
RETURNING
AggregationConfigurations,
ContextKeySelectors,
EventDataStoreArn,
MaxEventSize,
TrailARN;
```
</TabItem>
</Tabs>
